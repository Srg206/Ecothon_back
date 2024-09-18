import React from 'react'
import cl from './FormLogin.module.scss'

//* COMPONENTS
import InputGreen from '../../shared/modules/InputGreen/InputGreen'
import BtnGreen from '../../shared/modules/BtnGreen/BtnGreen'

function FormLogin({onLoginSuccess}) {
  return (
    <div className={cl.formLogin}>
        <div className={cl.formLogin__title}>Вход</div>
        <div className={cl.formLogin__inputs}>
            <InputGreen placeholder="Почта"/>
            <InputGreen placeholder="Пароль"/>
            <div className={cl.formLogin__btnReg} onClick={onLoginSuccess}>Зарегистрироваться</div>
        </div>
        <div className={cl.formLogin__btn}>
            <BtnGreen width="119px">Войти</BtnGreen>
        </div>
    </div>
  )
}

export default FormLogin