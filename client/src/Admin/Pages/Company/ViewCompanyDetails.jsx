import React from 'react'
import { useEffect,useState } from 'react';
import { getActivations, getPosting } from '../../service/Api';
import { useNavigate , useParams} from "react-router-dom";
import { JsonToExcel } from 'react-json-to-excel';
import CompanyUserTable from './CompanyUserTable';
import InternListingTable from './InternListingTable';
import {Route, Link, Routes} from 'react-router-dom';



export default function ViewCompanyDetails() {

  useEffect(()=>{
		getInternData();
		getData();

	  },[]);
    const navigate = useNavigate();
    const {email} = useParams();
    const [data,setData] = useState(
     
    );

    const [interndata,setInternData] = useState();
    
    
    const [imageURL,setImageURL] =useState();

    const getData =async()=>{
        const res = await getActivations(email);
        if(res!=undefined)
        {
            await setData(res.data[0]);
           setImageURL("http://localhost:4000/public/uploads/" +(res.data[0]?res.data[0].logo : null))
          //  setImageURL("https://iconnecti.onrender.com/public/uploads/" +(res.data[0]?res.data[0].logo : null))
        
        }
        console.log(res);
    }

    const getInternData =async()=>{
        const res = await getPosting(email);
        console.log("ubte"+JSON.stringify(res.data));
        if(res!=undefined)
        {
            await setInternData(res.data);
          
        }
    }
    const handleBackButtonClick=()=>{navigate("/Reporting/company");};
  return (
    <div style={{display:"flex",alignItems:"center",width:"100%",flexDirection:"column",background:"#F5F7FA"}}>
        <button  style={{width:70, height:30, position:"absolute", left: 10,color:'black',background:'aquamarine',borderRadius:50}} onClick={handleBackButtonClick}>&#8592;</button>
      <div style={{borderWidth:4,borderColor:"black",borderStyle:"solid",borderRadius:30, width:"90%",minHeight:300,margin:30,background:"#28CB8B"}}>
      <div style={{textAlign:"left",margin:20}}>
        <h2>Activation Details :</h2>
  

{
  data ?
          
          <div style={{width:"100%",backgroundColor:"",minHeight:"100%" ,display:"flex",justifyContent:"space-around"}}>

              <div style={{ width:"35%",minHeight:200,display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
                  <span style={{textAlign:"left"}}>
                    Logo:
                  </span>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",background:""}}>

                      {
                      imageURL ?
                    <img src={imageURL} alt="Logo" className="logo-image" height={120}  /> : "Image is not available"
                    } 
                </div>
                <div>Email :  {data && data.email} </div>
               
              </div>
              <div style={{ width:"35%",minHeight:200,display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
                <span>Area of Work: {data && data.areaofwork}</span>
                <span>Employee Count : {data && data.employeecount}</span>
                <span>Industry Type : {data && data.industrytype}</span>
                <span>Website Info : {data && data.websiteinfo}</span>
                <span>Location of Work : {data && data.locationofwork}</span>
              </div>
              <div style={{ width:"35%",minHeight:200,display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
                <span>Company Reg No: {data && data.companyregno}</span>
                <span>Req Office : {data && data.registeredoffice}</span>
                <span>Current Location : {data && data.currentlocation}</span>
                <span>Website Info : {data && data.websiteinfo}</span>
                <span>Company Description: {data && data.compdescription}</span>
              </div>
              
          </div>
  : "Profile is not activated yet"
}
  
      </div>
      </div>
       <div style={{width:"90%",display:"flex",flexDirection:"column"}}>
        <div style={{margin:10,display:"flex",justifyContent:"space-between"}}>

        <h2>Internships Posted :</h2>
        
      <JsonToExcel
        title="Download as Excel"
        data={interndata}
        fileName="sample-file"
        btnClassName="custom-classname"
        
        />
      </div>
        {interndata && Object.keys(interndata).length !== 0 ? <InternListingTable data={interndata} /> : <div>
          No data
        </div>}

      </div>


    </div>
  
  )
  
}
