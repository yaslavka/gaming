import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { isValidEmail } from '../../../utils'
import { api } from '../../../api'
import Input from '../../../components/OldInput'
import Loyaut from "../Header/loyaut";
import logos from "../../../assets/icon/arrrow-icon2.webp";
import routes from "../../../constants/routes.constants";
import Footer from "../Footer";

export default function ResetPassword(){
  const [resetPasswordStatus, setResetPasswordStatus] = useState(null)

  const submitResetPasswordForm = ({ email }) => {
    setResetPasswordStatus('pending')
    api
      .resetPassword(email)
      .then((response) => {
        setResetPasswordStatus(response.message)
      })
      .catch(() => {
        setResetPasswordStatus('failed')
      })
  }
  return(
    <>
      <Loyaut/>
      <div className="breadcrumbs flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">Reset Password</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Сброс пароля</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <Formik
          initialValues={{ email: '' }}
          validate={({ email }) => {
            const errors = {}

            if (!isValidEmail(email)) {
              errors.email = "Введите коректный email"
            }

            return errors
          }}
          onSubmit={submitResetPasswordForm}
          >
          {()=>(
            <Form className="flex flex-col max-w-lg mx-auto">
              <Field
                type="email"
                name="email"
                placeholder='email'
                component={Input}
              />
              <div className="single-fild col-span-2">
                <div className="form-btn-wrap flex justify-center w-full mt-16">
                  <button type="submit" className="HashLink form-btn group primary-btn opacity-100 transition-all uppercase">
                    Регистрация
                    <img src={logos} alt={logos} className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                  </button>
                </div>
                {resetPasswordStatus === 'successful' && (<div className="auth__error">Не забудьте проверить папку спам</div>)}
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="container pt-32">
        <div className="gaming-update flex justify-center md:justify-between flex-col md:flex-row items-center bg-no-repeat bg-scroll bg-center bg-cover lg:px-100 px-10 h-300">
          <div>
            <h2
              className="text-white md:text-4xl lg:text-5xl xl:text-title sm:text-3xl text-2xl text-center md:text-left mb-6 md:mb-0 uppercase font-bold leading-9 lg:leading-70">Вспомнили пароль?
            </h2>
            <h2
              className="text-white md:text-4xl lg:text-5xl xl:text-title sm:text-3xl text-2xl text-center md:text-left mb-6 md:mb-0 uppercase font-bold leading-9 lg:leading-70">Нет аккаунта?
            </h2>
          </div>
          <div>
            <Link to={routes.signIn} className="HashLink group primary-btn opacity-100 transition-all">
              Войти
              <img src={logos} alt={logos} className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
            </Link>
            <br/>
            <Link to={routes.signUp} className="HashLink group primary-btn opacity-100 transition-all">
              Регистрация
              <img src={logos} alt={logos} className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
