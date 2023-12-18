import React,{useState} from 'react'
import './Reg_College.css'
import MainLogo from '../../Components/Main_Logo/MainLogo'
import Checkbox  from '../../Assets/Checkbox.png'
import { Link, useNavigate } from "react-router-dom";
import { collegeSignup } from '../../Service/Api';
import { makeStyles } from '@material-ui/core/styles';
import { buttonStyles } from "../../Constants/Css";
import { BeatLoader } from "react-spinners";

const useStyles = makeStyles((theme) => ({
  btnStyles: buttonStyles
}));

export default function 
() {

  const classes = useStyles();
  let [loading, setLoading] = useState(false);
  let [valid, setValid] = useState(false);

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
    const input = e.target;
    if (!input.checkValidity()) {
      setValid(false);
    } else {
      setValid(true);
      console.log("valid");
    }
  
    // console.log(values);
  };

  const postData = async()=>{

    if(!valid)
    {
      window.alert("Pls Enter Valid Details");
      return;
    }
    

    setLoading(true);
    const res = await collegeSignup(values);
    const data = JSON.stringify(res);
    setLoading(false);
    // console.log(data);
    if( !data || res.data.status === 422){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
     }else{
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate('/');
     }
  }
  return (
    <form>
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
                <span class="head-text">College name *</span>
              </span>
              <input
                type="text"
                name='collegename'
                onChange = {onChange}
                placeholder=""
                class="input-box"
                errorMessage="Pls enter college name"
                required={true}
                label="College name"
              />
            </div>

            <div class="name">
              <span class="text">
                <span class="head-text">Password*</span>
              </span>
              <input
                type="password"
                name="password"
                onChange = {onChange}
                placeholder=""
                class="input-box"
                errorMessage="Password should be 8-20 characters and include atleast 1 letter, 1 number and 1 special character!"
                required="true"
                pattern= "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"           
              />
            <span className='error'>Password should be 8-20 characters and include atleast 1 letter, 1 number and 1 special character!</span>
            </div>

            <div class="name">
              <span class="text">
                <span class="head-text">Confirm Password *</span>
              </span>
              <input
                type="password"
                name="confirmPassword"
                onChange = {onChange}
                placeholder=""
                class="input-box"
                // errorMessage="Passwords don't match!"
                required={true}
                pattern={values.password}         
              />
            <span className='error'>Passwords don't match!</span>
            </div>
           
          </div>
          <div class="container">
           
            <div class="name">
              <span class="text">
                <span class="head-text"> SPOC name *</span>
              </span>
              <input
                type="text"
                name='collegespocname'
                onChange = {onChange}
                placeholder=""
                class="input-box"
                required= {true}
                pattern = "^[A-Za-z0-9\s]{3,}$"
              />
            <span className='error'>Username should be of at least 3 letters and shouldn't include any special character!</span>
            </div>

            <div class="name">
              <span class="text">
                <span class="head-text">SPOC email *</span>
              </span>
              <input
                type="email"
                name='collegespocemail'
                onChange = {onChange}
                placeholder=""
                class="input-box"
                errorMessage="Not a valid email"
                required={true}
                label="College SPOC Email"
              />
            <span className='error'>Not a valid email</span>
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
                // errorMessage="Phone number should be of 10 digits!"
                required={true}
                pattern='^[1-9][0-9]{9}$'

                label="College SPOC phone"
              />
            <span className='error'>Phone number should be of 10 digits!</span>
            </div>
         
          </div>
          <div class="container">
         
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
                required={true}
                label="College Registration ID"
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
                errorMessage=""
                required={true}
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
                errorMessage=""
                required={true}
              />
            </div>
            
          </div>
          </div>

          {/* <div class="college-registration-check">
            <input type="checkbox" className="college-registration-rectangle3"/>
            <span class="college-registration-text18">
              <span>I agree to the terms and condition</span>
            </span>
          </div> */}

          <button type='submit' disabled={loading} className={classes.btnStyles} onClick={postData}style={{height:80, width:389}}>
            <span ><span>
            { loading?  
                 <BeatLoader 
                //  color="#36d7b7"
                 color="white"
                 loading={loading}
                 // cssOverride={override}
                 size={10}
                 aria-label="Loading Spinner"
                 data-testid="loader"
                 />
                 : "Sign Up"
                
                }
              </span></span>
          </button>

          </div>
      </div>
    </form>
  )
}
