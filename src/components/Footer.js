import React from 'react'
import { VscAccount } from 'react-icons/vsc'

const Footer = () => {
  return (
    <div className='grid grid-cols-3 bg-gradient-to-b from-sky-950 to-gray-950 text-white p-4 lg:text-2xl'>
        <div className='flex flex-col text-center gap-4'>
          <p>Sobre nosotros.</p>
          <p>Institucional.</p>
          <p>Contactanos.</p>
        </div >
        <div className='flex flex-col text-center gap-4 border-l-2 border-r-2'>
          <p>Nutrición.</p>
          <p>Planes.</p>
          <p>Sercicios.</p>
        </div>
        <div className='flex flex-col justify-center gap-4'>
          <div className='flex justify-center'>
            <VscAccount className='text-3xl md:text-4xl lg:text-5xl'/>
          </div>
        </div>
        <div>
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>
          <div>
            <p>Facundo Alcorta {new Date().getFullYear()}</p>
          </div>
        </div>
    </div>
  )
}

export default Footer