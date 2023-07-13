import React from 'react'
import {VscCheck} from 'react-icons/vsc'

const InfoCursos = () => {
  return (
    <div className='flex flex-col justify-center lg:flex-row w-full bg-white sm:flex-col'>
        <div className='w-full lg:w-[50%] lg:flex-col text-center justify-center text-black z-20'>
            <h1 className='uppercase font-semibold text-3xl border-b-2 border-slate-400 sm:text-4xl p-8 lg:text-start lg:text-4xl xl:text-5xl'>
                Recibí un entrenamiento personalizado pensado solo para tus necesidades.
            </h1>
            <div className='flex justify-center p-8 z-20'>
                <ul className='flex flex-wrap text-3xl sm:text-4xl lg:flex-col xl:text-5xl'>
                    <li className='flex p-4'><VscCheck className='mr-2 border-solid border-2 border-amber-500 rounded-full'/>Musculación</li>
                    <li className='flex p-4'><VscCheck className='mr-2 border-solid border-2 border-amber-500 rounded-full'/>Funcional</li>
                    <li className='flex p-4'><VscCheck className='mr-2 border-solid border-2 border-amber-500 rounded-full'/>Spinning</li>
                    <li className='flex p-4'><VscCheck className='mr-2 border-solid border-2 border-amber-500 rounded-full'/>GAP</li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col justify-center p-4 sm:p-16 md:p-16 z-20'>
            <img className='rounded-3xl border-solid border-8 border-amber-500 shadow-2xl shadow-slate-600' src="https://static01.nyt.com/images/2020/01/06/well/04run-gym/04run-gym-superJumbo.jpg?quality=75&auto=webp" alt="Entrenamiento" />
        </div>
    </div>
  )
}

export default InfoCursos