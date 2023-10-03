import axios from 'axios'

const URL = "http://localhost:4000";


export const companyRegistration = async(values) => {
  const {companyspocemail , password , confirmPassword , companyname ,companyspocname , companyspocphone } = values;
  if (
    !password ||
    !confirmPassword ||
    !companyname ||
    !companyspocemail ||
    !companyspocname ||
    !companyspocphone ||
    confirmPassword != password
  ) {
    window.alert("Pls enter all the fields");
    return;
  }
  const logo = values.logo;
   const formData = new FormData();
   formData.append('companyspocemail', companyspocemail);
   formData.append('password', password);
   formData.append('confirmPassword', confirmPassword);
   formData.append('companyname', companyname);
   formData.append('companyspocname', companyspocname);
   formData.append('companyspocphone', companyspocphone);
   formData.append('logo', values.logo, values.logo.name);
    
   console.log(formData);
  //  return;
   try{
        return await axios.post(`${URL}/signup`,formData,{
        headers: {
            "Content-Type": "multipart/form-data"
        }}
      
            )
    }
    catch(error){
        console.log(" Error in signup API : "+error);
    }
    
    
  }
  
  export const login =async(values)=>{
    const { email, password } = values;
    try{
      const json = JSON.stringify({
        email,
        password,
      });
      return await axios.post(`${URL}/login`, json, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      });
    }
    catch(error){
        console.log(" Error in login API : "+error);
    }
  }
  export const collegeSignup =async(values)=>{

    const {
      collegespocemail,
      password,
      confirmPassword,
      collegename,
      collegeaddress,
      collegespocname,
      collegespocphone,
      collegeregid,
      degreeoffered,
    } = values;

    if (
      !password ||
      !confirmPassword ||
      !collegename ||
      !collegeaddress ||
      !collegespocemail ||
      !collegespocname ||
      !collegespocphone ||
      !collegeregid ||
      !degreeoffered ||
      confirmPassword != password
    ) {
      window.alert("Pls enter all the fields");
      return;
    }

    try{
      const json = JSON.stringify({
        collegespocemail,
        password,
        confirmPassword,
        collegename,
        collegeaddress,
        collegespocname,
        collegespocphone,
        collegeregid,
        degreeoffered,
      });
      return await axios.post(`${URL}/collegesignup`, json, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      });
    }
    catch(error){
        console.log(" Error in login API : "+error);
    }
  }


export const companyActivate = async(values,companysopcemail)=>{
  const {
    websiteinfo,
    industrytype,
    areaofwork,
    registeredoffice,
    companyregno,
    currentlocation,
    locationofwork,
    employeecount,
    compdescription
  } = values;

  const email = companysopcemail;


  try{
    const json = JSON.stringify({
      websiteinfo,
      industrytype,
      areaofwork,
      registeredoffice,
      companyregno,
      currentlocation,
      locationofwork,
      employeecount,
      compdescription,
      email
    });
    return await axios.post(`${URL}/activation`, json, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    });
  }
  catch(error){
      console.log(" Error in activation API : "+error);
  }



  // const data = await res.json();

  // if (res.status === 422 || !data) {
  //   window.alert("Invalid Registration");
  //   console.log("Invalid Registration");
  // } else {
  //   window.alert("Registration Successful");
  //   console.log("Registration Successful");
  //   navigate(`/MainScreen/${email}`);
  // }
}

export const GetLoginDetails =async()=>{
  
  try{
    // return await axios.get(`${URL}/getLoginDetails`, { withCredentials: true });
    const res = await fetch(`${URL}/getLoginDetails`,{
      method: 'GET',
      headers:{
        Accept: "application/json",
        "Content-Type" : "application/json"
      },
      credentials: "include"
    });
     return await res.json();
    // console.log(data);
  }
  catch(error){
      console.log(" Error in get login details API : "+error);
  }
}