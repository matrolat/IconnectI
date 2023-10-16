import React,{useState} from 'react'
import Header from '../../Components/Header/Header'
import { makeStyles } from '@material-ui/core/styles';
import { buttonStyles } from '../../Constants/Css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { StudentUpload, downloadTemplate } from '../../Service/Api';
import { BeatLoader } from 'react-spinners';
import Papa from "papaparse";
import { useNavigate , useParams} from "react-router-dom";

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
const {email} = useParams();
// const email = "sameer";

const [data, setData] = useState([]);
const [file, setFile] = useState("");
const [loading, setLoading] = useState(false);


const imageUpload = (e) =>{
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    // setValues ({...values , logo: e.target.files[0]});
  }


const handleDownload =async()=>{
  setLoading(true);
  await downloadTemplate();
  setLoading(false);
}

const handleParse = async() => {
  // if (!file) return setError("Enter a valid file");
  const reader = new FileReader();

  reader.onload = async ({ target }) => {
    const csv = Papa.parse(target.result, { header: true });
    const parsedData = csv?.data;
    // const columns = Object.keys(parsedData[0]);
     
          await Promise.all(parsedData.map((dataRow) => {
            console.log(parsedData.length);
            console.log(parsedData);
              setData((prevBig) => [...prevBig, {...Object.values(dataRow),3:email}]);
            }));
            console.log(data);

    // setData(columns);
  };
  reader.readAsText(file);


  
};

const postData =async()=>{
  setLoading(true);
  const res = StudentUpload(data);
  const dat = JSON.stringify(res);
  
  // console.log(data);
  // if(!dat || res.data.status === 422 ){
  //   //  setLoading(!loading);
  //   window.alert("Invalid Registration");
  //   console.log("Invalid Registration");
  // }else{
  //   window.alert("Registration Successful");
  //   console.log("Registration Successful");
  //   // navigate('/');
  // }
  setLoading(false);
}




  return (
    <div>
        <Header title="Upload Student Data" />
        <div className={classes.outer}> 
            <div className={classes.left}>
                <div style={{margin:40}}>
                    

                    {!data ? "template preview" : data.map((item)=>{
                        return <div>{item[0]  } { item[1]} {item[2] } {item[3]}</div>
                    } )}
                </div>
                <button disabled={loading} onClick={handleDownload} className={classes.btnStyles}> { loading?  
                 <BeatLoader 
                //  color="#36d7b7"
                 color="white"
                 loading={loading}
                 // cssOverride={override}
                 size={10}
                 aria-label="Loading Spinner"
                 data-testid="loader"
                 />
                 : "Download Sample Template"
                
                }</button>
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
             {file ?  file.name :" Upload file"}
                 
              <VisuallyHiddenInput name="logo" onChange={imageUpload} type="file" />
            </Button>
            </div>


                <button className={classes.btnStyles} style={{width:200,margin:30}} onClick={handleParse}> Parse </button>
                <button className={classes.btnStyles} style={{width:200,margin:30}} onClick={postData}> Upload Data </button>

                </div>


            </div>
        </div>
    </div>
  )
}
