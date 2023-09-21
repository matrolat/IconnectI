import React,{useState} from 'react'
import './Reg_College.css'
import MainLogo from '../../Components/Main_Logo/MainLogo'
import Checkbox  from '../../Assets/Checkbox.png'
import { useNavigate } from "react-router-dom";
import { collegeSignup } from '../../Service/Api';

export default function 
() {
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
                <span>log In</span>
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
                placeholder="Steven Stallion"
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
                placeholder="Steven Stallion"
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
                placeholder="Steven Stallion"
                class="input-box"
              />
            </div>
           
            {/* <div class="college-registration-email">
              <span class="college-registration-text04">
                <span class="college-registration-text05">
                  SPOC Email address *
                </span>
              </span>
              <input
                type="text"
                placeholder="Example@gmail.com"
                class="college-registration-input01"
              />
            </div>

            <div class="college-registration-name1">
              <span class="college-registration-text06">
                <span class="college-registration-text07">
                  SPOC Phn Number *
                </span>
              </span>
              <input
                type="text"
                placeholder="Steven Stallion"
                class="college-registration-input02"
              />
            </div>

            <div class="college-registration-name2">
              <span class="college-registration-text08">
                <span class="college-registration-text09">
                  Courses Offered *
                </span>
              </span>
              <input
                type="text"
                placeholder="Steven Stallion"
                class="college-registration-input03"
              />
            </div> */}
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
                placeholder="Steven Stallion"
                class="input-box"
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
                placeholder="Steven Stallion"
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
                placeholder="Steven Stallion"
                class="input-box"
              />
            </div>
            {/* <div class="college-registration-email">
              <span class="college-registration-text04">
                <span class="college-registration-text05">
                  SPOC Email address *
                </span>
              </span>
              <input
                type="text"
                placeholder="Example@gmail.com"
                class="college-registration-input01"
              />
            </div>

            <div class="college-registration-name1">
              <span class="college-registration-text06">
                <span class="college-registration-text07">
                  SPOC Phn Number *
                </span>
              </span>
              <input
                type="text"
                placeholder="Steven Stallion"
                class="college-registration-input02"
              />
            </div>

            <div class="college-registration-name2">
              <span class="college-registration-text08">
                <span class="college-registration-text09">
                  Courses Offered *
                </span>
              </span>
              <input
                type="text"
                placeholder="Steven Stallion"
                class="college-registration-input03"
              />
            </div> */}
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
                placeholder="Steven Stallion"
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
                placeholder="Steven Stallion"
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
                placeholder="Steven Stallion"
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
                placeholder="Steven Stallion"
                class="input-box"
              />
            </div>
            {/* <div class="name">
              <span class="text">
                <span class="head-text">SPOC name *</span>
              </span>
              <input
                type="text"
                placeholder="Steven Stallion"
                class="input-box"
              />
            </div>
            <div class="name">
              <span class="text">
                <span class="head-text">SPOC name *</span>
              </span>
              <input
                type="text"
                placeholder="Steven Stallion"
                class="input-box"
              />
            </div> */}
            {/* <div class="college-registration-email">
              <span class="college-registration-text04">
                <span class="college-registration-text05">
                  SPOC Email address *
                </span>
              </span>
              <input
                type="text"
                placeholder="Example@gmail.com"
                class="college-registration-input01"
              />
            </div>

            <div class="college-registration-name1">
              <span class="college-registration-text06">
                <span class="college-registration-text07">
                  SPOC Phn Number *
                </span>
              </span>
              <input
                type="text"
                placeholder="Steven Stallion"
                class="college-registration-input02"
              />
            </div>

            <div class="college-registration-name2">
              <span class="college-registration-text08">
                <span class="college-registration-text09">
                  Courses Offered *
                </span>
              </span>
              <input
                type="text"
                placeholder="Steven Stallion"
                class="college-registration-input03"
              />
            </div> */}
          </div>
          </div>

          <div class="college-registration-check">
            <img
              alt="Rectangle30286"
              src={Checkbox}
              class="college-registration-rectangle3"
            />
            <span class="college-registration-text18">
              <span>I agree to the terms and condition</span>
            </span>
          </div>

          <div class="college-registration-frame2" onClick={postData}>
            <span class="college-registration-text"><span>Sign Up</span></span>
          </div>

           {/* <div class="college-registration-group1">
            <div class="college-registration-email1">
              <span class="college-registration-text10">
                <span class="college-registration-text11">
                  College address *
                </span>
              </span>
              <input
                type="text"
                placeholder="Example@gmail.com"
                class="college-registration-input04"
              />
            </div>
            <div class="college-registration-email2">
              <span class="college-registration-text12">
                <span class="college-registration-text13">
                  College Registration ID *
                </span>
              </span>
              <input
                type="text"
                placeholder="Example@gmail.com"
                class="college-registration-input05"
              />
            </div>
            <div class="college-registration-name3">
              <span class="college-registration-text14">
                <span class="college-registration-text15">
                  University Type *
                </span>
              </span>
              <input
                type="text"
                placeholder="Steven Stallion"
                class="college-registration-input06"
              />
            </div>
            <div class="college-registration-name4">
              <span class="college-registration-text16">
                <span class="college-registration-text17">
                  Courses Offered *
                </span>
              </span>
              <input
                type="text"
                placeholder="Steven Stallion"
                class="college-registration-input07"
              />
            </div>
          </div>
         
          <div class="college-registration-group2">
            <div class="college-registration-name5">
              <span class="college-registration-text20">
                <span class="college-registration-text21">User name *</span>
              </span>
              <input
                type="text"
                placeholder="Steven Stallion"
                class="college-registration-input08"
              />
            </div>
            <div class="college-registration-pass">
              <span class="college-registration-text22">
                <span class="college-registration-text23">Password *</span>
              </span>
              <div class="college-registration-input09">
                <span class="college-registration-text24">
                  <span>*************</span>
                </span>
                <img
                  alt="Vector0287"
                  src="public/external/vector0287-qa5.svg"
                  class="college-registration-vector"
                />
              </div>
            </div>
            <div class="college-registration-name6">
              <span class="college-registration-text26">
                <span class="college-registration-text27">College name *</span>
              </span>
              <input
                type="text"
                placeholder="Steven Stallion"
                class="college-registration-input10"
              />
            </div>
            <div class="college-registration-name7">
              <span class="college-registration-text28">
                <span class="college-registration-text29">
                  Re Type Password *
                </span>
              </span>
              <div class="college-registration-input11">
                <span class="college-registration-text30">
                  <span>***************</span>
                </span>
                <img
                  alt="Vector0288"
                  src="public/external/vector0288-6fil.svg"
                  class="college-registration-vector1"
                />
              </div>
            </div>
          </div>  */}
          
        </div>
      </div>
    </div>
  )
}
