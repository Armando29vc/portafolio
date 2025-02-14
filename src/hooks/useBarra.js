import { useEffect , useRef } from "react";

const useBarra = () => {
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

  return {
    barraRef,
    checkboxRef
  }
};

export { useBarra };
