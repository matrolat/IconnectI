import React from 'react'
import './Login.css'
import MainLogo from '../../Components/Main_Logo/MainLogo'
import eyeLogo from '../../Assets/eye.svg'
import { useState } from 'react'
import { login } from '../../Service/Api'

export default function Login() {
    const [eye, setEye] = useState(false);
    const [values, setValues] = useState({
      email: "",
      password: "",
    });

    
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit =async()=>{
      const res = await login(values);
      const data = JSON.stringify(res);
      if (res.status === 422 || !data) {
        window.alert("Invalid Credentials");
        console.log("Invalid Credentials");
      } else {
        if(!data.companyspocemail){
          window.alert("company");
          // navigate(`otp/${data.collegespocemail}`);
        }else{
          window.alert("college");
          // navigate(`otp/${data.companyspocemail}`);
        }
        
      }
    }


  return (
    <div className="body">
        <div className="frame6-container">
        <div className="frame6-frame6">
          <div className="frame6-social"></div>
          <div className="frame6-frame4">
            <MainLogo height={81} width={93}/>            
            <div className="frame6-frame7">
              <span className="frame6-text"><span>Welcome back</span></span>
              <span className="frame6-text02">
                <span className="frame6-text03">Don’t have an account?</span>
                <span> Sign UP</span>
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
              />
            </div>
            <div className="frame6-frame8">
              <div className="frame6-email" >
              <span className="frame6-text05">
                <span className="frame6-text06">Password *</span>
              </span>
              <div className="pwd-input" style={{display: 'flex'}}>
                <input
                    name='password'
                    type={eye ? "text" : "password"}
                    placeholder="Enter Password"
                    className="frame6-input"
                    onChange = {onChange}
                />
                <img src={eyeLogo} alt="eye-btn" style={{width:20, height:20, marginLeft: 360, marginTop:40, zIndex:1}}
                onClick={()=> setEye(!eye) }/> 
              </div>

            </div>
              <div className="frame6-check">
                <span className="frame6-text11">
                  <span>Forgotten password?</span>
                </span>
              </div>
            </div>
            <button className='frame6-frame1' onClick={handleSubmit}>
                <span className="frame6-text13"><span>Log In</span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
