import React from "react";
import NavBar from "../../../components/layout/Navbar";
import Footer from "../../public/Footer";
import {Link} from "react-router-dom";
import r from '../../../constants/routes.constants'
import NUKEWORLd from '../../../assets/images/casino/Nuke-World.jpg'
import icon from '../../../assets/icon/arrrow-icon.webp'
import RaccoonTales from '../../../assets/images/casino/FS_Act.jpg'
import ForestDreams from '../../../assets/images/casino/ForestDreams_1920x1080.jpg'
import AnimalQuest from '../../../assets/images/casino/AnimalQuest_945x370_2.jpg'
import MagicWheel from '../../../assets/images/casino/MW_Preview_1280-720.jpg'
import ChristmasParty from '../../../assets/images/casino/ChristmasParty_1280x720_smart-1.jpg'
import ETRaces from '../../../assets/images/casino/ETRaces_thumbnail_1280x720.jpg'
import Hamster from '../../../assets/images/casino/SaveTheHamster_1280x720.jpg'
import Treeoflight from '../../../assets/images/casino/promo_1920_1080.png'
import Roulette from '../../../assets/images/casino/Rulete.png'
const gameList =[
  {
    id: '1',
    name:'Nuke World',
    img:NUKEWORLd,
    route:r.nukeWorld,
    icon:icon
  },
  {
    id: '2',
    name:'Raccoon Tales',
    img:RaccoonTales,
    route:r.raccoonTales,
    icon:icon
  },
  {
    id: '3',
    name:'Forest Dreams',
    img:ForestDreams,
    route:r.forestDreams,
    icon:icon
  },
  {
    id: '3',
    name:'Animal Quest',
    img:AnimalQuest,
    route:r.animalQuest,
    icon:icon
  },
  {
    id: '4',
    name:'Magic Wheel',
    img:MagicWheel,
    route:r.magicWheel,
    icon:icon
  },
  {
    id: '5',
    name:'Christmas Party',
    img:ChristmasParty,
    route:r.christmasParty,
    icon:icon
  },
  {
    id: '6',
    name:'ETRaces',
    img:ETRaces,
    route:r.eTRaces,
    icon:icon
  },
  {
    id: '7',
    name:'Hamster',
    img:Hamster,
    route:r.hamster,
    icon:icon
  },
  {
    id: '8',
    name:'Tree of Light',
    img:Treeoflight,
    route:r.treeoflight,
    icon:icon
  },
  {
    id: '9',
    name:'Roulette',
    img:Roulette,
    route:r.roulette,
    icon:icon
  },
]
function Casino(){
  return(
    <>
      <NavBar/>
      <div className="breadcrumbs flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">PLAYING PLATFORM</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Игры</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mb-120">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 item-display">
          {gameList.map(({id, name,img,route, icon})=>(
            <div className="item relative group before:content-[''] before:absolute before:w-full before:h-full before:opacity-0 before:bg-black before:top-0 before:left-0 before:right-0 before:bottom-0 overflow-hidden hover:before:opacity-70 transition-all hover:before:transition-all before:border-4 before:border-white before:rounded-4xl before:border-opacity-20" key={id}>
              <img src={img} alt={img} className="w-full rounded-4xl"/>
              <Link to={route} className="HashLink group primary-btn absolute-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {name}
                <img src={icon} className="ml-3 w-5 h-5 group-hover:ml-4 transition-all" alt={icon}/>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default Casino
