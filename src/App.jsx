import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Cabecera from "./components/Cabecera";
import Cita from "./components/main/Cita";
import useDarkMode from "./hooks/useModoOscuro";
import SobreMi from "./components/main/SobreMi";
import TecnologiasConocimientos from "./components/main/TecnologiasConocimientos";
import Educacion from "./components/main/Educacion";

function App() {
  const { darkMode } = useDarkMode();

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className={`grid grid-rows-[auto_1fr] ${darkMode ? "text-white" : "text-black"}`}>
        <Cabecera />
        <main className="flex justify-center py-5">
          <div className={`flex flex-col md:max-w-[85vw]  p-3 rounded-lg gap-3`}>
          <Cita />
          <SobreMi />
          <TecnologiasConocimientos />
          <Educacion />
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
