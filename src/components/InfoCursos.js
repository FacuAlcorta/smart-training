import React from 'react'
import {VscCheck} from 'react-icons/vsc'

const InfoCursos = () => {
  return (
    <div className='flex flex-col justify-center lg:flex-row w-full bg-white h-screen sm:flex-col'>
        <div className='flex flex-col p-4 justify-center md:p-6'>
        <img className='rounded-3xl border-solid border-8 border-amber-500' src="https://static01.nyt.com/images/2020/01/06/well/04run-gym/04run-gym-superJumbo.jpg?quality=75&auto=webp" alt="Entrenamiento" />
        </div>
        <div className='container flex lg:w-[50%] lg:flex-col text-center justify-center text-black'>
            <h1 className='text-4xl p-2 lg:text-start lg:text-5xl'>
                Recibí un entrenamiento personalizado pensado solo para tus necesidades.
            </h1>
            <p className='text-center p-4'>
                <ul className='text-start text-4xl'>
                    <li className='flex'><VscCheck/>Musculación</li>
                    <li className='flex'><VscCheck/>Funcional</li>
                    <li className='flex'><VscCheck/>Spinning</li>
                    <li className='flex'><VscCheck/>GAP</li>
                </ul>
            </p>
        </div>
    </div>
  )
}

export default InfoCursos