import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Row, Col, Container } from 'reactstrap'
import isEmpty from 'lodash-es/isEmpty'
import { declOfNum } from '../../../../utils'
import * as actions from '../../../../actions/startrek.actions'
import NavBar from "../../../../components/layout/Navbar";
import {useTranslation} from "react-i18next";
import Footer from "../../../public/Footer";
import Update from "../Update";

function MyPlanets(){
  const { t } = useTranslation('common');
  const dispatch = useDispatch()
  const list = useSelector((state) => state.startrek.list)
  const selected = useSelector((state) => state.startrek.selected)
  const isLoading = useSelector((state) => state.startrek.loadings.list)
  const isUpdateLoading = useSelector((state) => state.startrek.loadings.update)

  useEffect(() => {
    dispatch(actions.startrekPlanets())
  }, [dispatch])

  const handleSelectAllOnPage = () => {
    dispatch(actions.toggleAllPlanetOnPage())
  }


  useEffect(()=>{
    const data = ''
    console.log(data)
  },[])


  const [solaryList, setSolaryList]  = useState([{count: 0, namePlanet: 'Mercury', classItem:['mercury-line-1'], classPlanet: ['mercury active-planet'], classDescr: ['mercury-descr planet-descr'], descr: 'mercury'},
    {count: 1, namePlanet: 'Venus', classItem:['venus-line-1'], classPlanet: ['venus'], classDescr: ['venus-descr planet-descr'], descr: 'venus'},
    {count: 2, namePlanet: 'Earth', classItem:['earth-line-1'], classPlanet: ['earth'], classDescr: ['earth-descr planet-descr'], descr: 'earth'},
    {count: 3, namePlanet: 'Mars', classItem:['mars-line-1'], classPlanet: ['mars'], classDescr: ['mars-descr planet-descr'], descr: 'mars'},
    {count: 4, namePlanet: 'Jupiter', classItem:['jupiter-line-1'], classPlanet: ['jupiter'], classDescr: ['jupiter-descr planet-descr'], descr: 'jupiter'},
    {count: 5, namePlanet: 'Saturn', classItem:['saturn-line-1'], classPlanet: ['saturn'], classDescr: ['saturn-descr planet-descr'], descr: 'saturn'},
    {count: 6, namePlanet: 'Urans', classItem:['urans-line-1'], classPlanet: ['urans'], classDescr: ['urans-descr planet-descr'], descr: 'urans'},
    {count: 7, namePlanet: 'Neptune', classItem:['neptune-line-1'], classPlanet: ['neptune'], classDescr: ['neptune-descr planet-descr'], descr: 'neptune'}
  ])


  const [activePlanet, setActivePlanet] = useState(0)

  const [infoPlanet, setInfoPlanet] = useState({namePlanet: 'Mercury', frozen: '', comets: '', dateCreate: '', sum: '', id: ''})
  const [viewSolary, setViewSolary] = useState('')
  useEffect(()=>{
    setViewSolary(solaryList.map((el,i)=>list[i]!==undefined?el:'').filter(e=>e))

    if(list[activePlanet]!==undefined) {
      setInfoPlanet({...infoPlanet, id: list[activePlanet].id, level: list[activePlanet].level, dateCreate: list[activePlanet].createDate, sum: list[activePlanet].sum})
    }

  },[list, activePlanet])
  console.log(list)
  let handleOnSetPlanetForUpdate = () => dispatch(actions.setPlanetForUpdate(infoPlanet.id))
  const [op, setOp]=useState(false)
  return(
    <>
      <NavBar/>
      <div className="breadcrumbs flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">My Planets</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Моя система</span></li>
            </ul>
          </div>
        </div>
      </div>
      <Container className="root-page">
        <Row>
          <Col xl={8}>
            <div className="root-page-header">
              <div className="solar-list-info">
                <ul className="list-info-s">
                  <li className='item-info-s'>
                    {t('Имя планеты:')} {infoPlanet.namePlanet}
                  </li>
                  <li className='item-info-s'>
                    №: {infoPlanet.id}
                  </li>
                  <li className='item-info-s'>
                    {t('Дата создания:')} {infoPlanet.dateCreate}
                  </li>
                  <li className='item-info-s'>
                    {t('Уровень:')} {infoPlanet.level}
                  </li>
                </ul>
              </div>
            </div>
            {!isEmpty(list) ?
              <div className='solry-all-block'>
                <div className='solary-card'>
                  <div className='solary-block'>
                    <div className="wrapper-solary">
                      <div className="sun"/>
                      {viewSolary.map((e)=>
                        <div className={e.classItem.join` `}><div className={e.classPlanet.join` `}><p className={e.classDescr.join` `}>{}</p></div></div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="planets-block">
                  <ul className="planets-list" onClick={handleOnSetPlanetForUpdate}>
                    {viewSolary.map(e=><li className='planet-btn-item'><button className={'planet-btn'} id={e.count} onClick={e=>{setActivePlanet(e.target.id)}}>{e.namePlanet}</button></li>)}
                  </ul>
                  {!isLoading && (
                    <div className="mt-3 btn-clear-block">
                      <btn className="btn-clear-space" onClick={handleSelectAllOnPage}>
                        {selected.length !== list.length ? `${t('Выбрать')}` : `${t('Убрать все')}`} {t('все')}
                      </btn>
                    </div>
                  )}
                  {op &&(
                    <Update op={op} setOp={setOp}/>
                  )}
                  {!isEmpty(selected) &&
                  <div className='update-planet-block'>
                    <button
                      onClick={()=> {setOp(true)}}
                      disabled={isUpdateLoading}
                      loading={isUpdateLoading}
                      className={'btn-clear-space'}
                    >
                      {t('Продлить выбранные')}
                    </button>
                  </div>
                  }
                </div>
              </div>

              :
              <Col>
                <h4 className="text-center mb-4 mt-4">{t('Вы не активированны')}</h4>
              </Col>
            }

          </Col>
          <Footer/>
        </Row>

      </Container>
    </>
  )
}
export default MyPlanets
