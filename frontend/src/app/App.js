import MainPage from '../pages/MainPage/MainPage';
import '../shared/styles/App.scss';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

//* COMPONENTS
import Header from '../widgets/Header/Header'
import Footer from '../widgets/Footer/Footer';
import LoginPage from '../pages/LoginPage/LoginPage';
import EventItemPage from '../pages/EventItemPage/EventItemPage';
import { useEffect, useState } from 'react';
import fake from '../fake/fakeData';

function App() {

  const location = useLocation(); 

  const [events, setEvents] = useState();

  useEffect(() => {
    const response = fake.getEvents();
    setEvents(response);
  }, [])

  return (
    <div className="App">
      { location.pathname !== '/login' && <Header/> }

      <div className='_container'>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace/>}/>
          <Route path="/" element={<MainPage events={events}/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/event/:id" element={<EventItemPage events={events}/>} />
        </Routes>
        {
          location.pathname !== '/login' && (
            <Footer/>
          )
        }
      </div>
    </div>
  );
}

export default App;
