import React from 'react'
import styles from './Input.module.scss'

// eslint-disable-next-line react/prop-types
export default function Input({ className, field, form, ...props }) {
  // eslint-disable-next-line react/prop-types
  const isInvalid =
    // eslint-disable-next-line react/prop-types
    form && form.errors && form.touched[field.name] && form.errors[field.name]

  return (
    <div className={`single-fild ${isInvalid ? styles.invalid : ''} ${className}`}>
      <input {...field} {...props} className="px-6 h-14 mb-6 text-white border-secondary-80 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"/>
      {/* eslint-disable-next-line react/prop-types */}
      {isInvalid && <p className={styles.errorMessage}>{isInvalid}</p>}
    </div>
  )
}
