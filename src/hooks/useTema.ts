// useTema.ts
import { useContext } from "react";
import { TemaContext } from "../components/tema/context/TemaContext";

export function useTema() {
  const context = useContext(TemaContext);
  if (!context) {
    throw new Error("useTema debe usarse dentro de TemaProvider");
  }
  return context;
}
