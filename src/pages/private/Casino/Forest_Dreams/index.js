import React from "react";
import NavBar from "../../../../components/layout/Navbar";
import {Container} from "react-bootstrap";
import Footer from "../../../public/Footer";

function ForestDreams(){
  return (
    <>
      <NavBar/>
      <div className="breadcrumbs flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">Forest Dreams</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Forest Dreams</span></li>
            </ul>
          </div>
        </div>
      </div>
      <Container className="root-page" title={'Forest Dreams'}>
        <iframe
          id="game-frame"
          allowFullScreen={true}
          width="100%"
          title={'Forest Dreams'}
          src={'/forestdreams'}
          height={400}
        />
      </Container>
      <Footer/>
    </>
  )
}
export default ForestDreams
