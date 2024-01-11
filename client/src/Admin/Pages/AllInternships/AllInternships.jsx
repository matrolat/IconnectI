import React from "react";
import AllInternshipTable from './AllInternshipTable';

import { useEffect,useState } from 'react';
import { JsonToExcel } from "react-json-to-excel";
import { getAllInternships } from "../../service/Api";

export default function AllInternships() {


    useEffect(()=>{
          getData();
        },[]);
  
      const [data,setData] = useState();
  
  
      const getData =async()=>{
        const res = await getAllInternships();
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
            {data && Object.keys(data).length !== 0 ? <AllInternshipTable data={data} /> : <div>
              No data
    </div>}
          
        </div>
      )
    }
    