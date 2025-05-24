// src/hooks/useDarkMode.js
import { useContext } from "react";
import TemaContext from "../context/TemaContext";

export default function useDarkMode() {
  const { tema, dispatch } = useContext(TemaContext);
  return {
    darkMode: tema === "oscuro",
    cambiarTema: () => dispatch({ type: "cambiar-tema" }),
    tema,
  };
}
