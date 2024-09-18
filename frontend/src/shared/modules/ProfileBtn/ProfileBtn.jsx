import React from 'react'
import cl from './ProfileBtn.module.scss'
import profile from '../../assets/profile.svg'
import { useNavigate } from 'react-router-dom'

function ProfileBtn({username}) {

  const navigate = useNavigate();

  const linkToProfile = () => {
    navigate('/profile');
  }

  return (
    <div className={cl.profileBtn} onClick={() => linkToProfile()}>
        <div className={cl.profileBtn__username}>{username}</div>
        <img src={profile} alt="profile btn" />
    </div>
  )
}

export default ProfileBtn