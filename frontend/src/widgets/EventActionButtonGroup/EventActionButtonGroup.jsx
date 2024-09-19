import React from 'react'
import cl from './EventActionButtonGroup.module.scss'

function EventActionButtonGroup({bg, title, icon}) {
  return (
    <div className={cl.eventActionButtonGroup}>
        <div className={cl.main}>
            <img className={cl.main__icon} src={icon} alt={title} />
            <div className={cl.main__title}>{title}</div>
        </div>
        {/* <img className={cl.background} src={bg} alt="bg" /> */}
    </div>
  )
}

export default EventActionButtonGroup