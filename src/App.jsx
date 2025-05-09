


import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Home from './pages/home';
import Doctors from './pages/Doctors'
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import About from './pages/About';
import Contact from './pages/Contact';
import MyAppointment from './pages/MyAppointment';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

 const App = () => {
  return (
    <div className='mx-4 sm:{10%}' >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/doctors:speciality' element={<Doctors />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-appiontment' element={<MyAppointment/>}/>
        <Route path='/appointment:doctorsID' element={<Appointment />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
