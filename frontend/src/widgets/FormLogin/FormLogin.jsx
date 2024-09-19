import React from 'react'
import cl from './FormLogin.module.scss'

//* COMPONENTS
import InputGreen from '../../shared/modules/InputGreen/InputGreen'
import BtnGreen from '../../shared/modules/BtnGreen/BtnGreen'

function FormLogin({onLoginSuccess, email, password, setEmail, setPassword, onSwapLoginToRegistration}) {
  return (
    <div className={cl.formLogin}>
        <div className={cl.formLogin__title}>Вход</div>
        <div className={cl.formLogin__inputs}>
            <InputGreen placeholder="Почта" value={email} setValue={setEmail}/>
            <InputGreen placeholder="Пароль" value={password} setValue={setPassword}/>
            <div className={cl.formLogin__btnReg} onClick={onSwapLoginToRegistration}>Зарегистрироваться</div>
        </div>
        <div className={cl.formLogin__btn}>
            <BtnGreen width="119px" onClick={onLoginSuccess}>Войти</BtnGreen>
        </div>
    </div>
  )
}

export default FormLogin