// import Navbar from './Pages/Home/Navbar'
import "./App.css";
import { Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Reg_Company from "./Pages/Reg_Company/Reg_Company";
import Reg_College from "./Pages/Reg_College/Reg_College";
import Company_Activation from "./Pages/Company_Activation/Company_Activation";
import Otp from "./Pages/Otp/Otp";
import Intern_Posting from "./Pages/Intern_Posting.jsx/Intern_Posting";
import Company_Dashboard from "./Pages/Company_Dashboard/Company_Dashboard";
import SearchCandidates from "./Pages/Search Candidates/SearchCandidates";
import ViewPosting from "./Pages/ViewPosting/ViewPosting";
import ActiveProfiles from "./Pages/ActiveProfiles/ActiveProfiles";
import ResetPassword from "./Pages/Password/ResetPassword";
import ForgotPassword from "./Pages/Password/ForgotPassword";

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
          <Route path="/Activation/:email" element={<Company_Activation/>} />
          <Route path='/otp/:email' element={<Otp/>} />
          <Route path="/Intern_Posting/:email" element={<Intern_Posting/>} />
          <Route path="/dashboard/:email" element={<Company_Dashboard/>} />
          <Route path="/SearchCandidates/:email" element={<SearchCandidates/>} />
          <Route path="/ViewPosting/:email" element={<ViewPosting/>} />

          <Route path="/ActiveProfiles" element={<ActiveProfiles/>} />
          <Route path="/ForgotPassword" element={<ForgotPassword/>} />
          <Route path="/ResetPassword/:email" element={<ResetPassword/>} />

          {/* <Route path="/addproducts" element={<AddProducts/>} />
          <Route path="/editproducts/:id" exact={true} element={<EditProducts/>} /> */}
  
        </Routes>
        
      </div>

   
  );
}

export default App;
