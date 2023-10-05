import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { buttonStyles } from '../../Constants/Css';
import MainLogo from '../../Components/Main_Logo/MainLogo';
import { useNavigate, useParams } from 'react-router-dom';
import { ResetPWD, logout } from '../../Service/Api';



const useStyles = makeStyles((theme) => ({
    btnStyles: buttonStyles,

    page: {
        display : "flex",
        flexDirection : 'column',
        alignItems : "center",
        justifyContent : "center",
        height: "100vh",
        width: "100%"

    },
    outerContainer:{
        display : "flex",
        flexDirection : 'column',
        alignItems : "center",
        justifyContent : "space-between",
        "& span":{
            fontSize: 40,
            color: "rgba(56, 142, 59, 1)",
        },
        // "& text":{
        //     color: "#4D4D4D",
        // }

    },
    innerContainer:{
        display : "flex",
        flexDirection : 'column',
        alignItems : "center",
        justifyContent : "space-between",
        height: 300,
        margin: 50,
    },
    head: {
        color: "#4CAF4F",
        fontWeight: 600,
        width: "100%",
        textAlign: "left",
        
    },
    inputBox:{
        color: "#4D4D4D",
        borderColor: "#D2CECE",
        fontWeight: 400,
        width: 370,
        height: 50,
        borderRadius: 5,
        paddingLeft: 30,
        // backgroundColor: "rgba(130, 130, 130, 1)",
    },
    text:{
        color: "#4D4D4D",
        fontWeight: 400,
        width: 370,
        height: 50,
        borderRadius: 5,
    }
    
}));

export default function ResetPassword() {
    const classes = useStyles();
    const navigate = useNavigate();
    const {email} = useParams();
    
    const [pwd, setPwd] = useState();

    
    const [values, setValues] = useState({
        password:"",
        confirmPassword:""
    });

    
    let name, value;
    const onChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        if(name=="password"){
            setPwd(value);
        }
        setValues({
            ...values,
            [name]: value,
            // console.log(name);
        })
        }

        const postData = async() =>{
            if(values.password != values.confirmPassword){
                window.alert("Password doesn't matched");
            }
            else{
                const res = await ResetPWD(values, email);
                const data = JSON.stringify(res);
                if(!data || data.status === 422 ){
                window.alert("Invalid Registration");
                console.log("Invalid Registration");
                }else{
                window.alert("Password Updated Successful");
                console.log("Password Updated Successful");
                await logout();
                navigate('/');
                }

            }
        }

  return (
    <div className={classes.page}>
        <div className={classes.outerContainer}>
            <MainLogo />
            <span>New Password</span>
            <div className={classes.innerContainer}>
                <div className={classes.text}>
                    Set the new password for your account so you can login and access
                    all featuress.
                </div>
                <div className={classes.head}>
                    Enter new password
                </div>
                <input 
                type="text" 
                placeholder='8 symbols atleast'
                className={classes.inputBox} 
                name= "password"
                onChange={onChange}
                />
                <div className={classes.head}>
                    Confirm password
                </div>
                <input 
                type="text" 
                placeholder='8 symbols atleast'
                className={classes.inputBox} 
                name= "confirmPassword"
                onChange={onChange}
                />
            </div>

   
      </div>
            <button type='submit' onClick={postData} className={classes.btnStyles} style={{height:60, width:400, borderRadius:5}}>
              Update Password
            </button>
    </div>
  )
}
