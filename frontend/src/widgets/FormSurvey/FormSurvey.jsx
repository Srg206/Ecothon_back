import React, { useState } from 'react'
import cl from './FormSurvey.module.scss'
import SurveyItem from '../../shared/modules/SurveyItem/SurveyItem'
import next from '../../shared/assets/next.svg'
import BtnGreenReverse from '../../shared/modules/BtnGreenReverse/BtnGreenReverse';

function FormSurvey({interests = [], onSurveySuccess}) {

    const [selectedInterests, setSelectedInterests] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const displayedInterests = interests.slice(currentIndex, currentIndex + 6);

    const handleSelectInterest = (interest) => {
        setSelectedInterests(prevState => 
            prevState.includes(interest)
                ? prevState.filter(item => item !== interest)
                : [...prevState, interest]
        );
    };

    const handleNext = () => {
        if(currentIndex + 6 < interests.length) {
            setCurrentIndex(prevIndex => prevIndex + 6);
        }
    }

    const handleBack = () => {
        if(currentIndex - 6 >= 0){
            setCurrentIndex(prevIndex => prevIndex - 6);
        }
    }

    const handleSubmit = () => {
        onSurveySuccess();
        console.log("Выбранные интересы: ", selectedInterests);
    }

  return (
    <div className={cl.formSurvey}>
        <div className={cl.formSurvey__title}>Выберите категории, которые вас интересуют</div>
        <div className={cl.formSurvey__subtitle}>Пройдите небольшой тест и мы сможем лучше рекомендовать вам события!</div>
        <div className={cl.formSurvey__choices}>
            {
                displayedInterests && displayedInterests.map((interest, index) => (
                    <SurveyItem 
                        interest={interest} 
                        isSelected={selectedInterests.includes(interest)} 
                        key={index}
                        onClick={() => handleSelectInterest(interest)}
                    />
                ))
            }
        </div>
        <div className={cl.formSurvey__actions}>
            {
                currentIndex + 6 < interests.length 
                ?
                    <div className={cl.actions__next} onClick={handleNext}><img src={next} alt="next" /></div>
                : 
                    <div className={cl.actions__last}>
                        <div className={cl.actions__back} onClick={handleBack}><img src={next} alt="back" /></div>
                        <BtnGreenReverse onClick={() => handleSubmit()}>Сохранить</BtnGreenReverse>
                    </div>
            }
            <div className={cl.actions__skip} onClick={handleSubmit}>Пропустить</div>
        </div>
    </div>
  )
}

export default FormSurvey