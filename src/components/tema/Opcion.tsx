import { useTema } from "../../hooks/useTema";

interface OpcionProps {
  onSelect: () => void;
  temaSeleccionado: "dark" | "light" | "system";
  texto: string;
}

export const Opcion = ({ temaSeleccionado, texto, onSelect }: OpcionProps) => {
  const { tema, setTema } = useTema();

  const handleClick = () => {
    setTema(temaSeleccionado);
    onSelect();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex items-center gap-2 p-2 hover:bg-[#ffffff] dark:hover:bg-[#03005c] cursor-pointer"
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {tema === temaSeleccionado && (
          <svg
            width={24}
            height={24}
            className="text-blue-800 dark:text-cyan-300"
          >
            <use href="sprite.svg#verificar" />
          </svg>
        )}
      </div>

      <span className="text-blue-800 dark:text-cyan-300">{texto}</span>
    </button>
  );
};
