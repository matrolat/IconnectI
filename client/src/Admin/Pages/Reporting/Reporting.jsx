import React,{useState,useEffect} from 'react'
import Header from '../../../Components/Header/Header';
import { makeStyles } from '@material-ui/core/styles';
import { inputStyles,buttonStyles } from '../../../Constants/Css';
import { useNavigate , useParams} from "react-router-dom";



import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import College from '../College/College';
import Company from '../Company/Company';

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
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:20,
    paddingLeft:30
  },
  left:{
   // minHeight:425,
   // minWidth:370,
    background:"#28CB8B",
    borderRadius:62,
    minHeight:550,
    width:350,


  },
  right:{
   
    minWidth:"70%",
    marginLeft:30,
    marginRight:20,
    marginBottom:30,
    height:"70vh",
    //overflow:"scroll",
    
     backgroundColor:""
   
  }

}));

export default function Reporting() {
  const classes = useStyles();


  const navigate = useNavigate();
  const {page} = useParams();

  const [data,setData] = useState();
  const [dropdown,setDropdown] = useState();
  const [uniqueID,setuniqueID] = useState();
  const [emp,empTable] = useState({});



  const [selectedLink, setSelectedLink] = useState(page?page:"college");

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  useEffect(()=>{
   
    },[]);
  
    

   

  return (
    <div>
      <Header title="Reports"/>

   
      

      <div className={classes.mid}>
        <div className={classes.left}>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around",backgroundColor:"",height:"100%",paddingLeft:30,paddingRight:30}}>
          
            <h1>Category</h1>
            <div onClick={() => handleLinkClick('college')} style={{cursor:"pointer"}}>
            <h2  style={{color:"white",textDecorationColor:"#90EE90",textDecoration:selectedLink === 'college' &&"underline"}}>College Users</h2>

            </div>
            <div onClick={() => handleLinkClick('company')} style={{cursor:"pointer"}}>
            <h2  style={{color:"white",textDecoration:selectedLink === 'company' &&"underline" ,textDecorationColor:"#90EE90"}}>Company Users</h2>
            </div>
          </div>
        </div>
          <div className={classes.right} >
            {selectedLink === 'college' && <College/>}
            {selectedLink === 'company' && <Company/>}
          </div>
      </div>
    </div>
  )
}
