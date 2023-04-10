import React, {useEffect, useState} from 'react'
import { Row, Col, Container } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import MyViewElements from '../../../components/MyViewElements/MyViewElements'
import NavBar from "../../../components/layout/Navbar";
import * as actions from "../../../actions/startrek.actions";
import Summary from "./Summary";
import Footer from "../../public/Footer";
import Statistics from "./Statistics";
import r from "../../../constants/routes.constants";
import logos from "../../../assets/icon/arrrow-icon2.webp";
import BuyModal from "./Buy";

function MilkyWay(){
  const dispatch = useDispatch()
  const statistics = useSelector((state) => state.startrek.statistics)
  const [op, setOp] = useState(false)

  useEffect(() => {
    dispatch(actions.startrekStatistics())
    dispatch(actions.startrekResetTimer())
  }, [dispatch])

  return(
    <>
      <NavBar/>
      <div className="breadcrumbs flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">Milky Way</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Milky Way</span></li>
            </ul>
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col xl={3}>

          </Col>
          <div className="col-8">
            <MyViewElements element={
              <Summary/>
            }/>
            <Statistics />
            {op && (
              <BuyModal op={op} setOp={setOp}/>
            )}
            <div style={{textAlignLast: "center"}}>
              <Link to={r.milkywayPlanets} className="link-blue HashLink group primary-btn opacity-100 transition-all">
                Мои места
                <img src={logos} alt={logos} className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
              </Link>
              {statistics?.myPlanet  < 0
              ?
                <button onClick={() => {setOp(true)}} className="link-blue HashLink group primary-btn opacity-100 transition-all">
                  Активировать
                  <img src={logos} alt={logos} className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                </button>
                :
                <button onClick={() => {setOp(true)}} className="link-blue HashLink group primary-btn opacity-100 transition-all">
                  купить
                  <img src={logos} alt={logos} className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                </button>
              }
              {/*<Link to={r.milkywayStatistic} className="link-blue HashLink group primary-btn opacity-100 transition-all">*/}
              {/*  статистика*/}
              {/*  <img src={logos} alt={logos} className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>*/}
              {/*</Link>*/}
            </div>
          </div>
          <Footer/>
        </Row>
      </Container>
    </>
  )
}
export default MilkyWay
