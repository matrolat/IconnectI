import React,{useState,useEffect} from 'react'
import '../Company_Activation/Company_Activation.css'
import MainLogo from "../../Components/Main_Logo/MainLogo";
import { makeStyles } from '@material-ui/core/styles';
import { buttonStyles } from '../../Constants/Css';
import { useNavigate , useParams} from "react-router-dom";
import { companyActivate } from '../../Service/Api';
// import { getToken, getUser } from '../../utils/session';
import { checkLogin } from '../../utils/checkLogin';
import { BeatLoader } from "react-spinners";
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/material/styles';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
 
});


const useStyles = makeStyles((theme) => ({
  btnStyles: buttonStyles
}));

export default function CompanyUpdate
() {
  
  const {email} = useParams();
  const navigate = useNavigate();
  let [loading, setLoading] = useState(false);
  useEffect(()=>{
	// 	const res = checkLogin(email);
    // if(!res){
    //   navigate('/');
    // }
	  },[]);


  const classes = useStyles();



  


  const [values, setValues] = useState({
    websiteinfo: "",
    industrytype: "",
    areaofwork: "",
    registeredoffice: "",
    companyregno: "",
    currentlocation: "",
    locationofwork: "",
    employeecount: "",
    compdescription : "",
    logo:""
  });
  const companysopcemail = email;


  let name, value;
  const onChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };


  const imageUpload = (e) =>{
    console.log(e.target.files[0]);
    setValues ({...values , logo: e.target.files[0]});
  }
  


  const postData = async()=>{
    setLoading(true);
    const res = await companyActivate(values,companysopcemail);
    const data = JSON.stringify(res);
    setLoading(false);
    // console.log(data);
    if(!data || res.data.status === 422 ){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
     }else{
      window.alert("Activation Successful");
      console.log("Activation Successful");
      navigate(`/dashboard/${email}`);
     }
  }

  return (
    <div>
        <div class="company-activation-container">
        <div class="company-activation-company-activation">
          <div class="company-activation-header" >
            <MainLogo />
            <div class="company-activation-frame7">
              <span class="company-activation-text">
                <span>Activate your account.</span>
              </span>
            </div>
          </div>

          <div className="activation-outer-container">
            <div className="activation-inner-container">
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Company Website *</span>
              </span>
              <input
                type="text"
                placeholder=""
                class="activation-input"
                name='websiteinfo'
                // value={values.websiteinfo}              
                onChange={onChange}
              />
            </div>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Area of Work *</span>
              </span>
              {/* <input
                type="text"
                placeholder=""
                class="activation-input"
              /> */}
              <select
                name="areaofwork"
                // value={values.areaofwork}
                class="activation-input"
                onChange={onChange}
              >
                <option value="" selected>
                  --select--
                </option>
                <option value="Software">Software</option>
                <option value="Hardware">Hardware</option>
                
              </select>
            </div>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Work Location *</span>
              </span>
              {/* <input
                type="text"
                placeholder=""
                class="activation-input"
                
              /> */}
              <select
                name="locationofwork"
                // value={values.locationofwork}
                onChange={onChange}
                class="activation-input"

              >
                <option value="" selected>
                  --select--
                </option>
                <option value="On Site">On Site</option>
                
              </select>
            </div>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Current Location *</span>
              </span>
              <input
                type="text"
                placeholder=""
                class="activation-input"
                name='currentlocation'
                // name={values.currentlocation}               
                onChange={onChange}
              />
            </div>
            </div>
            <div className="activation-inner-container">
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Company Registration id *</span>
              </span>
              <input
                type="text"
                placeholder=""
                name='companyregno'
                class="activation-input"
                // value={values.companyregno}
                
                onChange={onChange}
              />
            </div>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Industry Type *</span>
              </span>
              {/* <input
                type="text"
                placeholder=""
                class="activation-input"
              /> */}
              <select
                name="industrytype"
              
                onChange={onChange}
                class="activation-input"
              >
                <option value="" selected>
                  --select--
                </option>
                <option value="pvt">pvt</option>
                <option value="Govt">Govt</option>
                <option value="Public">Public</option>
              </select>
            </div>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Registered office *</span>
              </span>
              <input
                type="text"
                placeholder=""
                class="activation-input"
                name='registeredoffice'
                // value={values.registeredoffice}
        
                onChange={onChange}
              />
            </div>
            <div style={{display:"flex",width:"50%",justifyContent:"flex-end"}}>

            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} style={{backgroundColor:"rgba(29, 166, 132, 1)",borderRadius:62}}>
             {values.logo ?  values.logo.name :" Upload file"}
          
              <VisuallyHiddenInput name="logo" onChange={imageUpload} type="file" />
            </Button>
            </div>


           


            </div>
            <div className="activation-inner-container" style={{display:"flex",justifyContent:"space-evenly"}}>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">No of Employees *</span>
              </span>
              <input
                type="text"
                placeholder=""
                class="activation-input"
                name='employeecount'
                // value={values.employeecount}
               
                onChange={onChange}
              />
            </div>
            <div class="activation-container" style={{position:"realtive",height:200,justifyContent:"flex-start"}}>
              <span class="activation-container-text">
                <span class="activation-text">Description *</span>
              </span>
              {/* <input
                type="text"
                placeholder=""
                class="activation-input"
                name='compdescription'
                // value={values.currentlocation}               
                onChange={onChange}
              /> */}

            <textarea
                onChange={onChange}
                name='compdescription'
                type="text"
                // placeholder="abc"
                rows="12"
                // class={classes.inpTextArea}
                style={{
                  boxSizing:"border-box",
          paddingLeft:12,
          color: "#A7A1A1",
          // height: 100,
          width: 370,
          // display: "block",
          // overflow: "hidden",
          fontSize: 12,
          textAlign: "left",
          alignItems: "center",
          flexShrink: 0,
          fontWeight: 500,
          borderColor: "#D2CECE",
          borderStyle: "solid",
          bordeWidth: 0.791015625,
          borderRadius: 19.775390625,
          backgroundColor: "#FFFFFF",
                }}
              >

              </textarea>


            </div>
            <div class="activation-container">
              <span class="activation-container-text">
                <span class="activation-text">Payment Mode *</span>
              </span>
              {/* <input
                type="text"
                placeholder=""
                class="activation-input"
              /> */}
              <select name="modeofpayment" class="activation-input">
              <option value="" selected>
                --Payment Mode--
              </option>
              <option value="Net Banking">Net Banking</option>
              <option value="UPI">UPI</option>
              <option value="Google Pay">Google Pay</option>
            </select>
            </div>
            
            

            </div>
        </div>
        
            <div class="company-activation-group1">
              
            
            
            <div>
          

               

       


            </div>
            <div class="company-activation-frame6">
            <button type='submit' disabled={loading} className={classes.btnStyles} style={{height:80, width:389}}
            onClick={postData}
            >
            <span ><span>
            { loading?  
                 <BeatLoader 
                //  color="#36d7b7"
                 color="white"
                 loading={loading}
                 // cssOverride={override}
                 size={10}
                 aria-label="Loading Spinner"
                 data-testid="loader"
                 />
                 : "Activate Account"
                
                }
              
              </span></span>
            </button>
            </div>
          </div>
          
                  
        </div>
      </div>

    </div>
  )
}
