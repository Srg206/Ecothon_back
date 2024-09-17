import React from 'react'
import cl from './Header.module.scss'
import NavLink from '../../shared/modules/NavLink/NavLink'
import BtnGreenReverse from '../../shared/modules/BtnGreenReverse/BtnGreenReverse'
import { useLocation } from 'react-router-dom'

import support from '../../shared/assets/support.svg'

function Header() {

    let location = useLocation();

  return (
    <div className={cl.header}>
        <div className={cl.header__logo}>
            <div className={cl.headerLogo__img}/>
            <span className={cl.headerLogo__text}>Экопросвет</span>
        </div>
        <nav className={cl.header__nav}>
            <NavLink text="Главная" to="/" isActive={location.pathname === "/"}/>
            <NavLink text="Блог" to="/blog" isActive={location.pathname === "/blog"}/>
            <NavLink text="Опросы" to="/surveys" isActive={location.pathname === "/surveys"}/>        
        </nav>
        <div className={cl.header__login}>
            <div className={cl.headerLogin__support}>
                <img src={support} alt="support_btn" />
            </div>
            <div className={cl.headerLogin__btn}>
                <BtnGreenReverse>Войти</BtnGreenReverse>
            </div>
        </div>
    </div>
  )
}

export default Header