import React, { useCallback, useMemo } from 'react'
import { Formik, Form, Field } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { FormGroup, Button } from 'reactstrap'
import * as yup from 'yup'
import * as actions from '../../../../actions/app.actions'
import Input from '../../../../components/Input'
import cl from "../../Finances/modal/modalpay/RUR/MyModal.module.css";
import but from "../../../../assets/icon/arrrow-icon.webp";

const validationSchema = yup.object({
  instagram: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z0-9_.]+$/, 'Имя пользователя не валидно'),
  telegram: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z0-9_.]+$/, 'Имя пользователя не валидно'),
  vk: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z0-9_.]+$/, 'Имя пользователя не валидно'),
})

function SocialNetwork() {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.app.user)
  const isLoading = useSelector((state) => state.app.loadings.changeSocial)

  const initialValues = useMemo(() => {
    let values = { instagram: '', telegram: '', vk: '' }
    if (profile) {
      const { myInstagram, myTg, myVk } = profile
      values = {
        ...values,
        instagram: myInstagram || '',
        telegram: myTg || '',
        vk: myVk || '',
      }
    }

    return values
  }, [profile])

  const handleOnSubmit = useCallback(
    (values) => {
      dispatch(actions.changeSocial(values))
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
        <Form className="card">
          <div className="card__header">
            <div className="card__header-left">
              <h3 className="card__title">Ваши социальные сети</h3>
            </div>
          </div>
          <div className="card__body">
            <FormGroup>
              <Field type="text" name="instagram" placeholder="Instagram" component={Input} />
            </FormGroup>
            <FormGroup>
              <Field type="text" name="telegram" placeholder="Telegram" component={Input} />
            </FormGroup>
            <FormGroup>
              <Field type="text" name="vk" placeholder="ВКонтакте" component={Input} />
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

export default SocialNetwork
