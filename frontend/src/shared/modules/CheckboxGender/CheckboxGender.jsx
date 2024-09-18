import React from 'react'
import cl from './CheckboxGender.module.scss'

function CheckboxGender({gender, isActive, onClick}) {
  return (
    <div className={`${cl.checkboxGender} ${isActive ? cl.active : ' '}`} onClick={onClick}>
        {gender}
    </div>
  )
}

export default CheckboxGender