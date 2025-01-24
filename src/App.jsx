import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./armando.css";
import "./index.css";

import Cabecera from "./components/Cabecera";
import PiePagina from "./components/PiePagina";

import Index from "./pages";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="contenedor">
        <nav className="m:barra"></nav>
        <Cabecera />
        <main className="principal">
          <Routes>
            {/* Página principal */}
            <Route path="/" element={<Index />} />
            {/* <Route path="/cursos" element={<Cursos />} /> */}
          </Routes>
        </main>
        <PiePagina />
      </div>
    </Router>
  );
}

export default App;
