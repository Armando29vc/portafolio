import { createContext, useReducer } from "react";
import { temaReducer, initialState } from "../reducers/tema-reducer"; // Importamos el reducer

// Crear el contexto
const TemaContext = createContext();

// Proveedor del contexto
export const TemaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(temaReducer, initialState);

  return (
    <TemaContext.Provider value={{ tema: state.tema, dispatch }}>
      {children}
    </TemaContext.Provider>
  );
};

export default TemaContext;
