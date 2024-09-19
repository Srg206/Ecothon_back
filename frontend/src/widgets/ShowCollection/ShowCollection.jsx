import React from 'react'
import cl from './ShowCollection.module.scss'

function ShowCollection({icon, bg, rank, reason, width}) {
  return (
    <div className={cl.showCollection} style={{width: width}}>
        {
          rank && <div className={cl.title}>
            вы достигли звания<br/>
            <span>{rank}</span> <br/>
            <div>{reason}</div>
          </div>
        }
        { icon && <img className={cl.showCollection__icon} src={icon} alt="icon collection" />}
        { bg && <img src={bg} alt="bg" className={cl.showCollection__bg} />}
    </div>
  )
}

export default ShowCollection