import React,{useState} from "react";
import "./Reg_Company.css";
import MainLogo from "../../Components/Main_Logo/MainLogo";
import Checkbox from "../../Assets/Checkbox.png";
import { companyRegistration } from "../../Service/Api";
import { useNavigate } from "react-router-dom";

export default function Reg_Company() {
  const navigate = useNavigate();
  const [values , setValues] = useState({
    username : "",
    password :"",
    confirmPassword: "",
    companyname : "",
    companyspocname:"",
    companyspocemail : "",
    companyspocphone : "",
    logo : ""
  });

  const onChange =  (e) =>{
    setValues ({...values , [e.target.name]: e.target.value});
  };

  const imageUpload = (e) =>{
    console.log(e.target.files[0]);
    setValues ({...values , logo: e.target.files[0]});
  }

  const postData = async()=>{
    const res = await companyRegistration(values);
    const data = JSON.stringify(res);
    console.log(data);
    if(data.status === 422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
     }else{
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate('/');
     }
  }

  return (
    <div>
      <div className="company-registration-container">
        <div className="company-registration-company-registration">
          <div className="company-registration-frame4">
            <MainLogo/>
            <div className="company-registration-frame7">
              <span className="company-registration-text">
                <span>Register your account.</span>
              </span>
              <span className="company-registration-text02">
                <span className="company-registration-text03">
                  Already have an account?
                </span>
                <span>log In</span>
              </span>
            </div>
          </div>

          

      <div className="outer-container">
        
        <div className="inner-container">

          <div className="container">
            <span className="head">
              <label className="head-text">User name *</label>
            </span>
            <input
            style={{zIndex:1}}
              type="text"
              placeholder="Steven Stallion"
              name="username"
              className="input"
              onChange = {onChange}
            />
            
          </div>
          <div className="container">
            <span className="head">
              <label className="head-text">Password *</label>
            </span>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="input"
              onChange = {onChange}
            />
          </div>
          <div className="container">
            <span className="head">
              <label className="head-text">Re Type Password *</label>
            </span>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter Password"
              className="input"
              onChange = {onChange}
            />
          </div>

          </div>

        <div className="inner-container">
            <div className="container">
            <span className="head">
              <label className="head-text">Email address *</label>
            </span>
            <input
            style={{zIndex:1}}
              type="text"
              name="companyspocemail"
              placeholder="Example@gmail.com"
              className="input"
              onChange = {onChange}
            />
            </div>
            <div className="container">
            <span className="head">
              <label className="head-text">Company name*</label>
            </span>
            <input
              type="text"
              placeholder=""
              name="companyname"
              className="input"
              onChange = {onChange}
            />
            </div>
            <div className="container">
            <span className="head">
              <label className="head-text">SPOC name*</label>
            </span>
            <input
              type="text"
              placeholder="Example@gmail.com"
              name="companyspocname"
              className="input"
              onChange = {onChange}
            />
            </div>

            </div>

        <div className="inner-container">
          <div className="container">
            <span className="head">
              <label className="head-text">SPOC Email address*</label>
            </span>
            <input
            style={{zIndex:1}}
              type="text"
              placeholder="Example@gmail.com"
              className="input"
              onChange = {onChange}
            />
          </div>
          <div className="container">
            <span className="head">
              <label className="head-text">SPOC Phone Number *</label>
            </span>
            <input
              type="text"
              placeholder=""
              name="companyspocphone"
              className="input"
              onChange = {onChange}
            />
          </div>
          <div className="container">
            <span className="head">
              <label className="head-text">Company Logo</label>
            </span>
            <input
            onChange={imageUpload}
              type="file"
              name="logo"
              placeholder=""
              className="input"
            />
          </div>

            </div>

        <div className="company-registration-check">
            <input type="checkbox" className="company-registration-rectangle3"/>
            <span className="company-registration-text25">
              <span>I agree to the terms and condition</span>
            </span>
          </div>
        
        <div className="company-registration-frame2">
            <span className="company-registration-text05">
              <span onClick={postData}>Sign Up</span>
            </span>            
          </div>
        </div>

          

          {/* <div className="company-registration-email">
            <span className="company-registration-text09">
              <span className="company-registration-text10">Email address *</span>
            </span>
            <input
              type="text"
              placeholder="Example@gmail.com"
              className="company-registration-input1"
            />
          </div>
          <div className="company-registration-pass">
            <span className="company-registration-text11">
              <span className="company-registration-text12">Password *</span>
            </span>
            <div className="company-registration-input2">
              <span className="company-registration-text13">
                <span>*************</span>
              </span>
              <img
                src="public/external/vector0316-9tqo.svg"
                alt="Vector0316"
                className="company-registration-vector"
              />
            </div>
          </div>
          <div className="company-registration-name1">
            <span className="company-registration-text15">
              <span className="company-registration-text16">Company name *</span>
            </span>
            <input
              type="text"
              placeholder="Steven Stallion"
              className="company-registration-input3"
            />
          </div>
          <div className="company-registration-name2">
            <span className="company-registration-text17">
              <span className="company-registration-text18">SPOC name *</span>
            </span>
            <input
              type="text"
              placeholder="Steven Stallion"
              className="company-registration-input4"
            />
          </div>
          <div className="company-registration-email1">
            <span className="company-registration-text19">
              <span className="company-registration-text20">
                SPOC Email address *
              </span>
            </span>
            <input
              type="text"
              placeholder="Example@gmail.com"
              className="company-registration-input5"
            />
          </div>
          <div className="company-registration-name3">
            <span className="company-registration-text21">
              <span className="company-registration-text22">SPOC Phn Number *</span>
            </span>
            <input
              type="text"
              placeholder="Steven Stallion"
              className="company-registration-input6"
            />
          </div>
          <div className="company-registration-name4">
            <span className="company-registration-text23">
              <span className="company-registration-text24">SPOC ID *</span>
            </span>
            <input
              type="text"
              placeholder="Steven Stallion"
              className="company-registration-input7"
            />
          </div>
          <div className="company-registration-check">
            <img
              src="public/external/rectangle30318-se6-200h.png"
              alt="Rectangle30318"
              className="company-registration-rectangle3"
            />
            <span className="company-registration-text25">
              <span>I agree to the terms and condition</span>
            </span>
          </div>
          <div className="company-registration-name5">
            <span className="company-registration-text27">
              <span className="company-registration-text28">
                Re Type Password *
              </span>
            </span>
            <div className="company-registration-input8">
              <span className="company-registration-text29">
                <span>***************</span>
              </span>
              <img
                src="public/external/vector0319-by3.svg"
                alt="Vector0319"
                className="company-registration-vector1"
              />
            </div>
          </div> */}
           
        </div>
      </div>
    </div>
  );
}
