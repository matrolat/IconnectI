import axios from 'axios'

const URL = "http://localhost:4000";
// const URL = "https://iconnecti.onrender.com";


export const getCollegeUsers= async()=>{

    try{
      
      return await axios.get(`${URL}/getCollegeList`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    catch(error){
        console.log(" Error in get college users API : "+error);
    }
  
}
export const getCompanyUsers= async()=>{

    try{
      
      return await axios.get(`${URL}/getCompanyList`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    catch(error){
        console.log(" Error in get company API : "+error);
    }
}

export const getActivations = async(email)=>{
  

    try{
      const json = JSON.stringify({
        email
      });
      return await axios.post(`${URL}/getActivations`, json, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    catch(error){
        console.log(" Error in get all postings API : "+error);
    }
  
}

export const getPosting= async(email)=>{
    try{
      
      return await axios.get(`${URL}/getPosting/${email}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    catch(error){
        console.log(" Error in get all postings API : "+error);
    }
  
  }