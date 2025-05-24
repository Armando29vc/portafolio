import { useEffect } from "react";
import useDarkMode from "../hooks/useModoOscuro";

export default function Cabecera() {
  const { darkMode, cambiarTema, tema } = useDarkMode();

  useEffect(() => {
    document.documentElement.classList.remove("claro", "oscuro");
    document.documentElement.classList.add(tema);
  }, [tema]);

  return (
    <header className="flex justify-center p-4">
      <div className="flex justify-between w-full md:max-w-[85vw]">
        <a href={import.meta.env.BASE_URL} className="flex items-center gap-2">
          <img
            className="w-8 md:w-10 rounded-full"
            src="img/armando29vc.avif"
            alt="Logotipo de Armando29vc"
          />
          <h1 className={`font-bold ${darkMode ? "text-cyan-300" : "text-blue-700"}`}>Armando29vc</h1>
        </a>
        <nav>
        </nav>
        <div className="flex items-center">
          <button onClick={cambiarTema} className="cursor-pointer" alt={`Cambiar a tema ${darkMode ? "oscuro" : "claro"}`}
            title={darkMode ? "oscuro" : "claro"}>
            <svg
              className={`w-8 h-8`}
            >
              <use href={`${darkMode ? "img/sprite.svg#oscuro" : "img/sprite.svg#claro"}`} />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
