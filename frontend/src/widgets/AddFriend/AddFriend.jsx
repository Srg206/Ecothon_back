
import React from 'react'
import cl from './AddFriend.module.scss'
import InputGreen from '../../shared/modules/InputGreen/InputGreen'
import BtnGreen from '../../shared/modules/BtnGreen/BtnGreen'

function AddFriend() {
  return (
    <div className={cl.addFriend}>
        <div className={cl.addFriend__text}>
            <div className={cl.text__title}>Добавить друга</div>
            <div className={cl.text__subtitle}>Второй человек должен принять ваш запрос дружбы у себя в личном кабинете</div>
        </div>
        <InputGreen placeholder="Почта"/>
        <div className={cl.addFriend__btn}>
            <BtnGreen width="161px">Отправить</BtnGreen>
        </div>
    </div>
  )
}

export default AddFriend