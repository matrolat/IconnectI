import React,{useState,useEffect} from 'react'
import Header from '../../Components/Header/Header'
import { makeStyles } from '@material-ui/core/styles';
import { inputStyles,buttonStyles } from '../../Constants/Css'
import StickyHeadTable from '../../Components/Table/StickyHeadTable';
import { checkLogin } from '../../utils/checkLogin';
import { useNavigate , useParams} from "react-router-dom";
import { filterStudents } from '../../Service/Api';
import { getUser } from '../../utils/session';
import StudentTable from '../../Components/Table/StudentTable';
const useStyles = makeStyles((theme) => ({

  inp: inputStyles,
  btn : buttonStyles,
  mid:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  left:{
    minHeight:425,
    minWidth:370,
    background:"#28CB8B",
    borderRadius:62,
  


  },
  right:{
    backgroundColor:"red",
    maxWidth:"60%",
    marginLeft:30,
    marginBottom:30
  }

}));

export default function SearchCandidates() {
  const classes = useStyles();


  const navigate = useNavigate();
  const {email} = useParams();

  const [data,setData] = useState();

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
       console.log(dat[0]);
      setData(dat);
    }


  return (
    <div>
      <Header title="Search Candidates"/>


      <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:30}}>
        <label>Internship Post Id</label>
        <input
          type="text"
          placeholder="Enter"
          class={classes.inp}
          style={{ height: 40,
            width: 470, marginLeft:40 ,marginRight:40,paddingLeft:30 }}
        />
        <button className={classes.btn}>Search</button>
      </div>

      <div className={classes.mid}>
        <div className={classes.left}>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around",backgroundColor:"",height:300,paddingLeft:30,paddingRight:30}}>
            <h1>Category</h1>
            <h2 style={{color:"white",textDecoration:"underline",textDecorationColor:"#90EE90"}}>Candidates who have applied</h2>
            <h2 style={{color:"white",textDecoration:"underline",textDecorationColor:"#90EE90"}}>Other Best Fit Candidates</h2>
          </div>
        </div>
          <div className={classes.right}>
            {/* Candidates: */}
            { data? <StudentTable data={data} /> : null}
            {/* <StickyHeadTable /> */}
          </div>
      </div>
    </div>
  )
}
