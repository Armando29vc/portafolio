import { useState } from "react";

const useTema = () => {
  const [tema, setTema] = useState(() => {
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado) return temaGuardado;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "oscuro" : "claro";
  });

  const cambiarTema = () => {
    const nuevoTema = tema === "oscuro" ? "claro" : "oscuro";
    setTema(nuevoTema);
    localStorage.setItem("tema", nuevoTema);
  };


  return {
    tema,
    cambiarTema
  }
};

export { useTema };
