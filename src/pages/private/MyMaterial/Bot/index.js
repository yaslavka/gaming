import React, {useCallback, useEffect, useMemo, useState} from "react";
import NavBar from "../../../../components/layout/Navbar";
import imag from "../../../../assets/images/photo_2022-12-26_22-21-45.png";
import play from "../../../../assets/others/play-btn.webp";
import Footer from "../../../public/Footer";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../../actions/app.actions";
import {toast} from "react-toastify";
import logo from "../../../../assets/icon/arrrow-icon.webp";
import {Field, Form, Formik} from 'formik';
import * as yup from 'yup';
import Input from "../../../../components/Input";
import logos from "../../../../assets/icon/arrrow-icon2.webp";
import ro from "./910 4.png"


const validationSchema = yup.object({
  telegram: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z0-9_.]+$/, 'Имя пользователя не валидно'),
});
function TelegramBot() {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.app.user);
  const profile = useSelector(state => state.app.user);
  const isLoading = useSelector(state => state.app.loadings.changeSocial);
  const PromoUser = useSelector(state => state.app.promocode);
  const handleOnSubmits = useCallback(
    values => {
      console.log(values);
      dispatch(actions.PromoUser(values));
    },
    [dispatch],
  );
  useEffect(() => {
    if (userInfo && userInfo.telegram) {
      handleOnSubmits(userInfo.telegram);
    }
  }, [dispatch, handleOnSubmits, userInfo]);

  const initialValues = useMemo(() => {
    let values = {telegram: ''};
    if (profile) {
      const {myTg} = profile;
      values = {
        ...values,
        telegram: myTg || '',
      };
    }

    return values;
  }, [profile]);

  const handleOnSubmit = useCallback(
    values => {
      dispatch(actions.Promo(values));
    },
    [dispatch],
  );

  const copyRefLinkToClipboard = async () => {
    if (
      PromoUser &&
      `${PromoUser['18']}${PromoUser['19']}${PromoUser['20']}${PromoUser['21']}${PromoUser['22']}${PromoUser['23']}${PromoUser['24']}${PromoUser['25']}`
    ) {
      await navigator.clipboard.writeText(`${PromoUser['18']}${PromoUser['19']}${PromoUser['20']}${PromoUser['21']}${PromoUser['22']}${PromoUser['23']}${PromoUser['24']}${PromoUser['25']}`,
      );
    }
    toast.info('Промо код успешно скопирован');
  };

  return(
    <>
      <NavBar/>
      <div className="breadcrumbs flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">HUB Project</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Телеграм бот</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container relative" style={{textAlignLast: "center"}}>
        <a href={'https://t.me/HUB_projects_bot?start=u1064074167'} className="date text-primary font-bold mb-3">Перейти в бота</a>
        <h2 className="text-white font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10">
          HUB Project
        </h2>
        <div className="content-details">
          <div className="description mt-6">
            <p className="leading-8">– уникальный бот Телеграмм, созданный
              для того, чтобы Вы могли собрать все свои проекты в
              одном месте, собирать подписчиков, совершать рассылки,
              а также участвовать в крутой партнерской программе. </p>
            <p className="leading-8">
              Кому будет полезен бот
              HUB projects?
              Лидерам любых сетевых проектов и любых других направлений
              • Новичкам, которые хотят зарабатывать в сетевых проектах
              • Тем, кто хочет объединить все проекты, в которых он участвует в
              одном месте
              • Тем, кто не умеет работать с трафиком, но хочет получать
              подписчиков и рефералов в свои проекты
              • Тем, кто не хочет пропускать важную информацию от своих
              наставников, получать её в одном месте и сразу от всех
              • Тем, кто хочет создать себе дополнительный источник дохода
              • Абсолютно любому человеку, которому нужна «визитка» в
              Телеграм, где бы он смог разместить всю информацию о своих
              направлениях деятельности
            </p>
            <p className="leading-8">
              Бот HUB projects – это универсальный инструмент,
              который будет не только эффективным помощником
              в любом проекте, но и поможет создать
              дополнительный источник дохода!
            </p>
          </div>
          <div className="gameslide my-15">
            <div className="swiper-container swiper swiper-container-initialized swiper-container-horizontal">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active">
                  <div className="relative">
                    <img src={ro} className="sm:h-full h-64 w-full object-cover" alt="" style={{width: '100%'}}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                        <h3 className="text-white font-exo font-bold uppercase text-base sm:text-xl md:text-2xl">
                          <div
                          style={{verticalAlign: 'inherit'}}>
                            <div style={{verticalAlign: 'inherit'}}>Обзор</div></div></h3>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              {open ?
                <div
                  onClick={()=>{setOpen(false)}}
                  className="cool-lightbox cool-lightbox--can-zoom cool-lightbox--thumbs-right"
                  style={{zIndex: '9999', backgroundColor: 'rgba(30, 30, 30, 0.9)'}}>
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
                          <iframe src="https://www.youtube.com/embed/mox7kDAHLZo?autoplay=1"
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
          <div className="gameslide my-15">
            {PromoUser && (
              <div className="text-center">
                <h2
                  className="text-white font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10">
                  Промо код: {PromoUser['18']}
                  {PromoUser['19']}
                  {PromoUser['20']}
                  {PromoUser['21']}
                  {PromoUser['22']}
                  {PromoUser['23']}
                  {PromoUser['24']}
                  {PromoUser['25']}
                </h2>
                <div className="single-fild col-span-2 my-15">
                  <div className="form-btn-wrap flex justify-center w-full mt-16">
                    <button onClick={copyRefLinkToClipboard}
                      className="bg-no-repeat HashLink form-btn group primary-btn opacity-100 transition-all uppercase">
                      скопировать
                      <img src={logos} alt={logos} className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                    </button>
                  </div>
                </div>
              </div>
            )}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleOnSubmit}
              enableReinitialize>
              {({isValid, dirty}) => (
                <>
                 <Form className="flex flex-col max-w-lg mx-auto">
                   <Field
                     type="text"
                     name="telegram"
                     placeholder='Введите логин Телеграмм'
                     component={Input}
                   />
                   <div className="single-fild col-span-2">
                     <div className="form-btn-wrap flex justify-center w-full mt-16">
                       <button
                         disabled={!(isValid && dirty) || isLoading}
                         loading={isLoading}
                         block
                         type="submit"
                         className="bg-no-repeat HashLink form-btn group primary-btn opacity-100 transition-all uppercase">
                         По-ть промо
                         <img src={logos} alt={logos} className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                       </button>
                     </div>
                   </div>
                 </Form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default TelegramBot
