import React from 'react'
import cl from './EventItem.module.scss'
import Tag from '../../shared/modules/Tag/Tag'

function EventItem({item}) {

    const {title, image, tags, description} = item;

  return (
    <div className={cl.eventItem}>
        <div className={cl.eventItem__image}>
            <img src={image} alt={title} />
        </div>
        <div className={cl.eventItem__content}>
            <div className={cl.content__tags}>  
                {
                    tags && tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                    ))
                }
            </div>
            <h3 className={cl.content__title}>{title}</h3>
            <div className={cl.content__description}>{description}</div>
        </div>
    </div>
  )
}

export default EventItem