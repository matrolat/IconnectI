import React from 'react'
import CollegeUserTable from './CollegeUserTable';
import { useEffect,useState } from 'react';
import { JsonToExcel } from "react-json-to-excel";
import { getCollegeUsers } from '../../service/Api';



export default function College() {


  useEffect(()=>{
		getData();
	  },[]);

    const [data,setData] = useState();


    const getData =async()=>{
        const res = await getCollegeUsers();
        if(res)
        {
          setData(res.data);
        }
        console.log(res);
    }


  return (
    <div>
      <div style={{width:"100%",display:"flex",justifyContent:"flex-end"}}>
        
        <div style={{margin:10}}>

      <JsonToExcel
        title="Download as Excel"
        data={data}
        fileName="sample-file"
        btnClassName="custom-classname"
        />
      </div>

      </div>
        {data && Object.keys(data).length !== 0 ? <CollegeUserTable data={data} /> : <div>
          No data
</div>}
      
    </div>
  )
}
