import React, { useState, useEffect } from "react";
import "../assets/css/cabecera.css";

function Cabecera() {
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

  useEffect(() => {
    document.body.classList.remove("claro", "oscuro");
    document.body.classList.add(tema);
  }, [tema]);

  return (
    <header className="cabecera">
      <div className="navegacion">
        <div className="logotipo">
          <img src="armando29vc.png" alt="Logotipo de Armando29vc" />
          <h1 className="m:texto-xs texto-lg">Armando29vc</h1>
        </div>
        <div className="tema" onClick={cambiarTema}>
          <img
            src={tema === "oscuro" ? "icons/noche.svg" : "icons/dia.svg"}
            alt={`Cambiar a tema ${tema === "oscuro" ? "oscuro" : "claro"}`}
            title={tema === "oscuro" ? "oscuro" : "claro"}
          />
        </div>
      </div>
    </header>
  );
}

export default Cabecera;
