import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className="body">
        <div className="frame6-container">
        <div className="frame6-frame6">
          <div className="frame6-social"></div>
          <div className="frame6-frame4">
            <img
              src="public/external/image180320-cd3e1-200h.png"
              alt="image180320"
              className="frame6-image18"
            />
            <div className="frame6-frame7">
              <span className="frame6-text"><span>Welcome back</span></span>
              <span className="frame6-text02">
                <span className="frame6-text03">Don’t have an account?</span>
                <span>Sign UP</span>
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
                placeholder="Example@gmail.com"
                className="frame6-input"
              />
            </div>
            <div className="frame6-frame8">
              <div className="frame6-pass">
                <span className="frame6-text07">
                  <span className="frame6-text08">Password *</span>
                </span>
                <div className="frame6-input1">
                  <span className="frame6-text09"><span>*************</span></span>
                  <img
                    src="public/external/vector0322-8z6n.svg"
                    alt="Vector0322"
                    className="frame6-vector"
                  />
                </div>
              </div>
              <div className="frame6-check">
                <span className="frame6-text11">
                  <span>Forgotten password?</span>
                </span>
              </div>
            </div>
            <div className="frame6-frame1">
              <span className="frame6-text13"><span>Log In</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
