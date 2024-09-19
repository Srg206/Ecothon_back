import React from 'react'
import cl from './PointItem.module.scss'
import money from '../../shared/assets/point.svg'

function PointItem({title, image, point, date}) {
  return (
    <div className={cl.pointItem}>
        <div className={cl.pointItem__left}>
            <div className={cl.pointItem__image}>
                <img src={image} alt={title} />
            </div>
            <div className={cl.pointItem__text}>
                <div className={cl.text__title}>{title}</div>
                <div className={cl.text__date}>{date}</div>
            </div>
        </div>
        <div className={cl.pointItem__score}>
            <img src={money} alt="money icon" />
            <div className={cl.score__text}>
                <span>{point}</span><br/>
                экоинов
            </div>
        </div>
    </div>
  )
}

export default PointItem