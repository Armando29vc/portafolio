import redsocial from "../../db/redSocial.json";
import useDarkMode from "../../hooks/useModoOscuro";

export default function Educacion() {
  const { darkMode } = useDarkMode();
  const tecnmData = redsocial.tecnmData.redesSociales;

  const titulo = darkMode ? "text-cyan-300" : "text-blue-700"

  return (
    <>
      <section className="flex flex-col gap-3">
        <h2 className={`text-3xl font-bold ${titulo}`}>🎓 Educación</h2>
        <div className="relative max-w-sm">
          <img src="img/tecnm_entrada.jpg" alt="" className="w-full h-auto rounded-2xl" />
          <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
          <div className="absolute inset-0 p-2 flex flex-col items-center justify-center">
            <h2 className="text-white font-bold text-xl">TECNM Campus Istmo</h2>
            <span className="text-base font-semibold text-gray-400">2019 - 2024</span>
            <div className="py-3">
              <img src="img/tecnm.png" alt="" className="w-28 drop-shadow-[1px_2px_#fff]" />
            </div>
            
          </div>
        </div>

      </section>
    </>
  )
}
