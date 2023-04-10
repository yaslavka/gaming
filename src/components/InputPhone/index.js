import React from 'react'
import { FormText } from 'reactstrap'
import InputMask from 'react-input-mask'

import styles from './Input.module.scss'

// eslint-disable-next-line react/prop-types
function InputPhone({ className, field, form, ...props }) {
  const isInvalid =
    // eslint-disable-next-line react/prop-types
    form && form.errors && form.touched[field.name] && form.errors[field.name]

  return (
    <div className={`single-fild ${isInvalid ? styles.invalid : ''} ${className}`}>
      <InputMask
        {...field}
        type="tel"
        mask="+ 9999999999999"
        maskChar=""
        onChange={(e) => {
          const val = e.target.value.replace(/\D/g, '')
          // eslint-disable-next-line react/prop-types
          form.setFieldValue('phone', val)
        }}
        className="px-6 h-14 mb-6 text-white border-secondary-80 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
        {...props}
      />
      {/* eslint-disable-next-line react/prop-types */}
      {isInvalid && <FormText color="danger">{isInvalid}</FormText>}
    </div>
  )
}

export default InputPhone
