import React,{useEffect,useState} from 'react'
import Header from '../../Components/Header/Header'
import StickyHeadTable from '../../Components/Table/StickyHeadTable'
import { getActivePostings, getActiveStudents, getAllPosting } from '../../Service/Api';
import CustomTable from '../../Components/Table/CustomTable';
import { checkLogin } from '../../utils/checkLogin';

import { useNavigate , useParams} from "react-router-dom";
import { getUser } from '../../utils/session';
import ActiveStudents from '../../Components/Table/ActiveStudents';

export default function ViewActivePostings() {
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
    //   console.log(val._id);
      // const res = await getActivePostings(val._id);
      const res = await getActiveStudents(val._id);
      // const datal = JSON.stringify(res.data);
      // await console.log(res.data);
      if(res)
      {

        setData(res.data);
      }
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
        <Header title="View Shortlisted Interns" />
        <div style={{height:"auto", width: "100%", display: "flex", justifyContent: "center", alignItems: "center",marginTop:50}}>
        <div>
       
       
       {data && Object.keys(data).length !== 0 ? <ActiveStudents data={data} sortByColumn={sortByColumn} /> : <div>To view shortlisted candidates, accept candidates from the "Search Candidates" page.
</div>}
      {/* { data!=undefined? <ActiveStudents data={data} /> : "No data"} */}
        </div>
        </div>
    </div>
  )
}
