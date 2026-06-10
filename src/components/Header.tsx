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

export function Header({ overlay = false }: { overlay?: boolean }) {
  const t = useT();
  const { lang, setLang, theme, toggleTheme } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    setScrolled(true);
  }, [overlay]);

  // Header is always solid (no transparent overlay state).
  const onHero = false;

  const pillBg =
    "bg-card border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.02),0_8px_24px_-18px_rgba(20,15,10,0.25)]";
  const fgText = "text-foreground";
  const mutedText = "text-muted-foreground";
  const borderTone = "border-border";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="w-full">
        <div
          className={
            "flex w-full items-center justify-between gap-4 px-5 py-3 transition-colors duration-300 md:px-10 md:py-3.5 " +
            pillBg
          }
        >
          <Link to="/" className="flex items-center gap-3 pl-1" aria-label="AGILE">
            <BrandMark variant="full" size={42} forceLight={onHero} />
            <span
              className={
                "hidden text-[16px] font-semibold tracking-tight sm:inline " + fgText
              }
            >
              AGILE
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              const base = "rounded-full px-4 py-2 text-[14px] transition-colors ";
              const cls = active
                ? onHero
                  ? "bg-white/15 text-white"
                  : "bg-secondary text-foreground"
                : onHero
                  ? "text-white/80 hover:text-white"
                  : "text-muted-foreground hover:text-foreground";
              return (
                <Link key={item.to} to={item.to} className={base + cls}>
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div
              className={
                "hidden items-center rounded-full border p-0.5 text-[11.5px] font-medium md:flex " +
                borderTone
              }
            >
              {(["en", "fr"] as const).map((l) => {
                const on = lang === l;
                return (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLang(l)}
                    className={
                      "rounded-full px-2.5 py-1 transition-colors " +
                      (on
                        ? onHero
                          ? "bg-white text-[#15120F]"
                          : "bg-foreground text-background"
                        : mutedText)
                    }
                    aria-pressed={on}
                  >
                    {t(`common.lang.${l}`)}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className={
                "hidden h-10 w-10 items-center justify-center rounded-full border transition-colors md:inline-flex " +
                borderTone +
                " " +
                mutedText +
                (onHero ? " hover:text-white" : " hover:text-foreground")
              }
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <Link
              to="/contact"
              className="hidden h-11 items-center justify-center rounded-full bg-primary px-5 text-[13.5px] font-medium text-primary-foreground transition-colors hover:bg-[var(--brand-primary-hover)] md:inline-flex"
            >
              {t("common.cta.consultation")}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={
                "inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden " +
                borderTone +
                " " +
                fgText
              }
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mx-5 mb-2 rounded-2xl border border-border bg-card p-4 shadow-lg md:mx-10 lg:hidden">
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
                {(["en", "fr"] as const).map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLang(l)}
                    className={
                      "rounded-full px-3 py-1 " +
                      (lang === l ? "bg-foreground text-background" : "text-muted-foreground")
                    }
                  >
                    {t(`common.lang.${l}`)}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
            <Link
              to="/contact"
              className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground"
            >
              {t("common.cta.consultation")}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
