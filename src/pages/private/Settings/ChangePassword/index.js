import React, { useCallback } from 'react'
import { Formik, Form, Field } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import {Button, FormGroup} from 'reactstrap'
import omit from 'lodash-es/omit'
import * as yup from 'yup'
import * as actions from '../../../../actions/app.actions'
import Input from '../../../../components/Input'
import cl from "../../Finances/modal/modalpay/RUR/MyModal.module.css";
import but from "../../../../assets/icon/arrrow-icon.webp";

const initialValues = {
  old_password: '',
  new_password: '',
  repeat_new_password: '',
}

const validationSchema = yup.object({
  old_password: yup
    .string()
    .required('Необходимо заполнить это поле')
    .min(6, 'Пароль должен быть не менее 6 символов'),
  new_password: yup
    .string()
    .required('Необходимо заполнить это поле')
    .min(6, 'Пароль должен быть не менее 6 символов'),
  repeat_new_password: yup
    .string()
    .required('Необходимо заполнить это поле')
    .oneOf([yup.ref('new_password'), null], 'Пароли не совпадают'),
})

function ChangePassword() {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.app.loadings.changePassword)

  const handleOnSubmit = useCallback(
    (values, formicActions) => {
      const callback = () => formicActions.resetForm()
      const newValues = omit(values, 'repeat_new_password')
      dispatch(actions.changePassword(newValues, callback))
    },
    [dispatch],
  )

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ isValid, dirty }) => (
        <Form className="flex  flex-col">
          <div className="card__header">
            <div className="card__header-left">
              <h3 className="text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase font-exo hover:text-primary transition-all mb-2 sm:mb-5 leading-9">Изменение пароля</h3>
            </div>
          </div>
          <div className="card__body">
            <FormGroup>
              <Field
                type="password"
                name="old_password"
                placeholder="Текущий пароль"
                component={Input}
              />
            </FormGroup>
            <FormGroup>
              <Field
                type="password"
                name="new_password"
                placeholder="Новый пароль"
                component={Input}
              />
            </FormGroup>
            <FormGroup>
              <Field
                type="password"
                name="repeat_new_password"
                placeholder="Повторите новый пароль"
                component={Input}
              />
            </FormGroup>
          </div>
          <div className="card__footer">
            <Button style={{display: "unset"}} className="HashLink form-btn group primary-btn opacity-100 transition-all uppercase"
                    type="submit"
                    disabled={!(isValid && dirty) || isLoading}
                    loading={isLoading}
                    block
                    classes={cl.modalBtn} >
              изменить
              <img src={but} alt="Arrow Icon" className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ChangePassword
