import GraficoCircular from "../components/GraficoCircular";
import TarjetaSocial from "../components/TarjetaSocial";
import redsocial from "../db/redSocial.json";
import habilidades from "../db/habilidad.json";
import { useHabilidades } from "../hooks/useHabilidad";
import Tarjeta from "../components/Tarjeta";
import { useState } from "react";

function Index() {

  const tecnmData = redsocial.tecnmData.redesSociales;

  // const { redesSociales } = tecnmData;
  const miData = redsocial.miData.redesSociales;


  const frontendConocimientos = habilidades.frontend.conocimientos;
  const frontendAprendiendo = habilidades.frontend.aprendiendo;
  const backendAprendiendo = habilidades.backend.aprendiendo;
  const basedatosAprendiendo = habilidades.base_datos.aprendiendo;

  useHabilidades()

  const [copied, setCopied] = useState(false);
  const textToCopy = "armando29vc@gmail.com"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error al copiar: ", error);
    }
  };

  return (
    <>
      <section className="w-[90vw] md:w-[80vw] mb-[1rem]">
        <section className="text-center">
          <blockquote>
            "Si Puedes Imaginarlo Puedes Programarlo"
          </blockquote>
          <cite>Alejandro Taboada</cite>
        </section>
      </section>
      <section className="w-[90vw] md:flex md:gap-x-[1rem] md:w-[80vw] md:justify-center">
        <section className="
      relative bg-[var(--color-bg)] borde-mexicano 
      p-4 rounded-lg md:grid md:gap-x-[1rem] md:!w-[70vw] lg:!w-[48vw] h-fit">
          <div className="aparecer w-[150px] md:row-[1/_span_3] rounded-[20px] overflow-hidden">
            <img className="h-[100%] object-cover " src="nagatoro.jpg" alt="" />
          </div>
          <div className="pt-[.5rem] pb-[.5rem]  md:row-[1] md:col-[2/span2]">
            <h2 className="text-sm md:text-xl text-[var(--color-texto-dos)] font-bold">Hola soy </h2>
            <h2 className="text-sm md:text-xl text-[var(--color-texto-dos)] font-bold">
              José Armando Vázquez Carrasco</h2>
            <h3 className="text-[var(--color-texto-tres)] text-xs">Ing. Sistemas Computacionales. <span>México, Oaxaca</span></h3>
          </div>
          <div className="md:row-[2] md:col-[2/span2]">
            <p className="text-sm">
              Me encanta el anime 🐞❤️🐾 , 🎮 los video juegos 🕹️, la musica
              electronica 🎧 y las clasicas 📀, mi pasatiempo favorito es
              la programación 💻.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-[.5rem] md:row-[3] md:col-[2/span2] mt-[.5rem] mb-[.5rem]">
            {miData.map(({ href, title, iconSrc, alt }, index) => (
              <a
                key={index}
                className="w-[25px]"
                href={href}
                title={title}
                target="_blank"
              >
                <img src={iconSrc} alt={alt} />
              </a>
            ))}
            <a
              className="flex gap-x-[.3rem]"
              href="/portafolio/descargar/CV_Armando29vc.pdf"
              title="CV"
              target="_blank"
            >
              <span>CV</span>
              <img src="/portafolio/icons/descargar.svg" alt="CV_JArmado" className="w-[25px]" />
            </a>
            <p>{textToCopy}</p>
            <button onClick={handleCopy} className="flex items-center cursor-pointer">
              {copied ? "✔️Copiado!" : "📋Copiar"}
            </button >

          </div>
        </section>
      </section>
      <section className="w-[90vw] md:flex md:gap-x-[1rem] md:w-[80vw] md:justify-center">
        <section className="mt-[1rem] mb-[1rem]">
          <h2 className="lg:text-xl font-bold mt-[1rem] mb-[1rem] text-[var(--color-texto-dos)]">Sobre mí</h2>
          <p>
            Soy un joven que le encanta crear diseños minimalista, trabajar en equipo, siempre estoy aprendiendo y mejorando, busco una empresa que le guste el arte del diseño, dar una cálida bienvenida a los clientes, estoy listo para formar parte del equipo.
          </p>
        </section>

      </section>
      <section className="w-[90vw] md:flex md:gap-x-[1rem] md:w-[80vw] md:justify-center">
        <section className="w-full">
          <h2 className="lg:text-xl font-bold mb-[.5rem] text-[var(--color-texto-dos)]">
            {`</> Habilidades`}
          </h2>
          <div className="flex flex-wrap gap-[1rem] p-[.5rem]">
            <Tarjeta titulo="frontend" iconos={frontendConocimientos} />
          </div>
          <h2 className="pl-[1rem] lg:text-xl font-bold mt-[.5rem] mb-[.5rem] text-[var(--color-texto-dos)]">Aprendiendo</h2>
          <div className="flex flex-wrap gap-[1rem] p-[.5rem]">
            <Tarjeta titulo="frontend" iconos={frontendAprendiendo} />
            <Tarjeta titulo="backend" iconos={backendAprendiendo} />
            <Tarjeta titulo="Base de Datos" iconos={basedatosAprendiendo} />
          </div>

        </section>
      </section>

      <section className="w-[90vw] md:flex md:flex-col md:gap-x-[1rem] md:w-[80vw]">
        <h2 className="lg:text-xl font-bold mb-[1rem] mt-[1rem] text-[var(--color-texto-dos)]">Educación</h2>
        {/* <div className="relative w-[230px] rounded-[1rem] overflow-hidden h-[250px] 
        bg-[url('/tecnm_entrada.avif')] bg-cover 
        filtro-oscuro bg-center
        "> */}
        <div className="relative flex  w-[230px] h-[250px] overflow-hidden rounded-[1rem] filtro-oscuro">
          <img src="tecnm_entrada.avif" alt="" className="absolute object-cover h-[100%]" />

          <div className="flex flex-col w-full h-[100%] justify-around items-center">
            <div className=" z-2 w-full h-fit flex flex-col items-center gap-[1rem]">
              <h3 className="text-white">TECNM Campus Istmo</h3>
              <p className="text-sm text-gray-300">2019 - 2024</p>
            </div>
            <div className="z-2 w-full h-fit flex flex-col items-center
          ">
              <img
                src="tecnm.png"
                alt="Logotipo del Instituto Tecnológico del Istmo"
                className="!w-[100px] !h-[100px]"
              />
              <TarjetaSocial
                redesSociales={tecnmData}
              />
            </div>
          </div>

        </div>

        {/*    </div> */}
      </section>
    </>
  );
}

export default Index;
