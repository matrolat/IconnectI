// import Navbar from './Pages/Home/Navbar'
import "./App.css";
import { Router, Routes, Route, Link } from "react-router-dom";
import {  Landing } from './Pages/Home/Landing';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Reg_Company from "./Pages/Reg_Company/Reg_Company";

function App() {
  return (
    
      <div className="App">
        
        {/* <Navbar /> */}
          {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Registration/Company" element={<Reg_Company/>} />
          {/* <Route path="/addproducts" element={<AddProducts/>} />
          <Route path="/editproducts/:id" exact={true} element={<EditProducts/>} /> */}
  
        </Routes>
        
      </div>



   
  );
}

export default App;
