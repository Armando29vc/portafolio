import { useEffect, useState } from "react";

export const Subir = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const porcentaje = (scrollTop / docHeight) * 100;

      setVisible(porcentaje > 80); // aparece al 20%
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
    //   className="fixed bottom-0 right-0 p-4"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`bg-[#e2e2e2] dark:bg-[#030219] cursor-pointer fixed bottom-2 right-2 p-2 rounded-full transition-all duration-300
        ${
          visible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }
      `}
      aria-label="Subir"
    >
      <svg className="w-10 h-10 text-blue-800 dark:text-cyan-300  [--logo-icon:white] dark:[--logo-icon:black]">
        <use href="sprite.svg#flecha-arriba"></use>
      </svg>
    </button>
  );
};
