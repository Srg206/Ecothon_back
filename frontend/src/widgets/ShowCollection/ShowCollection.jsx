import React from 'react'
import cl from './ShowCollection.module.scss'

function ShowCollection({icon, bg, rank, reason}) {
  return (
    <div className={cl.showCollection}>
        {
          rank && <div className={cl.title}>
            вы достигли звания<br/>
            <span>{rank}</span> <br/>
            <div>{reason}</div>
          </div>
        }
        { icon && <img className={cl.showCollection__icon} src={icon} alt="icon collection" />}
        { bg && <img src={bg} alt="bg" />}
    </div>
  )
}

export default ShowCollection