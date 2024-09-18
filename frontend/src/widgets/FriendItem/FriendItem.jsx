import React from 'react'
import cl from './FriendItem.module.scss'

function FriendItem({username, image}) {
  return (
    <div className={cl.friendItem}>
        <img className={cl.friendItem__image} src={image} alt="username avatar" />
        <div className={cl.friendItem__username}>{username}</div>
    </div>
  )
}

export default FriendItem