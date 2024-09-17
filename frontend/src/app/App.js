import MainPage from '../pages/MainPage/MainPage';
import '../shared/styles/App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';

//* COMPONENTS
import Header from '../widgets/Header/Header'
import Footer from '../widgets/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>

      <div className='_container'>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace/>}/>
          <Route path="/" element={<MainPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
