import React from 'react'
import cl from './LogoComponent.module.scss'

function LogoComponent() {
  return (
    <div className={cl.logo}>
        <div className={cl.logo__img}/>
        <span className={cl.logo__text}>Экопросвет</span>
    </div>
  )
}

export default LogoComponent