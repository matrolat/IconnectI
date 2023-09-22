import React,{useState} from "react";
import "./Reg_Company.css";
import MainLogo from "../../Components/Main_Logo/MainLogo";
import Checkbox from "../../Assets/Checkbox.png";
import { companyRegistration } from "../../Service/Api";
import { useNavigate } from "react-router-dom";
import { buttonStyles } from "../../Constants/Css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btnStyles: buttonStyles
}));
export default function Reg_Company() {
  const classes = useStyles();

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

      <div className="company-outer-container">
        
        <div className="company-inner-container">

          <div className="company-container">
            <span className="head">
              <label className="head-text">User name *</label>
            </span>
            <input
            style={{zIndex:1}}
              type="text"
              placeholder=""
              name="username"
              className="input"
              onChange = {onChange}
            />
            
          </div>
          <div className="company-container">
            <span className="head">
              <label className="head-text">Password *</label>
            </span>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="input"
              onChange = {onChange}
              errorMessage = "Password should be 8-20 characters and include atleast 1 letter, 1 number and 1 special character!"
              required= "true"
              pattern= "`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`"           
            />
          </div>
          <div className="company-container">
            <span className="head">
              <label className="head-text">Re Type Password *</label>
            </span>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter Password"
              className="input"
              onChange = {onChange}
              errorMessage = "Passwords don't match!"
              required= "true"
              pattern = "values.password"
            />
          </div>

          </div>

        <div className="company-inner-container">
            <div className="company-container">
            <span className="head">
              <label className="head-text">Email address *</label>
            </span>
            <input
            style={{zIndex:1}}
              type="email"
              name="companyspocemail"
              placeholder="Example@gmail.com"
              className="input"
              onChange = {onChange}
              errorMessage = "Not a valid email"
              required = "true"
            />
            </div>
            <div className="company-container">
            <span className="head">
              <label className="head-text">Company name*</label>
            </span>
            <input
              type="text"
              placeholder=""
              name="companyname"
              className="input"
              onChange = {onChange}
              errorMessage = ""
              required = "true"
            />
            </div>
            <div className="company-container">
            <span className="head">
              <label className="head-text">SPOC name*</label>
            </span>
            <input
              type="text"
              placeholder="ompany SPOC Name"
              name="companyspocname"
              className="input"
              onChange = {onChange}
              errorMessage = "Username should be of at least 3 letters and shouldn't include any special character!"
              required = "true"
              pattern = "^[A-Za-z0-9]{3-}$"
            />
            </div>

            </div>

        <div className="company-inner-container">
          <div className="company-container">
            <span className="head">
              <label className="head-text">SPOC Email address*</label>
            </span>
            <input
            style={{zIndex:1}}
              type="email"
              placeholder="Example@gmail.com"
              className="input"
              onChange = {onChange}
              errorMessage = "Not a valid email"
              required = "true"
            />
          </div>
          <div className="company-container">
            <span className="head">
              <label className="head-text">SPOC Phone Number *</label>
            </span>
            <input
              type="text"
              placeholder=""
              name="companyspocphone"
              className="input"
              onChange = {onChange}
              errorMessage = "Phone number should be of 10 digits!"
              required = "true"
              pattern = "^[0-9]{10}$"
            />
          </div>
          <div className="company-container">
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
        </div>

        <div className="company-registration-check">
            <div className="company-registration-text25">
            <div><input type="checkbox" className="company-registration-rectangle3"/></div>
              <div><span>I agree to the terms and condition</span></div>
            </div>
          <button className={classes.btnStyles} onClick={postData}style={{height:80, width:389}}>
            <span ><span>Sign Up</span></span>
          </button>
          </div>

          
           
        </div>
      </div>
    </div>
  );
}
