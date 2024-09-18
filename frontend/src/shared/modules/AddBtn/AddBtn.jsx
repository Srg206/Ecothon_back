import React from 'react'
import cl from './AddBtn.module.scss'
import plus from '../../assets/plus.svg'

function AddBtn() {
  return (
    <div className={cl.addBtn}>
        <img src={plus} alt="plus" />
    </div>
  )
}

export default AddBtn