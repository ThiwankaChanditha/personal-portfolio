import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { PROFILE } from "../data/portfolio";

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/90 backdrop-blur-md dark:border-slate-800/90 dark:bg-[#0b0f19]/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="text-base font-bold tracking-tight text-slate-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
        >
          {PROFILE.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 transition-colors hover:border-blue-500/40 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-blue-400"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 md:hidden dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden dark:border-slate-800 dark:bg-[#0b0f19]">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
