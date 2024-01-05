import axios from 'axios'

const URL = "http://localhost:4000";
// const URL = "https://iconnecti.onrender.com";



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
    // window.alert("Pls enter all the fields");
    return;
  }

   
  try{
    const json = JSON.stringify({
      companyspocemail,
      password,
      confirmPassword,
      companyname,
      companyspocname,
      companyspocphone,
    });
    return await axios.post(`${URL}/signup`, json, {
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
      // window.alert("Pls enter all the fields");
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
    compdescription,
  } = values;
  
  if (
    !websiteinfo ||
    !industrytype ||
    !areaofwork ||
    !registeredoffice ||
    !companyregno ||
    !currentlocation ||
    !locationofwork ||
    !employeecount ||
    !compdescription ||
    !companysopcemail
  ) 
  {
    return;
  }
  const email = companysopcemail;


  const formData = new FormData();
   formData.append('websiteinfo', websiteinfo);
   formData.append('industrytype', industrytype);
   formData.append('areaofwork', areaofwork);
   formData.append('registeredoffice', registeredoffice);
   formData.append('companyregno', companyregno);
   formData.append('currentlocation', currentlocation);
   formData.append('locationofwork', locationofwork);
   formData.append('employeecount', employeecount);
   formData.append('compdescription', compdescription);
   formData.append('email', email);
   formData.append('logo', values.logo, values.logo.name);
    
   console.log(formData);
  //  return;
   try{
        return await axios.post(`${URL}/activate`,formData,{
        headers: {
            "Content-Type": "multipart/form-data"
        }}
      
            )
    }
    catch(error){
        console.log(" Error in signup API : "+error);
    }

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
    return await axios.post(`${URL}/activate`, json, {
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
export const GetCollegeLoginDetails =async()=>{
  
  try{
    // return await axios.get(`${URL}/getLoginDetails`, { withCredentials: true });
    const res = await fetch(`${URL}/getCollegeLoginDetails`,{
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



export const internPosting = async(values, userID, uniqueID, postdate, postingemail)=>{
  const {
          name,
          areaofwork,
          startdate,
          enddate,
          stipend,
          hoursweek,
          typeofengagement,
          locationofwork,
          vacancy,
          skills,
          jobdescription,
          // userID,
          // uniqueID,
          // postdate,
          // postingemail,
  } = values;

  const isValidDates = new Date(startdate) < new Date(enddate) && new Date(startdate) >= new Date();
  
  if (!isValidDates) {
    console.error('Invalid date range. Please ensure the start date is before the end date and both are greater than or equal to today.');
    return; // Stop execution if date validation fails
  }


  // const email = companysopcemail;


  try{
    const json = JSON.stringify({
        name,
        areaofwork,
        startdate,
        enddate,
        stipend,
        hoursweek,
        typeofengagement,
        locationofwork,
        vacancy,
        skills,
        jobdescription,
        userID,
        uniqueID,
        postdate,
        postingemail,
    });
    return await axios.post(`${URL}/internPosting`, json, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    });
  }
  catch(error){
      console.log(" Error in activation API : "+error);
  }



}
export const getAllPosting = async(userID)=>{
  

  try{
    const json = JSON.stringify({
      userID
    });
    return await axios.post(`${URL}/getAllPosting`, json, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  catch(error){
      console.log(" Error in get all postings API : "+error);
  }

}


export const getActivePostings= async(userID)=>{
  

  try{
    
    return await axios.get(`${URL}/getActivePostings/${userID}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  catch(error){
      console.log(" Error in get all postings API : "+error);
  }

}
export const getActiveStudents= async(userID)=>{
  

  try{
    
    return await axios.get(`${URL}/getActiveStudents/${userID}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  catch(error){
      console.log(" Error in get all postings API : "+error);
  }

}

export const getEarlierPostings= async(userID)=>{
  

  try{
    
    return await axios.get(`${URL}/getEarlierPostings/${userID}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  catch(error){
      console.log(" Error in get all postings API : "+error);
  }

}

export const ResetPWD =async(values, email)=>{
  const { password, confirmPassword } = values;
  try{
    const json = JSON.stringify({
      email,
      password,
      confirmPassword,
    });
    return await axios.post(`${URL}/resetPassword`, json, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  catch(error){
      console.log(" Error in login API : "+error);
  }
}

export const logout =async()=>{
  
  try{
    // return await axios.get(`${URL}/getLoginDetails`, { withCredentials: true });
    const res = await fetch(`${URL}/logout`,{
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
      console.log(" Error in logout API : "+error);
  }
}

export const forgotPWD =async(values)=>{
  const { email } = values;
  try{
    const json = JSON.stringify(
   {   email}
    );
    return await axios.post(`${URL}/forgotPassword`, json,{
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    } );
  }
  catch(error){
      console.log(" Error in Forget Password API : "+error);
  }
}


export const downloadTemplate =async()=>{
  
  const newTab = false;
  window.open("http://localhost:4000/public/files/template.csv",newTab ? '' : '_self' );
  // window.open("https://iconnecti.onrender.com/public/files/template.csv",newTab ? '' : '_self' );
 
  
}

export const StudentUpload= async(items)=>{
    try {
      const response = await fetch(`${URL}/studentUpload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });
      
      if (response.status === 201) {
        console.log('Items saved successfully');
      } else {
        console.error('Error saving items');
      }
    } catch (error) {
      console.error('Error saving items:', error);
    }
}

export const filterStudents= async(userID)=>{
    try {
      return await fetch(`${URL}/filterStudents`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userID }),
      });
      
     
    } catch (error) {
      console.error('Error saving items:', error);
    }
}



export const getAllStudents =async(email)=>{
  
  try{
    // return await axios.get(`${URL}/getLoginDetails`, { withCredentials: true });
    const res = await fetch(`${URL}/getAllStudents/${email}`,{
      method: 'GET',
      headers:{
        Accept: "application/json",
        "Content-Type" : "application/json"
      },
    });
     return await res.json();
    // console.log(data);
  }
  catch(error){
      console.log(" Error in get students API : "+error);
  }
}
export const getActivationDetails =async(email)=>{
  
  try{
    // return await axios.get(`${URL}/getLoginDetails`, { withCredentials: true });
    const res = await fetch(`${URL}/getActivationDetails/${email}`,{
      method: 'GET',
      headers:{
        Accept: "application/json",
        "Content-Type" : "application/json"
      },
    });
     return await res.json();
    // console.log(data);
  }
  catch(error){
      console.log(" Error in get students API : "+error);
  }
}


export const updateStudentInternship = async(uniqueID, studentID)=>{

  try{
    const json = JSON.stringify({
        uniqueID,
        studentID
       
    });
    return await axios.post(`${URL}/updateStudentInternship`, json, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    });
  }
  catch(error){
      console.log(" Error in update student internship API : "+error);
  }



}

//api reporting

export const GetReports =async(email)=>{
  
  try{
    // return await axios.get(`${URL}/getLoginDetails`, { withCredentials: true });
    const res = await fetch(`${URL}/getPosting/${email}`,{
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

