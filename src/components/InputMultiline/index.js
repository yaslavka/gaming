import React from 'react'
import { FormText } from 'reactstrap'
import styles from './Input.module.scss'

// eslint-disable-next-line react/prop-types
function InputMultiline({ className, field, form, ...props }) {
  const isInvalid =
    // eslint-disable-next-line react/prop-types
    form && form.errors && form.touched[field.name] && form.errors[field.name]

  return (
    <div className={`${styles.Input} ${isInvalid ? styles.invalid : ''} ${className}`}>
      <textarea {...field} {...props} className="px-6 h-14 w-full mb-6 text-white border-secondary-80 bg-secondary-100 hover:border-primary transition-all border-2 border-solid  rounded-md w-full focus:outline-none"/>
      {/* eslint-disable-next-line react/prop-types */}
      {props.placeholder && (
        // eslint-disable-next-line react/prop-types
        <span className={styles.placeholder}>{props.placeholder}</span>
      )}
      {isInvalid && <FormText color="danger">{isInvalid}</FormText>}
    </div>
  )
}

export default InputMultiline
