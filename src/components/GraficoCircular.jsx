
function GraficoCircular({ nombre, porcentaje, icono }) {
  return (
    <div className="porcentaje" style={{ "--porcentaje": porcentaje }}>
      <svg className="progreso" width="150" height="150">
        <circle className="radio" r="65" cx="50%" cy="50%" pathLength="100" />
        <circle className="radio" r="65" cx="50%" cy="50%" pathLength="100" />
      </svg>
      <div className="c-porcentaje">
        <img src={icono} alt={nombre} className="icono" />
        <p>{nombre}</p>
      </div>
      <span>{porcentaje}%</span>
    </div>
  );
}

export default GraficoCircular;
