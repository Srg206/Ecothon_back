import React from 'react'
import cl from './Footer.module.scss'
import {Link} from 'react-router-dom'

//* ICONS
import telegram from '../../shared/assets/telegram.svg'
import email from '../../shared/assets/email.svg'
import phone from '../../shared/assets/phone.svg'
import LogoComponent from '../../shared/modules/LogoComponent/LogoComponent'

function Footer() {
  return (
    <div className={cl.footer}>
        <div className={cl.footer__logo}>
            <LogoComponent/>
        </div>
        <div className={cl.footer__content}>
            <div className={cl.content__nav}>
                <Link to="/">Главная</Link>
                <Link to="/blog">Блог</Link>
                <Link to="/surveys">Опросы</Link>
            </div>
            <div className={cl.content__nav}>
                <Link to="/support">Поддержка</Link>
                <Link to="/lk">Личный кабинет</Link>
            </div>
            <div className={cl.content__contacts}>
                <div className={cl.contacts__title}>Контактная информация</div>
                <div>.......@mail.ru</div>
                <div>+7...............</div>
                <div className={cl.contacts__socials}>
                    <img src={telegram} alt="telegram icon" />
                    <img src={email} alt="email icon" />
                    <img src={phone} alt="phone icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer