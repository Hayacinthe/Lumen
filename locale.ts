import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Lang = "en" | "fil";

type LocaleState = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set, get) => ({
      lang: "en",
      setLang: (lang) => set({ lang }),
      toggle: () => set({ lang: get().lang === "en" ? "fil" : "en" }),
    }),
    { name: "lumen-lang" },
  ),
);

export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  return hydrated;
}

/** English until the client store hydrates, so the first paint matches the server. */
export function useLang(): Lang {
  const lang = useLocaleStore((s) => s.lang);
  const hydrated = useHydrated();
  return hydrated ? lang : "en";
}
