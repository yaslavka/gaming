import React, {useState} from "react";
import Header from "./index";
import {Link} from "react-router-dom";
import logos from "../../../assets/icon/arrrow-icon2.webp";

function Loyaut(){
  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false)
  const [active, setActive] = useState(false)
  return(
    <>
      <Header setIsNavMenuVisible={setIsNavMenuVisible}/>
      <div id="offcanvas-menu" className={isNavMenuVisible?"popup-mobile-menu popup-mobile-visiable show-mobile-menu":"popup-mobile-menu popup-mobile-visiable"}>
        <div className="mobile-menu-overlay"></div>
        <div className="bg-white w-300 h-full left-0 top-0 absolute text-left transition-all py-8 px-5 overflow-y-scroll">
          <div className="flex justify-between pb-8">
            <Link to={"/sign-up"} className="signup-btn transition-all group">
              Регистрация
              <img src={logos} alt={logos} className="w-4 h-4 ml-2 group-hover:ml-3 transition-all"/>
            </Link>
            <button
              className="icofont-close-line z-999 font-bold text-3xl text-black hover:text-primary transition-all transform hover:rotate-90" onClick={() => {setIsNavMenuVisible(false)}}></button>
          </div>
          <div className="menu-content">
            <div className='mobile-navigation'>
              <nav id="offcanvas-navigation" className="offcanvas-navigation">
                <ul>
                  <li className="menu-item-has-children">
                    <Link to={"/"} aria-current="page"
                          className="text-base font-semibold capitalize block pb-4 pt-4 pt- border-b-1 border-gray-200 transition-all hover:text-primary text-black text-dark nuxt-link-exact-active nuxt-link-active">Главная</Link>
                  </li>
                  <li className={active ? "menu-item-has-children relative block active":"menu-item-has-children relative block"}>
                    <Link to={"#"} aria-current="page"
                          className="text-base font-semibold capitalize block pb-4 pt-4  border-b-1 border-gray-200 transition-all hover:text-primary text-black nuxt-link-exact-active nuxt-link-active">О Проекте</Link>
                    <span className="menu-expand" onClick={()=>{setActive(!active)}}><i className="plus-minus"></i></span>
                    <ul className="sub-menu ml-5">
                      <li><Link to={"/authors"}
                                className="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black">
                        Основатель</Link></li>
                      <li><Link to={"#about"}
                                className="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black">
                        Информация</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to={"/platforms"} aria-current="page"
                          className="text-base font-semibold capitalize block pb-4 pt-4 pt- border-b-1 border-gray-200 transition-all hover:text-primary text-black text-dark nuxt-link-exact-active nuxt-link-active">Услуги</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to={"/contact"} aria-current="page"
                          className="text-base font-semibold capitalize block pb-4 pt-4 pt- border-b-1 border-gray-200 transition-all hover:text-primary text-black text-dark nuxt-link-exact-active nuxt-link-active">Контакты</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Loyaut
