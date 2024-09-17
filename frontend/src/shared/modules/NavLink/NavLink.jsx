import React from 'react'
import cl from './NavLink.module.scss'
import { Link } from 'react-router-dom'

function NavLink({ text, path, isActive }) {
  return (
    <div>
        <Link to={path} className={`${cl.navLink} ${isActive ? cl.active : " "}`}>{text}</Link>
    </div>
  )
}

export default NavLink