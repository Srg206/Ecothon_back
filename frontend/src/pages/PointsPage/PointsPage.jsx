import React, { useEffect, useState } from 'react'
import cl from './PointsPage.module.scss'
import ShowCollection from '../../widgets/ShowCollection/ShowCollection'
import points from '../../shared/assets/points.svg'
import PointItem from '../../widgets/PointItem/PointItem'
import fake from '../../fake/fakeData'
import bgBig from '../../shared/assets/bg/bgBig.png'

function PointsPage() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const response = fake.getEvents();
        setEvents(response);
    }, [])

  return (
    <div className={cl.pointsPage}>
        <div className={cl.pointsPage__title}>Баллы и достижения</div>
        <div className={cl.pointsPage__score}>
            <div className={cl.score__points}>
                <img src={points} alt="points icon" />
                <div className={cl.point}>
                    <span>120</span><br/>
                    экоинов
                </div>
            </div>
            <div className={cl.score__rank}>
                <ShowCollection rank="Начинающий эколог" reason="за первые шаги в мероприятиях и активностях" bg={bgBig} width="930px"/>
            </div>
        </div>
        <div className={cl.pointsPage__main}>
            <div className={cl.main__nav}>
                <div className={cl.mainNav__link}>Мероприятия</div>
                <div className={cl.mainNav__link}>Опросы</div>
                <div className={cl.mainNav__link}>Отзывы</div>
            </div>
            <div className={cl.main__events}>
                {
                    events && events.map((event) => (
                        <PointItem 
                            title={event.title}
                            image={event.image}
                            point={event.point}
                            date={event.date}
                            key={event.id}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default PointsPage