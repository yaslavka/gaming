import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import isEmpty from 'lodash-es/isEmpty'
import * as actions from '../../../actions/team.actions'
import { Spinner } from 'react-bootstrap'
import TeamMember from "./TeamMember";
import Footer from "../../public/Footer";
import NavBar from "../../../components/layout/Navbar";

function Team(){
  const { userId } = useParams()
  const dispatch = useDispatch()
  const list = useSelector((state) => state.team.list)
  // const { name, limit } = useSelector((state) => state.team.query)
  // const { total, page } = useSelector((state) => state.team.meta)
  const isLoading = useSelector((state) => state.team.isLoading)

  useEffect(() => {
    dispatch(actions.userStructure(userId))
  }, [dispatch, userId])
  console.log(userId)
  //
  // const handleOnChangeSearch = useCallback(
  //   (event) => {
  //     dispatch(actions.setUserStructureSearch(userId, event.target.value))
  //   },
  //   [dispatch, userId],
  // )
  //
  // const handleOnChangePage = useCallback(
  //   (page) => {
  //     dispatch(actions.setUserStructurePage(userId, page))
  //   },
  //   [dispatch, userId],
  // )

  return(
    <>
      <NavBar/>
      <div className="breadcrumbs flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">Team</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Команда</span></li>
            </ul>
          </div>
        </div>
      </div>
      <Spinner isLoading={isLoading}>
        <div className="lg:mb-32 md:mb-20 mb-15">
          <div className="container">
            <div className="text-center lg:mb-15 md:mb-12 mb-8">
              <h2 className="text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
                <font style={{verticalAlign: 'inherit'}}>
                  <font style={{verticalAlign: 'inherit'}}>
                    Моя команда.
                  </font>
                </font>
              </h2>
            </div>
          </div>
         <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
           {!isEmpty(list)?(
             <>
               {list.map((member)=>(
                 <>
                   <TeamMember member={member}/>
                 </>
               ))}
             </>
           ):(<></>)}
         </div>
        </div>
      </Spinner>
      <Footer/>
    </>
  )
}
export default Team
