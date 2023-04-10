import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import NavBar from "../../../components/layout/Navbar";
import Footer from "../../public/Footer";
import ChangePassword from "./ChangePassword";
import FinancePassword from "./FinancePassword";
import ChangeUserInfo from "./ChangeUserInfo";
import SocialNetwork from "./SocialNetwork";
import ChangeDescription from "./ChangeDescription";

function Settings(){
  return(
    <>
      <NavBar/>
      <div className="breadcrumbs flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">Settings</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Настройки</span></li>
            </ul>
          </div>
        </div>
      </div>
      <Container className="container" style={{textAlignLast: "center"}}>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 sm:gap-12 px-0 sm:px-10">
          <div>
            <ChangePassword/>
          </div>
          <div>
            <FinancePassword />
          </div>
          <div>
            <ChangeUserInfo />
          </div>
          <div>
            <SocialNetwork />
          </div>
        </div>
        <div>
          <ChangeDescription />
        </div>
      </Container>
      <Footer/>
    </>
  )
}
export default Settings
