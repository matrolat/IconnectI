import React from 'react'
import './Login.css'
import MainLogo from '../../Components/Main_Logo/MainLogo'
import eyeLogo from '../../Assets/eye.svg'
import { useState } from 'react'
import { login, logout } from '../../Service/Api'
import { Link, useNavigate , useParams} from "react-router-dom";
import { makeStyles } from '@material-ui/core'
import { buttonStyles } from '../../Constants/Css'
import { BeatLoader } from "react-spinners";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const useStyles = makeStyles((theme) => ({
  btnStyles: buttonStyles
}));

export default function Login() {
  const classes = useStyles();

  const navigate = useNavigate();
  let [loading, setLoading] = useState(false);
    const [eye, setEye] = useState(false);
    const [values, setValues] = useState({
      email: "",
      password: "",
    });

    
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit =async()=>{
      setLoading(true);
      await logout();
      // return;
      const res = await login(values);
      console.log(res);
      // const data = await res.data;
      const data = JSON.stringify(res);
      if ( !data || res.status === 422 ) {
        // window.alert("Invalid Credentials");
        console.log("Invalid Credentials");
      } else {
      
        if(res.data.companyspocemail){
          // window.alert("college");
          navigate(`/otp/${res.data.companyspocemail}`);
        }else if(res.data.collegespocemail){
          // window.alert("company");
          navigate(`/otp/${res.data.collegespocemail}`);
        }
        else{
          navigate(`/Reporting`);

        }
        
      }
      setLoading(false);
      
    } 
    const handleForgotPassword=()=>{
      navigate(`/ForgotPassword/`);
    }


  return (
    <form className="body">
        <div className="frame6-container">
        <div className="frame6-frame6">
          <div className="frame6-social"></div>
          <div className="frame6-frame4">
            <MainLogo height={81} width={93}/>            
            <div className="frame6-frame7">
              <span className="frame6-text"><span>Welcome</span></span>
              <span className="frame6-text02">
                <span className="frame6-text03">Don’t have an account?</span>
                <Link to={'/'}> Sign UP</Link>
              </span>
            </div>
          </div>
          <div className="frame6-frame5">
            <div className="frame6-email">
              <span className="frame6-text05">
                <span className="frame6-text06">Email address *</span>
              </span>
              <input
                type="text"
                name='email'
                placeholder="Example@gmail.com"
                className="frame6-input"
                onChange = {onChange}
                required={true}
              />
            </div>
            <div className="frame6-frame8">
              <div className="frame6-email" >
              <span className="frame6-text05">Password *</span>
              <div className="pwd-input" style={{display: 'flex'}}>
                <input
                    name='password'
                    type={eye ? "text" : "password"}
                    placeholder="Enter Password"
                    className="frame6-input"
                    onChange = {onChange}
                    
                />
                {!eye ? <VisibilityIcon style={{width:20, height:20, marginLeft: 360, marginTop:43, zIndex:1,color:"rgba(120, 120, 120, 0.7)"}}
                onClick={()=> setEye(!eye) }/> 
                : <VisibilityOffIcon style={{width:20, height:20, marginLeft: 360, marginTop:43, zIndex:1,color:"rgba(120, 120, 120, 0.7)"}}
                onClick={()=> setEye(!eye) }/> }
              </div>

            </div>
              <div className="frame6-check">
                <span className="frame6-text11">
                  <span onClick={handleForgotPassword}>Forgot password?</span>
                </span>
              </div>
            </div>
          
            <button onClick={handleSubmit} disabled={loading} className={classes.btnStyles} style={{height:47, width:400}} type='submit'>
                <span><span>{ loading?  
                 <BeatLoader 
                //  color="#36d7b7"
                 color="white"
                 loading={loading}
                 // cssOverride={override}
                 size={10}
                 aria-label="Loading Spinner"
                 data-testid="loader"
                 />
                 : "Log In"
                
                }</span></span>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
