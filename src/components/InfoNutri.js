import React from 'react'
import { VscCheck } from 'react-icons/vsc'

const InfoNutri = () => {
  return (
    <div className='flex flex-col justify-center lg:flex-row w-full bg-slate-200 sm:flex-col'>
        <div className='flex flex-col justify-center p-4 sm:p-16 md:p-16'>
            <img className='rounded-3xl border-solid border-8 border-amber-500 shadow-2xl shadow-slate-600' src="https://cobblestonemedicineandrehab.com/wp-content/uploads/2021/01/fitness-nutrition-pic-1.png" alt="Nutrición" />
        </div>
        <div className='w-full lg:w-[50%] lg:flex-col lg:text-center lg:justify-center text-black'>
            <h1 className='uppercase font-semibold text-3xl border-b-2 border-slate-400 sm:text-4xl p-8 lg:text-start lg:text-4xl xl:text-5xl'>
                Arma un plan para recibir lo que tu cuerpo necesita.
            </h1>
            <div className='p-8'>
                <ul className='flex flex-wrap text-3xl sm:text-4xl lg:flex-col xl:text-5xl'>
                    <li className='flex p-4'><VscCheck className='mr-2 border-solid border-2 border-amber-500 rounded-full'/>Nutrición</li>
                    <li className='flex p-4'><VscCheck className='mr-2 border-solid border-2 border-amber-500 rounded-full'/>Suplementación</li>
                    <li className='flex p-4'><VscCheck className='mr-2 border-solid border-2 border-amber-500 rounded-full'/>Asesoramiento <br/>Personalizado</li>
                </ul>
            </div>
        </div>
    </div>
    // <div className='w-full bg-amber-500 h-screen'>
    //     <img src="https://cobblestonemedicineandrehab.com/wp-content/uploads/2021/01/fitness-nutrition-pic-1.png" alt="Nutrición" />
    //     <p>
    //         Consulta a nuestros especialistas para que tengas el plan alimenticio específico para alcanzar tus metas.
    //     </p>
    // </div>
  )
}

export default InfoNutri