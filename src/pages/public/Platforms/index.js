import React from "react";
import Footer from "../Footer";
import Kepler from '../../../assets/gamepic/kepler.png'
import Gliese from  '../../../assets/gamepic/Gliese.png'
import Aida from  '../../../assets/gamepic/Aida.png'
import Rockets from  '../../../assets/gamepic/Rockets.png'
import Ion from  '../../../assets/gamepic/Ion.png'
import Royals from  '../../../assets/gamepic/Royals.png'
import X2 from  '../../../assets/gamepic/X2.png'
import MilkyWay from  '../../../assets/gamepic/MilkyWay.png'
import { HashLink } from 'react-router-hash-link'
import Loyaut from "../Header/loyaut";
const platform = [
  {
    label: 'Kepler',
    img: Kepler,
    route: '/platforms/Kepler'
  },
  {
    label: 'Gliese',
    img: Gliese,
    route: '/platforms/Gliese'
  },
  {
    label: 'Aida',
    img: Aida,
    route: '/platforms/Aida'
  },
  {
    label: 'Rockets',
    img: Rockets,
    route: '/platforms/Rockets'
  },
  {
    label: 'Ion',
    img: Ion,
    route: '/platforms/Ion'
  },
  {
    label: 'Royals',
    img: Royals,
    route: '/platforms/Royals'
  },
  {
    label: 'X2',
    img: X2,
    route: '/platforms/X2'
  },
  {
    label: 'Milky Way',
    img: MilkyWay,
    route: '/platforms/MilkyWay'
  },
]
function Platform(){
  return(
    <>
      <Loyaut/>
      <div className="gamess flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">All Platforms</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Все платформы</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mb-120">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 item-display">
          {
            platform.map(({label, img,route})=>(
              <div key={label} className="item relative group  before:content-[''] before:absolute before:w-full before:h-full before:opacity-0 before:bg-black before:top-0 before:left-0 before:right-0 before:bottom-0 overflow-hidden hover:before:opacity-70 transition-all hover:before:transition-all before:border-4 before:border-white before:rounded-4xl before:border-opacity-20">
                <img src={img} alt={''} className="w-full rounded-4xl"/>
                <HashLink to={route} className="HashLink group primary-btn absolute-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {label}
                </HashLink>
              </div>
            ))
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default Platform
