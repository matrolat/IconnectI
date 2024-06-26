import React,{useEffect,useState} from 'react'
import { makeStyles } from '@material-ui/core';
import MainLogo from '../../Components/Main_Logo/MainLogo';
import { useNavigate , useParams} from "react-router-dom";
import { GetCollegeLoginDetails, GetLoginDetails, getAllStudents, logout } from '../../Service/Api';
import { setUserSession,getToken, getUser } from '../../utils/session';
import CollegeStudentTable from '../../Components/Table/CollegeStudentTable';
import LogoutDialog from '../../Components/LogoutDialog/LogoutDialog';

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
        height:"100vh",
        overflow:"scroll",
        overflowX:"hidden"
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
        "&:disabled":{
            backgroundImage:"none",
          backgroundColor:"lightgrey"
        },
        "&:hover": {
            backgroundImage: "none", // Change to your desired hover background color
            backgroundColor:"#92F7CD",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          },
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

export default function CollegeDashboard(){
    const {email} = useParams();
    const [popup,setPopup] = useState(false);
    const [data,setData] = useState([]);

    useEffect(()=>{
      checkData();
      
      
	  },[]);

    const checkData=async()=>{
      try{
        await getData();
        getStudents();
      }
      catch(error)
      {
        console.log(error);
      }
    }


    const getData =async()=>{
        const data = await GetCollegeLoginDetails();
        
        if(data && data.collegespocemail === email){
            if( data.loggedin === 'YES' && data.count === 1){
              try {
               
                  const response = await logout();
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
            else if (data && data.deactivate === "YES"){
                const token = `${document.cookie}`;
                setUserSession(token,{collegespocemail:data.collegespocemail});
                // console.log("token"+document.cookie);
                navigate(`/CollegeDashboard/${data.collegespocemail}`);
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
            throw new Error("Unauthorized");
          }

        }



        const getStudents=async()=>{
          const res = await getAllStudents(email);
          console.log(res);
          setData(res);
        }

        const sortByColumn = (columnName) => {
            console.log("sort");
            const sortetData = [...data].sort((a, b) => {
              if (a[columnName] < b[columnName]) {
                return -1;
              }
              if (a[columnName] > b[columnName]) {
                return 1;
              }
              return 0;
            });
            setData(sortetData);
          };


    // const checkActivation=async()=>{
    //     const user = getUser();
    //     setUserInfo(user);
    //     console.log("user"+user.logo);
    //     if(user.deactivate=="NO")
    //     {
    //         setActivate(true);
    //     }
    //     setImageURL("http://localhost:4000/public/uploads/" +user.logo);
    //     console.log(imageURL);
    // }
    const classes = useStyles();
    const navigate = useNavigate();

    const handlePopup=async()=>{
      setPopup(true);
      
    }

    const handleLogout=async()=>{
      setPopup(false);
      
        try {
            const response = await logout();
        
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

  return (
    <div className={classes.outer}>
        <div className={classes.left}>
           < MainLogo height={104} width={118}/>
           {/* <button className={classes.btn} onClick={()=>{navigate(`/Activation/${email}`)}}>Update College Profile</button> */}
           <button className={classes.btn} onClick={()=>{navigate(`/ForgotPWD/${email}`)}}>Reset Password</button>
           <button className={classes.btn} onClick={()=>{navigate(`/UploadStudent/${email}`)}}>Upload New Profiles</button>
           {/* <button className={classes.btn} >Update Posting</button> */}
           {/* <button className={classes.btn} onClick={()=>{navigate(`/SearchCandidates/${email}`)}}>Generate Report</button>
           <button className={classes.btn} onClick={()=>{navigate(`/ViewPosting/${email}`)}}>Search Candidate</button>
           <button className={classes.btn}>View active Working Profiles</button>
           <button className={classes.btn} onClick={()=>{navigate(`/ViewPosting/${email}`)}}>View New Postings</button> */}
           <button className={classes.btn} onClick={handlePopup} >Logout</button>
        </div>
        <div className={classes.right}><div style={{paddingLeft:80,paddingRight:80,paddingTop:50,display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>

        
            <h1>College Dashboard</h1>
            <div className={classes.row}>
                <div className={classes.rowBox}>
                    <h5>Profiles Uploaded</h5>
                    <span>
                        <h2>721</h2>
                        <p>11</p>
                    </span>
                </div>
                <div className={classes.rowBox} style={{backgroundColor:"#E5ECF6"}}>
                    <h5>Internships Granted</h5>
                    <span>
                        <h2>721K</h2>
                        <p>611</p>
                    </span>
                </div>
                <div className={classes.rowBox}>
                    <h5>Unassigned</h5>
                    <span>
                        <h2>110</h2>
                        <p>11</p>
                    </span>
                </div>
            </div>

            {/* <div className={classes.details}>
                <img src={imageURL} alt="Logo" className="logo-image" height={150} />

                <div className={classes.comp_details}>
                    <span style={{fontSize:36}}>{userInfo.companyname}  </span>
                    <h5>Company Activated : {activate?"true":"false"}</h5>
                    <h5>Other details</h5>
                </div>
            </div> */}
            <div style={{marginTop:60}}>

            {/* { data? <CollegeStudentTable data={data} /> : null} */}
            {data && Object.keys(data).length !== 0 ? <CollegeStudentTable data={data} sortByColumn={sortByColumn}/> : "Upload students to view the list here."}
            </div>
        </div></div>
        {
          popup &&
        <LogoutDialog setPopup={setPopup} handleLogout={handleLogout}/>
        }
    </div>
  )
}
