import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MainLogo from '../../Components/Main_Logo/MainLogo';
import { buttonStyles } from '../../Constants/Css';
import { forgotPWD } from '../../Service/Api';
import { useNavigate, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

	btnStyles: buttonStyles,
  body:{
	display:"flex",
	justifyContent:"center",
	alignItems:"center",
	width:"100vw",
	height:"100vh",
	// background:"yellow"
  },
  outer:{
	display:"flex",
	width:400,
	// backgroundColor:"red",
	flexDirection:"column",
	justifyContent:"center",
	alignItems:"center",
	"& span":{
		fontSize:40,
		color:"rgba(56,142,59,1)"
	}
  },
  inpContainer: {
	// width: 316,
	// height: 60,
	display: "flex",
	flexDirection: 'column',
	justifyContent: 'space-between',
	margin: 30,
	alignItems: "flex-start",

  },
  inpText: {
	color: "#A7A1A1",
	height: 50,
	width: 370,
	display: "flex",
	padding: "11 16",
	overflow: "hidden",
	
	textAlign: "left",
	alignItems: "center",
	flexShrink: 0,
	fontWeight: 400,
	borderColor: "#D2CECE",
	
	borderStyle: "solid",
	bordeWidth: 0.791015625,
	// borderRadius: 19.775390625,
	backgroundColor: "#FFFFFF",
	marginTop:10,
	marginBottom:10,
	paddingLeft:30,
	// backgroundColor:"rgba(130,130,130,1)",


  },
  head:{
	color:"#4CAF4F",
	fontWeight:600,
	width:"100%",
	textAlign:"left"
  }
  
}));



export default function ForgotPassword() {
    
	const classes = useStyles();
	const navigate = useNavigate();


	const [values, setValues] = useState({
        email:""
    });

    
    let name, value;
    const onChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        
        setValues({
            ...values,
            [name]: value,
        })
		console.log(name);
        }

		const postData = async() =>{
            
                const res = await forgotPWD(values);
                const data = JSON.stringify(res);
                if(!data || data.status === 422 ){
                window.alert("Invalid email");
                console.log("Invalid email");
                }else{
                window.alert("Email has been sent Successfully");
                console.log("Email has been sent Successfully");
                // await logout();
                navigate('/');

            }
        }


  
  return (
    <div className={classes.body}>
		<div className={classes.outer}>

	
			<MainLogo />
			<span>Forgot Password</span>

			<p className={classes.text}>
				Enter your email for the verification process, we will send link to your email
			</p>

			<div className={classes.inpContainer}>
                  <div className={classes.head}>Email</div>
                  <input
                  onChange={onChange}
                  name='email'
				  
                  type="text"
                  placeholder="Enter Email"
                  class={classes.inpText}
                />

              </div>
			
			<button class={classes.btnStyles} onClick={postData} style={{borderRadius:0,width: 400,height:60}}>CONTINUE</button>

		</div>


    </div>
  )
}

