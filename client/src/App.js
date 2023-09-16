// import Navbar from './Pages/Home/Navbar'
import "./App.css";
import { Router, Routes, Route, Link } from "react-router-dom";
import {  Landing } from './Pages/Home/Landing';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Reg_Company from "./Pages/Reg_Company/Reg_Company";
import Reg_College from "./Pages/Reg_College/Reg_College";

function App() {
  return (
    
      <div className="App">
        
        {/* <Navbar /> */}
          {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Registration/Company" element={<Reg_Company/>} />
          <Route path="/Registration/College" element={<Reg_College/>} />
          {/* <Route path="/addproducts" element={<AddProducts/>} />
          <Route path="/editproducts/:id" exact={true} element={<EditProducts/>} /> */}
  
        </Routes>
        
      </div>



   
  );
}

export default App;
