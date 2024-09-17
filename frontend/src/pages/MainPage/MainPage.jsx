import React, { useEffect, useState } from 'react'
import cl from './MainPage.module.scss'

import fake from '../../fake/fakeData'

//* COMPONENTS
import FormRegistration from '../../widgets/FormRegistration/FormRegistration'
import EventItem from '../../widgets/EventItem/EventItem';
import AdBanner from '../../widgets/AdBanner/AdBanner';

function MainPage() {

  const [events, setEvents] = useState();
  const [recentEvents, setRecentEvents] = useState();

  useEffect(() => {
    const responseEvents = fake.getEvents();
    const responseRecentEvents = fake.getRecentEvents();
    setEvents(responseEvents);
    setRecentEvents(responseRecentEvents);
  }, [])

  return (
    <div className={cl.mainPage}>
      
      <div className={`${cl.mainPage__spots} ${cl.spot1}`}><span></span></div>
      <div className={`${cl.mainPage__spots} ${cl.spot2}`}><span></span></div>

      <div className={cl.mainPage__promo}>
        <div className={cl.promo__content}>
          <h1 className={cl.promoContent__title}>экопросвет</h1>
          <div className={cl.promoContent__description}>
            <p>Платформа, на которой собраны все экологические события Москвы.</p>
            <p>Мы объединяем неравнодушных людей!</p>
          </div>
        </div>
        <div className={cl.promo__form}>
          <FormRegistration title="Регистрируйся и получи больше возможностей"/>
        </div>
      </div>

      <div className={cl.mainPage__statistics}>
        <div className={cl.statistic}>
          <p>К нам уже присоединились</p>
          <h1 className={cl.statistic__number}>10000</h1>
          <p>жителей города</p>
        </div>
        <div className={cl.statistic}>
          <p>Ежегодно проводится</p>
          <h1 className={cl.statistic__number}>5000</h1>
          <p>экологических мероприятий</p>
        </div>
      </div>

      <div className={cl.mainPage__events}>
        <div className={cl.events__nav}>
          
        </div>
        <div className={cl.events__items}>
          {
            events && events.map((item, index) => (
              <>
                <EventItem item={item} key={index}/>
                {
                  index === 5 && (
                    <AdBanner />
                  )
                }
              </>
            ))
          }
        </div>
      </div>
        
      <div className={cl.mainPage__recentEvents}>
          <div className={cl.recentEvents__title}>Недавно прошедшие события</div>
          <div className={cl.recentEvents__items}>
            {
              recentEvents && recentEvents.map((item, index) => (
                <EventItem item={item} key={index}/>
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default MainPage