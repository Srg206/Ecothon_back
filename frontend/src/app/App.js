import MainPage from '../pages/MainPage/MainPage';
import '../shared/styles/App.scss';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

//* COMPONENTS
import Header from '../widgets/Header/Header';
import Footer from '../widgets/Footer/Footer';
import LoginPage from '../pages/LoginPage/LoginPage';
import EventItemPage from '../pages/EventItemPage/EventItemPage';
import { useEffect, useState } from 'react';
import fake from '../fake/fakeData';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import MyEventsPage from '../pages/MyEventsPage/MyEventsPage';
import CollectionPage from '../pages/CollectionPage/CollectionPage';
import PointsPage from '../pages/PointsPage/PointsPage';

function App() {
  const location = useLocation(); 
  const [events, setEvents] = useState();

  useEffect(() => {
    const response = fake.getEvents();
    setEvents(response);
  }, []);

  const isLoginPage = location.pathname === '/login';

  return (
    <div className="App">
      { !isLoginPage && <Header /> }

      {/* Условно рендерим _container для всех страниц, кроме LoginPage */}
      { 
        !isLoginPage ? (
          <div className="_container">
            <Routes>
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route path="/" element={<MainPage events={events} />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/event/:id" element={<EventItemPage events={events} />} />
              <Route path="/profile" element={<ProfilePage/>}/>
              <Route path="/myevents" element={<MyEventsPage/>}/>
              <Route path="/collections/:variant" element={<CollectionPage/>}/>
              <Route path="/points" element={<PointsPage/>}/>
            </Routes>
          </div>
        ) : (
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        )
      }

      { !isLoginPage && <div className="_container"><Footer /></div> }
    </div>
  );
}

export default App;
