import React, {useState} from "react";
import logs from "../../../assets/images/photo_2023-01-27_21-01-12.png";
import Footer from "../Footer";
import Loyaut from "../Header/loyaut";

function Authors(){
  const [open, setOpen] = useState(false)
  return(
    <>
      <Loyaut/>
      <div className="breadcrumbs flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">Authors</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Authors</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container flex items-center space-x-4 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <div className="sm:mr-12 mr-0 text-center relative">
            <img src={logs} alt={''}/>
            {open ?
            <div
              onClick={()=>{setOpen(false)}}
              className="cool-lightbox cool-lightbox--can-zoom cool-lightbox--thumbs-right" style={{zIndex: '9999', backgroundColor: 'rgba(30, 30, 30, 0.9)'}}>
              <div className="cool-lightbox-thumbs">
                <div className="cool-lightbox-thumbs__list">
                  <button type="button" className="cool-lightbox__thumb active is-video">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="cool-lightbox__thumb__icon">
                      <path d="M6.5 5.4v13.2l11-6.6z"/>
                    </svg>
                    <img src="https://img.youtube.com/vi/eS9Qm4AOOBY/mqdefault.jpg" alt=""/>
                  </button>
                </div>
              </div>
              <div className="cool-lightbox__inner" style={{paddingBottom: '60px'}}>
                <div className="cool-lightbox__progressbar" style={{transform: 'scaleX(0)', transition: 'none 0s ease 0s'}}/>
                <div className="cool-lightbox__navigation">
                  <button type="button" title="Previous" className="cool-lightbox-button cool-lightbox-button--prev"
                          style={{display: "none;"}}>
                    <div className="cool-lightbox-button__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/>
                      </svg>
                    </div>
                  </button>
                  <button type="button" title="Next" className="cool-lightbox-button cool-lightbox-button--next"
                          style={{display: "none;"}}>
                    <div className="cool-lightbox-button__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/>
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="cool-lightbox__wrapper cool-lightbox__wrapper--swipe" style={{transform: "translate3d(0px, 0px, 0px);"}}>
                  <div className="cool-lightbox__slide cool-lightbox__slide--current">
                    <div className="cool-lightbox__iframe" style={{transform: "translate3d(calc(-50% + 0px), calc(-50% + 0px), 0px) scale3d(1, 1, 1);"}}>
                      <iframe src="https://www.youtube.com/embed/eS9Qm4AOOBY"
                              frameBorder="0"
                              allowFullScreen="allowfullscreen"
                              className="cool-lightbox-video"
                              style={{width: "1386px;", height: "780px;"}}
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              title={'Authors'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>:<></>
            }
            <div>
              <div  onClick={()=>{setOpen(true)}}
                className="absolute bottom-0 right-0 md:right-32 lg:right-0 cursor-pointer h-120 w-120 bg-primary rounded-full flex justify-center items-center z-30 before:content-[''] before:h-120 before:w-120 before:bg-primary before:opacity-50 before:rounded-full before:absolute before:z-20 before:transition-all hover:before:h-32 hover:before:w-32">
                <i className="icofont-ui-play z-40 text-white" > </i>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="about_title lg:mb-6 mb-4">
            <h5 className="text-primary text-xl uppercase font-bold pl-24 lg:mb-6 mb-4 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:-translate-y-1/2 before:transform before:h-1 before:bg-primary before:w-16">
              Вячеслав Обрубинский
            </h5>
            <h2 className="text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl">
              Основатель и разработчик, сетевик с 6 летним стажем.
            </h2>
          </div>
          <div className="about_desc mb-10">
            <p>Мы прислушиваемся к просьбам партнеров, берем в разработку предложенные маркетинги, от всех партнеров нашего проекта, внедряем на продвижение ваш продукт</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default Authors
