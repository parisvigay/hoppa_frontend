import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import About from './pages/About/About';
import MyPubs from './pages/MyPubs/MyPubs';

export default function App() {
  const location = useLocation();
  const isHomepage = location.pathname === '/home';

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/my-pubs" element={<MyPubs />}/>
      </Routes>
      {isHomepage && (
        <Footer />
      )}
    </div>
  );
}