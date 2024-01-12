import React,{useState} from "react";
import "./Reg_Company.css";
import MainLogo from "../../Components/Main_Logo/MainLogo";
import Checkbox from "../../Assets/Checkbox.png";
import { companyRegistration } from "../../Service/Api";
import { Link, useNavigate } from "react-router-dom";
import { buttonStyles } from "../../Constants/Css";
import { makeStyles } from "@material-ui/core";
import { BeatLoader } from "react-spinners";
import { styled } from '@mui/material/styles';


const useStyles = makeStyles((theme) => ({
  btnStyles: buttonStyles
}));

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
 
});


export default function Reg_Company() {
  const classes = useStyles();
  let [loading, setLoading] = useState(false);
  let [valid, setValid] = useState(false);
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
  const [validFields,SetValidFields] = useState({    
    password: true,
    confirmPassword: true,
    companyname: true,
    companyspocname: true,
    companyspocemail: true,
    companyspocphone: true,
  });


  const onChange =  (e) =>{
    setValues ({...values , [e.target.name]: e.target.value});
    const input = e.target;
    if (!input.checkValidity()) {
      SetValidFields({ ...validFields, [e.target.name]: false });
      
    } else {
   
      SetValidFields({ ...validFields, [e.target.name]: true });
      console.log("valid");
    }
  
  };


  const checkAllValid = ()=>{

    for (const prop in validFields) {
      if(validFields[prop]==false)
      {
        return false;
      }
     // console.log(`obj.${prop} = ${obj[prop]}`);
    }
    return true;
  }
  const validity = checkAllValid();
  const imageUpload = (e) =>{
    console.log(e.target.files[0]);
    setValues ({...values , logo: e.target.files[0]});
  }

  const postData = async()=>{
    if(validity==false)
    {
      setValid(false);
      window.alert("Pls Enter Valid Details");
      return;
    }
    else{
      setValid(true);
      // window.alert("go");
      // return
    }
    
    setLoading(true);



    
    // if (!isValidInput(values)) {
    //   // If input is invalid, stop the registration process
    //   window.alert("Invalid Registration");
    //   setLoading(false); // Set loading to false
    //   return; // Exit the function
    // }


    const res = await companyRegistration(values);
    const data = JSON.stringify(res);
    
    console.log("response->"+data);
    if(!data || res.data.status === 422 ){
      //  setLoading(!loading);
      // window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }else{
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate('/');
    }
    setLoading(false);
  }

  return (
    <form>
      <div className="company-registration-container">
        <div className="company-registration-company-registration">

          <div className="company-registration-frame4">
            <MainLogo/>
            <div className="company-registration-frame7">
              <span className="company-registration-text">
                <span>Register your account </span>
              </span>
              <span className="company-registration-text02">
                <span className="company-registration-text03">
                  Already have an account?
                </span>
                
                <span><Link to={'/Login'}>   log In</Link></span>
              </span>
            </div>
          </div>

      <div className="company-outer-container" >
        
      <div className="company-inner-container">
            <div className="company-container">
            <span className="head">
              <label className="head-text">Email address *</label>
            </span>
            <input
            style={{zIndex:1}}
              type="email"
              name="companyspocemail"
              placeholder=""
              className="input"
              onChange = {onChange}
              errorMessage = "Not a valid email"
              required = {true}
            />
            <span className={validFields.companyspocemail?"invisible":"error"}>Not a valid email</span>
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
              required = {true}
            />
            </div>
          

            </div>
        <div className="company-inner-container">

        
          <div className="company-container">
            <span className="head">
              <label className="head-text">Password *</label>
            </span>
            <input
              type="password"
              name="password"
              placeholder=""
              className="input"
              onChange = {onChange}
              errorMessage = "Password should be 8-20 characters and include atleast 1 letter, 1 number and 1 special character!"
              required= {true}
              pattern= "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"  
         
            />
            <span className={validFields.password?"invisible":"error"}>Password should be 8-20 characters and include atleast 1 letter, 1 number and 1 special character!</span>

          </div>
          <div className="company-container">
            <span className="head">
              <label className="head-text">Re Type Password *</label>
            </span>
            <input
              type="password"
              name="confirmPassword"
              placeholder=""
              className="input"
              onChange = {onChange}
              // errorMessage = "Passwords don't match!"
              required= {true}
              pattern = {values.password}
            />
            <span className={validFields.confirmPassword?"invisible":"error"}>Passwords don't match!</span>
          </div>

          </div>

        

        <div className="company-inner-container">
          

          <div className="company-container">
            <span className="head">
              <label className="head-text">SPOC name*</label>
            </span>
            <input
              type="text"
              placeholder=""
              name="companyspocname"
              className="input"
              onChange = {onChange}
              required = {true}
              pattern = "^[A-Za-z0-9\s]{3,}$"
            />
            <span className={validFields.companyspocname?"invisible":"error"}>Username should be of at least 3 letters and shouldn't include any special character!</span>
            </div>

          <div className="company-container">
            <span className="head">
              <label className="head-text">SPOC Phone Number*</label>
            </span>
            <input
              type="text"
              placeholder=""
              name="companyspocphone"
              className="input"
              onChange = {onChange}
              required = {true}
              pattern = "^[1-9][0-9]{9}$"
            />
            <span className={validFields.companyspocphone?"invisible":"error"}>Phone number should be of 10 digits!</span>
            </div>
         

            </div>
        </div>

        <div className="company-registration-check" >
            
          <button className={classes.btnStyles} id="click-btn" disabled={loading} onClick={postData} style={{height:80, width:389,margin:30}}>
            <span ><span>
            { loading?  
                 <BeatLoader 
                 color="white"
                 loading={loading}
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
      </div>
    </form>
  );
}
