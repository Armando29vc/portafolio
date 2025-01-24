import React, { useEffect } from "react";

import GraficoCircular from "../components/GraficoCircular";
import TarjetaSocial from "../components/TarjetaSocial";

function Index() {
  const tecnmData = {
    redesSociales: [
      {
        href: "https://www.facebook.com/tecnm.campus.istmo",
        title: "Facebook TecNM",
        iconSrc: "/portafolio/icons/facebook.svg",
        alt: "Facebook",
      },
      {
        href: "https://www.youtube.com/@ComunicacionITI",
        title: "YouTube TecNM",
        iconSrc: "youtube_social_circle_red.png",
        alt: "YouTube",
      },
      {
        href: "https://www.instagram.com/tecnm_campus_istmo/",
        title: "Instagram TecNM",
        iconSrc: "/portafolio/icons/Instagram_Glyph_Gradient.svg",
        alt: "Instagram",
      },
      {
        href: "https://www.tiktok.com/@ingsistemasiti",
        title: "TikTok TecNM",
        iconSrc: "TikTok_Icon_Black_Circle.png",
        alt: "TikTok",
      },
    ],
  };

  const habilidades = [
    { nombre: "HTML5", porcentaje: 70, icono: "icons/html5.svg" },
    { nombre: "CSS3", porcentaje: 80, icono: "icons/css3.svg" },
    { nombre: "JS", porcentaje: 65, icono: "icons/js.svg" },
  ];

  useEffect(() => {
    const habilidad = document.querySelector(".habilidad");
    const porcentajes = document.querySelectorAll(
      ".porcentaje .progreso circle:nth-child(2)"
    );
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            porcentajes.forEach(circulo => {
              circulo.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.5 }
    );
    if (habilidad) observer.observe(habilidad);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="presentacion">
        <blockquote className="texto-centrado">
          "Si Puedes Imaginarlo Puedes Programarlo"
        </blockquote>
        <cite>Alejandro Taboada</cite>
      </section>
      <section className="tarjeta">
        <div className="c-perfil aparecer">
          <img className="f-perfil" src="80596769_p0.avif" alt="" />
        </div>
        <div className="c-presentacion">
          <h2>José Armando Vázquez Carrasco</h2>
          <h5>Ing. Sistemas Computacionales.</h5>
        </div>
        <div className="c-descripcion">
          <p>
            Me encanta el anime 🐞❤️🐾 , 🎮 los video juegos 🕹️, la musica
            electronica 🎧 y las musicas clasicas 📀, mi pasatiempo favorito es
            la programación 💻.
          </p>
        </div>
        <div className="c-red-social">
          <a
            className="icono-social"
            href="https://www.youtube.com/@JArmando29vc"
            target="_blank"
            title="Armando29vc"
          >
            <img src="youtube_social_circle_red.png" alt="" />
          </a>
        </div>
        <section className="sobre-mi">
          <h2>Sobre mi</h2>
          <p>
            Soy un joven recien egresado, que trabaja socialmente sin problemas,
            me encanta adquir nuevos conocimientos y siempre estar actualizado
            constantemente. Deseo desarrollarme en una empresa que tenga visión
            a futuro y que mas que ser un trabajador ser un miembro del equipo.
          </p>
        </section>
      </section>
      <section className="habilidad">
        <h2>Habilidades</h2>
        <div className="c-habilidad">
          {habilidades.map((habilidad, index) => (
            <GraficoCircular
              key={index}
              nombre={habilidad.nombre}
              porcentaje={habilidad.porcentaje}
              icono={habilidad.icono}
            />
          ))}
        </div>
      </section>
      <section className="educacion">
        <h2>Educación</h2>
        <div className="c-educacion">
          <div className="caja-tecnm">
            <div className="titulo-tecnm texto-blanco">
              <h3>TECNM Campus Istmo</h3>
              <p>2019-2024</p>
            </div>

            <div className="tarjeta-tecnm">
              <img
                src="tecnm.jpg"
                alt="Logotipo del Instituto Tecnológico del Istmo"
              />
              <TarjetaSocial
                logoSrc={tecnmData.logoSrc}
                logoAlt={tecnmData.logoAlt}
                redesSociales={tecnmData.redesSociales}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
