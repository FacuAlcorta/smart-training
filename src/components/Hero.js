import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src="https://hips.hearstapps.com/hmg-prod/images/mens-health-radox-recovery-shutterstock-675245371-1551802893.jpg?resize=2048:*" alt="bgimage" />
        <div className='absolute top-0 w-full h-full flex flex-col justify-center px-8 text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p className='font-semibold xl:text-3xl md:text-xl'>SMART TRAINING</p>
                <h1 className='font-bold text-5xl md:text-7xl text-amber-500'>
                    Entrenamiento 
                    <br />
                    Inteligente</h1>
                <p className='py-2 font-semibold text-xl xl:w-[80%] md:text-2xl w-[70%]'>
                    Comenza el viaje hacia el cuerpo y mente saludable que te mereces.
                    <br />
                    ¡Sumate ya!
                </p>
                <button className='bg-amber-500 font-semibold text-xl border-hidden hover:scale-110 ease-in duration-75'>Registrarse</button>
            </div>
        </div>
    </div>
  )
}

export default Hero