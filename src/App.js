import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './Components/NavbarComponents/Navbar';
import Home from './Components/HomeComponents/Home';
import Schedule from './Components/ScheduleComponents/Schedule';
import Login from './Components/LoginComponents/Login';
import Profile from './Components/Profile';
import Team from './Components/TeamComponents/Team';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/schedule/:dayId' element={<Schedule />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;


/*
Home
Schedule
Login
Profile
Teams
*/