import React, {useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import cl from './MyModal.module.css';
import {api} from "../../../../../../api";
import FORMRURpauer from "./FORMRURpauer";
import logo from '../../../../../../assets/images/payeer-logo.8aa750cc.svg'
import * as yup from 'yup'
import FORMRURfrikassa from "./FORMRURfrikassa";

const validationSchem = yup.object({
  amount: yup
    .number()
    .typeError('Сумма должно быть числом')
    .positive('Сумма должна быть положительной')
    .required('Необходимо заполнить это поле')
    .min(1,'минимальная сумма 600р')
})
const validationSchema = yup.object({
  amount: yup
    .number()
    .typeError('Сумма должно быть числом')
    .positive('Сумма должна быть положительной')
    .required('Необходимо заполнить это поле')
    .min(100,'минимальная сумма 1000р')
})
const initialValues = { amount: '' }

const CreatePayrur =({title,titles, modalrur, setModalrur, userInfo, freekassa, setFreekassa})=>{
  const initialValue = { Amount: '', OrderId:`${+(new Date())}:${userInfo.username}`, TerminalKey:'1670485393713'}
  const { t } = useTranslation('common');
  const [modals, setModals] = useState(false)
  const blockModal = useRef('')
  const rootClasses = [cl.modalBlock]
  const rootContentClasses = [cl.modalContent]
  const [isCurrencyAndCount, setIsCurrencyAndCount] = useState({count: '', currency: ''})
  const submitCreatePayeerPayForm = ({ amount }) => {
    api
      .createPayeerPay({amount: Number(amount)})
      .then(async response => {
        if (response.url) {
          window.location.replace(response.url);
        }
      })
      .catch(() => {});
  }

  const submitCreatePayForm = ({ amount }) => {
    api
      .createPay({ amount: Number(amount) })
      .then((response) => {
        if (response.url) {
          window.location.replace(response.url)
        }
      })
      .catch(() => {})
  }

  modalrur && rootClasses.push(cl.active) && rootContentClasses.push(cl.activeContent)
  return(
    <>
      <div ref={blockModal} className={rootClasses.join` `} onClick={(e)=>{e.preventDefault();setModalrur(false);setModals(false)}}>
        <div className={rootContentClasses.join` `}>
          <div id='modal' className={cl.modalForm} onClick={e=>e.stopPropagation()}>
            <h3 className={cl.modalTitle}>{title}</h3>
            <p className={cl.modalDescr}>{titles}</p>
            <div className={cl.btnBlock}>
              <img width={350} src="https://www.free-kassa.ru/banner/logomail.png" role={"button"} onClick={(e)=>{e.preventDefault();setFreekassa(true);}}/>
             <FORMRURfrikassa
               initialValues={initialValues}

               validationSchema={validationSchema}
               submitCreatePayForm={submitCreatePayForm}
               freekassa={freekassa}
               setFreekassa={setFreekassa}
             />
            </div>
            <div className={cl.btnBlock}>
              <img src={logo} role={"button"} alt={''} onClick={(e)=>{e.preventDefault();setModals(true);}}/>
              <FORMRURpauer
                currencyAndCount={isCurrencyAndCount}
                changeCurrencyAndCount={setIsCurrencyAndCount}
                title={`${t('private.finances.sum')}`}
                setModals={setModals} modals={modals}
                initialValues={initialValues}
                validationSchema={validationSchem}
                userInfo={userInfo}
                submitCreatePayeerPayForm={submitCreatePayeerPayForm}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
export default CreatePayrur
