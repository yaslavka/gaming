import React from "react";
import Loyaut from "../Header/loyaut";
import epler from '../../../assets/gamepic/6.png'
import kep from '../../../assets/dockument/Royals.pdf'
import Footer from "../Footer";
function Royals(){
  return(
    <>
      <Loyaut/>
      <div className="gamess flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">Royals Details</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Royals</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container relative">
        <h2
          className="text-white font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10">Платформа - Royals стоимость площадки 20000 р.</h2>
        <div className="content-details">
          <div className="description mt-6">
            <p className="leading-8">
              Вселенная невероятных возможностей
            </p>
            <p className="leading-8">
             Цель программы Royals<br/> За все время работы в сетевом бизнесе мы выяснили, что каждый хочет получить желаемое быстро, а еще быстрее вернуть свои вложения...

              <br/>
              Ion - первая в мире матрица где вы возвращаете свои вложения уже сразу после закрытия первого места, и дальше идет только доход!
              <br/>
              <br/>
              Преимущества Royals
              <br/>
             Возврат вложений уже с первого места, короткие уровни, быстрое закрытие столов
            </p>
          </div>
          <div className="gameslide my-15">
            <div className="swiper-container swiper swiper-container-initialized swiper-container-horizontal">
              <div className="swiper-wrapper" style={{transform: "translate3d(0px, 0px, 0px); transition-duration: 0ms;"}}>
                <div className="swiper-slide swiper-slide-active">
                  <a className="relative" role={"button"} href={kep} download={'Kepler'}>
                    Скачать Маркетинг
                    <img src={epler} className="sm:h-full h-64 w-full object-cover" alt={''} style={{width: '100%'}}/>
                  </a>
                </div>
              </div>
              <span className="swiper-notification" aria-live="assertive" aria-atomic="true"/>
            </div>
          </div>
        </div>
        <br/>
        <br/>  <br/>
        <br/>  <br/>
        <br/>  <br/>
        <br/>
      </div>
      <Footer/>
    </>
  )
}
export default Royals
