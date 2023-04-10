import React from "react";
import Loyaut from "../Header/loyaut";
import epler from '../../../assets/gamepic/3.png'
import kep from '../../../assets/dockument/Aida.pdf'
import Footer from "../Footer";
function Aida(){
  return(
    <>
      <Loyaut/>
      <div className="gamess flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">Aida Details</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Aida</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container relative">
        <h2
          className="text-white font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10">Платформа - Aida стоимость площадки 60000 р.</h2>
        <div className="content-details">
          <div className="description mt-6">
            <p className="leading-8">
              Начало новой эпохи сетевого бизнеса
            </p>
            <p className="leading-8">
              Мультиматричная платформа KOSMOS запускает
              инновационный проект в сетевой индустрии - Aida.<br/> Проект призван изменить устоявшиеся правила
              сетевого бизнеса и запустить новую эпоху матричных
              маркетингов.

              <br/>
              Aida - первая в мире матрица с ускоренным
              маркетингом, которая позволит предпринимателям
              ускорить получить желаеммое.
              <br/>
              <br/>
              Цель Aida как проекта
              <br/>
              Лидеры мультиматричной платформы KOSMOS долгое
              время изучали рынок сетевого бизнеса и пришли к
              выводу, что новички сталкиваются всегда с трудностью
              понимания маркетинга. Большинство проектов
              предлагают сложные механизмы работы и не каждый
              готов проверить их на собственном опыте.

              <br/>
              Цель Aida – сделать заработок в сетевой
              индустрии простым, понятным и доступным для каждого.
              <br/>
              Уникальность проекта Aida
              <br/>
              Уникальность Aida заключается в симбиозе линейного и
              матричного маркетингов. Объединение двух отличных друг от
              друга стратегий, привело к созданию принципиально новой
              системы скоренного маркетинга.
            </p>
          </div>
          <div className="gameslide my-15">
            <div className="swiper-container swiper swiper-container-initialized swiper-container-horizontal">
              <div className="swiper-wrapper" style={{transform: "translate3d(0px, 0px, 0px); transition-duration: 0ms;"}}>
                <div className="swiper-slide swiper-slide-active">
                  <a className="relative" role={"button"} href={kep} download={'Kepler'}>
                    Скачать Маркетинг
                    <img src={epler} className="sm:h-full h-64 w-full object-cover" alt={''} style={{width: '100%'}}/>
                  </a>
                </div>
              </div>
              <span className="swiper-notification" aria-live="assertive" aria-atomic="true"/>
            </div>
          </div>
          <div className="description mt-6">
            <h3 className="text-2xl text-white uppercase font-bold mb-5">Преимущества Aida</h3>
            <p className="leading-8">
              Быстрое закрытие столов, высокий доход, всего 3 уровня.
              <br/>
              Достаточно купить место в матрице за 60000 р., чтобы получить 310000 р.
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
            <h3 className="text-2xl text-white uppercase font-bold mb-5"> Правила маркетинга Aida</h3>
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
              Клоны в структуре Aida
              <br/> В структуре Aida предусмотрено автоматическое создание дополнительных мест –
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
export default Aida
