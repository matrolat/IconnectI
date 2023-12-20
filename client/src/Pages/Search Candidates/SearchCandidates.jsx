import React,{useState,useEffect} from 'react'
import Header from '../../Components/Header/Header'
import { makeStyles } from '@material-ui/core/styles';
import { inputStyles,buttonStyles } from '../../Constants/Css'
import StickyHeadTable from '../../Components/Table/StickyHeadTable';
import { checkLogin } from '../../utils/checkLogin';
import { useNavigate , useParams} from "react-router-dom";
import { filterStudents, getActivePostings, getAllPosting, updateStudentInternship } from '../../Service/Api';
import { getUser } from '../../utils/session';
import StudentTable from '../../Components/Table/StudentTable';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
       

  };
}
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
 
  },
});


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
   

  },
};
const useStyles = makeStyles((theme) => ({

  inp: inputStyles,
  btn : buttonStyles,
  mid:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  left:{
    minHeight:425,
    minWidth:370,
    background:"#28CB8B",
    borderRadius:62,

  


  },
  right:{
   
    minWidth:"60%",
    marginLeft:30,
    marginBottom:30,
    height:"50vh",
    // backgroundColor:"red"
   
  }

}));

export default function SearchCandidates() {
  const classes = useStyles();


  const navigate = useNavigate();
  const {email} = useParams();

  const [data,setData] = useState();
  const [dropdown,setDropdown] = useState();
  const [uniqueID,setuniqueID] = useState();
  const [emp,empTable] = useState({});


  useEffect(()=>{
    getData();
    const res = checkLogin(email);
    if(!res){
      navigate('/');
    }
    },[]);
  
    const getData=async()=>{
      const val =getUser();
      // console.log(val);
      const res = await filterStudents(val._id);
      // const datal = JSON.stringify(res.data);
       const dat =await res.json();
       setData(dat);
       
       const resp = await getActivePostings(val._id);
      //  const info = await resp.json();
      // await console.log(JSON.stringify(resp.data));
      await setDropdown(resp.data);

    }


    const handleChange =(e)=>{
      setuniqueID(e.target.value);
    }

    const postData = async(data)=>{
      if(!uniqueID)
      {
        alert("pls select the internship ID");
        return;
      }
      
      // setLoading(true);
      const res = await updateStudentInternship( uniqueID, data._id);
      const dat = JSON.stringify(res);
      // setLoading(false);
      // console.log(data);
      if(!dat || res.data.status === 422 ){
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
       }else{
        window.alert("Intern has been accepted");
        console.log("Intern has been accepted");
        // navigate('/dashboard/'+email);
       }
       getData();
    }

  return (
    <div>
      <Header title="Search Candidates"/>


      <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:30}}>
        <label>Internship Post Id</label>
        {/* <input
          type="text"
          placeholder="Enter"
          class={classes.inp}
          style={{ height: 40,
            width: 470, marginLeft:40 ,marginRight:40,paddingLeft:30 }}
        /> */}
         <Select
                style={{
                  boxSizing:"border-box",
                  paddingLeft:12,
                  color: "black",
                  display: "flex",
                  padding: "11 16",
                  overflow: "hidden",
                  fontSize: 14,
                  textAlign: "left",
                  alignItems: "center",
                  flexShrink: 0,
                  fontWeight: 500,
                  borderColor: "#D2CECE",
                  borderStyle: "solid",
                  bordeWidth: 0.791015625,
                  borderRadius: 19.775390625,
                  backgroundColor: "#FFFFFF",
                  height: 40,
                  width: 470,
                  width:"50%", 
                  marginLeft:40 ,
                  marginRight:40,
                  paddingLeft:30 
                }}

                // value={values.typeofengagement}
                onChange={handleChange}
                  name='typeofengagement'
                input={ <OutlinedInput label="Name" className={classes.root} theme={theme} />}
                MenuProps={MenuProps}
                >
                
                  {!dropdown && <MenuItem
                     
                      style={getStyles("name", "personName", theme)}
                   
                    >
                    No Internships have been posted yet
                    </MenuItem>}
                  
                  {dropdown &&
                    dropdown.map((item)=>{
                      return <MenuItem
                      key="3"
                      value={item.uniqueID}
                      style={getStyles("name", "personName", theme)}
                   
                    >
                     {item.uniqueID}
                    </MenuItem>
                    })

                      
                  }

                  
              
              </Select>
        {/* <button className={classes.btn}>Search</button> */}
      </div>

      <div className={classes.mid}>
        <div className={classes.left}>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around",backgroundColor:"",height:300,paddingLeft:30,paddingRight:30}}>
            <h1>Category</h1>
            <h2 style={{color:"white",textDecoration:"underline",textDecorationColor:"#90EE90"}}>Candidates who have applied</h2>
            <h2 style={{color:"white",textDecoration:"underline",textDecorationColor:"#90EE90"}}>Other Best Fit Candidates</h2>
          </div>
        </div>
          <div className={classes.right} >
            {/* Candidates: */}
            {data && Object.keys(data).length !== 0 ? <StudentTable data={data} postData={postData} /> : "Select an internship from above to view candidates."}
            {/* { data!==emp ? <StudentTable data={data} postData={postData} /> : "No data" } */}
            {/* <StickyHeadTable /> */}
          </div>
      </div>
    </div>
  )
}
