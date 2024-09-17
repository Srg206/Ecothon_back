import React, { useState } from 'react'
import cl from './Filter.module.scss'
import FilterItem from '../FilterItem/FilterItem'

function Filter({topics}) {

    const [isActive, setIsActive] = useState(false);

  return (
    <div className={cl.filter}>
        <div className={cl.filter__btn} onClick={() => setIsActive(prevState => !prevState)}>Фильтр</div>
        {
            isActive && 
            <div className={cl.filter__dropDownList}>
                <div className={cl.dropDownList__items}>
                    <FilterItem title="Ближайшие"/>
                    <FilterItem title="Популярные"/>
                </div>
                <div className={cl.dropDownList__separator}/>
                <div className={cl.dropDownList__items}>
                    {
                        topics && topics.map((topic, index) => (
                            <FilterItem title={topic} key={index}/>
                        ))
                    }
                </div>
            </div>
        }
        
    </div>
  )
}

export default Filter