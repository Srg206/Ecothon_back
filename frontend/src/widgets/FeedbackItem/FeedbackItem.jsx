import React from 'react'
import cl from './FeedbackItem.module.scss'

function FeedbackItem({feedback}) {

    const {username, avatar, comment} = feedback;

  return (
    <div className={cl.feedbackItem}>   
        <div className={cl.feedbackItem__title}>
            <img className={cl.title__image} src={avatar} alt="avatar user" />
            <div className={cl.title__username}>{username}</div>
        </div>
        <div className={cl.feedbackItem__comment}>
            {comment}
        </div>
    </div>
  )
}

export default FeedbackItem