import React from 'react'
import Header from '../../Components/Header/Header'
import { makeStyles } from '@material-ui/core/styles';
import { buttonStyles } from '../../Constants/Css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
   
  });

const useStyles = makeStyles((theme) => ({
    btnStyles: buttonStyles,
    outer:{
        display:"flex",
        width:"100%",
   

    },
    left:{
        width:"50%",
        height:"75vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"red"
    },
    right:{
        width:"50%",
        height:"75vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"yellow"
    }
  }));


export default function UploadStudent() {
const classes = useStyles();


const imageUpload = (e) =>{
    console.log(e.target.files[0]);
    // setValues ({...values , logo: e.target.files[0]});
  }

  return (
    <div>
        <Header title="Upload Student Data" />
        <div className={classes.outer}> 
            <div className={classes.left}>
                <div style={{margin:40}}>
                    template preview
                </div>
                <button className={classes.btnStyles}>Download Sample Template</button>
            </div>
            <div className={classes.right}>

            <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"70%"}}>

            <div className="company-container" style={{marginTop:30,marginBottom:30}}>
            <span className="head">
              <label className="head-text">Company name*</label>
            </span>
            <input
              type="text"
              placeholder=""
              name="companyname"
              className="input"
            //   onChange = {onChange}
                style={{width:318}}
                errorMessage = ""
                required = "true"
                />
            </div>


            <div className="company-container" style={{marginTop:30,marginBottom:30}}>
            <span className="head">
              <label className="head-text">Company name*</label>
            </span>
            <Button component="label" variant="contained" class="input" startIcon={<CloudUploadIcon />} style={{width:318,display:"flex",justifyContent:"center"}}>
             {/* {values.logo ?  values.logo.name :" Upload file"} */}
                Select File          
              <VisuallyHiddenInput name="logo" onChange={imageUpload} type="file" />
            </Button>
            </div>


                <button className={classes.btnStyles} style={{width:200,margin:30}}> Upload Data </button>

                </div>


            </div>
        </div>
    </div>
  )
}
