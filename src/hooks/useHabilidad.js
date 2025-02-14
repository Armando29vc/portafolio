import { useEffect } from "react";

const useHabilidades = () => {
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
  
  return {
    useEffect
  }
}
  
export {
  useHabilidades
}