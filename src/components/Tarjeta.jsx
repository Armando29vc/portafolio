import useDarkMode from "../hooks/useModoOscuro";

export default function Tarjeta({ titulo, iconos }) {
  const { darkMode } = useDarkMode();

  return (
    <div className={`flex flex-col w-fit p-2 rounded-lg ${darkMode ? "shadow-[0_0_3px_#53eafd]" : "shadow-[0_0_3px_#193cb8]"}`}>
      <h3 className={`font-bold text-2xl ${darkMode ? "text-emerald-600" : "text-purple-700"}`}>{titulo}</h3>
      <div className="flex pt-1 gap-2 flex-wrap">
        {iconos.map(({ nombre, icono }, index) => {
          const isImage = /\.(png|jpe?g|gif|webp|svg)$/i.test(icono);

          return (
            <li key={index} className="list-none" title={nombre}>
              {isImage ? (
                <img
                  src={icono}
                  alt={nombre}
                  className="w-10 h-10 object-contain"
                />
              ) : (
                <svg className="w-10 h-10">
                  <use
                    className={`${darkMode ? "fill-white" : "fill-[#24292f]"}`}
                    href={icono}
                  />
                </svg>
              )}
            </li>
          );
        })}
      </div>
    </div>
  );
}
