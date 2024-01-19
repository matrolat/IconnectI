import React,{useEffect,useState} from 'react'
import Header from '../../Components/Header/Header'
import StickyHeadTable from '../../Components/Table/StickyHeadTable'
import { getAllPosting, getEarlierPostings } from '../../Service/Api';
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
      const res = await getEarlierPostings(val._id);
      // const datal = JSON.stringify(res.data);
      console.log(res.data);
      setData(res.data);
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



  return (
    <div>
        <Header title="Inactive Posting" />
        <div style={{height:"auto", width: "100%", display: "flex", justifyContent: "center", alignItems: "center",marginTop:50}}>
        <div style={{display:"flex", alignItems:"center",justifyContent:"center",width:"80%" }}>
       

        {data && Object.keys(data).length !== 0 ? <CustomTable data={data} sortByColumn={sortByColumn} /> : "No earlier internship postings found."}
      {/* { data? <CustomTable data={data} /> : null} */}
        </div>
        </div>
    </div>
  )
}
