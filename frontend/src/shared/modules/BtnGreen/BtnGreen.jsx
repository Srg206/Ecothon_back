import React from 'react'
import cl from './BtnGreen.module.scss'

function BtnGreen({children, ...props}) {
  return (
    <div className={cl.btnGreen} style={{ width: props.width}}> 
        {children}
    </div>
  )
}

export default BtnGreen