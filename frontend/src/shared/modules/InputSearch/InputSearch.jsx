import React from 'react'
import cl from './InputSearch.module.scss'

function InputSearch() {
  return (
    <div className={cl.inputSearch}>
        <input type="search" placeholder='Поиск'/>
    </div>
  )
}

export default InputSearch