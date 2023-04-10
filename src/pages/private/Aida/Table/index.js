import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { api } from '../../../../api'
import { matrixActions } from '../../../../store/matrix/actions'
import * as actions from '../../../../actions/app.actions'
import routes from '../../../../constants/routes.constants'
import isEmpty from 'lodash-es/isEmpty'
import NavBar from "../../../../components/layout/Navbar";
import Footer from "../../../public/Footer";
import closeIcon from '../../../../assets/icon/close.ac2aaa1a.svg'
import styles from './Table.module.scss'
import MyViewElement from "../../../../components/MyViewElements/MyViewElements";
import Select from '../../../../components/Select'
import but from "../../../../assets/icon/arrrow-icon.webp";
import {Container} from "reactstrap";
import MatrixCell from "./MatrixCell";
import BuyStatusModal from "./BuyStatusModal";
import PartnersClonesModal from "./PartnersClonesModal";
import PartnerModal from "./PartnerModal";
import ClonesModal from "./ClonesModal";
import BuyMatrixModal from "./BuyMatrixModal";
import SearchSelect from "../../../../components/SearchSelect";


export default function AidaTable({ location: { state = {}, pathname } }) {
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()
  const [buyingStatus, setBuyingStatus] = useState({ type: '', message: '' })
  const [isFetching, setIsFetching] = useState(true)
  const [matrixTree, setMatrixTree] = useState([])
  const [visiblePartnerModal, setVisiblePartnerModal] = useState(false)
  const [visibleBuyModal, setVisibleBuyModal] = useState(false)
  const [visibleClonesModal, setVisibleClonesModal] = useState(false)
  const [visiblePartnersClonesModal, setVisiblePartnersClonesModal] = useState(false)
  const [searchUsers, setSearchUsers] = useState([])
  const [currentSearchValue, setCurrentSearchValue] = useState('')
  const [selectItems, setSelectItems] = useState(null)
  const [visibleBuyMatrixModal, setVisibleBuyMatrixModal] = useState(false)
  const matrixInfo = useSelector((state) => state.matrixReducer.matrixInfo)
  const matricesList = useSelector((state) => state.matrixReducer.matricesList)

  const buyMatrix = () => {
    if (matrixInfo && matrixInfo.id) {
      setBuyingStatus({ type: 'pending', message: '' })
      api
        .ssBuyMatrix(Number(matrixInfo.id))
        .then((response) => {
          setBuyingStatus({
            type: 'success',
            message: response.message,
          })
          setVisibleBuyMatrixModal(false)
          setVisibleBuyModal(true)
          setIsFetching(true)

          api
            .getUserInfo()
            .then((response) => {
              dispatch(actions.userInfoSuccess(response))
            })
            .catch(() => {})

          api
            .ssMatrixTypes()
            .then((response) => {
              const filter = response.items.find((x) => x.id === matrixInfo.id)
              if (filter) {
                dispatch(matrixActions.saveCurrentMatrix(filter))
              }
            })
            .catch(() => {})

          api
            .ssMatrixStructureByType(matrixInfo.id)
            .then((response) => {
              if (response.items) {
                setMatrixTree(response.items)
                setIsFetching(false)
              }
            })
            .catch()
        })
        .catch((response) => {
          setVisibleBuyMatrixModal(false)
          setBuyingStatus({ type: 'error', message: `${response.message}` })
          setVisibleBuyModal(true)
        })
    }
  }
  //TODO: Rewrite
  const showPartnerModal = (info, place) => {
    if (window.innerWidth < 1200) {
      document.body.style.overflow = 'hidden'
    }

    if (( place === 4) && matrixTree['1']) {
      if (!info) {
        dispatch(
          matrixActions.saveCurrentMatrixCellInfo({
            ancestor_id: matrixTree['0'].id,
            place,
          }),
        )
        setVisiblePartnersClonesModal(true)
      }
    } else if ((place === 5 || place === 6) && matrixTree['2']) {
      if (!info) {
        dispatch(
          matrixActions.saveCurrentMatrixCellInfo({
            ancestor_id: matrixTree['0'].id,
            place,
          }),
        )
        setVisiblePartnersClonesModal(true)
      }
    } else if (place === 1 || place === 2 || place === 3) {
      if (!info) {
        dispatch(
          matrixActions.saveCurrentMatrixCellInfo({
            ancestor_id: matrixTree['0'].id,
            matrix_id:matrixInfo.id,
            place,
          }),
        )
        setVisiblePartnersClonesModal(true)
      }
    }
  }

  const showClonesModal = () => {
    if (window.innerWidth < 1200) {
      document.body.style.overflow = 'hidden'
    }
    setVisibleClonesModal(true)
  }

  const showBuyMatrixModal = () => {
    if (window.innerWidth < 1200) {
      document.body.style.overflow = 'hidden'
    }
    setVisibleBuyMatrixModal(true)
  }

  const closeBuyMatrixModal = () => {
    document.body.style.overflow = 'initial'
    setVisibleBuyMatrixModal(false)
    setIsFetching(true)
  }

  const closePartnerModal = () => {
    document.body.style.overflow = 'initial'
    setVisiblePartnerModal(false)
    setTimeout(() => {
      // eslint-disable-next-line react/prop-types
      if (pathname.startsWith('/personal-aida')) {
        api
          .ssMatrixStructureByType(matrixInfo.id)
          .then((response) => {
            if (response.items) {
              setMatrixTree(response.items)
              setIsFetching(false)
            }
          })
          .catch(() => {})
      } else {
        api
          .ssMatrixStructureById(id)
          .then((response) => {
            if (response.items) {
              setMatrixTree(response.items)
              setIsFetching(false)
            }
          })
          .catch(() => {})
      }
    }, 2000)
  }

  const closeClonesModal = () => {
    document.body.style.overflow = 'initial'
    setVisibleClonesModal(false)
    setIsFetching(true)
  }

  const closeBuyModal = () => {
    setVisibleBuyModal(false)
  }

  const navigateTo = (direction) => {
    if (matrixInfo && matricesList) {
      if (direction === 'left') {
        if (matrixInfo.id !== 1) {
          const prevMatrix = matricesList.find((matrix) => matrix.id === matrixInfo.id - 1)
          setIsFetching(true)
          dispatch(matrixActions.saveCurrentMatrix(prevMatrix))
          history.push(`/personal-aida/${matrixInfo.id - 1}`)
        }
      } else {
        if (matrixInfo.id !== 8) {
          const nextMatrix = matricesList.find((matrix) => matrix.id === matrixInfo.id + 1)
          setIsFetching(true)
          dispatch(matrixActions.saveCurrentMatrix(nextMatrix))
          history.push(`/personal-aida/${matrixInfo.id + 1}`)
        }
      }
    }
  }

  const closePartnersClonesModal = () => {
    document.body.style.overflow = 'initial'
    setVisiblePartnersClonesModal(false)
    setIsFetching(true)
  }

  const showPartnersModal = () => {
    setVisiblePartnerModal(true)
  }

  const redirectToUserMatrix = (matrixId) => {
    history.push(`/aidas/${matrixId}`)
    setSearchUsers([])
  }

  useEffect(() => {
    if (matrixInfo && matrixInfo.isActive && isFetching) {
      api
        .ssMatrixStructureByType(matrixInfo.id)
        .then((response) => {
          if (response.items) {
            setMatrixTree(response.items)
            setIsFetching(false)
          }
        })
        .catch()
    } else if (id) {
      api
        .ssMatrixStructureById(id)
        .then((response) => {
          if (response.items) {
            setMatrixTree(response.items)
          }
        })
        .catch()
    }
  }, [id, matrixInfo, isFetching])

  useEffect(() => {
    if (matrixInfo) {
      api
        .getNeighboringMatrices(matrixInfo.id)
        .then((response) => {
          if (Array.isArray(response.items) && response.items.length > 0) {
            const result = response.items.map(({ name, id }) => ({
              label: name,
              value: id,
            }))
            setSelectItems(result)
          }
        })
        .catch(() => {})
    }
  }, [matrixInfo])

  useEffect(() => {
    if (!matricesList) {
      api
        .ssMatrixTypes()
        .then((response) => {
          if (Array.isArray(response.items)) {
            dispatch(matrixActions.saveUserMatrices(response.items))
          }
        })
        .catch(() => {})
    }
  }, [matricesList, dispatch])

  useEffect(() => {
    if (currentSearchValue.length > 2 && matrixInfo) {
      api
        .searchUserByLoginA({
          user_name: currentSearchValue,
          matrix_type: matrixInfo.id,
        })
        .then((response) => {
          setSearchUsers([{label:response.items[0]?.userName, value:response.items[0]?.id}])
        })
        .catch(() => {})
    }
  }, [currentSearchValue, matrixInfo])

  //TODO: Remove hardcoded matrixTree

  const handleUpMatrix = () => {
    if (id) {
      api
        .ssStructureUpper(id)
        .then((response) => {
          if (response.items) {
            setMatrixTree(response.items)
            setIsFetching(false)
            if (!isEmpty(state) && state.query && state.meta) {
              history.push(navRoute('/queue'), {
                query: state.query,
                meta: state.meta,
              })
            } else {
              history.goBack()
            }
          }
        })
        .catch()
    }
  }
  const backRouteElement = useMemo(() => {
    let returnRoute = (
      <Link to={routes.aida} className={styles.close}>
        <span className={styles.closeIT}>

        </span>
        <span className={styles.closeIB}>

        </span>
      </Link>
    )
    if (!isEmpty(state) && state.useBack) {
      returnRoute = (
        <div onClick={() => history.goBack()} className={styles.close}>
          <img src={closeIcon} alt="Close" />
        </div>
      )
    }
    return returnRoute
  }, [history, state])
  const navRoute = useCallback(
    (route = '') => {
      let newRoute = '/'

      if (matrixInfo && matrixInfo.isActive && !id) {
        newRoute = `/personal-aida/${matrixInfo.id}${route}`
      } else if (id) {
        newRoute = `/aidas/${id}${route}`
      }
      return newRoute
    },
    [matrixInfo, id],
  )
  return(
    <>
      <NavBar/>
      <div className="breadcrumbs flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            {matrixInfo && <h1 className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">personal Aida - {matrixInfo.name}</h1>}
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">personal-Aida</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.Table}>
      <div className="breadcru flex items-center relative bg-no-repeat bg-scroll bg-center lg:mb-32 md:mb-20 mb-15 h-620 md:h-650 lg:h-780">
        <Container style={{width: '90%'}}>
          <div className={styles.header}>
            {matrixInfo &&  <MyViewElement element={<h1 className={styles.title}>Aida - {matrixInfo.name}</h1>}/>}
            {backRouteElement}
          </div>
          <div className={styles.container}>
            <div className={styles.sidebar}>
              {selectItems && (
                <MyViewElement element={
                  <Select
                    values={selectItems}
                    placeholder="Мои клоны"
                    className={styles.matrixSelect}
                    onChange={(value) => {
                      if (value) {
                        history.push(`/aidas/${value}`)
                      }
                    }}
                  />
                }/>
              )}
              <div className={styles.content}>
                {
                  id && (

                    <div className="d-xl-none mt-4">
                      <MyViewElement element={
                        <button  onClick={handleUpMatrix}
                                 disabled={buyingStatus.type === 'pending'}
                                 className="HashLink form-btn group primary-btn opacity-100 transition-all uppercase">
                          Наверх
                          <img src={but} alt="Arrow Icon" className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                        </button>
                      }/>

                    </div>
                  )
                }
              </div>

              {matrixInfo && (
                <div className={styles.footer}>
                  <MyViewElement element={
                    <p className={styles.price}>Цена - {matrixInfo.summ} RUB</p>
                  }/>
                  {matrixInfo.canBuy && (
                    <MyViewElement element={
                      <button  onClick={showBuyMatrixModal}
                               disabled={buyingStatus.type === 'pending'} style={{marginLeft: 50}}
                               className="HashLink form-btn group primary-btn opacity-100 transition-all uppercase">
                        Купить
                        <img src={but} alt="Arrow Icon" className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                      </button>
                    }/>
                  )}
                </div>
              )}
            </div>
            <div className={styles.content}>
            <MyViewElement element={
              <SearchSelect
                className={styles.searchSelect}
                values={searchUsers}
                placeholder="Поиск партнера по логину"
                onInput={setCurrentSearchValue}
                onChange={redirectToUserMatrix}
              />
            }/>
             <MyViewElement element={
               <div className={styles.matrixTree}>
                 <MatrixCell
                   place={0}
                   info={matrixTree['0']}
                   isActive={matrixInfo && matrixInfo.isActive}
                 />
                 <div className={styles.secondRow}>
                   {matrixInfo.id === 1 ?(
                     <>
                       <MatrixCell
                         place={1}
                         info={matrixTree['1']}
                         ancestorInfo={matrixTree['0']}
                         isActive={matrixInfo && matrixInfo.isActive}
                         onDoubleClick={() => {
                           showPartnerModal(matrixTree['1'], 1)
                         }}
                       />
                       <MatrixCell
                         place={2}
                         ancestorInfo={matrixTree['0']}
                         info={matrixTree['2']}
                         isActive={matrixInfo && matrixInfo.isActive}
                         onDoubleClick={() => {
                           showPartnerModal(matrixTree['2'], 2)
                         }}
                       />
                       <MatrixCell
                         place={3}
                         ancestorInfo={matrixTree['0']}
                         info={matrixTree['3']}
                         isActive={matrixInfo && matrixInfo.isActive}
                         onDoubleClick={() => {
                           showPartnerModal(matrixTree['3'], 3)
                         }}
                       />
                     </>
                   ):(
                     <>
                       <MatrixCell
                         place={1}
                         info={matrixTree['1']}
                         ancestorInfo={matrixTree['0']}
                         isActive={matrixInfo && matrixInfo.isActive}
                         onDoubleClick={() => {
                           showPartnerModal(matrixTree['1'], 1)
                         }}
                       />
                       <MatrixCell
                         place={2}
                         ancestorInfo={matrixTree['0']}
                         info={matrixTree['2']}
                         isActive={matrixInfo && matrixInfo.isActive}
                         onDoubleClick={() => {
                           showPartnerModal(matrixTree['2'], 2)
                         }}
                       />
                     </>
                   )}
                 </div>
               </div>
             }/>
              {matrixInfo && (
                <div className={styles.footer}>
                  <MyViewElement element={
                    <p className={styles.price}>Цена - {matrixInfo.summ} RUB</p>
                  }/>
                  {matrixInfo.canBuy && (
                    <MyViewElement element={
                      <button  onClick={showBuyMatrixModal}
                               disabled={buyingStatus.type === 'pending'} style={{marginLeft: 40}}
                               className="HashLink form-btn group primary-btn opacity-100 transition-all uppercase">
                        Купить
                        <img src={but} alt="Arrow Icon" className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                      </button>
                    }/>
                  )}
                </div>
              )}
            </div>
          </div>
        </Container>
        {visibleBuyModal && <BuyStatusModal status={buyingStatus} onClose={closeBuyModal} />}
        {visiblePartnersClonesModal && (
          <PartnersClonesModal
            onClose={closePartnersClonesModal}
            showPartnersModal={showPartnersModal}
          />
        )}
        {visiblePartnerModal && <PartnerModal onClose={closePartnerModal} />}
        {visibleClonesModal && matrixInfo && matrixInfo.id && (
          <ClonesModal matrixType={matrixInfo.id} onClose={closeClonesModal} />
        )}
        {visibleBuyMatrixModal && (
          <BuyMatrixModal onSubmit={buyMatrix} status={buyingStatus} onClose={closeBuyMatrixModal} />
        )}
      </div>
      </div>
      <Footer/>
    </>
  )
}
