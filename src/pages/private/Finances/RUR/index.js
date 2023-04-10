import React from 'react'
import MyViewElement from "../../../../components/MyViewElements/MyViewElements";
import cl from "../Finance.module.css";
import rubleImg from "../../../../assets/icon/rouble-svgrepo-com.svg";
import {useSelector} from "react-redux";
import {formatter} from "../../../../utils";
import but from "../../../../assets/icon/arrrow-icon.webp";

const RurBalanse = ({setModalrur, setModalWru}) => {
  const userInfo = useSelector((state) => state.app.user)
  return (
    <>
      {userInfo && (
        <>
          <MyViewElement element={
            <div className={[cl.rubItem, cl.transItem].join` `}>
              <div className={cl.transItemTop}>
                <span className={cl.transTopText}>rub</span>
                <span> </span>
                <span className={cl.transTopCircle}>
                  <img src={rubleImg} alt={""}/>
                </span>
              </div>
              <div className={cl.transItemMiddle}>
                <span className={cl.transMidSign}>
                  <img src={rubleImg} alt={""}/>
                </span>
                <div>
                  <span className={cl.transMidFirst}>
                    {formatter
                  .format((userInfo.balanceCrypto.RUR > -1 && userInfo.balanceCrypto.RUR) || 0.00)
                  .replace('₽', '')}
                  </span>
                </div>
              </div>
              <div className={cl.transItemBottom}>
                <div rel="noreferrer" >
                  <button onClick={e => {
                    e.preventDefault();
                    setModalrur(true)
                  }} className="HashLink form-btn group primary-btn opacity-100 transition-all uppercase">
                    Пополнить
                    <img src={but} alt="Arrow Icon" className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                  </button>
                </div>
                <div rel="noreferrer">
                  <button onClick={e => {e.preventDefault();setModalWru(true)}} className="HashLink form-btn group primary-btn opacity-100 transition-all uppercase">
                    Вывод
                    <img src={but} alt="Arrow Icon" className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                  </button>
                </div>
              </div>
            </div>
          }
          />
        </>
      )}
    </>
  )
}
export default RurBalanse
