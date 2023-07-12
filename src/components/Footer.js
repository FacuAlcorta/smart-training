import React from 'react'
import { VscAccount } from 'react-icons/vsc'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='grid grid-cols-3 bg-gradient-to-b from-sky-950 to-gray-950 text-xl border-t-4 border-slate-600 text-white p-4 lg:text-2xl'>
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
        <div className='flex text-center justify-center p-16 text-xl md:text-2xl lg:text-4xl'>
          <BsFacebook />
        </div>
        <div className='flex text-center justify-center p-16 tex-xl md:text-2xl lg:text-4xl'>
          <BsInstagram />
        </div>
        <div className='flex text-center justify-center p-16 text-xl md:text-2xl lg:text-4xl'>
          <AiFillTwitterCircle />
        </div>
        <div className='grid col-start-1 col-end-4 text-center justify-center'>
          <p>Facundo Alcorta {new Date().getFullYear()} ®</p>
        </div>
    </div>
  )
}

export default Footer