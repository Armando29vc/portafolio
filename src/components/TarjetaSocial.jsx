function TarjetaSocial({ redesSociales }) {
  return (
    <div className="flex gap-[1rem]">
      {redesSociales.map((red, index) => (
        <a
          key={index}
          href={red.href}
          title={red.title}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[30px] h-[30px]"
        >
          <img src={red.iconSrc} alt={red.alt} className="w-[30px] h-[30px]" />
        </a>
      ))}
    </div>
  );
}

export default TarjetaSocial;
