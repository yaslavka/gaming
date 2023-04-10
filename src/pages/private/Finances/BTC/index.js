import React from 'react'
import cl from '../Finance.module.css';
import {useTranslation} from "react-i18next";
import MyViewElement from "../../../../components/MyViewElements/MyViewElements";
import rubleImg from "../../../../assets/icon/rouble-svgrepo-com.svg";
import {useSelector} from "react-redux";
import {formatter} from "../../../../utils";
import btcImg from './../../../../assets/icon/btc-svgrepo-com.svg'
import but from "../../../../assets/icon/arrrow-icon.webp";
import {Button} from "reactstrap";

const BTCbalance =({setBtcmodel, setBtcmodelw})=>{
  const userInfo = useSelector((state) => state.app.user)
  const { t } = useTranslation('common');
  return(
    <>
      {userInfo &&(
        <MyViewElement element={
          <div className={[cl.transItem, cl.btcItem].join` `}>
            <div className={cl.transItemTop}>
              <div className={cl.transTopText}>BTC</div>
              <span className={cl.transTopRouble}>
                <img src={rubleImg} alt={""}/>
                {`${formatter
                  .format(
                    (userInfo.allBalances> -1 && userInfo.allBalances) || 0.00,
                  ).replace('₽', '₽')}`}
              </span>
              <span className={cl.transTopCircle}>
                <img src={btcImg} alt={""}/>
              </span>
            </div>
            <div className={cl.transItemMiddle}>
              <span className={cl.transMidSign}>
                <img src={btcImg} alt={""}/>
              </span>
              <div className={cl.transMidValue}>
                <span className={cl.transMidSec}>{userInfo.balanceCrypto.BTC}</span>
              </div>
            </div>
            <div className={cl.transItemBottom}>
              <div>
                <Button className="HashLink form-btn group primary-btn opacity-100 transition-all uppercase"  onClick={e=>{e.preventDefault();setBtcmodel(true)}} >
                  Пополнить
                  <img src={but} alt="Arrow Icon" className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                </Button>
              </div>
              <div>
                <Button className="HashLink form-btn group primary-btn opacity-100 transition-all uppercase"  onClick={e=>{e.preventDefault();setBtcmodelw(true)}} >
                  Вывести
                  <img src={but} alt="Arrow Icon" className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                </Button>
              </div>
            </div>
          </div>
        }
        />
      )}

    </>
  )
}
export default BTCbalance
