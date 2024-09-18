import React from 'react'
import cl from './FilterItem.module.scss'

function FilterItem({title, isSelected, onClick}) {
  return (
    <div className={`${cl.filterItem} ${isSelected ? cl.active : " "}`} onClick={onClick}>{title}</div>
  )
}

export default FilterItem