import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../Components/Header/Header';
import { buttonStyles } from '../../Constants/Css';



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

       }

    

  }));

export default function Intern_Posting() {
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
            <div className={classes.rightinpContainer}>
                <div className={classes.head} >Job Description in Detail *</div>
                <input style={{height:200, width:345}}
                type="text"
                placeholder="abc"
                class={classes.inpText}
              />
            </div>
            <div className={classes.rightinpContainer}>
                <div className={classes.head} >Stipend *</div>
                <div >
                    <input
                    type="Checkbox"
                    placeholder="Yes"
                />
                <input
                    type="Checkbox"
                    placeholder="No"
                />
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
