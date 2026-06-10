import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useApp, useT } from "./AppProviders";
import { BrandMark } from "./BrandMark";

const navItems = [
  { to: "/", key: "common.nav.home" },
  { to: "/about", key: "common.nav.about" },
  { to: "/services", key: "common.nav.services" },
  { to: "/industries", key: "common.nav.industries" },
  { to: "/insights", key: "common.nav.insights" },
  { to: "/contact", key: "common.nav.contact" },
] as const;

export function Header() {
  const t = useT();
  const { lang, setLang, theme, toggleTheme } = useApp();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 pt-3 md:pt-4">
      <div className="container-page">
        <div className="flex items-center justify-between gap-3 rounded-full border border-border bg-card/85 px-3 py-2 shadow-[0_1px_0_rgba(0,0,0,0.02),0_8px_24px_-12px_rgba(57,47,37,0.18)] backdrop-blur-md md:px-4 md:py-2.5">
          <Link to="/" className="flex items-center gap-2.5 pl-1" aria-label="AGILE">
            <BrandMark variant="full" size={34} />
            <span className="hidden text-[15px] font-semibold tracking-tight text-foreground sm:inline">
              AGILE
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={
                    "rounded-full px-3.5 py-1.5 text-[13.5px] transition-colors " +
                    (active
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground")
                  }
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <div className="hidden items-center rounded-full border border-border bg-background/60 p-0.5 text-[11px] font-medium md:flex">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={
                  "rounded-full px-2 py-0.5 transition-colors " +
                  (lang === "en" ? "bg-foreground text-background" : "text-muted-foreground")
                }
                aria-pressed={lang === "en"}
              >
                {t("common.lang.en")}
              </button>
              <button
                type="button"
                onClick={() => setLang("fr")}
                className={
                  "rounded-full px-2 py-0.5 transition-colors " +
                  (lang === "fr" ? "bg-foreground text-background" : "text-muted-foreground")
                }
                aria-pressed={lang === "fr"}
              >
                {t("common.lang.fr")}
              </button>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="hidden h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <Link
              to="/contact"
              className="hidden h-9 items-center justify-center rounded-full bg-primary px-4 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-[var(--brand-primary-hover)] md:inline-flex"
            >
              {t("common.cta.consultation")}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 rounded-3xl border border-border bg-card p-4 shadow-lg lg:hidden">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="border-b border-border py-3 text-base text-foreground last:border-b-0"
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex items-center justify-between gap-2">
              <div className="inline-flex items-center rounded-full border border-border p-0.5 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={
                    "rounded-full px-3 py-1 " +
                    (lang === "en" ? "bg-foreground text-background" : "text-muted-foreground")
                  }
                >
                  {t("common.lang.en")}
                </button>
                <button
                  type="button"
                  onClick={() => setLang("fr")}
                  className={
                    "rounded-full px-3 py-1 " +
                    (lang === "fr" ? "bg-foreground text-background" : "text-muted-foreground")
                  }
                >
                  {t("common.lang.fr")}
                </button>
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            </div>
            <Link
              to="/contact"
              className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground"
            >
              {t("common.cta.consultation")}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
