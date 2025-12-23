import { useState } from "react";
import { Opcion } from "./Opcion";
import { useTema } from "../../hooks/useTema";

export const Tema = () => {
  const [mostrar, setMostrar] = useState(false);
  const { tema } = useTema();

  const iconoTema = tema === "dark" ? "luna" : "sol";

  return (
    <div className="px-8">
      <button
        onClick={() => setMostrar(!mostrar)}
        className="relative p-2  z-10"
        aria-label="Cambiar tema"
      >
        <svg
          width={24}
          height={24}
          className="cursor-pointer text-blue-800 dark:text-cyan-300"
        >
          <use href={`sprite.svg#${iconoTema}`} />
        </svg>
      </button>

      {/* Añadir modal del tema */}
      {mostrar && (
        <div className="fixed inset-0" onClick={() => setMostrar(false)}>
          <div
            className="flex flex-col absolute top-14 right-8 rounded-xl pb-4 bg-[#e9e9e9] dark:bg-[#020131] max-w-2xs "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3">
              <span className="text-sm dark:text-gray-400 font-semibold">
                La configuración solo se aplica a este navegador
              </span>
            </div>
            <Opcion temaSeleccionado="dark" texto="Tema oscuro" />
            <Opcion temaSeleccionado="light" texto="Tema claro" />
            <Opcion
              temaSeleccionado="system"
              texto="Usar tema del dispositivo"
            />
          </div>
        </div>
      )}
    </div>
  );
};
