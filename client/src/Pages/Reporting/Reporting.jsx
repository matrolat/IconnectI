import React,{useEffect,useState} from 'react'
import Header from '../../Components/Header/Header'
import StickyHeadTable from '../../Components/Table/StickyHeadTable'
import { GetReports, getAllPosting, getEarlierPostings } from '../../Service/Api';
import CustomTable from '../../Components/Table/CustomTable';
import { checkLogin } from '../../utils/checkLogin';
import { useNavigate , useParams} from "react-router-dom";
import { getUser } from '../../utils/session';


export default function Reporting() {
  const navigate = useNavigate();
  const {email} = useParams();

  useEffect(()=>{
		getData();
        
   

	  },[]);

    const [data,setData] = useState();

    const getData=async()=>{

      const val =getUser();
      //console.log(val);
      const res = await GetReports(email);
      console.log(res);
      const datal = JSON.stringify(res.data);
      //console.log(res.data);
      setData(res);
    }



  return (
    <div>
        <Header title="Reports" />
        <div style={{height:"auto", width: "100%", display: "flex", justifyContent: "center", alignItems: "center",marginTop:50}}>
        <div>
       
      { data? <CustomTable data={data} /> : null}
        </div>
        </div>
    </div>
  )
}
