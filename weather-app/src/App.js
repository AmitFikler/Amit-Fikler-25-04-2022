import Header from './components/Header';
import MainScreen from './components/MainScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './styles/app.css';
import FavoriteScreen from './components/FavoriteScreen';
function App() {
  return (
    <div className='App'>
      <Router>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path='/' element={<MainScreen />} />
          <Route path='/favorites' element={<FavoriteScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
