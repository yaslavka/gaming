import React from "react";
import cl from './MyInput.module.css';
import { FormText } from 'reactstrap'

function MyInput ({classesInput, field, form, className, ...props}){
  // eslint-disable-next-line react/prop-types
  const isInvalid =
    // eslint-disable-next-line react/prop-types
    form && form.errors && form.touched[field.name] && form.errors[field.name]
    return (
        <div className={`${cl.inputBlock} ${isInvalid ? cl.invalid : ''}`} >
            <input className={[cl.myInput, classesInput].join` `} {...field} {...props}/>
          {isInvalid && <FormText color="danger">{isInvalid}</FormText>}
        </div>

    )
}

export default MyInput
