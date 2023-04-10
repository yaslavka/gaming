import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { matrixActions } from '../../../store/matrix/actions'
import level from './470373c2d7.png'

function TablesElement({ matrix, urlPrefix }){
  const dispatch = useDispatch()

  const saveMatrixInfo = useCallback(
    (matrixInfo) => {
      dispatch(matrixActions.saveCurrentMatrix(matrixInfo))
    },
    [dispatch],
  )
  const mat=[
    {
      id:matrix.id,
      img:level,
    }
  ]
  return(
    <>
      {mat.map(({id,img})=>(
        <div className="relative group   mx-auto">
          <div className="w-full rounded-4xl overflow-hidden relative ">
            <h2 className="teamsv">{id}</h2>
            <img src={img} alt={''}/>
            <Link to={`/${urlPrefix}/${matrix.id}`} onClick={() => saveMatrixInfo(matrix)} className="w-full h-full absolute left-0 top-0 bg-gray-900 rounded-5xl opacity-0 group-hover:opacity-70 border-4 border-gray-400 rounded-4xl">
            </Link>
            <ul className="social-link absolute left-0 text-center bottom-0 group-hover:bottom-8 w-full space-x-2 opacity-0 group-hover:opacity-100 transition-all z-20 text-white">
              <li className="text-center inline-block">
                Уровень
                <div className="w-12 h-10 flex items-center justify-center transition-all bg-cover text-white hover:bg-arrow-shape bg-arrow-hover-shape z-50">
                  <i>{id}</i>
                </div>
              </li>
              {!!Number(matrix.count) && (
                <li className="text-center inline-block">
                  Клоны
                  <div className="w-12 h-10 flex items-center justify-center transition-all bg-cover text-white hover:bg-arrow-shape bg-arrow-hover-shape z-50">
                    <i>{matrix.count}</i>
                  </div>
                </li>
              ) }
            </ul>
          </div>
          <div className=" flex flex-col justify-center items-center mt-8 bg-team-shape bg-cover h-24 sm:h-20 md:h-28 lg:h-24 xl:h-32 2xl:h-32 group-hover:bg-team-hover-shape hover:transition-all">
            <h3 className="text-white font-bold text-lg md:text-2xl uppercase mb-2 xl:mb-4 leading-tight">
              <a
              href={`/${urlPrefix}/${matrix.id}`} className="">Уровень {id}</a>
            </h3>
            {!!Number(matrix.count) && (
              <span className="text-white text-sm group-hover:text-white transition-all">Не установленные клоны: <i>{matrix.count}</i></span>
            ) }
          </div>
        </div>
      ))}
    </>
  )
}
export default TablesElement
