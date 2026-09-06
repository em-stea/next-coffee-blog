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
import { useServerInsertedHTML } from "next/navigation";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  forcedTheme?: string;
  resolvedTheme?: ResolvedTheme;
  themes: string[];
  systemTheme?: ResolvedTheme;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "theme";
const MEDIA_QUERY = "(prefers-color-scheme: dark)";

const getSystemTheme = (): ResolvedTheme =>
  window.matchMedia(MEDIA_QUERY).matches ? "dark" : "light";

const applyTheme = (theme: ResolvedTheme) => {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
};

/** Runs before paint to avoid a flash; injected outside the React tree. */
const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem('${STORAGE_KEY}')||'system';var d=window.matchMedia('${MEDIA_QUERY}').matches?'dark':'light';var t=s==='system'?d:s;var r=document.documentElement;r.classList.remove('light','dark');r.classList.add(t);r.style.colorScheme=t}catch(e){}})();`;

type ThemeProviderProps = {
  children: ReactNode;
  attribute?: string;
  disableTransitionOnChange?: boolean;
  forcedTheme?: string;
  defaultTheme?: Theme;
  enableSystem?: boolean;
};

export function ThemeProvider({
  children,
  disableTransitionOnChange = false,
  forcedTheme,
  defaultTheme = "system",
  enableSystem = true,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>("light");

  useServerInsertedHTML(() => (
    <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
  ));

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (stored) setThemeState(stored);
    } catch {
      // ignore
    }

    const media = window.matchMedia(MEDIA_QUERY);
    const onChange = () => setSystemTheme(getSystemTheme());
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const resolvedTheme = useMemo<ResolvedTheme>(() => {
    if (forcedTheme === "light" || forcedTheme === "dark") return forcedTheme;
    if (theme === "system") return systemTheme;
    return theme;
  }, [forcedTheme, theme, systemTheme]);

  useEffect(() => {
    if (disableTransitionOnChange) {
      const style = document.createElement("style");
      style.appendChild(
        document.createTextNode(
          "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
        ),
      );
      document.head.appendChild(style);
      applyTheme(resolvedTheme);
      window.getComputedStyle(document.body);
      const timeout = window.setTimeout(() => {
        document.head.removeChild(style);
      }, 1);
      return () => window.clearTimeout(timeout);
    }

    applyTheme(resolvedTheme);
  }, [resolvedTheme, disableTransitionOnChange]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme,
      forcedTheme,
      resolvedTheme,
      themes: enableSystem ? ["light", "dark", "system"] : ["light", "dark"],
      systemTheme: enableSystem ? systemTheme : undefined,
    }),
    [theme, setTheme, forcedTheme, resolvedTheme, enableSystem, systemTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: undefined,
      setTheme: () => {},
      forcedTheme: undefined,
      resolvedTheme: undefined,
      themes: [] as string[],
      systemTheme: undefined,
    };
  }
  return context;
}
