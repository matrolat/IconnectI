import React , {useState , useEffect } from 'react'
import './Otp.css';
import { useNavigate , useParams} from "react-router-dom";



const Otp = () => {
  const { email } = useParams();
    const navigate = useNavigate();
    

const [otp , setOtp] = useState(0);
    // useEffect(() => {
    //     callMainPage();
    //   }, []);
    
    //   const callMainPage = async () => {
    //     try {
    //       const res = await fetch("/mainscreen", {
    //         method: "GET",
    //         headers: {
    //           Accept: "application/json",
    //           "Content-Type": "application/json",
    //         },
    //         credentials: "include",
    //       });
    //       const data = await res.json();
    //       setData(data);
    //       if (!res.status === 200) {
    //         const error = new Error(res.error);
    //         throw error;
    //       }
    //     } catch (error) {
    //       console.log(error);
    //       navigate("/");
    //     }
    //   };
      

      const verifyOTP = async (email , otp)=>{
             
        const res = await fetch("http://localhost:4000/otpVerify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              email,
             otp,
            }),
          });
          const data = await res.json();
            console.log(data);
            console.log("otp verifited heres cookie");
            const value = `${document.cookie}`;
            console.log(value);

          if(res.status === 422){
            window.alert('Invalid OTP');
          }else{
            if(data.message === "Company")
            {
              window.alert("company otp verified");
              navigate(`/dashboard/${email}`);
            }

            else if(data.message === "College"){
              window.alert("college otp verified")
              // navigate(`/collegeMainScreen/${email}`);
            }
          }


         
      }
  return (
    <>
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h1>Please Enter Your OTP Here</h1>
        </div>
        <form onSubmit={(e)=>{
            e.preventDefault();
        }}>
          <div className="form_input">
            <label htmlFor="otp">OTP</label>
            <input type="text" name="otp" id=""  placeholder='Enter Your OTP' onChange={(e)=>{
               setOtp(e.target.value);
            }}/>
          </div>
          <button className='btn' onClick={() => {verifyOTP(email, otp)}}>Submit</button>
        </form>
      </div>
      {/* <ToastContainer /> */}
    </section>
  </>
  )
}

export default Otp