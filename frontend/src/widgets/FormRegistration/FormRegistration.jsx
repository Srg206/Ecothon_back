import React from 'react'
import cl from './FormRegistration.module.scss'
import BtnGreen from '../../shared/modules/BtnGreen/BtnGreen'
import InputGreen from '../../shared/modules/InputGreen/InputGreen'

function FormRegistration({title}) {
  return (
    <div className={cl.formRegistration}>
        <div className={cl.formRegistration__title}>{title}</div>
        <div className={cl.formRegistration__inputs}>
            <InputGreen placeholder="Почта"/>
            <InputGreen placeholder="Пароль"/>
            <InputGreen placeholder="Подтверждение пароля"/>
        </div>
        <div className={cl.formRegistration__btn}>
            <BtnGreen width="265px">Зарегистрироваться</BtnGreen>
        </div>
    </div>
  )
}

export default FormRegistration