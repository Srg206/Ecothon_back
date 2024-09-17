import React from 'react'
import cl from './BtnGreen.module.scss'

function BtnGreen({children, onClick, ...props}) {
  return (
    <div className={cl.btnGreen} style={{ width: props.width}} onClick={() => onClick()}> 
        {children}
    </div>
  )
}

export default BtnGreen