import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import NavBar from "../../../components/layout/Navbar";
import avatar from '../../../assets/icon/avatar.png'
import avata from '../../../assets/icon/Av.png'
import Footer from "../../public/Footer";
import imag from "../../../assets/bg/gaming-bg1.webp";
import play from "../../../assets/others/play-btn.webp";
import { toast } from 'react-toastify'
import {api} from "../../../api";
import * as actions from "../../../actions/app.actions";
import { Formik, Form, Field } from 'formik'
import {formatter, isValidImageType} from "../../../utils";
import logo from "../../../assets/icon/arrrow-icon.webp";
const AutoSubmit = ({ initialValues, values, submitForm }) => {
  useEffect(() => {
    if (initialValues !== values) {
      submitForm()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])
  return null
}

function Dashboard(){
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.app.user)
  const [open, setOpen] = useState(false)
  const copyRefLinkToClipboard = async () => {
    if (userInfo && `https://kosmos-lif.host/sign-up?ref=${userInfo.username}`) {
      navigator.clipboard.writeText(`https://kosmos-lif.host/sign-up?ref=${userInfo.username}`).then(() => {
        toast.info(`Ссылка успешно скопирована`)
      })
    }
  }
  const submitAvatarForm = ({ avatar }) => {
    //console.log(avatar)
    api
      .updateAvatar(avatar)
      .then(() => {
        api
          .getUserInfo()
          .then((response) => {
            dispatch(actions.userInfoSuccess(response))
          })
          .catch(() => {})
      })
      .catch(() => {})
  }
  return(
    <>
      <NavBar/>
      <div className="breadcrumbs flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">Dashboard</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Кабинет</span></li>
            </ul>
          </div>
        </div>
      </div>
      {userInfo && (
        <div className="container flex items-center space-x-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="sm:mr-12 mr-0 text-center relative">
              {userInfo.avatar
                ?<>
                  <img className={"avs"}
                       src={
                         `${process.env.REACT_APP_BASE_URL}/user/${userInfo.avatar}`
                       }
                       alt={userInfo.avatar}
                  />
                  <img src={avata} style={{position: "absolute", }} className={"av"} alt={userInfo.avatar}/>
                </>:<>
                  <img src={avata} className={"avata"} alt={avata}/>
                  <img className={"avss"}
                       src={avatar}
                       alt={avatar}
                  />
                </>
              }
            </div>
            <br/>
            <br/>
            <br/>
            <Formik
              initialValues={{
                avatar: null,
              }}
              validate={({ avatar }) => {
                const errors = {}

                if (avatar.size / 1024 / 1024 >= 10) {
                  errors.avatar = 'Размер изображения превышает 10Mb'
                }

                if (!isValidImageType(avatar.type)) {
                  errors.avatar = 'Неверный формат изображения'
                }

                return errors
              }}
              onSubmit={submitAvatarForm}
            >
              {(props) => (
                <Form>
                  <Field>
                    {({ form }) => (
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={({ target: { files } }) => {
                          if (files && files[0]) {
                            const image = files[0]
                            form.setFieldValue('avatar', image)
                          }
                        }}
                      />
                    )}
                  </Field>
                  {/* eslint-disable-next-line react/prop-types */}
                  {props.errors && (
                    // eslint-disable-next-line react/prop-types
                    <p>{props.errors.avatar}</p>
                  )}
                  <AutoSubmit {...props} />
                </Form>
              )}
            </Formik>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="about_title lg:mb-6 mb-4">
              <h5
                className="text-primary text-xl uppercase font-bold pl-24 lg:mb-6 mb-4 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:-translate-y-1/2 before:transform before:h-1 before:bg-primary before:w-16">
                Мой аккаунт
              </h5>
              <h2
                className="text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl">
                {userInfo.first_name || '-'} {userInfo.last_name || '-'}
             </h2>
            </div>
            <ul className="about_desc mb-10 flex mt-4">
              <li className="mr-4 last:mr-0">Мой баланс:{' '}
                {formatter.format(userInfo.balanceCrypto.RUR || 0).replace('₽', '₽') ? (
                  <div>
                    {formatter.format(userInfo.balanceCrypto.RUR|| 0).replace('₽', '₽')}
                  </div>
                ) : (
                  '-'
                )}
              </li>
              <li className="mr-4 last:mr-0">Наставник:{' '}
                {userInfo.referal ? <div>{userInfo.referal.username}</div> : '-'}
              </li>
              <li className="mr-4 last:mr-0">Телефон:{' '}
                {userInfo.phone ? (
                  <a
                    href={`https://t.me/${userInfo.phone}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {userInfo.phone}
                  </a>
                ) : (
                  'Информация отсутствует'
                )}
              </li>
            </ul>
            <p>Обомне</p>
            <p>{userInfo.description || 'Информация отсутствует'}</p>
          </div>
        </div>
      )}
      <div className="container pt-32">
        <div className="gaming-update flex justify-center md:justify-between flex-col md:flex-row items-center bg-no-repeat bg-scroll bg-center bg-cover lg:px-100 px-10 h-300">
          <div>
            <h2 className="text-white md:text-4xl lg:text-5xl xl:text-title sm:text-3xl text-2xl text-center md:text-left mb-6 md:mb-0 uppercase font-bold leading-9 lg:leading-70">
              <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit', fontSize: 30}}>Ваша реферальная ссылка</font></font>
              <br/><font style={{verticalAlign: 'inherit'}}><font style={{fontSize: 10}}>Скопируйте вашу реферальную ссылку и опубликуйте ее в социальных сетях с интересным постом, чтобы привлечь новых партнёров в свою команду.</font></font></h2>
          </div>
          <div>
            <div role={"button"} className="arrrow-icon group primary-btn opacity-100 transition-all" onClick={copyRefLinkToClipboard}>
              <font style={{verticalAlign: 'inherit'}}>
                <font style={{verticalAlign: 'inherit'}}>
                  Скопировать
                </font>
              </font>
              <img src={logo} alt="Значок стрелки" className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
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
                      style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Краткий обзор</font></font></h3>
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

        </div>
      </section>
      {/*<section className="testimonial-section">*/}
      {/*  <div className="otzyv relative pt-120 pb-120 before:content-[''] before:absolute before:invisible sm:before:visible before:right-0 lg:before:h-3 before:h-2 before:w-1/3 before:bg-primary before:top-40 lg:before:top-48">*/}
      {/*    <div className="container relative">*/}
      {/*      <h2*/}
      {/*        className="font-exo mb-15 text-white text-3xl sm:text-4xl lg:text-title font-bold uppercase leading-8 sm:leading-10 lg:leading-70 text-center sm:text-left">*/}
      {/*        Отзывы <br/> Наших <span className="text-primary">Партнеров. </span></h2>*/}
      {/*      <div className="swiper-container swiper swiper-container-initialized swiper-container-horizontal">*/}
      {/*        <div className="swiper-wrapper">*/}
      {/*          <div className="swiper-slide swiper-slide-active">*/}
      {/*            <div className="otzy flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center bg-cover py-10 px-8 md:py-55 md:px-16 lg:py-73 lg:px-24 rounded-50">*/}
      {/*              <div className="w-28 sm:w-230 lg:w-260 flex-shrink-0">*/}
      {/*                <img src={avatar} alt={''}/>*/}
      {/*              </div>*/}
      {/*              <div*/}
      {/*                className="flex-grow text-center md:text-left lg:text-left xl:text-left 2xl:text-left mt-8 md:mt-0 md:ml-14">*/}
      {/*                <p className="text-base lg:text-xl lg:leading-9 leading-loose">*/}
      {/*                  It is a long established fact that a reader will be distracted the readable content of page when*/}
      {/*                  looking at it layout the point using lorem Ipsum is that it has a more-or-less normal*/}
      {/*                  distribution lette as opposed to using making it look like readable english, many desktop*/}
      {/*                  publishing packages and web page now editors.*/}
      {/*                </p>*/}
      {/*                <div className="mt-5"><h3 className="font-bold uppercase text-white text-2xl">Randolph*/}
      {/*                  Frazier</h3> <span className="text-primary mt-5 block">Top Rated Gamer</span></div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <Footer/>
    </>
  )
}
export default Dashboard
