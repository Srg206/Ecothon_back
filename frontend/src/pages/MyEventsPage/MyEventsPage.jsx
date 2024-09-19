import React, { useEffect, useState } from 'react'
import cl from './MyEventsPage.module.scss'
import fake from '../../fake/fakeData'
import EventItem from '../../widgets/EventItem/EventItem';

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
                                Добавить друзей можно в разделе <span>Профиль</span>
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