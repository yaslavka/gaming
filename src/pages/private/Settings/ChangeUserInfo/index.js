import React, { useMemo, useCallback } from 'react'
import { Formik, Form, Field } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { FormGroup,Button } from 'reactstrap'
import * as yup from 'yup'

import * as actions from '../../../../actions/app.actions'
import Input from '../../../../components/Input'
import cl from "../../Finances/modal/modalpay/RUR/MyModal.module.css";
import but from "../../../../assets/icon/arrrow-icon.webp";

const validationSchema = yup.object({
  firstName: yup.string().required('Необходимо заполнить это поле'),
  lastName: yup.string().required('Необходимо заполнить это поле'),
})

function ChangeUserInfo() {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.app.user)
  const isLoading = useSelector((state) => state.app.loadings.changeUserInfo)

  const initialValues = useMemo(() => {
    let values = { firstName: '', lastName: '' }
    if (profile) {
      const { firstName, lastName } = profile
      values = { ...values, firstName, lastName }
    }

    return values
  }, [profile])

  const handleOnSubmit = useCallback(
    (values) => dispatch(actions.changeUserInfo(values)),
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
              <h3 className="text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase font-exo hover:text-primary transition-all mb-2 sm:mb-5 leading-9">Изменение данных</h3>
            </div>
          </div>
          <div className="card__body">
            <FormGroup>
              <Field type="text" name="firstName" placeholder="Имя" component={Input} />
            </FormGroup>
            <FormGroup>
              <Field type="text" name="lastName" placeholder="Фамилия" component={Input} />
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

export default ChangeUserInfo
