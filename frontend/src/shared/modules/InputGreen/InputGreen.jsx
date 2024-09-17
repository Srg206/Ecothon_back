import React from 'react'
import cl from "./InputGreen.module.scss"

function InputGreen({placeholder}) {
  return (
    <div>
        <input className={cl.inputGreen} type="text" placeholder={placeholder} />
    </div>
  )
}

export default InputGreen