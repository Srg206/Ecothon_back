import React from 'react'
import cl from './FormRegistration.module.scss'
import BtnGreen from '../../shared/modules/BtnGreen/BtnGreen'
import InputGreen from '../../shared/modules/InputGreen/InputGreen'

function FormRegistration() {
  return (
    <div className={cl.formRegistration}>
        <div className={cl.formRegistration__title}>Регистрируйся и получи больше возможностей</div>
        <div className={cl.formRegistration__inputs}>
            <InputGreen placeholder="Введите ваше имя"/>
            <InputGreen placeholder="Введите ваш email"/>
        </div>
        <div className={cl.formRegistration__btn}>
            <BtnGreen width="265px">Зарегистрироваться</BtnGreen>
        </div>
    </div>
  )
}

export default FormRegistration