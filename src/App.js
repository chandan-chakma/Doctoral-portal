import './App.css';
import Navbar from './Pages/SharePage/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Reviews from './Pages/Reviews/Reviews';
import Appointment from './Pages/Appointment/Appoinment';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>

      </Routes>


    </div>
  );
}

export default App;
