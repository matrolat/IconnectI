import axios from 'axios'

const URL = "http://localhost:4000";


export const companyRegistration = async(values) => {
  const {companyspocemail , password , confirmPassword , companyname ,companyspocname , companyspocphone } = values;
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