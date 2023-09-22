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
              type="text"
              name="companyspocemail"
              placeholder="Example@gmail.com"
              className="input"
              onChange = {onChange}
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
            />
            </div>
            <div className="company-container">
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

        <div className="company-inner-container">
          <div className="company-container">
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
