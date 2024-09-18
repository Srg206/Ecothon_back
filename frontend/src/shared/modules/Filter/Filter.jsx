import React, { useState } from 'react'
import cl from './Filter.module.scss'
import FilterItem from '../FilterItem/FilterItem'

function Filter({topics}) {

    const [isActive, setIsActive] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const toggleFilter = (filter) => {
        setSelectedFilters((prevSelectedFilters) => {
            if(prevSelectedFilters.includes(filter)){
                return prevSelectedFilters.filter((f) => f !== filter);
            }
            return [...prevSelectedFilters, filter];
        });
    };

  return (
    <div className={cl.filter}>
        <div className={cl.filter__btn} onClick={() => setIsActive(prevState => !prevState)}>Фильтр</div>
        {
            isActive && 
            <div className={cl.filter__dropDownList}>
                <div className={cl.dropDownList__items}>
                    <FilterItem 
                        title="Ближайшие" 
                        isSelected={selectedFilters.includes('Ближайшие')}
                        onClick={() => toggleFilter('Ближайшие')}
                    />
                    <FilterItem 
                        title="Популярные"
                        isSelected={selectedFilters.includes('Популярные')}
                        onClick={() => toggleFilter('Популярные')}
                    />
                </div>
                <div className={cl.dropDownList__separator}/>
                <div className={cl.dropDownList__items}>
                    {
                        topics && topics.map((topic, index) => (
                            <FilterItem 
                                title={topic} 
                                key={index}
                                isSelected={selectedFilters.includes(topic)}
                                onClick={() => toggleFilter(topic)}
                            />
                        ))
                    }
                </div>
            </div>
        }
        
    </div>
  )
}

export default Filter