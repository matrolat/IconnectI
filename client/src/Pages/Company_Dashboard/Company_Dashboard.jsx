import React,{useEffect,useState} from 'react'
import { makeStyles } from '@material-ui/core';
import MainLogo from '../../Components/Main_Logo/MainLogo';
import { useNavigate , useParams} from "react-router-dom";
import { GetLoginDetails, getActivationDetails, getActivePostings, logout } from '../../Service/Api';
import { setUserSession,getToken, getUser } from '../../utils/session';
import CustomTable from '../../Components/Table/CustomTable';
import LogoutDialog from '../../Components/LogoutDialog/LogoutDialog';

const useStyles = makeStyles((theme)=>({
    outer:{
        display:"flex",
        height:"100vh",
    },
    left:{
        width:"30%",
        height:"100%",
        backgroundColor:"#6DC181",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    right:{
        width:"70%",
        height:"100vh",
        overflow: 'scroll',
        overflowX: 'hidden',
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
        justifyContent:"space-between",
        marginBottom:30
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
        marginTop:20,
        marginBottom:40
     },
     comp_details:{
        marginLeft:40,
        textAlign:"left"
     }
    


}));

export default function Company_Dashboard(){
    const {email} = useParams();
    const [activate,setActivate] = useState(false);
    const [imageURL,setImageURL] = useState("");
    const [userInfo,setUserInfo] = useState("");
    const [popup,setPopup] = useState(false);
    const [showActivate,setShowActivate] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        await getData();
        getTableData();
        checkActivation();
        getActivationData();
      };
    
      fetchData();
    }, []);


    
    const [tableData,setTableData] = useState();
    const sortByColumn = (columnName) => {
      console.log("sort");
      const sortetData = [...tableData].sort((a, b) => {
        if (a[columnName] < b[columnName]) {
          return -1;
        }
        if (a[columnName] > b[columnName]) {
          return 1;
        }
        return 0;
      });
      setTableData(sortetData);
    };

    const [userData,setUserData] = useState();
    const getTableData=async()=>{
      try{
          console.log("get table");
          const val =await getUser();
          setUserData(val);
          // console.log("get val0"+val);
        if(val){
            const res = await getActivePostings(val._id);
            // const datal = JSON.stringify(res.data);
            // await console.log(res.data);
            setTableData(res.data);
        }

      }
      catch(error)
      {
        console.log("Unauthorized");
      }
    }

    const getData =async()=>{
        const data = await GetLoginDetails();
        console.log(data);
        if(data && data.companyspocemail === email){
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
            else if (data && data.deactivate === 'YES'){
                const token = `${document.cookie}`;
                setUserSession(token,{_id:data._id ,companyspocemail: data.companyspocemail,deactivate:data.deactivate,companyname:data.companyname});
                navigate(`/dashboard/${data.companyspocemail}`);
            }
            else{
                const token = `${document.cookie}`;
                setUserSession(token,{_id:data._id ,companyspocemail: data.companyspocemail,deactivate:data.deactivate,companyname:data.companyname});
              
            }
          }else{
            navigate('/');
          }

          await checkActivation();
          
    }


    const checkActivation=async()=>{
        const user = await getUser();
        setUserInfo(user);
        // console.log("user"+user.logo);
        if(user && user.deactivate=="NO")
        {
            setActivate(true);
            setShowActivate(true);
          }
          else{
            
            setShowActivate(true);
        }
        // console.log(imageURL);
    }
    
    const getActivationData = async()=>{
        try{
            const activate =await getActivationDetails(email);     
            console.log(activate);     
            if(activate[0])
            {
                await setImageURL("http://localhost:4000/public/uploads/" +(activate[0] ?activate[0].logo : null))
            }

        }
        catch(error)
        {
            console.log("activation error");
        }
           
           // await setImageURL("http://localhost:4000/public/uploads/" +(activate[0] ?activate[0].logo : null));
        

   }



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
          {showActivate && <button className={classes.btn}  disabled={activate} onClick={()=>{navigate(`/Activation/${email}`)}}>Activate Profile</button>}
           <button className={classes.btn} onClick={()=>{navigate(`/ForgotPWD/${email}`)}}>Reset Password</button>
           <button className={classes.btn} disabled={!activate} onClick={()=>{navigate(`/Intern_Posting/${email}`)}}>New Posting</button>
           {/* <button className={classes.btn} disabled={!activate} >Update Posting</button> */}
           <button className={classes.btn} disabled={!activate} onClick={()=>{navigate(`/SearchCandidates/${email}`)}}>Search Candidate</button>
           <button className={classes.btn} disabled={!activate} onClick={()=>{navigate(`/ViewActivePostings/${email}`)}}>View Shortlisted Candidates</button>
           <button className={classes.btn} disabled={!activate} onClick={()=>{navigate(`/ViewPosting/${email}`)}}>Inactive Postings</button>
           <button className={classes.btn} onClick={handlePopup} >Logout</button>
        </div>
        <div className={classes.right}><div style={{paddingLeft:100,paddingRight:100,paddingTop:50,display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>

        
            <h1>Company Dashboard </h1>
            <div className={classes.details}>
                {/* <MainLogo height={180}  /> */}
               
               {
                imageURL ?
               <img src={imageURL} alt="Logo" className="logo-image" height={150} /> : null
               } 

                <div className={classes.comp_details}>
                    <span style={{fontSize:36}}>{userInfo && userInfo.companyname}  </span>
                    <h5>Company Activated : {activate?"true":"false"}</h5>
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
            
            
            {tableData && Object.keys(tableData).length !== 0 ? <CustomTable data={tableData} sortByColumn={sortByColumn} /> : ""}
     
        </div></div>
        {
          popup &&
        <LogoutDialog setPopup={setPopup} handleLogout={handleLogout}/>
        }
    </div>
  )
}
