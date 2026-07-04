import { navLinks, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <p className="font-display text-lg font-extrabold tracking-tight">
          Aaliyan Mansoor<span className="text-accent">.</span>
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors duration-200 hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
