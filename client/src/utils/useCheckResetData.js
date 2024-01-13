import { checkReset, logout } from "../Service/Api";
export const useCheckResetData=async(email)=>{
   
    const res = await checkReset( email);
            const data = JSON.stringify(res);
            if(!data || res.data.status === 422 ){
           
            window.alert("User has changed the password, please log in again");
            await logout();
            // navigate('/');
            // await logout();
            }else{
            // window.alert("Password Updated Successful");
            console.log("verified reset");
            }
  }