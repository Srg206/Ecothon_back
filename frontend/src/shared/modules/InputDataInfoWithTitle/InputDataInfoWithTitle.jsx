import React from 'react'
import cl from './InputDataInfoWithTitle.module.scss'

function InputDataInfoWithTitle({title, placeholder, setValue, value}) {

  return (
    <div className={cl.inputDataInfoWithTitle}>
        <div className={cl.inputDataInfoWithTitle__title}>{title}</div>
        <input type="text" placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
  )
}

export default InputDataInfoWithTitle