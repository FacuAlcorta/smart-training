import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {VscMenu, VscChromeClose, VscAccount} from 'react-icons/vsc'

const Navbar = () => {
    // const [nav, setNav] = useState(false)
    // const handleNav = () => {
    //     setNav(!nav);
    //     if (!nav) {
    //         document.body.style.overflow = 'hidden'
    //     }else{
    //         document.body.style.overflow = 'scroll'
    //     }
    // }

  return (
    <nav className='absolute text-center w-full bg-transparent z-40'>
        <div className='flex text-center justify-between backdrop-blur-sm py-4 px-8'>
            <NavLink to="/" className='text-amber-500 font-semibold text-3xl cursor-pointer px-8'>ST</NavLink>
            <div className='hidden lg:block'>
                <div className='flex text-center font-bold text-lg'>
                    <NavLink to="/" className='text-amber-500 font-semibold text-3xl cursor-pointer px-8'>Home</NavLink>
                    <NavLink to="/nosotros" className='text-amber-500 font-semibold text-3xl cursor-pointer px-8'>Nosotros</NavLink>
                    <NavLink to="/planes" className='text-amber-500 font-semibold text-3xl cursor-pointer px-8'>Planes</NavLink>
                    <NavLink to="/servicios" className='text-amber-500 font-semibold text-3xl cursor-pointer px-8'>Servicios</NavLink>
                </div>
            </div>
            <div className='flex text-center justify-center'>
                <NavLink to="/dashboard"><VscAccount to="/dashboard" className='text-amber-500 text-5xl hidden lg:block'/></NavLink>
                <VscMenu className='text-amber-500 text-5xl block lg:hidden'/>
            </div>
        </div>
    </nav>

    // -----------------------------
    
    // <div className='absolute w-full flex justify-between p-4 items-center'>
    //     <h1 className='text-white font-bold text-5xl z-20'>ST</h1>
    //     <VscMenu onClick={handleNav} className='z-20 text-white cursor-pointer' size={45} />
    //     <div className={
    //         nav 
    //         ? 'transition ease-in duration-300 fixed text-amber-500 right-0 top-0 w-full md:w-[50%] h-screen bg-black/80 px-4 py-7 flex-col z-10' 
    //         : 'absolute top-0 h-screen left-[-100%] transition ease-in duration-400 z-10'
    //         }>
    //         <ul className='flex flex-col w-full h-full items-center justify-center'>
    //             <li className='font-bold text-4xl p-10'>Home</li>
    //             <li className='font-bold text-4xl p-10'>Actividades</li>
    //             <li className='font-bold text-4xl p-10'>Nuestro Equipo</li>
    //             <li className='font-bold text-4xl p-10'>Nosotros</li>
    //             <VscAccount className='font-bold text-7xl my-10'/>
    //         </ul>
    //     </div>
    // </div>
  )
}

export default Navbar