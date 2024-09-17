import React from 'react'
import cl from './MainPage.module.scss'
import FormRegistration from '../../widgets/FormRegistration/FormRegistration'

//* COMPONENTS

function MainPage() {
  return (
    <div className={cl.mainPage}>
      <div className={`${cl.mainPage__spots} ${cl.spot1}`}><span></span></div>
      <div className={`${cl.mainPage__spots} ${cl.spot2}`}><span></span></div>
      <div className={cl.mainPage__promo}>
        <div className={cl.promo__content}>
          <h1 className={cl.promoContent__title}>экопросвет</h1>
          <p className={cl.promoContent__description}>
            Платформа, на которой собраны все экологические события Москвы.<br/>
          
            Мы объединяем неравнодушных людей!
          </p>
        </div>
        <div className={cl.promo__form}>
          <FormRegistration/>
        </div>
      </div>
      <div className={cl.mainPage__statistics}>

      </div>
    </div>
  )
}

export default MainPage