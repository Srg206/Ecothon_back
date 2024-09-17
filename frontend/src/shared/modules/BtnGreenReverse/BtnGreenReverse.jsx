import React from 'react'
import cl from './BtnGreenReverse.module.scss'

function BtnGreenReverse({children, onClick}) {
  return (
    <div className={cl.btnGreenReverse} onClick={() => onClick()}>
        {children}
    </div>
  )
}

export default BtnGreenReverse