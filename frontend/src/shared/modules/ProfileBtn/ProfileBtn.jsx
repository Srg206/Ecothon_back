import React from 'react'
import cl from './ProfileBtn.module.scss'
import profile from '../../assets/profile.svg'

function ProfileBtn({username}) {
  return (
    <div className={cl.profileBtn}>
        <div className={cl.profileBtn__username}>{username}</div>
        <img src={profile} alt="profile btn" />
    </div>
  )
}

export default ProfileBtn