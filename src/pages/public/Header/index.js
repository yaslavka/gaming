import React from "react";
import {Link} from "react-router-dom";
import logo from "../../../assets/images/logo.webp";
import logos from "../../../assets/icon/arrrow-icon2.webp";

function Header({setIsNavMenuVisible}){
  return(
    <header className="fixed left-0 right-0 z-99">
      <div className="container">
        <div className="flex py-3 items-center justify-between">
          <Link to={'/'} className="nuxt-link-exact-active nuxt-link-active" aria-current="page">
            <img src={logo} alt={logo}/>
          </Link>
          <div className="px-8 hidden lg:block">
            <nav>
              <ul className="flex">
                <li className="relative mr-14 group z-10 before:bg-nav-shape before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">
                  <Link to={'/'} className="text-white uppercase font-bold font-exo relative nuxt-link-exact-active nuxt-link-active" aria-current="page">
                    Главная
                  </Link>
                </li>
                <li className="relative mr-14 group z-10 before:bg-nav-shape before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">
                  <Link to={'#'} className="text-white uppercase font-bold font-exo relative nuxt-link-exact-active nuxt-link-active" aria-current="page">
                    О Проекте
                  </Link>
                  <ul className="flex flex-col bg-white absolute w-56 px-5 py-5 rounded left-0 right-auto top-12 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all group-hover:top-9">
                    <li>
                      <Link to={'/authors'} className="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">
                        Основатель
                      </Link>
                    </li>
                    <li>
                      <a href={'#about'} className="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">
                        Информация
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="relative mr-14 group z-10 before:bg-nav-shape before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">
                  <Link to={'/platforms'} className="text-white uppercase font-bold font-exo relative nuxt-link-exact-active nuxt-link-active" aria-current="page">
                    Услуги
                  </Link>
                </li>
                <li className="relative mr-14 group z-10 before:bg-nav-shape before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">
                  <Link to={'/contact'} className="text-white uppercase font-bold font-exo relative nuxt-link-exact-active nuxt-link-active" aria-current="page">
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center">
            <Link to={"/sign-up"} className="signup-btn transition-all group hidden sm:flex">
              Регистрация
              <img src={logos} alt={logos} className="w-4 h-4 ml-2 group-hover:ml-3 transition-all"/>
            </Link>
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
