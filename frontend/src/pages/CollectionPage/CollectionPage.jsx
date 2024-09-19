import React, { useEffect, useState } from 'react'
import cl from './CollectionPage.module.scss'
import { useParams } from 'react-router-dom'
import back from '../../shared/assets/back.svg'
import like from '../../shared/assets/Like.svg'
import archive from '../../shared/assets/Archive.svg'
import calendar from '../../shared/assets/Calendar.svg'
import ShowCollection from '../../widgets/ShowCollection/ShowCollection'
import fake from '../../fake/fakeData'
import EventItem from '../../widgets/EventItem/EventItem'
import { Link } from 'react-router-dom'
import bgBig from '../../shared/assets/bg/bgBig.png'

function CollectionPage() {

    const { variant } = useParams();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const response = fake.getEvents();
        setEvents(response);
    }, [])

  return (
    <div className={cl.collectionPage}>
        <Link to="/myevents" className={cl.collectionPage__link}>
            <div className={cl.collectionPage__backBtn}>
                <img src={back} alt="back icon" />
                <div className={cl.backBtn__text}>Подборки</div>
            </div>
        </Link>
        <div className={cl.collectionPage__main}>
        {
            variant === 'calendar'
            ?
            <div className={cl.collectionCalendar}>
                <div className={cl.topic}>
                    <ShowCollection icon={calendar} bg={bgBig}/>
                </div>
            </div>
            : variant === 'likes'
            ?
            <div className={cl.collectionLikes}>
                <div className={cl.topic}>
                    <ShowCollection icon={like} bg={bgBig}/>
                </div>
            </div>
            : variant === 'archive'
            ? 
            <div className={cl.collectionArchive}>
                <div className={cl.topic}>
                    <ShowCollection icon={archive} bg={bgBig}/>
                </div>
            </div>
            : <div>Такой подборки не существует!</div>
        }
        <div className={cl.main__events}>
            {
                events && events.map((event) => (
                    <EventItem item={event} key={event.id}/>
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default CollectionPage