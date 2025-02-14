import React from 'react'
export default function Tarjeta({ titulo, iconos }) {

  return (
    <>
      <div className='bg-[var(--color-bg)] borde-mexicano
      p-4 rounded-lg'>
        <h3 className="font-bold text-[var(--color-texto-cuatro)]  mb-[1rem]">{titulo}</h3>
        <div className="flex gap-x-[1rem]">
          {iconos.map(({ nombre, icono }, index) => (
            <li key={index} className="list-none"
              title={nombre} >
              <img src={icono} alt={nombre} width="30"
                className="!w-[40px] !h-[40px] " />
            </li>
          ))}
        </div>
      </div>
    </>
  )
}
