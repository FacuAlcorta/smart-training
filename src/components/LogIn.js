import React from "react";
import { Link } from "react-router-dom";
import videologin from 'C:/Users/Facundo/Desktop/Practicas/gym-page/fit-club/src/videos/videlogin.mp4'

const LogIn = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <video className='top-0 left-0 w-full h-screen object-cover' autoPlay loop muted id="video">
        <source src={videologin} alt="bgvideo" />
      </video>
      <div className=" absolute border-2 p-8 border-amber-500 rounded-2xl backdrop-blur-md max-w-[700px] md:w-2/3">
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-amber-500">
            Logueate
          </p>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-white hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Mantenerme logueado</span>
          </label>
          <Link
            className="text-amber-500 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Olvidaste tu contraseña?
          </Link>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-amber-600 font-semibold hover:border-amber-500 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Ingresar
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-white text-center md:text-left">
          Todavía no tenés una cuenta?{" "}
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
