import React from 'react'
import { makeStyles } from '@material-ui/core';
import MainLogo from '../../Components/Main_Logo/MainLogo';
import { useNavigate , useParams} from "react-router-dom";

const useStyles = makeStyles((theme)=>({
    outer:{
        display:"flex",
    },
    left:{
        width:"30%",
        height:"100vh",
        backgroundColor:"#6DC181",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    right:{
        width:"70%",
        // backgroundColor:"yellow",
    },
    btn:{
        width:316,
        height:68,
        backgroundImage:"linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(184, 244, 220, 1) 100%)",
        borderRadius:20,
        border:1,
        color:"#165038",
        fontSize:15,
        fontWeight:"bold",
        transition: "background-color 0.3s, box-shadow 0.3s",
        "&:hover": {
            backgroundImage: "none", // Change to your desired hover background color
            backgroundColor:"#92F7CD",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }
     },

     row:{
        display:"flex",
        justifyContent:"space-between"
     },
     rowBox:{
        height:112,
        width:202,
        backgroundColor:"#E3F5FF",
        borderRadius:16,
        "& span":{
            // textAlign:"left",
            display:"flex",
            height:"40%",
            justifyContent:"space-around",
            alignItems:"center",
            backgroundColor:"none",
            // backgroundImage:"red"
        }
     },
     details:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:70,
        marginBottom:70
     },
     comp_details:{
        marginLeft:40,
        textAlign:"left"
     }
    


}));

export default function Company_Dashboard(){

    const classes = useStyles();
    const navigate = useNavigate();
    const { email } = useParams();

  return (
    <div className={classes.outer}>
        <div className={classes.left}>
           < MainLogo height={104} width={118}/>
           <button className={classes.btn} onClick={()=>{navigate(`/Activation/${email}`)}}>Activate Profile</button>
           <button className={classes.btn}>Reset Password</button>
           <button className={classes.btn} onClick={()=>{navigate(`/Intern_Posting/${email}`)}}>New Posting</button>
           <button className={classes.btn}>Update Posting</button>
           <button className={classes.btn} onClick={()=>{navigate(`/SearchCandidates/${email}`)}}>Search Candidate</button>
           <button className={classes.btn}>View active Working Profiles</button>
           <button className={classes.btn}>View Earlier Postings</button>
        </div>
        <div className={classes.right}><div style={{paddingLeft:100,paddingRight:100,paddingTop:50,display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>

        
            <h1>Company Dashboard</h1>
            <div className={classes.details}>
                <MainLogo height={180}  />

                <div className={classes.comp_details}>
                    <span style={{fontSize:36}}>Company Name</span>
                    <h5>Other details</h5>
                    <h5>Other details</h5>
                </div>

            </div>
            <div className={classes.row}>
                <div className={classes.rowBox}>
                    <h5>Active Posting</h5>
                    <span>
                        <h2>721K</h2>
                        <p>11</p>
                    </span>
                </div>
                <div className={classes.rowBox} style={{backgroundColor:"#E5ECF6"}}>
                    <h5>Active Applications</h5>
                    <span>
                        <h2>721K</h2>
                        <p>11</p>
                    </span>
                </div>
                <div className={classes.rowBox}>
                    <h5>Interns Hired</h5>
                    <span>
                        <h2>721K</h2>
                        <p>11</p>
                    </span>
                </div>
            </div>

        </div></div>
    </div>
  )
}