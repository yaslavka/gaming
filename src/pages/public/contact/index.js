import React, {useRef, useState} from "react";
import Loyaut from "../Header/loyaut";
import email from '../../../assets/icon/email.webp'
import phone from '../../../assets/icon/phone.webp'
import location from '../../../assets/icon/location.webp'
import emailjs from "@emailjs/browser";
import but from '../../../assets/icon/arrrow-icon.webp'
import Footer from "../Footer";

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Loyaut/>
      <div
        className="gamess flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div
            className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">CONTACT
              US</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Связь с нами</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:mb-32 md:mb-20 mb-15">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div
            className="email text-white align-cener bg-no-repeat bg-scroll bg-center bg-cover md:pt-14 md:pb-12 md:px-12 sm:py-14 sm:px-6 py-14 px-10 h-460 pl-15">
            <div className="mb-120 align-center text-left">
              <img src={email} alt="Service Image"/>
            </div>
            <div className="block text-left"><h3
              className="text-white font-exo text-xl md:text-3xl font-bold uppercase mb-4">Email:</h3> <span
              className="text-white"><p className="text-lg leading-9"></p> <a href="mailto:kosmos@gmail.com"
                                                                              className="block mb-2 last:mb-0 text-lg transition-all hover:text-primary">kosmos@gmail.com</a> <a
              href="mailto:kosmosupport24@gmail.com"
              className="block mb-2 last:mb-0 text-lg transition-all hover:text-primary">kosmosupport24@gmail.com</a></span>
            </div>
          </div>
          <div
            className="location text-white align-cener bg-no-repeat bg-scroll bg-center bg-cover md:pt-14 md:pb-12 md:px-12 sm:py-14 sm:px-6 py-14 px-10 h-460 pl-15">
            <div className="mb-120 align-center text-center">
              <img src={location} alt="Service Image"/>
            </div>
            <div className="block text-center"><h3
              className="text-white font-exo text-xl md:text-3xl font-bold uppercase mb-4">Адрес:</h3> <span
              className="text-white"><p className="text-lg leading-9"></p> <a
              className="block mb-2 last:mb-0 text-lg transition-all hover:text-primary"/> <a
              className="block mb-2 last:mb-0 text-lg transition-all hover:text-primary"/>ул. Сущёвский Вал, 9, Москва, 127018</span>
            </div>
          </div>
          <div
            className="phone text-white align-cener bg-no-repeat bg-scroll bg-center bg-cover md:pt-14 md:pb-12 md:px-12 sm:py-14 sm:px-6 py-14 px-10 h-460 pl-15">
            <div className="mb-120 align-center text-right">
              <img src={phone} alt="Service Image"/>
            </div>
            <div className="block text-right"><h3
              className="text-white font-exo text-xl md:text-3xl font-bold uppercase mb-4">Телефон:</h3> <span
              className="text-white"><p className="text-lg leading-9"></p>
              <a href={"+79899868205"}
                 className="block mb-2 last:mb-0 text-lg transition-all hover:text-primary">+79899868205</a></span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="text-center lg:mb-15 md:mb-12 mb-8">
          <h2
            className="text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
            Напишите нам
          </h2>
          <p className="max-w-lg text-gray-100 mx-auto text-base sm:text-lg leading-8 mt-3">
            Опишите свою идею или проблему
          </p>
        </div>
        <form id="contact-form" className="grid sm:gap-x-8 gap-x-4 grid-cols-2" ref={form} onSubmit={sendEmail}>
          <div className="single-fild">
            <input placeholder="Имя" name="name"
                   className="px-6 h-14 mb-6 text-white border-secondary-80 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"/>
          </div>
          <div className="single-fild">
            <input type="email" placeholder="E-mail" name="email"
                   className="px-6 h-14 mb-6 text-white border-secondary-80 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"/>
          </div>
          <div className="single-fild">
            <input placeholder="Телефон" name="phone"
                   className="px-6 h-14 mb-6 text-white border-secondary-80 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"/>
          </div>
          <div className="single-fild">
            <input placeholder="Адрес" name="address"
                   className="px-6 h-14 mb-6 text-white border-secondary-80 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"/>
          </div>
          <div className="single-fild col-span-2">
            <textarea name="message" placeholder="Введите сообщение" spellCheck="false" data-gramm="false"
                      className="px-6 pt-4 h-40 md:h-60 lg:h-72 mb-6 text-white border-secondary-80 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"/>
            <div className="form-btn-wrap flex justify-center w-full mt-16">
              <button type="submit" value="submit" name="submit"
                      className="HashLink form-btn group primary-btn opacity-100 transition-all uppercase">
                Отправить
                <img src={but} alt="Arrow Icon"
                     className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
              </button>
              <p className="form-messege">{done && "Спасибо за обращение ожидайте с вами свяжутся"}</p>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default Contact
