import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import routes from '../../../constants/routes.constants'
import * as actions from '../../../actions/auth.actions'
import { api } from '../../../api'
import { isValidEmail, isValidPassword, isValidUsername, isValidPhone } from '../../../utils'
import InputPhone from '../../../components/InputPhone'
import Input from '../../../components/Input'
import Loyaut from "../Header/loyaut";
import {Spinner} from "react-bootstrap";
import avatar from '../../../assets/icon/avatar.png'
import Checkbox from '../../../components/Checkbox'
import logos from "../../../assets/icon/arrrow-icon2.webp";
import Footer from "../Footer";

function SignUp({ location, children}){
  const dispatch = useDispatch()
  const inviterLoading = useSelector((state) => state.auth.loadings.inviter)
  const inviter = useSelector((state) => state.auth.inviter)
  const [signUpStatus, setSignUpStatus] = useState(null)
  const [serverError, setServerError] = useState(null)

  const referralName = useMemo(() => {
    let referral = ''
    if (location) {
      // eslint-disable-next-line react/prop-types
      const searchParams = new URLSearchParams(location.search)
      const ref = searchParams.get('ref')
      if (ref) {
        referral = ref
      }
    }

    return referral
  }, [location])

  const initialValues = useMemo(
    () => ({
      phone: '',
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      referral: referralName,
      acceptPrivacyPolicy: false,
    }),
    [referralName],
  )

  const getInviterByName = useCallback(
    (name) => {
      dispatch(actions.inviter(name))
    },
    [dispatch],
  )

  useEffect(() => {
    if (referralName) {
      getInviterByName(referralName)
    }
    return () => {
      dispatch(actions.clearInviter())
    }
  }, [dispatch, referralName, getInviterByName])

  const handleOnBlurReferralField = (event) => {
    const inviterName = event.target.value
    if (inviterName) {
      getInviterByName(inviterName)
    } else {
      dispatch(actions.clearInviter())
    }
  }

  const handleOnSubmit = ({ acceptPrivacyPolicy, repeatPassword, ...finalUserInfo }) => {
    setSignUpStatus('progress')
    setServerError(null)
    api
      .signUp(finalUserInfo)
      .then(() => {
        setSignUpStatus('successful')
      })
      .catch((error) => {
        setServerError(error.message)
        setSignUpStatus('failed')
      })
  }

  // TODO: refactoring
  if (signUpStatus === 'successful') {
    return <Redirect to={routes.signIn} />
  }
  return (
    <>
      <Loyaut/>
      <div className="breadcrumbs flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">Sign-Up</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Регистрация</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <Formik
          initialValues={initialValues}
          validate={
            ({
               phone,
               first_name,
               last_name,
               username,
               email,
               password,
               repeatPassword,
               acceptPrivacyPolicy,
             }) => {
              const errors = {}

              if (!first_name.trim()) {
                errors.first_name = 'Обязательно к заполнению'
              }

              if (!last_name.trim()) {
                errors.last_name = 'Обязательно к заполнению'
              }

              if (!isValidPhone(phone)) {
                errors.phone = 'Обязательно к заполнению'
              }

              if (!isValidEmail(email)) {
                errors.email = 'Обязательно к заполнению'
              }

              if (!isValidUsername(username)) {
                errors.username = 'Обязательно к заполнению'
              }

              if (!isValidPassword(password)) {
                errors.password = 'Обязательно к заполнению'
              }

              if (repeatPassword !== password) {
                errors.repeatPassword = 'Обязательно к заполнению'
              }

              if (!acceptPrivacyPolicy) {
                errors.acceptPrivacyPolicy = 'Обязательно к заполнению'
              }

              return errors
            }}
          onSubmit={handleOnSubmit}>
          {()=>(
            <Form id="contact-form" className="flex flex-col max-w-lg mx-auto">
              <Spinner size="sm" isLoading={inviterLoading} style={{textAlignLast: "center"}}>
                {inviter && (
                  <>
                    <div className="inviter">
                      <div className="inviter__avatar">
                        <img
                          src={
                            inviter.avatar
                              ? `${process.env.REACT_APP_BASE_URL}/user/${inviter.avatar}`
                              : avatar
                          }
                          alt={`${inviter.first_name} ${inviter.last_name}`}
                        />
                      </div>

                    </div>
                    <div className="inviter__info">
                      <div className="inviter__name">{`${inviter.first_name} ${inviter.last_name}`}</div>
                    </div>
                  </>
                )}
              </Spinner>
              <Field
                type="text"
                name="referral"
                placeholder='Введите логин вашего пригласителя'
                onBlur={handleOnBlurReferralField}
                component={Input}
              />
              <Field
                type="text" name="first_name"
                placeholder='Введите Имя'
                component={Input}
              />
              <Field
                type="text"
                name="last_name"
                placeholder='Введите Фамилию'
                component={Input}
              />
              <Field
                name="phone"
                placeholder='Введите Телефон'
                component={InputPhone}
              />
              <Field
                type="text" name="email"
                placeholder='Введите email'
                component={Input}
              />
              <Field
                type="text"
                name="username"
                placeholder='Введите Логин'
                component={Input}
              />
              <Field
                type="password"
                name="password"
                placeholder='Введите Пароль'
                component={Input}
              />
              <Field
                type="password"
                name="repeatPassword"
                placeholder='Введите Повторите пароль'
                component={Input}
              />
              <Field
                type="checkbox"
                name="acceptPrivacyPolicy"
                label='Соглашаюсь с правилами'
                component={Checkbox}
              />
              <div className="single-fild col-span-2">
                <div className="form-btn-wrap flex justify-center w-full mt-16">
                  <button type="submit" className="HashLink form-btn group primary-btn opacity-100 transition-all uppercase">
                    Регистрация
                    <img src={logos} alt={logos} className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                  </button>
                </div>
                {serverError && <div className="auth__error">{serverError}</div>}
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {children}
      <div className="container pt-32">
        <div className="gaming-update flex justify-center md:justify-between flex-col md:flex-row items-center bg-no-repeat bg-scroll bg-center bg-cover lg:px-100 px-10 h-300">
          <div>
            <h2
            className="text-white md:text-4xl lg:text-5xl xl:text-title sm:text-3xl text-2xl text-center md:text-left mb-6 md:mb-0 uppercase font-bold leading-9 lg:leading-70">Уже есть Аккаунт?
            </h2>
          </div>
          <div>
            <Link to={routes.signIn} className="HashLink group primary-btn opacity-100 transition-all">
              Войти
              <img src={logos} alt={logos} className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>

    </>
  )
}
export default SignUp
