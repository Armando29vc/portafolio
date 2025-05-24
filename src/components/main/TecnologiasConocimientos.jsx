import useDarkMode from "../../hooks/useModoOscuro";
import habilidades from "../../db/habilidad.json";
import Tarjeta from "../Tarjeta";

export default function TecnologiasConocimientos() {
  const { darkMode } = useDarkMode();
  const { conocimientos: frontendConocimientos, aprendiendo: frontendAprendiendo } = habilidades.frontend;
  const { aprendiendo: backendAprendiendo } = habilidades.backend;
  const { aprendiendo: baseDatosAprendiendo } = habilidades.base_datos;

  const titulo = darkMode ? "text-cyan-300" : "text-blue-700"

  return (
    <section className="flex flex-col gap-3">
      <h2 className={`text-3xl font-bold text-center ${titulo}`}>💻 Tecnologías y 🧠 Conocimientos</h2>
      <div className="grid md:grid-cols-2 gap-2 ">
        <section className="flex flex-col gap-2">
          <h3 className={`text-2xl font-bold ${titulo}`}>🎮 Habilidades</h3>
          <div className="flex flex-wrap gap-2">
            <Tarjeta titulo="Frontend" iconos={frontendConocimientos} />
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className={`text-2xl font-bold ${titulo}`}>📚 Aprendiendo</h3>
          <div className="flex flex-wrap gap-2">
            <Tarjeta titulo="Frontend" iconos={frontendAprendiendo} />
            <Tarjeta titulo="Backend" iconos={backendAprendiendo} />
            <Tarjeta titulo="Base de datos" iconos={baseDatosAprendiendo} />
          </div>
        </section>
      </div>
    </section>
  )
}
