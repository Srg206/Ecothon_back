import React from 'react'
import cl from './Header.module.scss'
import NavLink from '../../shared/modules/NavLink/NavLink'
import BtnGreenReverse from '../../shared/modules/BtnGreenReverse/BtnGreenReverse'
import { useLocation } from 'react-router-dom'

import support from '../../shared/assets/support.svg'
import LogoComponent from '../../shared/modules/LogoComponent/LogoComponent'

function Header() {

    let location = useLocation();

    const navigateToLogin = () => {
        console.log("LOGIN NAVIGATE");
    }

  return (
    <div className={cl.header}>
        <LogoComponent/>
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
                <BtnGreenReverse onClick={navigateToLogin}>Войти</BtnGreenReverse>
            </div>
        </div>
    </div>
  )
}

export default Header