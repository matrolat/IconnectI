import { getToken,getUser } from "./session";

export const checkLogin=(email)=>{

    const user = getUser();
    const value = `${document.cookie}`;
    if(user && user.companyspocemail === email)
    {
      console.log("verified");
      return true;
    }
    else{
        return false;
    }
  }

export const checkCollegeLogin=(email)=>{

  // const token = getToken();
  const user = getUser();
  // const value = `${document.cookie}`;
  // console.log("token"+token);
  // console.log("user"+user);
  // console.log("cookie"+value);
  if(user  && user.collegespocemail === email  )
  {
    console.log("verified");
    return true;
  }
  else{
      return false;
  }
}
