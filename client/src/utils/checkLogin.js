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

export const checkCollegeLogin=(email)=>{

  const token = getToken();
  const user = getUser();
  const value = `${document.cookie}`;
  // console.log("token"+token);
  // console.log("user"+user);
  // console.log("cookie"+value);
  if(user && token && value && user.collegespocemail === email  && token===value)
  {
    console.log("verified");
    return true;
  }
  else{
      return false;
  }
}
