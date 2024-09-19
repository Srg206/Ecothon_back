import React from 'react'
import cl from './ChargePoints.module.scss'
import money1 from '../../shared/assets/points/money1.svg'
import money2 from '../../shared/assets/points/money2.svg'
import money3 from '../../shared/assets/points/money3.svg'
import money4 from '../../shared/assets/points/money4.svg'
import money5 from '../../shared/assets/points/money5.svg'

function ChargePoints({title, count}) {
  return (
    <div className={cl.chargePoints}>
        <div className={cl.chargePoints__title}>{title}</div>
        <div className={cl.chargePoints__score}>
            Вам начислено <br/>
            <span>{count}</span> <br/>
            экоинов
        </div>
        <div className={cl.money1}><img src={money1} alt="money1" /></div>
        <div className={cl.money2}><img src={money2} alt="money2" /></div>
        <div className={cl.money3}><img src={money3} alt="money3" /></div>
        <div className={cl.money4}><img src={money4} alt="money4" /></div>
        <div className={cl.money5}><img src={money5} alt="money5" /></div>
    </div>
  )
}

export default ChargePoints