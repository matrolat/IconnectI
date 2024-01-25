import React,{useState,useEffect} from 'react'
import Header from '../../Components/Header/Header'
import { makeStyles } from '@material-ui/core/styles';
import { buttonStyles } from '../../Constants/Css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { GetCollegeLoginDetails, StudentUpload, downloadTemplate } from '../../Service/Api';
import { BeatLoader } from 'react-spinners';
import Papa from "papaparse";
import { useNavigate , useParams} from "react-router-dom";
import { Table } from '@material-ui/core';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { checkCollegeLogin, checkLogin } from '../../utils/checkLogin';
import { setUserSession } from '../../utils/session';
// import { useNavigate , useParams} from "react-router-dom";

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
        width:"75%",
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
const navigate = useNavigate();
// const email = "sameer";

const [data, setData] = useState([]);
const [file, setFile] = useState("");
const [loading, setLoading] = useState(false);

useEffect(()=>{
      
  // const res = checkCollegeLogin(email);
  //   if(!res){
  //     console.log("not"+res);
  //     navigate('/');
  //   }

    getData();

  },[]);

  const getData =async()=>{
    const data = await GetCollegeLoginDetails();
    console.log(data);
    if(data && data.collegespocemail === email){
        if( data.loggedin === 'YES' && data.count === 1){
          try {
              const response = await fetch('/logout', {
                method: 'GET',
              });
          
              if (response.ok) {
                console.log('Cookie deleted successfully');
                navigate('/');
              } else {
                console.log('Failed to delete cookie');
              }
            } catch (error) {
              console.error('Error occurred while deleting cookie:', error);
            }
        }       
        else{
            const token = `${document.cookie}`;
            if(token)
            {
                setUserSession(token,{collegespocemail:data.collegespocemail});

            }
           
        }
      }else{
        navigate('/');
      }

    }


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
  setData([]);
  // if (!file) return setError("Enter a valid file");
  const reader = new FileReader();

  reader.onload = async ({ target }) => {
    const csv = Papa.parse(target.result, { header: true });
    const parsedData = csv?.data;
    // const columns = Object.keys(parsedData[0]);
     
          await Promise.all(parsedData.map((dataRow) => {
            console.log(parsedData.length);
            console.log(parsedData);
              setData((prevBig) => [...prevBig, {...Object.values(dataRow),6:email}]);
            }));
            console.log(data);

    // setData(columns);
  };
  reader.readAsText(file);


  
};

const postData =async()=>{
  if(data.length===0)
  {
    
    alert("Please parse the data to upload");
    return
  }
  setLoading(true);
  const res = StudentUpload(data);
  const dat = JSON.stringify(res);
  
  console.log(dat);
  if(!dat  ){
    //  setLoading(!loading);
    // window.alert("Invalid Upload");
    console.log("Invalid Upload");
  }else{
    window.alert("Upload Successful");
    console.log("Upload Successful");
    navigate(`/CollegeDashboard/${email}`);
    // navigate('/');
  }
  setLoading(false);
}




  return (
    <div>
        <Header title="Upload Student Data" />
        <div className={classes.outer}> 
            <div className={classes.left}>
                <div style={{margin:40}}>
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

{
  data!="" && <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell align="right">ID</TableCell>
        <TableCell align="right">Name</TableCell>
        <TableCell align="right">Email</TableCell>
        <TableCell align="right">Phone</TableCell>
        <TableCell align="right">CGPA</TableCell>
        <TableCell align="right">Skills</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
{!data ? "template preview" : data.map((item)=>{
  return <TableRow
          
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          
          <TableCell align="right">{item[0]}</TableCell>
          <TableCell align="right">{item[1]}</TableCell>
          <TableCell align="right">{item[2]}</TableCell>
          <TableCell align="right">{item[3]}</TableCell>
          <TableCell align="right">{item[4]}</TableCell>
          <TableCell align="right">{item[5]}</TableCell>
          
        </TableRow>
 
} )}
    </TableBody>
  </Table>
</TableContainer>
}

                    







                
            </div>
            <div className={classes.right}>

            <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"70%"}}>

            


            <div className="company-container" style={{marginTop:30,marginBottom:30}}>
            <span className="head">
              
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
