import React from 'react'
import cl from './AdBanner.module.scss'
import adBanner from '../../shared/assets/adBanner.png'

function AdBanner() {
  return (
    <div className={cl.adBanner}>
        <div className={cl.adBanner__text}>
          <div className={cl.text__title}>
            Регистрируйся на платформе и заработай баллы за участие в мероприятиях!
          </div>
          <div className={cl.text__subtitle}>
            За баллы можно получить ценные призы: мерч, скидки, промокоды и проходки на крутые мероприятиях)
          </div>
        </div>
        <div className={cl.adBanner__btn}>
          Зарегистрироваться
        </div>
        <img className={cl.adBanner__image} src={adBanner} alt={adBanner} />
    </div>
  )
}

export default AdBanner