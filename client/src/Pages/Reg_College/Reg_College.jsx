import React,{useState} from 'react'
import './Reg_College.css'
import MainLogo from '../../Components/Main_Logo/MainLogo'
import Checkbox  from '../../Assets/Checkbox.png'
import { Link, useNavigate } from "react-router-dom";
import { collegeSignup } from '../../Service/Api';
import { makeStyles } from '@material-ui/core/styles';
import { buttonStyles } from "../../Constants/Css";

const useStyles = makeStyles((theme) => ({
  btnStyles: buttonStyles
}));

export default function 
() {

  const classes = useStyles();

  const navigate = useNavigate();
  const [values , setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    collegename: "",
    collegeaddress: "",
    collegespocname: "",
    collegespocemail: "",
    collegespocphone: "",
    collegeregid: "",
    degreeoffered: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(values);
  };

  const postData = async()=>{
    const res = await collegeSignup(values);
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
        <div class="college-registration-container">
        <div class="college-registration-college-registration">

        <div class="college-registration-frame4">
            <MainLogo/>
            <div class="college-registration-frame7">
              <span class="college-registration-text32">
                <span>Register your account.</span>
              </span>
              <span class="college-registration-text34">
                <span class="college-registration-text35">
                  Already have an account?
                </span>
                <Link to={'/Login'}> log In</Link>
              </span>
            </div>
          </div>

<div className="outer-container">
          

          <div class="container">
            <div class="name">
              <span class="text">
                <span class="head-text">Username *</span>
              </span>
              <input
                type="text"
                name='username'
                onChange = {onChange}
                placeholder=""
                class="input-box"
              />
            </div>
            <div class="name">
              <span class="text">
                <span class="head-text">Password*</span>
              </span>
              <input
                type="text"
                name="password"
                onChange = {onChange}
                placeholder=""
                class="input-box"
              />
            </div>
            <div class="name">
              <span class="text">
                <span class="head-text">Confirm Password *</span>
              </span>
              <input
                type="text"
                name="confirmPassword"
                onChange = {onChange}
                placeholder=""
                class="input-box"
              />
            </div>
           
          </div>
          <div class="container">
           
            <div class="name">
              <span class="text">
                <span class="head-text"> SPOC name *</span>
              </span>
              <input
                // type="text"
                name='collegespocname'
                onChange = {onChange}
                placeholder=""
                class="input-box"
                type= "email"
                errorMessage= "Not a valid email"
                required= "true"
              />
            </div>
            <div class="name">
              <span class="text">
                <span class="head-text">SPOC email *</span>
              </span>
              <input
                type="text"
                name='collegespocemail'
                onChange = {onChange}
                placeholder=""
                class="input-box"
              />
            </div>
            <div class="name">
              <span class="text">
                <span class="head-text">SPOC phone number *</span>
              </span>
              <input
                type="text"
                name='collegespocphone'
                onChange = {onChange}
                placeholder=""
                class="input-box"
              />
            </div>
         
          </div>
          <div class="container">
          <div class="name">
              <span class="text">
                <span class="head-text">College name *</span>
              </span>
              <input
                type="text"
                name='collegename'
                onChange = {onChange}
                placeholder=""
                class="input-box"
              />
            </div>
            <div class="name">
              <span class="text">
                <span class="head-text">College Registration ID *</span>
              </span>
              <input
                type="text"
                name='collegeregid'
                onChange = {onChange}
                placeholder=""
                class="input-box"
              />
            </div>
            <div class="name">
              <span class="text">
                <span class="head-text">Degree Offered *</span>
              </span>
              <input
                type="text"
                name='degreeoffered'
                onChange = {onChange}
                placeholder=""
                class="input-box"
              />
            </div>
            <div class="name">
              <span class="text">
                <span class="head-text">College Address *</span>
              </span>
              <input
                type="text"
                name='collegeaddress'
                onChange = {onChange}
                placeholder=""
                class="input-box"
              />
            </div>
            
          </div>
          </div>

          <div class="college-registration-check">
            <input type="checkbox" className="college-registration-rectangle3"/>
            <span class="college-registration-text18">
              <span>I agree to the terms and condition</span>
            </span>
          </div>

          <button className={classes.btnStyles} onClick={postData}style={{height:80, width:389}}>
            <span ><span>Sign Up</span></span>
          </button>

          </div>
      </div>
    </div>
  )
}
