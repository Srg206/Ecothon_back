import React from 'react'
import cl from './Tag.module.scss'

function Tag({children}) {
  return (
    <div className={cl.tag}>
        {children}
    </div>
  )
}

export default Tag