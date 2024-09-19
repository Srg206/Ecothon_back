import React from 'react'
import cl from './AgainSurvey.module.scss'
import BtnGreen from '../../shared/modules/BtnGreen/BtnGreen'
import check from '../../shared/assets/check.svg'

function AgainSurvey({onClick}) {
  return (
    <div className={cl.againSurvey}>
        <div className={cl.againSurvey__main}>
            <img src={check} alt="tick" />
            <div className={cl.main__text}>
                <div className={cl.text__title}>
                    Анкета пройдена
                </div>
                <div className={cl.text__subtitle}>
                    Вы можете пройти анкету заново в любой момент
                </div>
            </div>
        </div>
        <BtnGreen onClick={onClick}>Пройти заново</BtnGreen>
    </div>
  )
}

export default AgainSurvey