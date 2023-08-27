import Navbar from './Pages/Home/Navbar'
import "./App.css";
import { Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './Pages/Home/Home';
function App() {
  return (
    
      <div className="App">
        
        <Navbar />
          <Home />
        <Routes>
          {/* <Route path="/" element={<AllProducts/>} /> */}
          {/* <Route path="/addproducts" element={<AddProducts/>} />
          <Route path="/editproducts/:id" exact={true} element={<EditProducts/>} /> */}
  
        </Routes>
        
      </div>



   
  );
}

export default App;
