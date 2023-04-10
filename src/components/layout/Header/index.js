import {Link} from "react-router-dom";
import logo from "../../../assets/images/logo.webp";
import logos from "../../../assets/icon/arrrow-icon2.webp";
import React from "react";

function Header({setIsNavMenuVisible, logout}){
  return(
    <header className=" left-0 right-0 z-99" style={{position:"absolute"}}>
      <div className="container">
        <div className="flex py-3 items-center justify-between">
          <Link to={'/'} className="nuxt-link-exact-active nuxt-link-active" aria-current="page">
            <img src={logo} alt={logo}/>
          </Link>
          <div className="px-8 hidden lg:block">
            <nav>
              <ul className="flex">
                <li className="relative mr-14 group z-10 before:bg-nav-shape before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">
                  <Link to={'/leader'} className="text-white uppercase font-bold font-exo relative nuxt-link-exact-active nuxt-link-active" aria-current="page">
                    Наставник
                  </Link>
                </li>
                <li className="relative mr-14 group z-10 before:bg-nav-shape before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">
                  <Link to={'#'} className="text-white uppercase font-bold font-exo relative nuxt-link-exact-active nuxt-link-active" aria-current="page">
                    Кабинет
                  </Link>
                  <ul className="flex flex-col bg-white absolute w-56 px-5 py-5 rounded left-0 right-auto top-12 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all group-hover:top-9">
                    <li>
                      <Link to={'/dashboard'} className="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">
                        Кабинет
                      </Link>
                    </li>
                    <li>
                      <a href={'/finances'} className="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">
                        Кошелек
                      </a>
                    </li>
                    <li>
                      <a href={'/team'} className="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">
                        Команда
                      </a>
                    </li>
                    <li>
                      <a href={'/my_materials'} className="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">
                        Оплаченые услуги
                      </a>
                    </li>
                    <li>
                      <a href={'/settings'} className="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">
                        Настройки
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="relative mr-14 group z-10 before:bg-nav-shape before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">
                  <Link to={'#'} className="text-white uppercase font-bold font-exo relative nuxt-link-exact-active nuxt-link-active" aria-current="page">
                    Площадки
                  </Link>
                  <ul className="flex flex-col bg-white absolute w-56 px-5 py-5 rounded left-0 right-auto top-12 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all group-hover:top-9">
                    <li>
                      <Link to={'/Kepler'} className="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">
                        Kepler
                      </Link>
                    </li>
                    <li>
                      <a href={'/Gliese'} className="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">
                        Gliese
                      </a>
                    </li>
                    <li>
                      <a href={'/aida'} className="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">
                        Aida
                      </a>
                    </li>
                    <li>
                      <a href={'/rockets'} className="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">
                        Rockets
                      </a>
                    </li>
                    <li>
                      <a href={'/ion'} className="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">
                        Ion
                      </a>
                    </li>
                    <li>
                      <a href={'/royal'} className="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">
                        Royal
                      </a>
                    </li>
                    <li>
                      <a href={'/x2'} className="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">
                        X2
                      </a>
                    </li>
                    <li>
                      <a href={'/milky-way'} className="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">
                        Млечный Путь
                      </a>
                    </li>
                    <li>
                      <a href={'/games'} className="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">
                        Игры
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="relative mr-14 group z-10 before:bg-nav-shape before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">
                  <Link to={'/news'} className="text-white uppercase font-bold font-exo relative nuxt-link-exact-active nuxt-link-active" aria-current="page">
                    Новости
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center">
            <div role={"button"} className="signup-btn transition-all group hidden sm:flex" onClick={logout}>
              Выход
              <img src={logos} alt={logos} className="w-4 h-4 ml-2 group-hover:ml-3 transition-all"/>
            </div>
            <div className="lg:hidden block">
              <button className="icofont-navigation-menu text-white text-4xl ml-9" onClick={() => {setIsNavMenuVisible(true)}}/>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
