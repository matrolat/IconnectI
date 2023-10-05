import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { buttonStyles } from '../../Constants/Css';



const useStyles = makeStyles((theme) => ({
    btnStyles: buttonStyles,

    page: {
        display : "flex",
        flexDirection : 'column',
        alignItems : "center",
        justifyContent : "space-around",

    },
    
}));

export default function ResetPassword() {
    const classes = useStyles();
  return (
    <div>
        <div className={classes.page}>
        <div className="password-reset1-password-reset1">
          <img
            src="public/external/image182408-jwvc-200h.png"
            alt="image182408"
            className="password-reset1-image18"
          />
          <span className="password-reset1-text materialThemedisplaymedium">
            <span>New Password</span>
          </span>
          <span className="password-reset1-text02 materialThemelabelmedium16">
            <span>
              Set the new password for your account so you can login and access
              all featuress.
            </span>
          </span>
          <div className="password-reset1-frame1000003342">
            <span className="password-reset1-text04 materialThemelabelmedium14">
              <span>Enter new password</span>
            </span>
            <div className="password-reset1-frame1000003335">
              <div className="password-reset1-frame1000003344">
                <span className="password-reset1-text06 materialThemelabelmedium16">
                  <span>8 symbls at least</span>
                </span>
                <div className="password-reset1-eyeopen">
                  <div className="password-reset1-group">
                    <img
                      src="public/external/vectori240-6bz.svg"
                      alt="VectorI240"
                      className="password-reset1-vector"
                    />
                    <img
                      src="public/external/vectori240-ey8e.svg"
                      alt="VectorI240"
                      className="password-reset1-vector1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="password-reset1-frame1000003336">
              <span className="password-reset1-text08 materialThemelabelmedium14">
                <span>Confirm password</span>
              </span>
              <div className="password-reset1-frame10000033441">
                <span className="password-reset1-text10 materialThemelabelmedium16">
                  <span>8 symbls at least</span>
                </span>
                <div className="password-reset1-eyeclosed">
                  <div className="password-reset1-group1">
                    <img
                      src="public/external/vectori240-s1h6.svg"
                      alt="VectorI240"
                      className="password-reset1-vector2"
                    />
                    <img
                      src="public/external/vectori240-7osv.svg"
                      alt="VectorI240"
                      className="password-reset1-vector3"
                    />
                    <img
                      src="public/external/vectori240-pqnrm.svg"
                      alt="VectorI240"
                      className="password-reset1-vector4"
                    />
                    <img
                      src="public/external/vectori240-3yqo.svg"
                      alt="VectorI240"
                      className="password-reset1-vector5"
                    />
                    <img
                      src="public/external/vectori240-lp2o.svg"
                      alt="VectorI240"
                      className="password-reset1-vector6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="password-reset1-button">
              <span className="password-reset1-text12">
                <span>Update password</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
