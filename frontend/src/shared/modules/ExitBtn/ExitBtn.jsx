import React from 'react'
import cl from './ExitBtn.module.scss'
import logout from '../../assets/logout.svg'

function ExitBtn() {
  return (
    <div className={cl.exitBtn}>
        <img src={logout} alt="logout icon" />
        <div className={cl.exitBtn__text}>Выйти</div>
    </div>
  )
}

export default ExitBtn