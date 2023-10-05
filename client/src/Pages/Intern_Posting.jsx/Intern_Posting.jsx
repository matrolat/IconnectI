  import React,{useEffect, useState} from 'react'
  import { makeStyles } from '@material-ui/core/styles';
  import Header from '../../Components/Header/Header';
  import { buttonStyles } from '../../Constants/Css';
  import { checkLogin } from '../../utils/checkLogin';
  import { useNavigate , useParams} from "react-router-dom";
  import { getUser } from '../../utils/session';
  import { v4 as uuid } from "uuid";
import { internPosting } from '../../Service/Api';
import { BeatLoader } from "react-spinners";




  const useStyles = makeStyles((theme) => ({
      btnStyles: buttonStyles,

      page: {
          display : "flex",
          flexDirection : 'column',
          alignItems : "center",
          justifyContent : "space-around",

      },
      container: {
          display : "flex",
          // flexDirection : 'column',
          alignItems : "center",
          justifyContent : "space-around",
          // backgroundColor : "aqua",
          height : 500,
          // width : "100%",
          // borderBottomRightRadius : 62,
          // borderBottomLeftRadius : 62
        },
        inpContainer: {
          width: 316,
          height: 60,
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'space-between',
          margin: 60,
          alignItems: "flex-start",
        },
        head: {
          color: "#444444",
          fontSize: 11,
          fontStyle: "Regular",
          textAlign: "left",
          fontFamily: "Poppins",
          fontWeight: 400,
          lineHeight: "normal",
          fontStretch: "normal",
          textDecoration: "none",
        },
        inpText: {
          color: "#A7A1A1",
          height: 32,
          width: 309,
          display: "flex",
          padding: "11 16",
          overflow: "hidden",
          fontSize: 9.5,
          textAlign: "left",
          alignItems: "center",
          flexShrink: 0,
          fontWeight: 500,
          borderColor: "#D2CECE",
          borderStyle: "solid",
          bordeWidth: 0.791015625,
          borderRadius: 19.775390625,
          backgroundColor: "#FFFFFF",
        },
        inpTextArea: {
          color: "#A7A1A1",
          width: 309,
          display: "flex",
          padding: "11 16",
          overflow: "hidden",
          overflowY:"scroll",
          fontSize: 9.5,
          textAlign: "left",
          alignItems: "center",
          flexShrink: 0,
          fontWeight: 500,
          borderColor: "#D2CECE",
          borderStyle: "solid",
          bordeWidth: 0.791015625,
          borderRadius: 19.775390625,
          backgroundColor: "#FFFFFF",
          marginTop:10
        },
        right : {
          height: 500,
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'space-between',
          
      },
      rightinpContainer:{
              display: "flex",
              flexDirection: 'column',
              justifyContent: 'space-between',
              margin: 60,
              alignItems: "flex-start",

        },
        radio:{
          width: 17,
	        height: 17,
	        border: "1 solid red",
	        borderRadius: "50%", 
          accentColor:"#026E78"
        }

    }));

  export default function Intern_Posting() {
    const navigate = useNavigate();
    const {email} = useParams();
    let [loading, setLoading] = useState(false);

    useEffect(()=>{
      const res = checkLogin(email);
      if(!res){
        navigate('/');
      }
      },[]);
        const classes = useStyles();
        

        const [values, setValues] = useState({
          name: "",
          areaofwork: "",
          startdate: "",
          enddate: "",
          stipend: "",
          hoursweek: "",
          locationofwork: "",
          typeofengagement: "",
          vacancy: "",
          skills: "",
          jobdescription: "",
        });
        const postingemail = email;
        // const userID = userData._id;
        const user = getUser();
        const userID = user._id;
        console.log(userID);
        const unique_id = uuid();
        const small_id = unique_id.slice(0, 8);
        const uniqueID = user.companyname + "_" + small_id;
        console.log(uniqueID);
        const current = new Date();
        const postdate = `${current.getDate()}/${
          current.getMonth() + 1
        }/${current.getFullYear()}`;


        let name, value;
        const onChange = (e) => {
        name = e.target.name;
        value = e.target.value;

        setValues({
          ...values,
          [name]: value,
        });
      };


      const postData = async()=>{
        setLoading(true);
        const res = await internPosting(values, userID, uniqueID, postdate, postingemail);
        const data = JSON.stringify(res);
        setLoading(false);
        // console.log(data);
        if(!data || res.data.status === 422 ){
          window.alert("Invalid Registration");
          console.log("Invalid Registration");
         }else{
          window.alert("Internship Posting Successful");
          console.log("Internship Posting Successful");
          navigate('/dashboard/'+email);
         }
      }

    return (
      <div className={classes.page}>
      <Header title="New Internship Posting form."/>

      <div className={classes.container}>
          <div className="left">
              <div className={classes.inpContainer}>
                  <div className={classes.head}>Internship Name *</div>
                  <input
                  onChange={onChange}
                  name='name'
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                />

              </div>
              <div className={classes.inpContainer}>
                  <div className={classes.head}>Area of Work *</div>
                  <input 
                  onChange={onChange}
                  name='areaofwork'
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                />

              </div>
              <div className={classes.inpContainer}>
                  <div className={classes.head}>No of Vacancies *</div>
                  <input
                  onChange={onChange}
                  name='vacancy'
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                  />

              </div>
              <div className={classes.inpContainer}>
                  <div className={classes.head}>Type of Engagement *</div>
                  <input
                  onChange={onChange}
                  name='typeofengagement'
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                  />

              </div>
          </div>
          <div className="left">
          
              <div className={classes.inpContainer}>
                  <div className={classes.head}>Start Date *</div>
                  <input
                  onChange={onChange}
                  name='startdate'
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                  />

              </div>
              <div className={classes.inpContainer}>
                  <div className={classes.head}>End date *</div>
                  <input
                  onChange={onChange}
                  name='enddate'
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                  />

              </div>
              <div className={classes.inpContainer}>
                  <div className={classes.head}>No of hrs per week *</div>
                  <input
                  onChange={onChange}
                  name='hoursweek'
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                />

              </div>
              <div className={classes.inpContainer}>
                  <div className={classes.head}>Location of Work *</div>
                  <input
                  onChange={onChange}
                  name='locationofwork'
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                  />

              </div>
          </div>
          <div className={classes.right}>
              <div className={classes.rightinpContainer} style={{height:220,marginBottom:0, marginTop:37}}>
                  <div className={classes.head} 
                  >Job Description in Detail *</div>
                  <textarea
                  onChange={onChange}
                  name='jobdescription'
                  type="text"
                  // placeholder="abc"
                  rows="20"
                  class={classes.inpTextArea}
                >

                </textarea>
              </div>
              <div className={classes.inpContainer}  style={{marginBottom:20}}>
                  <div className={classes.head}>Required Skills *</div>
                  <input
                  onChange={onChange}
                  name='skills'
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                  />
              </div>

              <div className={classes.rightinpContainer} 
              style={{marginTop:0}}>
                  <div className={classes.head} style={{marginBottom:0}} >Stipend *</div>
                  <div style={{display:"flex",alignItems:"center",margin:20,marginLeft:0,marginTop:10,marginBottom:10}}>
                      <input
                      name='stipend'
                      type="radio"
                      className={classes.radio}
                  />
                  <label htmlFor="" style={{marginRight:10}}>Yes</label>
                 
                  <input
                  className={classes.radio}
                      type="radio"
                      name='stipend'
                      placeholder="No"
                  />
                  <label htmlFor="">No</label>
                  </div> 
                  <input
                  onChange={onChange}
                  name='stipend'
                  type="text"
                  placeholder="Enter amount"
                  class={classes.inpText}
                />
              
              
          </div>
              
          </div>

      </div>
      <button type='submit' disabled={loading} onClick={postData} className={classes.btnStyles} style={{height:80, width:389}}>
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
                 : "Post"
                
                }
                
                </span></span>
      </button>

  </div>
    )
  }
