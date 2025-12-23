import { Subir } from "../components/Subir";

export const Inicio = () => {
  return (
    <div className="flex flex-col md:max-w-[85vw]  md:justify-start gap-5 px-6 pb-6">
      <Subir />
      <section className="text-center font-semibold text-xl">
        <blockquote>"Si Puedes Imaginarlo Puedes Programarlo"</blockquote>
        <cite>Alejandro Taboada</cite>
      </section>
      <section className="flex gap-5 p-3 rounded-lg border-transparent shadow-[0_0_3px_#193cb8]  dark:shadow-[0_0_3px_#53eafd]">
        <div className="max-w-45 flex flex-col gap-2 justify-between">
          <div className="flex items-center w-45">
            <img
              className="rounded-lg object-cover w-full h-auto drop-shadow-[0_0_3px_#193cb8] dark:drop-shadow-[0_0_3px_#53eafd]"
              src="JArmando.png"
              alt="José Armando Vázquez Carrasco"
            />
          </div>
          <div className="w-45">
            <h2 className="text-sm text-blue-800 dark:text-cyan-300">
              José Armando <br />
              Vázquez Carrasco
            </h2>
            <h3 className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
              Ing. Sistemas Computacionales
            </h3>
          </div>
        </div>
        <div className="w-full md:max-w-85">
          <div className="">
            <p className="text-lg font-semibold">
              Me encanta el anime 🐞❤️🐾, 🎮 los videojuegos 🕹️, la música
              electrónica 🎧 y clásica 📀, y mi pasatiempo favorito es la
              programación 💻.
            </p>
          </div>
          <div className="flex items-center justify-center p-4 gap-3">
            <a
              href="https://github.com/Armando29vc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 items-center"
            >
              <svg className="w-8 h-8 md:w-6 md:h-6 fill-black dark:fill-white">
                <use href="sprite.svg#github"></use>
              </svg>
              <span className="text-sm">github</span>
            </a>
            <a
              href="descargar/CV_Armando29vc.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 items-center"
            >
              <svg className="w-8 h-8 md:w-6 md:h-6 fill-white">
                <use href="sprite.svg#cv"></use>
              </svg>
              <span className="text-sm">curriculum</span>
            </a>
          </div>
          <section className="flex flex-col gap-3">
            <div className="flex h-14 relative items-center gap-2 shadow-[0_0_3px_#193cb8]  dark:shadow-[0_0_3px_#53eafd] rounded-md">
              <img
                src="tecnm_entrada.jpg"
                alt="Entrada TecNM"
                className="object-cover w-full h-14 rounded-md"
              />
              <div className="absolute inset-0 bg-black/75 rounded-md"></div>
              <div className="absolute flex items-center justify-center w-full">
                <img src="tecnm.png" className="size-10" alt="logo TecNM" />
                <p className="text-center font-semibold text-white">
                  TECNM Campus Istmo <br />{" "}
                  <span className="text-gray-400 font-semibold">
                    2019 - 2024
                  </span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="flex flex-col gap-5 justify-center">
        <section className="flex flex-col gap-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-800 dark:text-cyan-300">
            <svg
              aria-hidden="true"
              className="w-8 h-8 md:w-8 md:h-8 text-blue-800 dark:text-cyan-300  [--logo-icon:white] dark:[--logo-icon:black]"
            >
              <use href="sprite.svg#sobre-mi"></use>
            </svg>
            Sobre mí
          </h2>
          <p className="text-base max-w-136">
            Soy un joven que le encanta crear diseños minimalista, trabajar en
            equipo, siempre estoy aprendiendo y mejorando, busco una empresa que
            le guste el arte del diseño, dar una cálida bienvenida a los
            clientes, estoy listo para formar parte del equipo.
          </p>
        </section>
      </section>
      <section className="flex flex-col gap-5">
        <h2 className="flex flex-wrap items-center gap-2 text-3xl font-bold text-blue-800 dark:text-cyan-300">
          <svg
            aria-hidden="true"
            className="w-8 h-8 md:w-8 md:h-8 text-blue-800 dark:text-cyan-300  [--logo-icon:white] dark:[--logo-icon:black]"
          >
            <use href="sprite.svg#pc"></use>
          </svg>
          Tecnologías y{" "}
          <svg
            aria-hidden="true"
            className="w-8 h-8 md:w-8 md:h-8 text-blue-800 dark:text-cyan-300  [--logo-icon:white] dark:[--logo-icon:black]"
          >
            <use href="sprite.svg#foco"></use>
          </svg>{" "}
          Conocimientos
        </h2>
        <div className="flex flex-wrap gap-10">
          <div className="shadow-[0_0_3px_#193cb8]  dark:shadow-[0_0_3px_#53eafd] p-4 w-full md:w-auto">
            <section>
              <h3 className="flex items-center gap-2 text-2xl font-bold text-blue-800 dark:text-cyan-300">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-blue-800 dark:text-cyan-300  [--logo-icon:white] dark:[--logo-icon:black]"
                >
                  <use href="sprite.svg#control"></use>
                </svg>{" "}
                Habilidades
              </h3>
              <div className="flex flex-col">
                <h4 className="text-xl font-bold text-blue-800 dark:text-cyan-300 my-4">
                  Frontend
                </h4>
                <div className="flex gap-4">
                  <div className="flex gap-2 items-center">
                    <svg className="w-6 h-6 text-blue-800 dark:text-cyan-300  [--logo-icon:white] dark:[--logo-icon:black]">
                      <use href="sprite.svg#html5"></use>
                    </svg>
                    <span className="font-semibold">HTML5</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg className="w-6 h-6 text-blue-800 dark:text-cyan-300  [--logo-icon:white] dark:[--logo-icon:black]">
                      <use href="sprite.svg#css3"></use>
                    </svg>
                    <span className="font-semibold">CSS3</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg className="w-6 h-6 text-blue-800 dark:text-cyan-300  [--logo-icon:white] dark:[--logo-icon:black]">
                      <use href="sprite.svg#js"></use>
                    </svg>
                    <span className="font-semibold">JS</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="text-xl font-bold text-blue-800 dark:text-cyan-300 my-4">
                  Framework
                </h4>
                <div className="flex gap-4">
                  <div className="flex gap-2 items-center">
                    <svg className="w-6 h-6 text-blue-800 dark:text-cyan-300  [--logo-icon:white] dark:[--logo-icon:black]">
                      <use href="sprite.svg#react"></use>
                    </svg>
                    <span className="font-semibold">React</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg className="w-6 h-6 text-blue-800 dark:text-cyan-300  [--logo-icon:white] dark:[--logo-icon:black]">
                      <use href="sprite.svg#tailwindcss"></use>
                    </svg>
                    <span className="font-semibold">TailwindCSS</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="shadow-[0_0_3px_#193cb8]  dark:shadow-[0_0_3px_#53eafd] p-4 w-full md:w-auto">
            <section>
              <h3 className="flex items-center gap-2 text-2xl font-bold text-blue-800 dark:text-cyan-300">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 md:w-8 md:h-8 text-blue-800 dark:text-cyan-300  [--logo-icon:white] dark:[--logo-icon:black]"
                >
                  <use href="sprite.svg#rompecabezas"></use>
                </svg>{" "}
                Aprendiendo
              </h3>
              <div className="flex flex-col">
                <h4 className="text-xl font-bold text-blue-800 dark:text-cyan-300 my-4">
                  Backend
                </h4>
                <div className="flex gap-4">
                  <div className="flex gap-2 items-center">
                    <svg className="w-6 h-6 text-blue-800 dark:text-cyan-300  [--logo-icon:white] dark:[--logo-icon:black]">
                      <use href="sprite.svg#strapi"></use>
                    </svg>
                    <span className="font-semibold">Strapi</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="text-xl font-bold text-blue-800 dark:text-cyan-300 my-4">
                  Base de Datos
                </h4>
                <div className="flex gap-4">
                  <div className="flex gap-2 items-center">
                    <svg className="w-6 h-6 text-blue-800 dark:text-cyan-300  [--logo-icon:white] dark:[--logo-icon:black]">
                      <use href="sprite.svg#postgresql"></use>
                    </svg>
                    <span className="font-semibold">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
