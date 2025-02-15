export const initialState = {
  tema: localStorage.getItem("tema") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "oscuro" : "claro"),
};

export const temaReducer = (state, action) => {
  switch (action.type) {
    case "cambiar-tema":
      const nuevoTema = state.tema === "oscuro" ? "claro" : "oscuro";
      localStorage.setItem("tema", nuevoTema);
      return { ...state, tema: nuevoTema };
    default:
      return state;
  }
};
