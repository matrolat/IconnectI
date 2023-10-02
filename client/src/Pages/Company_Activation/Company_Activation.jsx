import React,{useState} from 'react'
import './Company_Activation.css'
import MainLogo from "../../Components/Main_Logo/MainLogo";
import { makeStyles } from '@material-ui/core/styles';
import { buttonStyles } from '../../Constants/Css';
import { useNavigate , useParams} from "react-router-dom";
import { companyActivate } from '../../Service/Api';

const useStyles = makeStyles((theme) => ({
  btnStyles: buttonStyles
}));

export default function 
() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [values, setValues] = useState({
    websiteinfo: "",
    industrytype: "",
    areaofwork: "",
    registeredoffice: "",
    companyregno: "",
    currentlocation: "",
    locationofwork: "",
    employeecount: "",
    compdescription : ""
  });
  const {email} = useParams();
  const companysopcemail = email;


  let name, value;
  const onChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const postData = async()=>{
    const res = await companyActivate(values,companysopcemail);
    const data = JSON.stringify(res);
    console.log(data);
    if(data.status === 422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
     }else{
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate(`/Activation/${email}`);
     }
  }

  return (
    <div>
        <div class="company-activation-container">
        <div class="company-activation-company-activation">
          <div class="company-activation-header">
            <MainLogo />
            <div class="company-activation-frame7">
              <span class="company-activation-text">
                <span>Activate your account.</span>
              </span>
            </div>
          </div>

          <div className="activation-outer-container">
            <div className="activation-inner-container">
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Company Website *</span>
              </span>
              <input
                type="text"
                placeholder=""
                class="activation-input"
                value={values.websiteinfo}              
                onChange={onChange}
              />
            </div>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Area of Work *</span>
              </span>
              {/* <input
                type="text"
                placeholder=""
                class="activation-input"
              /> */}
              <select
                name="areaofwork"
                value={values.areaofwork}
                class="activation-input"
                onChange={onChange}
              >
                <option value="" selected>
                  --select--
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Work Location *</span>
              </span>
              {/* <input
                type="text"
                placeholder=""
                class="activation-input"
                
              /> */}
              <select
                name="locationofwork"
                value={values.locationofwork}
                id="locationofwork"
                onChange={onChange}
                class="activation-input"
              >
                <option value="" selected>
                  --select--
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            </div>
            <div className="activation-inner-container">
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Company Registration id *</span>
              </span>
              <input
                type="text"
                placeholder=""
                class="activation-input"
                value={values.companyregno}
                
                onChange={onChange}
              />
            </div>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Industry Type *</span>
              </span>
              {/* <input
                type="text"
                placeholder=""
                class="activation-input"
              /> */}
              <select
                name="industrytype"
                value={values.industrytype}
        
                onChange={onChange}
                class="activation-input"
              >
                <option value="" selected>
                  --select--
                </option>
                <option value="pvt">pvt</option>
                <option value="Govt">Govt</option>
                <option value="Public">Public</option>
              </select>
            </div>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Registerd office *</span>
              </span>
              <input
                type="text"
                placeholder=""
                class="activation-input"
                value={values.registeredoffice}
        
                onChange={onChange}
              />
            </div>
            </div>
            <div className="activation-inner-container">
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">No of Employees *</span>
              </span>
              <input
                type="text"
                placeholder=""
                class="activation-input"
                value={values.employeecount}
               
                onChange={onChange}
              />
            </div>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Current Location *</span>
              </span>
              <input
                type="text"
                placeholder=""
                class="activation-input"
                value={values.currentlocation}               
                onChange={onChange}
              />
            </div>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Payment Mode *</span>
              </span>
              {/* <input
                type="text"
                placeholder=""
                class="activation-input"
              /> */}
              <select name="modeofpayment" class="activation-input">
              <option value="" selected>
                --Payment Mode--
              </option>
              <option value="Net Banking">Net Banking</option>
              <option value="UPI">UPI</option>
              <option value="Google Pay">Google Pay</option>
            </select>
            </div>
            </div>
        </div>
            <div class="company-activation-group1">
            <div class="company-activation-check">
             <input type="checkbox" className="company-activation-rectangle3"/>

              <span class="company-activation-text22">
                <span>I agree to the terms and condition</span>
              </span>
            </div>
            
            
            <div class="company-activation-frame6">
            <button type='submit' className={classes.btnStyles} style={{height:80, width:389}}
            onClick={postData}
            >
            <span ><span>Activate Account</span></span>
            </button>
            </div>
          </div>
          
                  
        </div>
      </div>

    </div>
  )
}
