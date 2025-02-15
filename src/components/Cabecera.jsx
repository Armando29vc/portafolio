import React, { useContext, useEffect } from "react";
import "../assets/css/cabecera.css";
import TemaContext from "../context/TemaContext";
/* import TarjetaSocial from "../components/TarjetaSocial";
import { useTema } from "../hooks/useTema";
import { useBarra } from "../hooks/useBarra";
import { miData } from "../db/redSocial.json";
 */
function Cabecera() {
  // const { tema, cambiarTema } = useTema();
/*   const { barraRef, checkboxRef } = useBarra();
  const { logoSrc, logoAlt, redesSociales } = miData; */
  const { tema, dispatch } = useContext(TemaContext);

  const cambiarTema = () => {
    dispatch({ type: "cambiar-tema" }); // Envia la acción al reducer
  };

  useEffect(() => {
    document.body.classList.remove("claro", "oscuro");
    document.body.classList.add(tema);
  }, [tema]);


  return (
    <header className="flex bg-[var(--color-bg)] justify-center sticky top-0 z-[999]">
      <div className="flex w-[80vw] justify-between">
      <div className="logotipo">
        <img src="armando29vc.avif" alt="Logotipo de Armando29vc" />
          <h1 className="m:texto-xs texto-lg text-[var(--color-texto-dos)] font-bold">Armando29vc</h1>
        </div>
        <div className="flex items-center">
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