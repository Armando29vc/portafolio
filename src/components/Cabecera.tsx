import { Tema } from "./tema/Tema";

export const Cabecera = () => {
  return (
    <>
      <header className="fixed flex w-full justify-between row-1 p-2 bg-[#e2e2e2] dark:bg-[#030219] z-10">
        <div className="flex gap-2 items-center">
          <img
            src="armando29vc.jpg"
            alt="Armando29vc"
            className="w-10 rounded-full"
          />
          <span className="font-semibold text-blue-800 dark:text-cyan-300">
            Armando29vc
          </span>
        </div>
        <Tema />
      </header>
    </>
  );
};
