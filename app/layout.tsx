import type { Metadata } from "next";
import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: "DealRoom | M&A Deal Tracker",
  description:
    "A student-friendly M&A tracker built for future investment bankers.",
};

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen overflow-hidden">
          <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
              <Link href="/" className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                  <BriefcaseBusiness size={20} />
                </span>
                <div>
                  <p className="text-lg font-semibold tracking-tight text-white">
                    DealRoom
                  </p>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    M&A Intelligence
                  </p>
                </div>
              </Link>

              <div className="flex flex-wrap gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300/50 hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </header>

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
