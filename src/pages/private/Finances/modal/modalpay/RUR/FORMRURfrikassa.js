import React, {useRef} from "react";
import {useTranslation} from "react-i18next";
import cl from './MyModal.module.css';
import MyInput from "../../../../../../components/Input/MyInput";
import { Formik, Form, Field } from 'formik'
import but from "../../../../../../assets/icon/arrrow-icon.webp";
import {Button} from "reactstrap";

const FORMRURfrikassa =({ title, initialValues, freekassa, setFreekassa, submitCreatePayForm, validationSchema})=>{
  const { t } = useTranslation('common');
  const blockModal = useRef('')
  const rootClasses = [cl.modalBlock]
  const rootContentClasses = [cl.modalContent]

  freekassa && rootClasses.push(cl.active) && rootContentClasses.push(cl.activeContent)
  return(
    <>
      <div ref={blockModal} className={rootClasses.join` `} onClick={(e)=>{e.preventDefault();setFreekassa(false)}}>
        <div className={rootContentClasses.join` `}>
          <Formik initialValues={initialValues} onSubmit={submitCreatePayForm} validationSchema={validationSchema}>
            {({isValid, dirty})=>(
              <Form className={cl.modalForm} onClick={e=>e.stopPropagation()}>
                <h3 className={cl.modalTitle}>{title}</h3>
                <p className={cl.modalDescr}>{t('Укажите сумму')}</p>
                <div>
                  <Field name={'amount'} type={'text'} classesInput={cl.modalInput} classesPlace={cl.modalPlace} component={MyInput} placeholder={`${t('Сумма')}`}/>
                </div>
                <p className={cl.modalWarning}>{t('Нажимая Пополнить вы принимаете условия')}</p>
                <span className={cl.modalExit} onClick={e=>{e.preventDefault();setFreekassa(false)}}></span>
                <div className={cl.btnBlock}>
                  <div className={cl.btnBlock}>
                    <Button className="HashLink form-btn group primary-btn opacity-100 transition-all uppercase"  type="submit" disabled={!(isValid && dirty)} classes={cl.modalBtn} >
                      Пополнить
                      <img src={but} alt="Arrow Icon" className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )

}
export default FORMRURfrikassa
