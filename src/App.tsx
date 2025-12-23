import { Cabecera } from "./components/Cabecera";
import "./estilo.css";
import { Inicio } from "./pages/Inicio";

function App() {
  return (
    <>
      <div className="grid grid-rows-[minmax(56px,auto)_1fr] h-screen">
        <Cabecera />
        <main className="flex row-2 w-full justify-center">
          <Inicio />
        </main>
      </div>
    </>
  );
}

export default App;
