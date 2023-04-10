import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { FormGroup, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import confirm from 'reactstrap-confirm'
import * as yup from 'yup'
import Input from '../../../../components/Input'
import * as actions from '../../../../actions/finance.actions'
import {formatter} from "../../../../utils";
import but from "../../../../assets/icon/arrrow-icon.webp";
import {Button} from "react-bootstrap";

function MoneyTransferModal({isVisible, setIsVisible}){
  const dispatch = useDispatch()

  const isLoading = useSelector((state) => state.finance.loadings.transfer)
  const validationSchema = yup.object({
    username: yup.string().required('Введите Логин'),
    password: yup.string().required('Введите пароль'),
    amount: yup
      .number()
      .typeError('Должно быть число')
      .positive('Должно быть число')
      .required('Должно быть число'),
  })

  const submitTransferMoneyForm = async ({ username, amount, password }) => {
    const payload = { username, password, amount: Number(amount) }
    dispatch(actions.transferMoney(payload))
    setIsVisible(false)
  }

  const initialValues = useMemo(
    () => isVisible && { username: '', amount: '', password: '' },
    [isVisible],
  )

  const handleCloseModal = useCallback(() => {
    dispatch(actions.toggleTransferMoneyModal(false))
  }, [dispatch])
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitTransferMoneyForm}>
        {()=>(
          <div className="absolute left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full ">
            <div className="relative w-full h-full max-w-md md:h-auto" style={{width: '100%'}}>
              <div className="relative rounded-lg shadow dark:bg-gray-700" style={{backgroundColor: '#2b0687'}}>
                <button type="button" onClick={e => {e.preventDefault();setIsVisible(false)}}
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-hide="authentication-modal">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"/>
                  </svg>
                  <span className="sr-only">Закрыть</span>
                </button>
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Перевод партнеру</h3>
                  <Form>
                    <div>
                      <FormGroup>
                        <Field type="text" name="amount" placeholder="Сумма перевода" component={Input}/>
                      </FormGroup>
                      <FormGroup>
                        <Field type="text" name="username" placeholder="Ведите логин получателя" component={Input}/>
                      </FormGroup>
                      <FormGroup>
                        <Field type="password"
                               name="password" placeholder="Ведите Финансовый пароль" component={Input}/>
                      </FormGroup>
                    </div>
                    <ModalFooter className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button
                        className="HashLink form-btn group primary-btn opacity-100 transition-all uppercase">
                        Перевод
                        <img src={but} alt="Arrow Icon" className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                      </button>
                    </ModalFooter>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  )
}
export default MoneyTransferModal
