import React, { useState } from 'react'
import cl from "./InputGreen.module.scss"

function InputGreen({placeholder, value, setValue}) {
  
  const [isError] = useState(false);

  return (
    <div>
        <input 
          className={`${cl.inputGreen} ${isError ? cl.error : " "}`} 
          type="text" 
          placeholder={placeholder} 
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        {
          isError && (
            <div className={cl.errorText}>Данное поле должно быть заполнено</div>
          )
        }
    </div>
  )
}

export default InputGreen