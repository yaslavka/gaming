import React, {useRef} from "react";
import cl from './MyModal.module.css';
import {useTranslation} from "react-i18next";
import MyInput from "../../../../../../components/Input/MyInput";
// import MyBtnFiled from "../../../../../../components/buttonback/MyBtnFiled";
import { Formik, Form, Field } from 'formik'
import {Button} from "reactstrap";
import but from "../../../../../../assets/icon/arrrow-icon.webp";

const FORMRURpauer = ({ title, modals, setModals,  submitCreatePayeerPayForm, initialValues, userInfo, validationSchema})=>{
  const { t } = useTranslation('common');
  const blockModal = useRef('')

  const rootClasses = [cl.modalBlock]
  const rootContentClasses = [cl.modalContent]

  modals && rootClasses.push(cl.active) && rootContentClasses.push(cl.activeContent)
  return(
    <>
      <div ref={blockModal} className={rootClasses.join` `} onClick={(e)=>{e.preventDefault();setModals(false)}}>
        <div className={rootContentClasses.join` `}>
          <Formik initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={submitCreatePayeerPayForm} id='modal' className={cl.modalForm}>
            {({isValid, dirty}) =>(
              <Form onClick={e=>e.stopPropagation()}>
                <h3 className={cl.modalTitle}>{title}</h3>
                <p className={cl.modalDescr}>{t('Укажите сумму')}</p>
                <div>
                  <Field name="amount"  type="text"   classesInput={cl.modalInput} classesPlace={cl.modalPlace} component={MyInput} placeholder={`${t('private.finances.place')}`} />
                </div>

                <p className={cl.modalWarning}>{t('Нажимая Пополнить вы принимаете условия')}</p>
                <span className={cl.modalExit} onClick={e=>{e.preventDefault();setModals(false)}}> </span>
                <div className={cl.btnBlock}>
                  <Button className="HashLink form-btn group primary-btn opacity-100 transition-all uppercase"  type="submit" disabled={!(isValid && dirty)} classes={cl.modalBtn} >
                    История
                    <img src={but} alt="Arrow Icon" className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}
export default FORMRURpauer
