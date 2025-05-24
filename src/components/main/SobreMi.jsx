import useDarkMode from "../../hooks/useModoOscuro";

export default function SobreMi() {
  const { darkMode } = useDarkMode();

  return (
    <section className="flex flex-col items-center gap-5">
      <div className={` p-3 rounded-lg border-transparent max-w-md md:max-w-xl ${darkMode ? "shadow-[0_0_3px_#53eafd]" : "shadow-[0_0_3px_#193cb8]"}`}>
        <div className="grid grid-cols-[144px_1fr] md:grid-cols-[152px_1fr]  max-w-md md:max-w-xl gap-3">
          <div className="w-36 md:w-38 md:h-50 col-[1] row-[1]">
            <img className={`rounded-lg object-cover w-full h-full ${darkMode ? "drop-shadow-[0_0_3px_#53eafd]" : "drop-shadow-[0_0_3px_#193cb8]"}`} src="img/JArmando.png" alt="José Armando Vázquez Carrasco" />
          </div>
          <div className={`w-full flex flex-col justify-center gap-3 md:gap-10 col-[2] row-[1] font-bold ${darkMode ? "text-cyan-300" : "text-blue-700"}`}>
            <div>
              <h2 className="text-sm md:text-2xl">Hola soy </h2>
              <h2 className="text-sm md:text-2xl">José Armando Vázquez Carrasco</h2>
              <h3 className={`text-xs md:text-sm ${darkMode ? "text-gray-300" : "text-gray-800"}`}>Ing. Sistemas Computacionales. <span>México, Oaxaca</span></h3>
            </div>
            <div className=" flex gap-3 justify-center md:justify-start">
              <button
                className="cursor-pointer"
                title="GitHub Armando29vc"
                onClick={() => {
                  const usuario = "Armando29vc";
                  const url = `https://github.com/${usuario}`;
                  window.open(url, "_blank", "noopener,noreferrer");
                }}
              >
                <svg className="w-8 h-8 md:w-6 md:h-6">
                  <use className={`${darkMode ? "fill-white" : "fill-[#24292f]"}`} href="img/sprite.svg#github" />
                </svg>
              </button>
              <button
                className="cursor-pointer"
                title="CV"
                onClick={() => {
                  const base = "descargar";
                  const nombre = "CV_Armando29vc.pdf";
                  const url = `${base}/${nombre}`;
                  window.open(url, "_blank", "noopener,noreferrer");
                }}
              >
                <svg className="w-8 h-8 md:w-6 md:h-6">
                  <use className={`${darkMode ? "fill-white" : "fill-red-600"}`} href="img/sprite.svg#pdf" />
                </svg>
              </button>
              <button
                title="contacto"
                className="cursor-pointer"
                onClick={() => {
                  const usuario = "armando29vc";
                  const dominio = "gmail.com";
                  window.location.href = `mailto:${usuario}@${dominio}`;
                }}
              >
                <svg className={`w-8 h-8 md:w-6 md:h-6`}>
                  <use
                    className={`${darkMode ? "fill-white" : "fill-[#242424]"}`}
                    href="img/sprite.svg#correo"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="col-span-2 row-[2]">
            <p className="text-lg">
              Me encanta el anime 🐞❤️🐾, 🎮 los videojuegos 🕹️, la música electrónica 🎧 y clásica 📀, y mi pasatiempo favorito es la programación 💻.
            </p>
          </div>
        </div>
      </div>
      <section className="flex flex-col gap-3">
        <h2 className={`text-2xl font-bold ${darkMode ? "text-cyan-300" : "text-blue-700"}`}>📝Sobre mí</h2>
        <p className="text-xl">
          Soy un joven que le encanta crear diseños minimalista, trabajar en equipo, siempre estoy aprendiendo y mejorando, busco una empresa que le guste el arte del diseño, dar una cálida bienvenida a los clientes, estoy listo para formar parte del equipo.
        </p>
      </section>
    </section>
  )
}
