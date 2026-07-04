import { ImageResponse } from "next/og";

export const alt = "Aaliyan Mansoor — Engineer · Researcher · Writer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Try to brand the card with Archivo; fall back to the bundled default font
// if the fetch ever fails so the build can never break on this.
async function loadArchivo(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Archivo:wght@800&display=swap"
    ).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:woff2?|truetype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const archivo = await loadArchivo();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#05060b",
          backgroundImage:
            "radial-gradient(circle at 12% 0%, rgba(103,232,249,0.22), transparent 45%), radial-gradient(circle at 95% 100%, rgba(167,139,250,0.22), transparent 45%), radial-gradient(circle at 70% 20%, rgba(29,78,216,0.15), transparent 40%)",
          fontFamily: archivo ? "Archivo" : "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#67e8f9",
            fontSize: 26,
            letterSpacing: 10,
            marginBottom: 28,
          }}
        >
          PORTFOLIO — KARACHI, PAKISTAN
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 110,
            fontWeight: 800,
            color: "#f4f6fb",
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          Aaliyan Mansoor
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 32,
            color: "#a3adc2",
          }}
        >
          Computer Systems Engineer · AI / Computer Vision Researcher
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 8,
            fontSize: 32,
            color: "#a3adc2",
          }}
        >
          Full-Stack Developer · Technical Writer
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 60,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 6,
              borderRadius: 3,
              backgroundImage: "linear-gradient(90deg, #67e8f9, #a78bfa)",
              marginRight: 24,
            }}
          />
          <div style={{ display: "flex", fontSize: 28, color: "#67e8f9" }}>
            aaliyan-mansoor.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: archivo
        ? [{ name: "Archivo", data: archivo, weight: 800 as const, style: "normal" as const }]
        : undefined,
    }
  );
}
