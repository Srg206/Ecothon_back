import React, { useEffect, useState } from 'react'
import cl from './MyEventsPage.module.scss'
import fake from '../../fake/fakeData'
import EventItem from '../../widgets/EventItem/EventItem';
import EventActionButtonGroup from '../../widgets/EventActionButtonGroup/EventActionButtonGroup';
import { Link } from 'react-router-dom'

import like from '../../shared/assets/Like.svg'
import archive from '../../shared/assets/Archive.svg'
import calendar from '../../shared/assets/Calendar.svg'
import bg1 from '../../shared/assets/bg/bg1.png'
import bg2 from '../../shared/assets/bg/bg2.png'
import bg3 from '../../shared/assets/bg/bg3.png'

function MyEventsPage() {

    const [historyFriends] = useState();
    const [recentlyEvents, setRecentlyEvents] = useState([]);

    useEffect(() => {
        const response = fake.getEvents();
        setRecentlyEvents(response);
    }, [])

  return (
    <div className={cl.myEventsPage}>
        <div className={cl.myEventsPage__collections}>
            <div className={cl.collections__title}>Подборки</div>
            <div className={cl.collections__content}>
                <div className={cl.content__btns}>
                    <EventActionButtonGroup title="События по записи" icon={calendar} path='/collections/calendar' bg={bg1}/>
                    <EventActionButtonGroup title="Вам понравилось" icon={like} path='/collections/likes' bg={bg2}/>
                    <EventActionButtonGroup title="Архив событий" icon={archive} path='/collections/archive' bg={bg3}/>
                </div>
                <div className={cl.content__historyFriends}>
                    <div className={cl.historyFriends__title}>События друзей</div>
                    <div className={cl.historyFriends__main}>
                        {
                            historyFriends 
                            ?
                            <div></div>
                            : 
                            <div className={cl.main__empty}>
                                Добавить друзей можно в разделе <Link to="/profile" className={cl.empty__link}><span>Профиль</span></Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className={cl.myEventPage__recentlyEvents}>
            <div className={cl.recentlyEvents__title}>Вы недавно смотрели</div>
            <div className={cl.recentlyEvents__items}>
                {
                recentlyEvents && recentlyEvents.map((event, index) => (
                    <EventItem item={event} key={index}/>
                ))   
                }
            </div>
        </div>
    </div>
  )
}

export default MyEventsPage