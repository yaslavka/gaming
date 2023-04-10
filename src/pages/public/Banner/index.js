import React from "react";
import {Link} from "react-router-dom";
import sign from '../../../assets/icon/arrrow-icon.webp'
import chel from '../../../assets/bg/hero-position-img.webp'


function Banner(){
  return(
    <>
      <div className="banners flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover 2xl:h-940 xl:h-820 lg:h-780 md:h-650 sm:h-620 h-620 lg:mb-32 md:mb-20 mb-15">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 md:pt-10 sm:pt-8 pt-8 md:mb-12 z-10 flex flex-col justify-center items-center lg:items-start lg:text-left text-center">
            <h1 className="text-white font-metal uppercase font-normal 2xl:text-7.5xl xl:text-8xl lg:text-5.5xl md:text-7xl text-5xl tracking-wide xl:mb-10 lg:mb-8 mb-5 text-shadow">
              Kosmos
              <br/>
              Playing platform.
            </h1>
            <p className="text-white font-semibold font-exo lg:mb-10 md:mb-6 text-base lg:text-2xl mb-5">Ваш успех Наша Гордость</p>
            <Link to="/sign-in"
               className="sign-in w-230 md:text-2xl md:leading-12 h-73 flex items-center text-white font-bold justify-center font-exo group hover:opacity-80 leading-70 text-xl">
              Войти
              <img src={sign} alt="Arrow Icon"
                   className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/></Link>
          </div>
        </div>
        <div
          className="absolute bottom-0 xl:right-14 lg:right-5 right-0 left-0 lg:left-auto text-center flex justify-center">
          <img src={chel} alt="Position BG"
               className="2xl:w-940 xl:w-780 lg:w-650 md:w-620 w-450 md:text-center"/></div>
      </div>
    </>
  )
}
export default Banner
