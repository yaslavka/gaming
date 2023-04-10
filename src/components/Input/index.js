import React from 'react'
import { FormText } from 'reactstrap'


// eslint-disable-next-line react/prop-types
function Input({ className, field, form, ...props }) {
  // eslint-disable-next-line react/prop-types
  const isInvalid =
    // eslint-disable-next-line react/prop-types
    form && form.errors && form.touched[field.name] && form.errors[field.name]

  return (
    <>
      <input  {...field} {...props} className="px-6 h-14 w-full mb-6 text-white border-secondary-80 bg-secondary-100 hover:border-primary transition-all border-2 border-solid  rounded-md w-full focus:outline-none"/>
      {/* eslint-disable-next-line react/prop-types */}
      {isInvalid && <FormText color="danger">{isInvalid}</FormText>}
    </>
  )
}
export default Input
