function TarjetaSocial({ redesSociales }) {
  return (
    <div className="grid max-w-[170px] grid-cols-[repeat(auto-fit,30px)] gap-x-[1rem]">
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
