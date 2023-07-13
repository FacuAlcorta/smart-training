import React from 'react'
import { VscAccount } from 'react-icons/vsc'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='grid grid-cols-3 bg-gradient-to-b from-sky-950 to-gray-950 text-xl border-t-4 border-slate-600 text-white p-4 lg:text-2xl'>
        <div className='flex flex-col text-center gap-4'>
          <NavLink onClick={()=> {window.scrollTo({top: 0, behavior: 'smooth'})}}>Inicio</NavLink>
          <NavLink to="/nosotros">Sobre nosotros</NavLink>
          <NavLink to="/contacto">Contactanos</NavLink>
        </div >
        <div className='flex flex-col text-center gap-4 border-l-2 border-r-2'>
          <NavLink to="/nutricion">Nutrición</NavLink>
          <NavLink to="/planes">Planes</NavLink>
          <NavLink to="/servicios">Sercicios</NavLink>
        </div>
        <div className='flex flex-col justify-center gap-4'>
          <div className='flex justify-center'>
            <NavLink to="/dashboard"><VscAccount className='text-3xl md:text-4xl lg:text-5xl'/></NavLink>
          </div>
        </div>
        <div className='flex text-center justify-center p-16 text-xl md:text-2xl lg:text-4xl'>
          <a href="https://www.facebook.com" target='_blank'><BsFacebook /></a>
        </div>
        <div className='flex text-center justify-center p-16 tex-xl md:text-2xl lg:text-4xl'>
        <a href="https://www.instagram.com" target='_blank'><BsInstagram /></a>
        </div>
        <div className='flex text-center justify-center p-16 text-xl md:text-2xl lg:text-4xl'>
        <a href="https://www.twitter.com" target='_blank'><AiFillTwitterCircle /></a>
        </div>
        <div className='grid col-start-1 col-end-4 text-center justify-center'>
          <p>Facundo Alcorta {new Date().getFullYear()} ®</p>
        </div>
    </div>
  )
}

export default Footer