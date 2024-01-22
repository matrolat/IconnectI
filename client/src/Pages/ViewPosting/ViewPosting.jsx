import React,{useEffect,useState} from 'react'
import Header from '../../Components/Header/Header'
import StickyHeadTable from '../../Components/Table/StickyHeadTable'
import { GetLoginDetails, getAllPosting, getEarlierPostings } from '../../Service/Api';
import CustomTable from '../../Components/Table/CustomTable';
import { checkLogin } from '../../utils/checkLogin';

import { useNavigate , useParams} from "react-router-dom";
import { getUser, setUserSession } from '../../utils/session';

export default function ViewPosting() {
  const navigate = useNavigate();
  const {email} = useParams();

  const getLoginData = async () => {
    const data = await GetLoginDetails();
    console.log(data);
    if (data && data.companyspocemail === email) {
      if (data.loggedin === 'YES' && data.count === 1) {
        try {
          const response = await fetch('/logout', {
            method: 'GET',
          });

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
      else if (data && data.deactivate === 'YES') {
        const token = `${document.cookie}`;
        setUserSession(token, { _id: data._id, companyspocemail: data.companyspocemail, deactivate: data.deactivate, companyname: data.companyname });
        navigate(`/dashboard/${data.companyspocemail}`);
      }
      else {
        const token = `${document.cookie}`;
        setUserSession(token, { _id: data._id, companyspocemail: data.companyspocemail, deactivate: data.deactivate, companyname: data.companyname });

      }
    } else {
      navigate('/');
    }

    await checkActivation();

  }

  const checkActivation = async () => {
    const user = await getUser();

    if (user && user.deactivate == "YES") {
      navigate('/');
    }
    // console.log(imageURL);
  }


  useEffect(()=>{
    const fetchData = async () => {
      const isLoggedIn = await checkLogin(email);
  
      if (!isLoggedIn) {
        await getLoginData();
      }
      await getData();
    };
  
    fetchData();

	  },[]);

    const [data,setData] = useState();

    const getData=async()=>{
      const val =getUser();
      if(!val) return;
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
