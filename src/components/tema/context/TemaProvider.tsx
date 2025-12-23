import { useEffect, useState } from "react";
import { TemaContext } from "./TemaContext";

export function TemaProvider({ children }: { children: React.ReactNode }) {
  const [tema, setTema] = useState<"dark" | "light" | "system">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("tema") as any) || "system";
    }
    return "system";
  });

  useEffect(() => {
    const root = document.documentElement;
    const isOscuro =
      tema === "dark" ||
      (tema === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    root.classList.toggle("dark", isOscuro);

    tema !== "system"
      ? localStorage.setItem("tema", tema)
      : localStorage.removeItem("tema");
  }, [tema]);

  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      {children}
    </TemaContext.Provider>
  );
}
