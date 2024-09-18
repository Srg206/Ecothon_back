import React, { useEffect, useState } from 'react'
import cl from './MainPage.module.scss'

import { Link, useLocation } from 'react-router-dom'
import fake from '../../fake/fakeData'

//* COMPONENTS
import FormRegistration from '../../widgets/FormRegistration/FormRegistration'
import EventItem from '../../widgets/EventItem/EventItem';
import AdBanner from '../../widgets/AdBanner/AdBanner';
import Filter from '../../shared/modules/Filter/Filter';
import InputSearch from '../../shared/modules/InputSearch/InputSearch';

function MainPage({events}) {

  const [recentEvents, setRecentEvents] = useState();
  const [topics, setTopics] = useState();
  const [isLoginUser] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const responseRecentEvents = fake.getRecentEvents();
    const responseTopics = fake.getTopics();
    setRecentEvents(responseRecentEvents);
    setTopics(responseTopics);
  }, [])

  return (
    <div className={cl.mainPage}>
      
      {
        !isLoginUser && (
          <div>
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
          </div>
        )
      }

      <div className={cl.mainPage__events}>
        {
          isLoginUser && (
            <div className={cl.events__nav}>
                <Link to="/" className={`${cl.eventsNav__link} ${location.pathname === "/" ? cl.activeLink : " "}`}>События</Link>
                <Link to="/map" className={`${cl.eventsNav__link} ${location.pathname === "/map" ? cl.activeLink : " "}`}>Карта</Link>
                <Link to="/blog" className={`${cl.eventsNav__link} ${location.pathname === "/blog" ? cl.activeLink : " "}`}>Блог</Link>
                <Link to="/surveys" className={`${cl.eventsNav__link} ${location.pathname === "/surveys" ? cl.activeLink : " "}`}>Опросы</Link>
            </div>
          )
        }
        <div className={cl.events__actions}>
          
          <Filter topics={topics}/>
          <InputSearch/>
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