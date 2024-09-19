import React, { useState } from 'react'
import cl from './Header.module.scss'
import NavLink from '../../shared/modules/NavLink/NavLink'
import BtnGreenReverse from '../../shared/modules/BtnGreenReverse/BtnGreenReverse'
import { useLocation, useNavigate } from 'react-router-dom'

import support from '../../shared/assets/support.svg'
import LogoComponent from '../../shared/modules/LogoComponent/LogoComponent'
import ProfileBtn from '../../shared/modules/ProfileBtn/ProfileBtn'

function Header() {

    const location = useLocation();
    const navigate = useNavigate();
    const [isLoginUser] = useState(true);

    const navigateToLogin = () => {
        navigate('/login');
        console.log("LOGIN NAVIGATE");
    }

  return (
    <div className={cl.header}>
        <LogoComponent/>
        <nav>
            {
                isLoginUser 
                ?
                <div className={cl.header__nav}>
                    <NavLink text="Главная" path="/" isActive={location.pathname === "/"}/>
                    <NavLink text="Мои события" path="/myevents" isActive={location.pathname === "/myevents"}/>
                    <NavLink text="Баллы" path="/points" isActive={location.pathname === "/points"}/>
                </div>
                :
                <div className={cl.header__nav}>
                    <NavLink text="Главная" path="/" isActive={location.pathname === "/"}/>
                    <NavLink text="Блог" path="/blog" isActive={location.pathname === "/blog"}/>
                    <NavLink text="Опросы" path="/surveys" isActive={location.pathname === "/surveys"}/>
                </div>
            }
                 
        </nav>
        <div className={cl.header__login}>
            <div className={cl.headerLogin__support}>
                <img src={support} alt="support_btn" />
            </div>
            {
                isLoginUser 
                ?
                <div className={cl.header_profileBtn}>
                    <ProfileBtn username="Иванова Татьяна"/>
                </div>
                :
                <div className={cl.headerLogin__btn}>
                    <BtnGreenReverse onClick={navigateToLogin}>Войти</BtnGreenReverse>
                </div>
            }
        </div>
    </div>
  )
}

export default Header