import React from 'react'
import cl from './BtnGreenReverse.module.scss'

function BtnGreenReverse({children}) {
  return (
    <div className={cl.btnGreenReverse}>
        {children}
    </div>
  )
}

export default BtnGreenReverse