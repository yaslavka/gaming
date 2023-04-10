import React from "react";
import blog1 from "../../../assets/blog/blog1.webp";
import blog2 from "../../../assets/gamepic/png-clipart-handshake-hand-love-3d-computer-graphics.png";
import logo from "../../../assets/icon/arrrow-icon.webp";
import {Link} from "react-router-dom";
import Banner from "../Banner";
import Main from "../Main";
import Video from "../Video";
import Footer from "../Footer";
import Loyaut from "../Header/loyaut";

function Home() {
    return(
      <>
        <Loyaut/>
        <Banner/>
        <Main/>
        <Video/>
        <div id="about" className="container pt-32">
          <div className="text-center lg:mb-15 md:mb-12 mb-8"><h2
            className="text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
            <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Почему выбирают KOSMOS</font></font>
          </h2> <p className="max-w-lg text-gray-100 mx-auto text-base sm:text-lg leading-8 mt-3"><font
            style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Создатели платформы регулярно обновляют программы Космос в соответствии с актуальными трендами сетевой индустрии</font></font></p></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 sm:gap-12 px-0 sm:px-10">
            <div>
              <div className="flex sm:items-center flex-col sm:flex-row">
                <div className="lg:w-40 xl:w-52 2xl:w-52 md:w-44 sm:w-37 w-32 mb-7 sm:mb-0 flex-shrink-0">
                  <div>
                    <img src={blog1} alt={''}/>
                  </div>
                </div>
                <div className="xl:ml-9 lg:ml-6 md:ml-9 ml-3 flex flex-col flex-1">
                  <span className="text-sm text-white font-exo font-normal mb-2 sm:mb-5">
                    <i className="icofont-calendar text-primary mr-2"></i><font style={{verticalAlign: 'inherit'}}><font
                    style={{verticalAlign: 'inherit'}}>Экспертность</font></font></span>
                  <h2
                    className="text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase font-exo hover:text-primary transition-all mb-2 sm:mb-5 leading-9">
                    <div className=""><font style={{verticalAlign: 'inherit'}}><font
                      style={{verticalAlign: 'inherit', fontSize: '15px'}}>Создатели платформы Космос являются успешными сетевыми предпринимателями и делятся лично проверенными знаниями</font></font></div>
                  </h2>
                  <Link to={'/sign-in'} className="uppercase font-exo relative pl-12 text-sm text-white transition-all hover:text-primary  before:content-[''] before:absolute before:h-0.5 before:w-7.5 before:bg-primary before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Принять участие</font></font>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="flex sm:items-center flex-col sm:flex-row">
                <div className="lg:w-40 xl:w-52 2xl:w-52 md:w-44 sm:w-37 w-32 mb-7 sm:mb-0 flex-shrink-0">
                  <div>
                    <img src={blog2} alt={''}/>
                  </div>
                </div>
                <div className="xl:ml-9 lg:ml-6 md:ml-9 ml-3 flex flex-col flex-1">
                  <span className="text-sm text-white font-exo font-normal mb-2 sm:mb-5">
                    <i className="icofont-calendar text-primary mr-2"></i><font style={{verticalAlign: 'inherit'}}><font
                    style={{verticalAlign: 'inherit'}}>Партнёрская программа</font></font></span>
                  <h2
                    className="text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase font-exo hover:text-primary transition-all mb-2 sm:mb-5 leading-9">
                    <div className=""><font style={{verticalAlign: 'inherit'}}><font
                      style={{verticalAlign: 'inherit', fontSize: '15px'}}>Наличие партнерской программы помогает пользователям развиваться целыми командами</font></font></div>
                  </h2>
                  <Link to={'/sign-in'} className="uppercase font-exo relative pl-12 text-sm text-white transition-all hover:text-primary  before:content-[''] before:absolute before:h-0.5 before:w-7.5 before:bg-primary before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Принять участие</font></font>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-32">
          <div className="gaming-update flex justify-center md:justify-between flex-col md:flex-row items-center bg-no-repeat bg-scroll bg-center bg-cover lg:px-100 px-10 h-300">
            <div>
              <h2 className="text-white md:text-4xl lg:text-5xl xl:text-title sm:text-3xl text-2xl text-center md:text-left mb-6 md:mb-0 uppercase font-bold leading-9 lg:leading-70">
                <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Свяжитесь с нами</font></font>
                  <br/><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Предложите свою идею</font></font></h2>
            </div>
            <div><Link to="/contact" className="arrrow-icon group primary-btn opacity-100 transition-all"
                    ><font
              style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
              Связь
            </font></font><img src={logo} alt="Значок стрелки"
                               className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/></Link></div>
          </div>
        </div>
        <Footer/>
      </>
    )
}
export default Home
