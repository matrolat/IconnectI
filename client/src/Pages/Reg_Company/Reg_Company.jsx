import React from 'react'
import './Reg_Company.css'
import MainLogo from '../../Components/Main_Logo/MainLogo'


export default function Reg_Company() {
  return (
    <div>

<div class="company-registration-container">
        <div class="company-registration-company-registration">
          <div class="company-registration-frame4">
           <MainLogo height={64} width={74} />
            <div class="company-registration-frame7">
              <span class="company-registration-text">
                <span>Register your account.</span>
              </span>
              <span class="company-registration-text02">
                <span class="company-registration-text03">
                  Already have an account?
                </span>
                <span>log In</span>
              </span>
            </div>
          </div>
          <div class="company-registration-frame2">
            <span class="company-registration-text05">
              <span>Sign Up</span>
            </span>
          </div>
          <div class="company-registration-name">
            <span class="company-registration-text07">
              <span class="company-registration-text08">User name *</span>
            </span>
            <input
              type="text"
              placeholder="Steven Stallion"
              class="company-registration-input"
            />
          </div>
          <div class="company-registration-email">
            <span class="company-registration-text09">
              <span class="company-registration-text10">Email address *</span>
            </span>
            <input
              type="text"
              placeholder="Example@gmail.com"
              class="company-registration-input1"
            />
          </div>
          <div class="company-registration-pass">
            <span class="company-registration-text11">
              <span class="company-registration-text12">Password *</span>
            </span>
            <div class="company-registration-input2">
              <span class="company-registration-text13">
                <span>*************</span>
              </span>
              <img
                src="public/external/vector0316-9tqo.svg"
                alt="Vector0316"
                class="company-registration-vector"
              />
            </div>
          </div>
          <div class="company-registration-name1">
            <span class="company-registration-text15">
              <span class="company-registration-text16">Company name *</span>
            </span>
            <input
              type="text"
              placeholder="Steven Stallion"
              class="company-registration-input3"
            />
          </div>
          <div class="company-registration-name2">
            <span class="company-registration-text17">
              <span class="company-registration-text18">SPOC name *</span>
            </span>
            <input
              type="text"
              placeholder="Steven Stallion"
              class="company-registration-input4"
            />
          </div>
          <div class="company-registration-email1">
            <span class="company-registration-text19">
              <span class="company-registration-text20">
                SPOC Email address *
              </span>
            </span>
            <input
              type="text"
              placeholder="Example@gmail.com"
              class="company-registration-input5"
            />
          </div>
          <div class="company-registration-name3">
            <span class="company-registration-text21">
              <span class="company-registration-text22">SPOC Phn Number *</span>
            </span>
            <input
              type="text"
              placeholder="Steven Stallion"
              class="company-registration-input6"
            />
          </div>
          <div class="company-registration-name4">
            <span class="company-registration-text23">
              <span class="company-registration-text24">SPOC ID *</span>
            </span>
            <input
              type="text"
              placeholder="Steven Stallion"
              class="company-registration-input7"
            />
          </div>
          <div class="company-registration-check">
            <img
              src="public/external/rectangle30318-se6-200h.png"
              alt="Rectangle30318"
              class="company-registration-rectangle3"
            />
            <span class="company-registration-text25">
              <span>I agree to the terms and condition</span>
            </span>
          </div>
          <div class="company-registration-name5">
            <span class="company-registration-text27">
              <span class="company-registration-text28">
                Re Type Password *
              </span>
            </span>
            <div class="company-registration-input8">
              <span class="company-registration-text29">
                <span>***************</span>
              </span>
              <img
                src="public/external/vector0319-by3.svg"
                alt="Vector0319"
                class="company-registration-vector1"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
