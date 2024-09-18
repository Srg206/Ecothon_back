import React from 'react'
import cl from './SurveyItem.module.scss'
import check from '../../assets/check.svg'

function SurveyItem({interest, isSelected, onClick}) {

    const {text, image} = interest;

  return (
    <div className={cl.surveyItem} onClick={onClick}>
        <div className={cl.surveyItem__text}>{text}</div>
        {isSelected && (
            <div className={cl.surveyItem__check}>
                <img src={check} alt="check icon" />
            </div>
        )}
        <img className={`${cl.surveyItem__image} ${isSelected ? cl.selected : ''}`} src={image} alt={text} />
    </div>
  )
}

export default SurveyItem