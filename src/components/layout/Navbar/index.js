import React, {useState} from "react";
import {Link} from "react-router-dom";
import logos from "../../../assets/icon/arrrow-icon2.webp";
import Header from "../Header";
import * as actions from "../../../actions/auth.actions";
import {useDispatch} from "react-redux";

function NavBar(){
  const dispatch = useDispatch()
  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false)
  const [active, setActive] = useState(false)
  const [activ, setActiv] = useState(false)
  const logout = () => {
    dispatch(actions.signOutSuccess())

    const timer = localStorage.getItem('w')
    localStorage.clear()
    localStorage.setItem('w', timer)
  }
  return(
    <>
      <Header setIsNavMenuVisible={setIsNavMenuVisible} logout={logout}/>
      <div id="offcanvas-menu" className={isNavMenuVisible?"popup-mobile-menu popup-mobile-visiable show-mobile-menu":"popup-mobile-menu popup-mobile-visiable"}>
        <div className="mobile-menu-overlay"/>
        <div className="bg-white w-300 h-full left-0 top-0 absolute text-left transition-all py-8 px-5 overflow-y-scroll">
          <div className="flex justify-between pb-8">
            <Link to={"#"} className="signup-btn transition-all group" onClick={logout}>
              Выход
              <img src={logos} alt={logos} className="w-4 h-4 ml-2 group-hover:ml-3 transition-all"/>
            </Link>
            <button
  className="icofont-close-line z-999 font-bold text-3xl text-black hover:text-primary transition-all transform hover:rotate-90" onClick={() => {
  setIsNavMenuVisible(false)}}/>
          </div>
          <div className="menu-content">
            <div className='mobile-navigation'>
              <nav id="offcanvas-navigation" className="offcanvas-navigation">
                <ul>
                  <li className="menu-item-has-children">
                    <Link to={"/leader"} aria-current="page"
                          className="text-base font-semibold capitalize block pb-4 pt-4 pt- border-b-1 border-gray-200 transition-all hover:text-primary text-black text-dark nuxt-link-exact-active nuxt-link-active">Наставник</Link>
                  </li>
                  <li className={active ? "menu-item-has-children relative block active":"menu-item-has-children relative block"}>
                    <Link to={"#"} aria-current="page" onClick={()=>{setActive(!active)}}
                          className="text-base font-semibold capitalize block pb-4 pt-4  border-b-1 border-gray-200 transition-all hover:text-primary text-black nuxt-link-exact-active nuxt-link-active">Кабинет</Link>
                    <span className="menu-expand" onClick={()=>{setActive(!active)}}><i className="plus-minus"></i></span>
                    <ul className="sub-menu ml-5">
                      <li><Link to={"/dashboard"}
                                className="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black">
                        Кабинет</Link></li>
                      <li>
                        <Link to={"/finances"}
                                className="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black">
                        Кошелек
                        </Link>
                      </li>
                      <li>
                        <Link to={"/team"}
                              className="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black">
                          Команда
                        </Link>
                      </li>
                      <li>
                        <Link to={"/my_materials"}
                              className="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black">
                          Оплаченые услуги
                        </Link>
                      </li>
                      <li>
                        <Link to={"/settings"}
                              className="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black">
                          Настройки
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={activ ? "menu-item-has-children relative block active":"menu-item-has-children relative block"}>
                    <Link to={"#"} aria-current="page" onClick={()=>{setActiv(!activ)}}
                          className="text-base font-semibold capitalize block pb-4 pt-4  border-b-1 border-gray-200 transition-all hover:text-primary text-black nuxt-link-exact-active nuxt-link-active">Площадки</Link>
                    <span className="menu-expand" onClick={()=>{setActiv(!activ)}}><i className="plus-minus"></i></span>
                    <ul className="sub-menu ml-5">
                      <li><Link to={"/Kepler"}
                                className="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black">
                        Kepler</Link></li>
                      <li>
                        <Link to={"/Gliese"}
                              className="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black">
                          Gliese
                        </Link>
                      </li>
                      <li>
                        <Link to={"/aida"}
                              className="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black">
                          Aida
                        </Link>
                      </li>
                      <li>
                        <Link to={"/rockets"}
                              className="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black">
                          Rockets
                        </Link>
                      </li>
                      <li>
                        <Link to={"/ion"}
                              className="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black">
                          Ion
                        </Link>
                      </li>
                      <li>
                        <Link to={"/royal"}
                              className="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black">
                          Royal
                        </Link>
                      </li>
                      <li>
                        <Link to={"/x2"}
                              className="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black">
                          X2
                        </Link>
                      </li>
                      <li>
                        <Link to={"/milky-way"}
                              className="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black">
                          Млечный Путь
                        </Link>
                      </li>
                      <li>
                        <Link to={"/games"}
                              className="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black">
                          Игры
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to={"/news"} aria-current="page"
                          className="text-base font-semibold capitalize block pb-4 pt-4 pt- border-b-1 border-gray-200 transition-all hover:text-primary text-black text-dark nuxt-link-exact-active nuxt-link-active">Новости</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center">
              <Link to={"/sign-up"} className="signup-btn transition-all group hidden sm:flex">
                Выход
                <img src={logos} alt={logos} className="w-4 h-4 ml-2 group-hover:ml-3 transition-all"/>
              </Link>
              <div className="lg:hidden block">
                <button className="icofont-navigation-menu text-white text-4xl ml-9" onClick={() => {setIsNavMenuVisible(true)}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default NavBar
