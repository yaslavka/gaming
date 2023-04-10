import React from 'react'
import NavBar from "../../../components/layout/Navbar";
import './index.css'
import routes from '../../../constants/routes.constants'
import bot from '../../../assets/images/bot.png'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import logos from "../../../assets/icon/arrrow-icon2.webp";
import Footer from "../../public/Footer";

const materialLinks = [
  {
    label: 'HUB projects',
    route: routes.bot,
    dataToggle: "pill",
    ariaExpanded: true,
    text: ' - ваша персональная визитка в Телеграм, которая выполняет основные функции для успешного заработка в интернете и не только, а именно:',
    title: 'Объединяет все ваши проекты в одном месте',
    title2: 'Помогает собирать подписную базу',
    title3: 'Помогает строить команду',
    title4: 'в любом проекте за счет дубликации действий',
    title5: 'Теперь у вас есть универсальный инструмент, с которым даже ленивый сможет стать супер успешным Наставником для своей команды!',
    title6: '🤩 Ах, да, еще же есть уникальный маркетинг в самом боте!',
    olata: routes.finances,
    imge: bot
  },
]


function MyMaterial({children}) {
  const userInfo = useSelector((state) => state.app.user)
  return (
    <>
      <NavBar/>
      <div className="breadcrumbs flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">my materials</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Оплаченные услуги</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <>
          {userInfo && (
            <>
              {userInfo.is_verified === 1 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 item-display">
                    {materialLinks.map(({route, imge}) => (
                      <div className="item relative group  before:content-[''] before:absolute before:w-full before:h-full before:opacity-0 before:bg-black before:top-0 before:left-0 before:right-0 before:bottom-0 overflow-hidden hover:before:opacity-70 transition-all hover:before:transition-all before:border-4 before:border-white before:rounded-4xl before:border-opacity-20">
                        <img src={imge} alt={''} className="w-full rounded-4xl"/>
                        <Link to={route} className="HashLink group primary-btn absolute-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                          подробнее
                          <img src={logos} alt={logos} className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                        </Link>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center lg:mb-15 md:mb-12 mb-8">
                    <h2 className="text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
                      Вы не активированны!... Доступ Появится после активации Платформы KEPLER
                    </h2>
                  </div>
                </>
              )}
            </>
          )}
        </>
      </div>

      {children}
      <Footer/>
    </>
  )
}

export default MyMaterial
