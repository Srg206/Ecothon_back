import React from 'react'
import cl from './EventActionButtonGroup.module.scss'
import { Link } from 'react-router-dom'

function EventActionButtonGroup({bg, title, icon, path}) {
  return (
    <Link to={path} className={cl.eventActionButtonGroup__link}>
        <div className={cl.eventActionButtonGroup}>
            <div className={cl.main}>
                <img className={cl.main__icon} src={icon} alt={title} />
                <div className={cl.main__title}>{title}</div>
            </div>
            { bg && <img className={cl.background} src={bg} alt="bg" />}
        </div>
    </Link>
  )
}

export default EventActionButtonGroup