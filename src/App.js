import './App.css';
import Navbar from './Pages/SharePage/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Reviews from './Pages/Reviews/Reviews';
import Appointment from './Pages/Appointment/Appoinment';
import Contactus from './Pages/Contactus/Contactus';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contactus' element={<Contactus></Contactus>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>


    </div>
  );
}

export default App;
