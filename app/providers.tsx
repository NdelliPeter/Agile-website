"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n, { type Lang } from "@/app/i18n/client";

type Theme = "light" | "dark";

type AppCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
};

const Ctx = createContext<AppCtx | null>(null);

export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem("agile.lang");
    return stored === "fr" || stored === "en" ? (stored as Lang) : "en";
  });
  // Light is the site's only supported theme for now — the toggle is
  // commented out in the header, so we no longer follow the OS preference
  // or a stale stored value; a visitor's system dark-mode setting used to
  // silently flip them into dark mode with no way back.
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      window.localStorage.setItem("agile.theme", theme);
    } catch {
      // Storage can throw in private-browsing / storage-restricted contexts — safe to ignore.
    }
  }, [theme]);

  useEffect(() => {
    void i18n.changeLanguage(lang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("agile.lang", l);
    } catch {
      // Storage can throw in private-browsing / storage-restricted contexts — safe to ignore.
    }
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
  }, []);
  const toggleTheme = useCallback(
    () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
    [],
  );

  const value = useMemo(
    () => ({ lang, setLang, theme, setTheme, toggleTheme }),
    [lang, setLang, theme, setTheme, toggleTheme],
  );

  return (
    <I18nextProvider i18n={i18n}>
      <Ctx.Provider value={value}>{children}</Ctx.Provider>
    </I18nextProvider>
  );
}

export function useApp() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useApp must be used within Providers");
  return ctx;
}

export function useT() {
  const { t } = useTranslation();
  return t;
}
