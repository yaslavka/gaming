import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import { matrixActions } from '../../../store/matrix/actions'
import { api } from '../../../api'
import NavBar from "../../../components/layout/Navbar";
import TablesElement from "./TablesElement";
import Footer from "../../public/Footer";

function X2Tables() {
  const dispatch = useDispatch()
  const [matrixTypes, setMatrixTypes] = useState([])

  useEffect(() => {
    api
      .getMatrixUnosCloneStatTypes()
      .then((cloneStats) => {
        api
          .getMatrixUnosTypes()
          .then((response) => {
            if (!isEmpty(cloneStats.items) && !isEmpty(response.items)) {
              const newArrayItems = response.items.map((type, index) => ({
                ...type,
                clones: cloneStats.items[index].count,
              }))

              dispatch(matrixActions.saveUserMatrices(newArrayItems))
              setMatrixTypes(newArrayItems)
            }
          })
          .catch(() => {})
      })
      .catch(() => {})
  }, [dispatch])
  return(
    <>
      <NavBar/>
      <div className="breadcrumbs flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">X2</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">X2</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {matrixTypes.map((matrix, i)=>{
            const deg = -90 + i * (360 / matrixTypes.length)
            const deg2 = deg * -1
            const transform = 'rotate(' + deg + 'deg) translate(15em) rotate(' + deg2 + 'deg)'
            return (
              <TablesElement
                key={i.toString()}
                urlPrefix="personal-x2"
                transform={transform}
                matrix={matrix}
              />
            )
          })}
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default X2Tables
