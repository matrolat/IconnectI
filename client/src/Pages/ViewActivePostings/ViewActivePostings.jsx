import React,{useEffect,useState} from 'react'
import Header from '../../Components/Header/Header'
import StickyHeadTable from '../../Components/Table/StickyHeadTable'
import { getActivePostings, getAllPosting } from '../../Service/Api';
import CustomTable from '../../Components/Table/CustomTable';
import { checkLogin } from '../../utils/checkLogin';

import { useNavigate , useParams} from "react-router-dom";
import { getUser } from '../../utils/session';

export default function ViewActivePostings() {
  const navigate = useNavigate();
  const {email} = useParams();

  useEffect(()=>{
		getData();
        
    // const res = checkLogin(email);
    //   if(!res){
    //     navigate('/');
    //   }

	  },[]);

    const [data,setData] = useState();

    const getData=async()=>{
      const val =getUser();
    //   console.log(val._id);
      const res = await getActivePostings(val._id);
      // const datal = JSON.stringify(res.data);
      await console.log(res.data);
      setData(res.data);
    }



  return (
    <div>
        <Header title="View Active Posting" />
        <div style={{height:"auto", width: "100%", display: "flex", justifyContent: "center", alignItems: "center",marginTop:50}}>
        <div>
       
      { data? <CustomTable data={data} /> : null}
        </div>
        </div>
    </div>
  )
}
