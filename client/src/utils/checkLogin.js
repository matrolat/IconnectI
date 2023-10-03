import { getToken,getUser } from "./session";

export const checkLogin=(email)=>{

    const token = getToken();
    const user = getUser();
    const value = `${document.cookie}`;
    if(user && token && value && user.companyspocemail === email  && token===value)
    {
      console.log("verified");
      return true;
    }
    else{
        return false;
    }
  }