import MainPage from '../pages/MainPage/MainPage';
import '../shared/styles/App.scss';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

//* COMPONENTS
import Header from '../widgets/Header/Header'
import Footer from '../widgets/Footer/Footer';
import LoginPage from '../pages/LoginPage/LoginPage';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      { location.pathname !== '/login' && <Header/> }

      <div className='_container'>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace/>}/>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
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
