import React from 'react'
import './Company_Activation.css'
import MainLogo from "../../Components/Main_Logo/MainLogo";
import { makeStyles } from '@material-ui/core/styles';
import { buttonStyles } from '../../Constants/Css';

const useStyles = makeStyles((theme) => ({
  btnStyles: buttonStyles
}));

export default function 
() {
  const classes = useStyles();

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
              />
            </div>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Area of Work *</span>
              </span>
              <input
                type="text"
                placeholder=""
                class="activation-input"
              />
            </div>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Work Location *</span>
              </span>
              <input
                type="text"
                placeholder=""
                class="activation-input"
              />
            </div>
            </div>
            <div className="activation-inner-container">
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">company Registration id *</span>
              </span>
              <input
                type="text"
                placeholder=""
                class="activation-input"
              />
            </div>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Industry Type *</span>
              </span>
              <input
                type="text"
                placeholder=""
                class="activation-input"
              />
            </div>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Registerd office *</span>
              </span>
              <input
                type="text"
                placeholder=""
                class="activation-input"
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
              />
            </div>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Service type *</span>
              </span>
              <input
                type="text"
                placeholder=""
                class="activation-input"
              />
            </div>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Payment Mode *</span>
              </span>
              <input
                type="text"
                placeholder=""
                class="activation-input"
              />
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
            <button type='submit' className={classes.btnStyles} style={{height:80, width:389}}>
            <span ><span>Activate Account</span></span>
            </button>
            </div>
          </div>
          
                  
        </div>
      </div>

    </div>
  )
}
