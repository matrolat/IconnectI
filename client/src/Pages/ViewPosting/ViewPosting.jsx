import React,{useEffect,useState} from 'react'
import Header from '../../Components/Header/Header'
import StickyHeadTable from '../../Components/Table/StickyHeadTable'
import { getAllPosting } from '../../Service/Api';
import CustomTable from '../../Components/Table/CustomTable';
import { checkLogin } from '../../utils/checkLogin';

import { useNavigate , useParams} from "react-router-dom";
import { getUser } from '../../utils/session';

export default function ViewPosting() {
  const navigate = useNavigate();
  const {email} = useParams();

  useEffect(()=>{
		getData();
        
    const res = checkLogin(email);
      if(!res){
        navigate('/');
      }

	  },[]);

    const [data,setData] = useState();

    const getData=async()=>{
      const val =getUser();
      const res = await getAllPosting(val._id);
      // const datal = JSON.stringify(res.data);
      console.log(res.data);
      setData(res.data);
    }



  return (
    <div>
        <Header title="View Earlier Posting" />
        <div style={{height:"auto", width: "100%", display: "flex", justifyContent: "center", alignItems: "center",marginTop:50}}>
        <div>
       
      { data? <CustomTable data={data} /> : null}
        </div>
        </div>
    </div>
  )
}