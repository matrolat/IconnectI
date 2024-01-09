import React from 'react';
import { useEffect,useState } from 'react';
import { getActivations, getPosting } from '../../service/Api';
import { useNavigate , useParams} from "react-router-dom";
import { JsonToExcel } from 'react-json-to-excel';
import {Route, Link, Routes} from 'react-router-dom';
import StudentsListingTable from './StudentsListingTable'
import { getStudents } from '../../service/Api';

export default function ViewCollegeDetails() {
    useEffect(()=>{
		getData();
        
	  },[]);
    const [data,setData] = React.useState();
    const {email} = useParams();
    const getData=async()=>{
        const res = await getStudents(email);
        console.log("ubte"+JSON.stringify(res.data));
        if(res!=undefined)
        {
            await setData(res.data);
          
        }
    }
    const navigate = useNavigate();
  
   
    
 
  const handleBackButtonClick=()=>{navigate("/Reporting/college");};
  return (
    <div style={{display:"flex",alignItems:"center",width:"100%",flexDirection:"column",background:"#F5F7FA"}}>
        <button  style={{width:70, height:30, position:"absolute", left: 10,color:'black',background:'green',borderRadius:60}} onClick={handleBackButtonClick}>&#8592;</button>
      
       <div style={{width:"90%",display:"flex",flexDirection:"column"}}>
        <div style={{margin:10,display:"flex",justifyContent:"space-between"}}>

        <h2>Profiles Uploaded :</h2>
        
      <JsonToExcel
        title="Download as Excel"
        data={data}
        fileName="sample-file"
        btnClassName="custom-classname"
        
        />
      </div>
        {data && Object.keys(data).length !== 0 ? <StudentsListingTable data={data} /> : <div>
          No data
        </div>}

      </div>


    </div>
  )
}
