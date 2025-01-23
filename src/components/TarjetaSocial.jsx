
function TarjetaSocial({ logoSrc, logoAlt, redesSociales }) {
  return (
    <div className="tarjeta-tecnm">
      <img src={logoSrc} alt={logoAlt} />
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
    </div>
  );
}

export default TarjetaSocial;
