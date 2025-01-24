import React, { useState, useEffect, useRef } from "react";
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

  const miData = {
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
        iconSrc: "youtube_social_circle_red.avif",
        alt: "YouTube",
      },
    ],
  };

  const barraRef = useRef(null); // Referencia a la barra lateral
  const checkboxRef = useRef(null); // Referencia al checkbox

  useEffect(() => {
    // Manejar clic fuera de la barra lateral
    const handleClickOutside = event => {
      const isOutside =
        barraRef.current &&
        checkboxRef.current &&
        !barraRef.current.contains(event.target) &&
        !checkboxRef.current.contains(event.target);

      isOutside &&
        ((checkboxRef.current.checked = false),
        (document.body.style.overflow = "auto"));
    };

    // Manejar cambio de tamaño de ventana
    const handleResize = () => {
      const isHidden =
        barraRef.current &&
        checkboxRef.current &&
        window.getComputedStyle(barraRef.current).display === "none";

      isHidden &&
        ((checkboxRef.current.checked = false),
        (document.body.style.overflow = "auto"));
    };

    // Manejar cambio del checkbox
    const handleCheckboxChange = () => {
      document.body.style.overflow = checkboxRef.current?.checked
        ? "hidden"
        : "auto";
    };

    // Agregar eventos
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);
    checkboxRef.current?.addEventListener("change", handleCheckboxChange);

    // Verificar al montar el componente
    handleResize();

    // Limpiar eventos al desmontar el componente
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
      checkboxRef.current?.removeEventListener("change", handleCheckboxChange);
    };
  }, []);

  return (
    <header className="cabecera">
      <div className="navegacion">
        <div className="barra">
          <label htmlFor="barra-lateral" className="abrir" tabIndex="0">
            <img src="icons/hamburguesa.svg" alt="Abri Menu" />
          </label>
        </div>
        <input type="checkbox" id="barra-lateral" ref={checkboxRef} />
        <div className="opacar">
          <nav className="m:barra" ref={barraRef}>
            <div className="barra-cerrar">
              <label htmlFor="barra-lateral" className="cerra" tabIndex="0">
                <img src="icons/cerrar.svg" alt="" />
              </label>
            </div>
            <div className="mi-rsocial">
              <span>Mis Redes</span>
              <TarjetaSocial
                logoSrc={miData.logoSrc}
                logoAlt={miData.logoAlt}
                redesSociales={miData.redesSociales}
              />
            </div>
          </nav>
        </div>
        <div className="logotipo">
          <img src="armando29vc.avif" alt="Logotipo de Armando29vc" />
          <h1 className="m:texto-xs texto-lg">Armando29vc</h1>
        </div>

        <div className="mi-red-social">
          <TarjetaSocial
            logoSrc={miData.logoSrc}
            logoAlt={miData.logoAlt}
            redesSociales={miData.redesSociales}
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
