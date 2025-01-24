function TarjetaSocial({ redesSociales }) {
  return (
    <div className="redes-sociales">
      {redesSociales.map((red, index) => (
        <a
          key={index}
          href={red.href}
          title={red.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={red.iconSrc} alt={red.alt} />
        </a>
      ))}
    </div>
  );
}

export default TarjetaSocial;
