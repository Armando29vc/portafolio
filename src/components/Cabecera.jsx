import React, { useState, useEffect } from "react";
import "../assets/css/cabecera.css";
import TarjetaSocial from "../components/TarjetaSocial";

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

  const tecnmData = {
    redesSociales: [
      {
        href: "https://www.facebook.com/Armando29vc",
        title: "Facebook Armando29vc",
        iconSrc: "/portafolio/icons/facebook.svg",
        alt: "Facebook",
      },
      {
        href: "https://www.youtube.com/@JArmando29vc",
        title: "YouTube Armando29vc",
        iconSrc: "youtube_social_circle_red.png",
        alt: "YouTube",
      },
    ],
  };
  return (
    <header className="cabecera">
      <div className="navegacion">
        <div className="logotipo">
          <img src="armando29vc.png" alt="Logotipo de Armando29vc" />
          <h1 className="m:texto-xs texto-lg">Armando29vc</h1>
        </div>

        <div className="mi-red-social">
          <TarjetaSocial
            logoSrc={tecnmData.logoSrc}
            logoAlt={tecnmData.logoAlt}
            redesSociales={tecnmData.redesSociales}
          />
          <img
            className="tema"
            onClick={cambiarTema}
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
