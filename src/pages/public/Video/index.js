import React, {useEffect, useState} from "react";
import upcoming from '../../../assets/others/upcoming-game-thumb3.webp'
import upcomin from '../../../assets/others/game-vs2.webp'
import upcomi from '../../../assets/others/upcoming-game-thumb4.webp'
import imag from '../../../assets/bg/gaming-bg1.webp'
import play from '../../../assets/others/play-btn.webp'
import plays from '../../../assets/others/play-btn2.webp'
import {api} from "../../../api";
import {formatter} from "../../../utils";

function Video() {
  const [open, setOpen] = useState(false)
  const [opens, setOpens] = useState(false)
  const [info, setInfo] = useState(null);
  useEffect(() => {
    api
      .getLandingInfo()
      .then((response) => setInfo(response))
      .catch(() => {});
  }, []);
  return (
    <>
      <section className="live-section">
        <div className="container relative">
          <div className="swiper-container swiper swiper-container-initialized swiper-container-horizontal">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="relative">
                  <img src={imag} alt="Gaming BG" className="sm:h-full h-64 w-full object-cover"/>
                  <div className="absolute-center" onClick={()=>{setOpen(true)}}>
                    <img src={play} alt={''} className="md:w-120 w-20 h-20 md:h-120 cursor-pointer rounded"/>
                  </div>
                  <div className="absolutes absolute md:h-20 h-12 left-1/2 bottom-0 transform -translate-x-2/4 bg-no-repeat bg-center w-full flex justify-center items-center">
                    <h3 className="text-white font-exo font-bold uppercase text-base sm:text-xl md:text-2xl"><font
                      style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Краткий обзор игр</font></font></h3>
                  </div>

                </div>
              </div>
            </div>
          </div>
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
                      <iframe src="https://www.youtube.com/embed/SJFM_Fs_vWM?autoplay=1"
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
          {opens ?
            <div
              onClick={()=>{setOpens(false)}}
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
                      <iframe src="https://www.youtube.com/embed/SJFM_Fs_vWM?autoplay=1"
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
        </div>
      </section>
      {info && (
        <>
          <div className="mt-28">
            <div className="container">
              <div className="text-center lg:mb-15 md:mb-12 mb-8">
                <h2
                  className="text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
                  <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Битва
                    Лидеров</font></font></h2>
                <p className="max-w-lg text-gray-100 mx-auto text-base sm:text-lg leading-8 mt-3"><font
                  style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Арена где сильнейшие бьются за
                  лучшее место, что бы забрать лучший приз...</font></font></p>
              </div>
              <div>
                <div className="border-4 border-light-blue-500 rounded-4xl px-10 lg:px-16 py-8 mb-7.5 last:mb-0">
                  <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                    <div
                      className="md:col-start-1 md:col-end-7 flex flex-col md:justify-start md:items-start justify-center items-center text-center mr-5">
                      <p className="sm:text-base text-sm font-medium"><font style={{verticalAlign: 'inherit'}}><font
                        style={{verticalAlign: 'inherit'}}>Кто сегодня победит</font></font></p>
                      <div
                        className="transition-all text-2xl lg:text-4xl font-bold uppercase font-exo text-white mb-4 hover:text-primary">
                        <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>турнир 2023</font></font>
                      </div>
                    </div>
                    <div className="md:col-start-7 md:col-end-9 lg:mr-12 mr-5 md:my-auto my-8 flex flex-col items-center text-center">
                      <div role={"button"} className="lg:w-120 lg:h-120 w-88 h-88 bg-primary rounded-full block relative" onClick={()=>{setOpens(true)}}>
                        <img src={plays} alt={''} className="max-w-full h-auto w-auto absolute-center"/>
                      </div>
                    </div>
                    <div className="md:col-end-13 flex md:justify-end justify-center items-center w-full px-20 sm:px-0 sm:w-auto">
                      <div className="text-white text-center">
                        <span className="text-white text-5xl lg:text-10xl uppercase font-metal font-normal block text-yellow" style={{width: 110}}>
                         <img src={upcoming} alt={''} className="lg:mr-9 mr-5"/>
                        </span>
                        <p className="uppercase mt-3 sm:mt-5 text-base lg:text-lg">
                          {info?.id[0]?.username}
                        </p>
                        <p className="uppercase mt-3 sm:mt-5 text-base lg:text-lg">
                          {formatter.format(info?.id[0]?.income || 0).replace('₽', '₽') ? (
                            <p className="uppercase mt-3 sm:mt-5 text-base lg:text-lg">
                              {formatter.format(info?.id[0]?.income|| 0).replace('₽', '₽')}
                            </p>
                          ) : (
                            <p className="uppercase mt-3 sm:mt-5 text-base lg:text-lg">
                              0₽
                            </p>
                          )}
                        </p>
                      </div>
                      <div className="text-white text-center">
                        <span className="text-white text-5xl lg:text-10xl uppercase font-metal font-normal block text-yellow" style={{width: 110}}>
                         <img src={upcomin} alt={''} className="lg:mr-9 mr-5"/>
                        </span>
                        <p className="uppercase mt-3 sm:mt-5 text-base lg:text-lg">

                        </p>
                      </div>
                      <div className="text-white text-center">
                        <span className="text-white text-5xl lg:text-10xl uppercase font-metal font-normal block text-yellow" style={{width: 105}}>
                          <img src={upcomi} alt={''} className="lg:mr-9 mr-5 w-full" />
                        </span>
                        <p className="uppercase mt-3 sm:mt-5 text-base lg:text-lg">
                          {info?.id[1]?.username}
                        </p>
                        {formatter.format(info?.id[1]?.income || 0).replace('₽', '₽') ? (
                          <p className="uppercase mt-3 sm:mt-5 text-base lg:text-lg">
                            {formatter.format(info?.id[1]?.income|| 0).replace('₽', '₽')}
                          </p>
                        ) : (
                          <p className="uppercase mt-3 sm:mt-5 text-base lg:text-lg">
                            0₽
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-32 pb-32">
            <div>
              <div className="grid md:grid-cols-4 grid-cols-2 gap-9">
                <div className="text-white text-center">
                  <span className="text-white text-5xl lg:text-3xl uppercase font-metal font-normal block text-yellow">
                    <font style={{verticalAlign: 'inherit'}}>
                      <font style={{verticalAlign: 'inherit'}}>
                        {info.all || 0}
                      </font>
                    </font>
                  </span>
                  <p className="uppercase mt-3 sm:mt-5 text-base lg:text-lg">
                    <font style={{verticalAlign: 'inherit'}}>
                      <font style={{verticalAlign: 'inherit'}}>
                        Количество Зарегистрированных пользователей
                      </font>
                    </font>
                  </p>
                </div>
                <div className="text-white text-center">
                  <span className="text-white text-5xl lg:text-3xl uppercase font-metal font-normal block text-bright">
                <font style={{verticalAlign: 'inherit'}}>
                  <font style={{verticalAlign: 'inherit'}}>
                   {info.active || 0}
                  </font>
                </font>
              </span>
                  <p className="uppercase mt-3 sm:mt-5 text-base lg:text-lg">
                    <font style={{verticalAlign: 'inherit'}}>
                      <font style={{verticalAlign: 'inherit'}}>
                        Активированных Пользователей
                      </font>
                    </font>
                  </p>
                </div>
                <div className="text-white text-center">
              <span className="text-white text-5xl lg:text-3xl uppercase font-metal font-normal block text-punch">
                <font style={{verticalAlign: 'inherit'}}>
                  <font style={{verticalAlign: 'inherit'}}>
                    {info.new || 0}
                  </font>
                </font>
              </span>
                  <p className="uppercase mt-3 sm:mt-5 text-base lg:text-lg">
                    <font style={{verticalAlign: 'inherit'}}>
                      <font style={{verticalAlign: 'inherit'}}>
                        Новых Пользователей
                      </font>
                    </font>
                  </p>
                </div>
                <div className="text-white text-center">
              <span className="text-white text-5xl lg:text-3xl uppercase font-metal font-normal block text-primary">
                <font style={{verticalAlign: 'inherit'}}>
                  <font style={{verticalAlign: 'inherit'}}>
                    {info.activ || 0}
                  </font>
                </font>
              </span>
                  <p className="uppercase mt-3 sm:mt-5 text-base lg:text-lg">
                    <font style={{verticalAlign: 'inherit'}}>
                      <font style={{verticalAlign: 'inherit'}}>
                        Активированных за сегодня
                      </font>
                    </font>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Video
