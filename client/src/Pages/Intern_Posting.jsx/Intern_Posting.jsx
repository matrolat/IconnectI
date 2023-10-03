  import React,{useEffect} from 'react'
  import { makeStyles } from '@material-ui/core/styles';
  import Header from '../../Components/Header/Header';
  import { buttonStyles } from '../../Constants/Css';
  import { checkLogin } from '../../utils/checkLogin';
  import { useNavigate , useParams} from "react-router-dom";


  const useStyles = makeStyles((theme) => ({
      btnStyles: buttonStyles,

      page: {
          display : "flex",
          flexDirection : 'column',
          alignItems : "center",
          justifyContent : "space-around",

      },
      container: {
          display : "flex",
          // flexDirection : 'column',
          alignItems : "center",
          justifyContent : "space-around",
          // backgroundColor : "aqua",
          height : 500,
          // width : "100%",
          // borderBottomRightRadius : 62,
          // borderBottomLeftRadius : 62
        },
        inpContainer: {
          width: 316,
          height: 60,
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'space-between',
          margin: 60,
          alignItems: "flex-start",
        },
        head: {
          color: "#444444",
          fontSize: 11,
          fontStyle: "Regular",
          textAlign: "left",
          fontFamily: "Poppins",
          fontWeight: 400,
          lineHeight: "normal",
          fontStretch: "normal",
          textDecoration: "none",
        },
        inpText: {
          color: "#A7A1A1",
          height: 32,
          width: 309,
          display: "flex",
          padding: "11 16",
          overflow: "hidden",
          fontSize: 9.5,
          textAlign: "left",
          alignItems: "center",
          flexShrink: 0,
          // fontFamily: Poppins,
          fontWeight: 500,
          borderColor: "#D2CECE",
          borderStyle: "solid",
          bordeWidth: 0.791015625,
          borderRadius: 19.775390625,
          backgroundColor: "#FFFFFF",
        },
        inpTextArea: {
          color: "#A7A1A1",
          // height: 32,
          width: 309,
          display: "flex",
          padding: "11 16",
          overflow: "hidden",
          overflowY:"scroll",
          fontSize: 9.5,
          textAlign: "left",
          alignItems: "center",
          flexShrink: 0,
          // fontFamily: Poppins,
          fontWeight: 500,
          borderColor: "#D2CECE",
          borderStyle: "solid",
          bordeWidth: 0.791015625,
          borderRadius: 19.775390625,
          backgroundColor: "#FFFFFF",
          marginTop:10
        },
        right : {
          height: 500,
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'space-around',
          // backgroundColor: "red",
          
      },
      rightinpContainer:{
          //    backgroundColor: "yellow",
          //    width: 350,
              // height: 250,
              display: "flex",
              flexDirection: 'column',
              justifyContent: 'space-between',
              margin: 60,
              alignItems: "flex-start",
              
          // marginTop: 45,
          // marginBottom: 0,

        },
        radio:{
          width: 17,
	        height: 17,
	        border: "1 solid red",
	        borderRadius: "50%", 
          accentColor:"#026E78"
        }

      

    }));

  export default function Intern_Posting() {
    const navigate = useNavigate();
    const {email} = useParams();

    useEffect(()=>{
      const res = checkLogin(email);
      if(!res){
        navigate('/');
      }
      },[]);
        const classes = useStyles();
        



    return (
      <div className={classes.page}>
      <Header title="New Internship Posting form."/>

      <div className={classes.container}>
          <div className="left">
              <div className={classes.inpContainer}>
                  <div className={classes.head}>Internship Name *</div>
                  <input
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                />

              </div>
              <div className={classes.inpContainer}>
                  <div className={classes.head}>Area of Work * *</div>
                  <input
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                />

              </div>
              <div className={classes.inpContainer}>
                  <div className={classes.head}>No of Vacancies *</div>
                  <input
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                />

              </div>
              <div className={classes.inpContainer}>
                  <div className={classes.head}>Type of Engagement *</div>
                  <input
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                />

              </div>
          </div>
          <div className="left">
          
              <div className={classes.inpContainer}>
                  <div className={classes.head}>Start Date *</div>
                  <input
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                />

              </div>
              <div className={classes.inpContainer}>
                  <div className={classes.head}>Duration *</div>
                  <input
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                />

              </div>
              <div className={classes.inpContainer}>
                  <div className={classes.head}>No of hrs per week *</div>
                  <input
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                />

              </div>
              <div className={classes.inpContainer}>
                  <div className={classes.head}>Location of Work *</div>
                  <input
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                />

              </div>
          </div>
          <div className={classes.right}>
              <div className={classes.rightinpContainer} style={{height:800,marginBottom:20}}>
                  <div className={classes.head} 
                  // style={{marginBottom:30}}
                  >Job Description in Detail *</div>
                  <textarea
                  type="text"
                  // placeholder="abc"
                  rows="25"
                  class={classes.inpTextArea}
                >

                </textarea>
              </div>
              <div className={classes.rightinpContainer} 
              style={{marginTop:0}}>
                  <div className={classes.head} style={{marginBottom:0}} >Stipend *</div>
                  <div style={{display:"flex",alignItems:"center",margin:20,marginLeft:0,marginTop:10,marginBottom:10}}>
                      <input
                      className={classes.radio}
                      type="radio"
                      name='stipend'
                  />
                  <label htmlFor="" style={{marginRight:10}}>Yes</label>
                 
                  <input
                  className={classes.radio}
                      type="radio"
                      name='stipend'
                      placeholder="No"
                  />
                  <label htmlFor="">No</label>
                  </div> 
                  <input
                  type="text"
                  placeholder="Enter amount"
                  class={classes.inpText}
                />
              
              
          </div>
              
          </div>

      </div>
      <button type='submit' className={classes.btnStyles} style={{height:80, width:389}}>
              <span ><span>Sign Up</span></span>
      </button>

  </div>
    )
  }
