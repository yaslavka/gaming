import React, { useEffect, useState, useMemo, useCallback  } from 'react'
import { api } from '../../../../api'
import imag from "../../../../assets/bg/gaming-bg1.webp";
import play from "../../../../assets/others/play-btn.webp";
import { Formik, Form, Field } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import * as yup from 'yup'
import * as actions from '../../../../actions/app.actions'
import Input from '../../../../components/Input'
import logos from "../../../../assets/icon/arrrow-icon2.webp";
import {formatter} from "../../../../utils";

const validationSchema = yup.object({
  username: yup.string().required('Необходимо заполнить это поле'),
  income: yup.number().required('Необходимо заполнить это поле').min(100,'минимальная сумма 100р'),
})


export default function NewsItemPage({ match: { params } }){
  const [newsInfo, setNewsInfo] = useState(null)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.app.stavki)
  const [info, setInfo] = useState(null);
  const initialValues = useMemo(() => {
    let values = { username: '', income: '' }
    if (profile) {
      const { username, income } = profile
      values = { ...values, username, income }
    }

    return values
  }, [profile])
  const handleOnSubmit = useCallback(
    (values) => dispatch(actions.stavki(values)),
    [dispatch],
  )
useEffect(()=>{
  api.Stavki().then((response)=>{
    setInfo(response)
  })
    .catch(()=>{})
},[])

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (params.id) {
      api
        // eslint-disable-next-line react/prop-types
        .getNewsById(params.id)
        .then((response) => {
          setNewsInfo(response)
        })
        .catch(() => {})
    }
    // eslint-disable-next-line react/prop-types
  }, [params.id])
  return(
    <div className="details">
      {newsInfo && (
        <>
          <div className="container">
            <div className="grid mb-20">
              <div className="single-grid">
                <div className="post-top-area max-w-4xl m-auto text-center mb-16">
                  <ul className="flex mb-8 justify-center text-white">
                    <li className="relative pr-8 content-after after:bg-primary after:absolute after:top-3 after:right-4 after:w-1 after:h-1 after:rounded-full">
                      Планируемая Дата
                    </li>
                    <li>
                      {newsInfo.date}
                    </li>
                  </ul>
                  <h2 className="text-white font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10">
                    {newsInfo.ruTitle}
                  </h2>
                </div>
                <div className="text-center">
                  <img src={`${process.env.REACT_APP_BASE_URL}/user/${newsInfo.ruHeadline}`} alt={''}/>
                </div>
                <div className="content max-w-4xl m-auto mt-20">
                  <div className="description">
                    <h4 className="text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase transition-all mb-2 sm:mb-5 leading-9">
                      {newsInfo.ruText6}
                    </h4>
                    <p className="leading-8">
                      {newsInfo.ruDescription}
                    </p>
                    <p className="leading-8">
                      {newsInfo.enHeadline}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                    name="username"
                    placeholder='На кого ставите?'
                    component={Input}
                  />
                  <Field
                    type="text"
                    name="income"
                    placeholder='Укажите сумму ставки минимум 100р'
                    component={Input}
                  />
                  <div className="single-fild col-span-2">
                    <div className="form-btn-wrap flex justify-center w-full ">
                      <button
                        disabled={!(isValid && dirty)}
                        type="submit"
                        className="bg-no-repeat HashLink form-btn group primary-btn opacity-100 transition-all uppercase">
                        Поставить
                        <img src={logos} alt={logos} className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                      </button>
                    </div>
                  </div>
                </Form>
              </>
            )}
          </Formik>
          {info && (
            <div className="container mt-32 pb-32" >
              <div>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-9 stavki">
                  <div className="text-white text-center">
                    {formatter.format(info[0]?.income || 0).replace('₽', '₽') ? (
                      <span className="text-white text-5xl lg:text-6xl uppercase font-metal font-normal block text-yellow">
                              {formatter.format(info[0]?.income|| 0).replace('₽', '₽')}
                            </span>
                    ) : (
                      <span className="text-white text-5xl lg:text-6xl uppercase font-metal font-normal block text-yellow">
                        0₽
                      </span>
                    )}
                    <p className="uppercase mt-3 sm:mt-5 text-base lg:text-lg">
                      Поставили на победу
                    </p>
                    <p className="uppercase mt-3 sm:mt-5 text-base lg:text-lg">{info[0]?.username}</p>
                  </div>
                  <div className="text-white text-center">
                    {formatter.format(info[1]?.income || 0).replace('₽', '₽') ? (
                      <span className="text-white text-5xl lg:text-6xl uppercase font-metal font-normal block text-punch">
                              {formatter.format(info[1]?.income|| 0).replace('₽', '₽')}
                            </span>
                    ) : (
                      <span className="text-white text-5xl lg:text-6xl uppercase font-metal font-normal block text-punch">
                        0₽
                      </span>
                    )}
                    <p className="uppercase mt-3 sm:mt-5 text-base lg:text-lg">
                      Поставили на победу
                    </p>
                    <p className="uppercase mt-3 sm:mt-5 text-base lg:text-lg">{info[1]?.username}</p>
                  </div>
                  <div className="text-white text-center">
                    {formatter.format((+info[0]?.income) + (+info[1]?.income) || 0).replace('₽', '₽') ? (
                      <span className="text-white text-5xl lg:text-6xl uppercase font-metal font-normal block text-primary">
                              {formatter.format((+info[0]?.income) + (+info[1]?.income)  || 0).replace('₽', '₽')}
                            </span>
                    ) : (
                      <span className="text-white text-5xl lg:text-6xl uppercase font-metal font-normal block text-primary">
                        0₽
                      </span>
                    )}
                    <p className="uppercase mt-3 sm:mt-5 text-base lg:text-lg">
                      Итоговая сумма ставок
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <section className="live-section mt-16">
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
                          Подробнее тут
                        </h3>
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
                          <iframe src={newsInfo.enDescription}
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
        </>
      )}
    </div>
  )
}
