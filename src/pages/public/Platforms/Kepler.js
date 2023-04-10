import React from "react";
import Loyaut from "../Header/loyaut";
import epler from '../../../assets/gamepic/1.png'
import kep from '../../../assets/dockument/kepler.pdf'
import Footer from "../Footer";
function Kepler(){
  return(
    <>
      <Loyaut/>
      <div className="gamess flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">Kepler Details</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Kepler</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container relative">
        <h2
          className="text-white font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10">Платформа - Kepler стоимость площадки 600 р.</h2>
        <div className="content-details">
          <div className="description mt-6">
            <p className="leading-8">
              Мультиматричная платформа Kepler разработана
              в качестве доступного инструмента для заработка в сети
              Интернет. Наша платформа объединяет в себе различные
              варианты матричного маркетинга, чтобы каждый партнер
              мог выбрать для себя наиболее выгодные и комфортные
              условия работы. Доходность платформы Kepler
              обеспечена самым доступным, надежным и эффективным
              механизмом - сетевой моделью развития бизнеса.
            </p>
            <p className="leading-8">
              В основе создания мультиматричной платформы Kepler лежит
              многолетний опыт работы основателей проекта в сетевой
              индустрии. Kepler не только вобрал в себя все достоинства
              известных сетевых проектов, но и обрел собственную
              уникальность. Уникальной характеристикой нашего проекта
              является объединение всех партнерских и матричных программ
              на одной площадке.
              <br/>
              <br/>
              <br/>
              Мультиматричная платформа Kepler – целостная экосистема,
              состоящая из различных матриц с уникальными маркетинговыми
              программами.
            </p>
          </div>
          <div className="gameslide my-15">
            <div className="swiper-container swiper swiper-container-initialized swiper-container-horizontal">
              <div className="swiper-wrapper" style={{transform: "translate3d(0px, 0px, 0px); transition-duration: 0ms;"}}>
                <div className="swiper-slide swiper-slide-active">
                  <a className="relative" role={"button"} href={kep} download={'Kepler'}>
                    Скачать Маркетинг
                    <img src={epler} className="sm:h-full h-64 w-full object-cover" alt={''}/>
                  </a>
                </div>
              </div>
              <span className="swiper-notification" aria-live="assertive" aria-atomic="true"/>
            </div>
          </div>
          <div className="description mt-6">
            <h3 className="text-2xl text-white uppercase font-bold mb-5"> Миссия площадки Kepler - обеспечение доступного
              заработка в сети Интернет
              без ограничений.</h3>
            <p className="leading-8">
              платформа Kepler обеспечивает своих
              партнеров:<br/> Быстрым и надежным заработком;

              Разнообразными матричными маркетингами;

              Карьерной системой квалификаций и системой премирования;

              Брендированием личных кабинетов пользователя и его команды под
              собственный уникальный стиль;

              Лотерейной площадкой с призами и различными розыгрышами;

              Общением со всеми партнерами Kepler через личный кабинет площадки;

              Обучением в школе сетевых предпринимателей для новичков

              и продвинутых сетевиков.
            </p>
            <p className="leading-8">
              Получение денежных вознаграждений зависит только от закрытия ваших
              матриц, нет никаких дополнительных условий и ограничений. Выполняется
              условие (закрытие) матрицы - получаете доход.
              <br/> Быстрым и надежным заработком;

              Заполнение матрицы происходит автоматически, слева - направо сверху -
              вниз. Это позволяет не оставлять незакрытые места (дыры) в матрицах, а
              значит обеспечивать общее движение.<br/>
              Реферальная система Kepler – по мере продвижения в матрице Вам
              начисляется бонус за партнёров, прошедших по вашей реферальной
              ссылке,
            </p>
          </div>
          <div className="description mt-6">
            <h3 className="text-2xl text-white uppercase font-bold mb-5"> Правила маркетинга Kepler</h3>
            <p className="leading-8">
              Заполнение маркетинга происходит слева-направо, сверху-вниз;
              <br/>При заполнении матриц сразу идёт распределение денег по маркетингу.
              В первую очередь деньги идут на клонов, затем на реферальную
              программу, потом на выплаты и в последнюю очередь накопление на
              следующую матрицу;
              <br/>
              Клоны двигаются и зарабатывают точно так же, как и основное место;

              Все переходы и заполнение матриц происходят автоматически.
            </p>
            <p className="leading-8">
              Клоны в структуре Kepler
              <br/> В структуре Kepler предусмотрено автоматическое создание дополнительных мест –
              клонов. Цель такого подхода - приносить дополнительный доход и помогать
              партнерам закрывать матрицы.
              <br/>
              Клон - это своеобразный прототип вас, вашего купленного места в матрице.
              <br/>
              Клоны появляются сразу и автоматически после закрытия места, согласно
              маркетингу матричного проекта. Они распределяются в первой матрице слева –
              направо, сверху – вниз, начиная от главного вашего аккаунта и далее вниз в структуру
              под вами.
              <br/>
              Клоны имеют все функции основного аккаунта: двигаются по матрицам, приносят
              доход, создают дополнительные клоны. Ваш куратор также получает с них
              реферальные вознаграждения.
              <br/>
              В восьмой, последней матрице, после закрытия, вы реинвестируете под вашу
              структуру, по принципу расстановки клонов.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default Kepler
