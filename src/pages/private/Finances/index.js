import React, { useState, useCallback } from 'react'
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../actions/finance.actions";
import NavBar from "../../../components/layout/Navbar";
import {formatter} from "../../../utils";
import but from "../../../assets/icon/arrrow-icon.webp";
import Footer from "../../public/Footer";
import MyViewElement from "../../../components/MyViewElements/MyViewElements";
import MoneyTransferModal from "./MoneyTransferModal";
import OperationsHistoryModal from "./OperationsHistoryModal";
import ReplenishmentOfMoney from "./ReplenishmentOfMoney";

function Finances(){
 const [isVisible, setIsVisible]=useState(false)
  const dispatch = useDispatch()
  const [
    isOperationsHistoryModalVisible,
    setIsOperationsHistoryModalVisible,
  ] = useState(false);
  const userInfo = useSelector(state => state.app.user);

  const handleVisibleTransferMoneyModal = useCallback(() => {
    dispatch(actions.toggleTransferMoneyModal(true));
  }, [dispatch]);

  const openOperationsHistoryModal = () => {
    document.body.style.overflow = 'hidden';
    setIsOperationsHistoryModalVisible(true);
  };

  const closeOperationsHistoryModal = () => {
    document.body.style.overflow = 'initial';
    setIsOperationsHistoryModalVisible(false);
  };

  return(
    <>
      <NavBar/>
      <div className="breadcrumbs flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500" >
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">finances</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Финансы</span></li>
            </ul>
          </div>
        </div>
      </div>
      {userInfo && (
        <>
          <div className="lg:mb-32 md:mb-20 mb-15">
            <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <div
                className="text-white align-cener bg-no-repeat bg-scroll bg-center bg-cover md:pt-14 md:pb-12 md:px-12 sm:py-14 sm:px-6 py-14 px-10 h-460 pl-15 df">
                <div className="block text-left">
                  <MyViewElement element={
                    <h3 className="text-white font-exo text-xl md:text-3xl font-bold uppercase mb-4">Общий баланс:</h3>
                  }/>
                  <MyViewElement element={
                    <>
                      <span className="text-white">
                        <p className="text-lg leading-9"/>
                        <div className="text-white font-exo text-xl md:text-3xl font-bold uppercase mb-4">
                        {`${formatter
                          .format(
                            (userInfo.allBalances> -1 && userInfo.allBalances) || 0,
                          ).replace('₽', '₽')}`}
                        </div>
                      </span>
                    </>
                  }/>
                  <MyViewElement element={
                    <button onClick={e => {e.preventDefault();setIsVisible(true)}} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                            className="HashLink form-btn group primary-btn opacity-100 transition-all uppercase">
                      Перевод
                      <img src={but} alt="Arrow Icon"
                           className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                    </button>
                  }/>
                </div>
              </div>
              {isVisible &&
              <MoneyTransferModal setIsVisible={setIsVisible} isVisible={isVisible}/>
              }
              {isOperationsHistoryModalVisible && (
                <OperationsHistoryModal onClose={closeOperationsHistoryModal} />
              )}
              <div
                className="text-white align-cener bg-no-repeat bg-scroll bg-center bg-cover md:pt-14 md:pb-12 md:px-12 sm:py-14 sm:px-6 py-14 px-10 h-460 pl-15 df">
                <div className="block text-center">
                  <MyViewElement element={
                    <h3 className="text-white font-exo text-xl md:text-3xl font-bold uppercase mb-4">Транзитный:</h3>
                  }/>
                  <MyViewElement element={
                    <span className="text-white">
                    <p className="text-lg leading-9"/>
                    <div className="text-white font-exo text-xl md:text-3xl font-bold uppercase mb-4">
                      баланс
                      {formatter
                        .format(
                          (userInfo.locale > -1 &&
                            userInfo.locale) ||
                          0,
                        )
                        .replace('₽', '₽')}
                    </div>
                  </span>
                  }/>
                  <MyViewElement element={
                    <button onClick={openOperationsHistoryModal} className="HashLink form-btn group primary-btn opacity-100 transition-all uppercase">
                      История
                      <img src={but} alt="Arrow Icon" className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                    </button>
                  }/>
                </div>
              </div>
            </div>
            <MyViewElement element={
              <h3 className="text-white font-exo text-xl md:text-3xl font-bold uppercase mb-4" style={{textAlign: "center"}}>Действие</h3>
            }/>
            <MyViewElement element={
              <ReplenishmentOfMoney userInfo={userInfo}/>
              // <button onClick={openOperationsHistoryModal} className="HashLink form-btn group primary-btn opacity-100 transition-all uppercase">
              //   Пополнить
              //   <img src={but} alt="Arrow Icon" className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
              // </button>
            }/>
          </div>
          <Footer/>
        </>
      )}
    </>
  )
}
export default Finances
