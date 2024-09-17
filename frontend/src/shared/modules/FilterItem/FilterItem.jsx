import React from 'react'
import cl from './FilterItem.module.scss'

function FilterItem({title, isActive}) {
  return (
    <div className={`${cl.filterItem} ${isActive ? cl.active : " "}`}>{title}</div>
  )
}

export default FilterItem