import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Schedule from './Components/Schedule';
import Login from './Components/Login/Login';
import Profile from './Components/Profile';
import Team from './Components/Team';
import { useEffect, useState } from 'react';

function App() {
  // const [username, setUsername] = useState('');
  

  // localStorage.setItem('isLoggedIn', false);
  // localStorage.setItem('username', '');


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/schedule' element={<Schedule />} />
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