import { Resend } from "resend";

const CONTACT_TO = "aaliyan.mansoor28@gmail.com";

// naive in-memory rate limit: 5 requests per 10 minutes per IP
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; start: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.start > WINDOW_MS) {
    hits.set(ip, { count: 1, start: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string; company?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (body.company) {
    // Pretend success so bots don't adapt.
    return Response.json({ ok: true });
  }

  const name = body.name?.trim().slice(0, 100);
  const email = body.email?.trim().slice(0, 200);
  const message = body.message?.trim().slice(0, 4000);

  if (!name || !email || !message) {
    return Response.json({ error: "All fields are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return Response.json(
      { error: "Too many messages — please try again later." },
      { status: 429 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  try {
    if (apiKey) {
      // Preferred path: Resend (add RESEND_API_KEY to .env.local).
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        // Works out of the box; switch to a verified custom domain later.
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [CONTACT_TO],
        replyTo: email,
        subject: `Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      });
      if (error) throw new Error(error.message);
    } else {
      // Keyless fallback: FormSubmit relay. The recipient address only lives
      // server-side, so it is never exposed to visitors or scrapers.
      // FormSubmit rejects requests without a browser-style Origin/Referer.
      const origin = new URL(request.url).origin;
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_TO}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin,
          Referer: `${origin}/`,
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio message from ${name}`,
          _replyto: email,
          _template: "table",
          _captcha: "false",
        }),
      });
      const text = await res.text();
      let json: { success?: string; message?: string } | null = null;
      try {
        json = JSON.parse(text);
      } catch {}
      if (!res.ok || !json || String(json.success) !== "true") {
        throw new Error(
          `relay status ${res.status}: ${(json?.message || text).slice(0, 300)}`
        );
      }
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("contact form send failed:", err);
    return Response.json(
      {
        error: "Could not send your message right now. Please try again later.",
        // TODO: remove debug detail once relay issue is diagnosed
        detail: err instanceof Error ? err.message.slice(0, 300) : "unknown",
      },
      { status: 502 }
    );
  }
}
