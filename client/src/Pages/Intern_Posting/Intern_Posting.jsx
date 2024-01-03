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

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { alpha, styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
   

  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
 
  },
});

const names = [
  'React JS',
  'MongoDB',
  'JAVA',
  'C++',
  'Node JS',
  'Python',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
       

  };
}




  const useStyles = makeStyles((theme) => ({
      btnStyles: buttonStyles,
      root: {
        '&.Mui-focused': {
          // Add your focused styles here
          borderColor: 'white', // Change the border color when focused
        },
      },
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
          // color: "#444444",
          color: "black",
          // fontSize: 11,
          fontSize: 14,
          fontStyle: "Regular",
          textAlign: "left",
          fontFamily: "Poppins",
          fontWeight: 400,
          lineHeight: "normal",
          fontStretch: "normal",
          textDecoration: "none",
        },
        inpText: {
          boxSizing:"border-box",
          paddingLeft:12,
          // color: "#A7A1A1",
          color: "black",
          // height: 32,
          // width: 309,
          height:40,
          width:318,
          display: "flex",
          padding: "11 16",
          overflow: "hidden",
          fontSize: 14,
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
          boxSizing:"border-box",
          // color: "#A7A1A1",
          color: "black",
          minWidth: 289,
          minHeight:208,
          // maxHeight: 218,
          maxHeight: 210,
          paddingTop:10,
          paddingBottom:10,
          paddingLeft:10,
          paddingRight:10,

          display: "flex",
          // padding: "11 16",
          overflow: "hidden",
          overflowY:"scroll",
          fontSize: 14,
          textAlign: "left",
          alignItems: "center",
          flexShrink: 0,
          fontWeight: 500,
          borderColor: "#D2CECE",
          borderStyle: "solid",
          bordeWidth: 0.791015625,
          borderRadius: 19.775390625,
          backgroundColor: "#FFFFFF",
          // backgroundColor:"red",
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
    let [stipend, setStipend] = useState(false);

    useEffect(()=>{
      const res = checkLogin(email);
      if(!res){
        navigate('/');
      }
      },[]);
        const classes = useStyles();
        

        // const theme = useTheme();
        const [personName, setPersonName] = React.useState([]);

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
          skills: [],
          jobdescription: "",
        });



        const handleChange =async (event) => {
          const {
            target: { value },
          } = event;

              
            //   setPersonName(
            //     // On autofill we get a stringified value.
            //     typeof value === 'string' ? value.split(',') : value,
            //     );
            
          
          
            // setValues({
            //   ...values,
            //   ["skills"]: personName ,
            // });
            
  const updatedPersonName = typeof value === 'string' ? value.split(',') : value;

  await setPersonName(updatedPersonName);

  setValues({
    ...values,
    ["skills"]: updatedPersonName,
  });
            console.log(values);
        };

     
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
                  type="number"
                  placeholder=""
                  class={classes.inpText}
                  />

              </div>
              <div className={classes.inpContainer}>
                  <div className={classes.head}>Type of Engagement *</div>
                  {/* <input
                  onChange={onChange}
                  name='typeofengagement'
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                  /> */}
                  <Select
                style={{
                  boxSizing:"border-box",
                  paddingLeft:12,
                  color: "black",
                  height:40,
                  width:318,
                  display: "flex",
                  padding: "11 16",
                  overflow: "hidden",
                  fontSize: 14,
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

                value={values.typeofengagement}
                // onChange={handleChange}
                onChange={onChange}
                  name='typeofengagement'
                input={ <OutlinedInput label="Name" className={classes.root} theme={theme} />}
                MenuProps={MenuProps}
                // name='skills'
                // color="white"
        
              >
                
                  <MenuItem
                    key="1"             
                    value={"WFH"}
                    style={getStyles(name, personName, theme)}
                 
                  >
                   WFH
                  </MenuItem>
                  <MenuItem
                    key="2"
                    
                    value={"On Site"}
                    style={getStyles(name, personName, theme)}
                 
                  >
                   On Site
                  </MenuItem>
                  <MenuItem
                    key="3"
                    value={"Hybrid"}
                    style={getStyles(name, personName, theme)}
                 
                  >
                   Hybrid
                  </MenuItem>
              
              </Select>

              </div>
          </div>
          <div className="left">
          
              <div className={classes.inpContainer}>
                  <div className={classes.head}>Start Date *</div>
                  <input
                  onChange={onChange}
                  name='startdate'
                  type="date"
                  placeholder=""
                  class={classes.inpText}
                  style={{paddingRight:10}}
                  />

              </div>
              <div className={classes.inpContainer}>
                  <div className={classes.head}>End date *</div>
                  <input
                  onChange={onChange}
                  name='enddate'
                  type="date"
                  // type="text"
                  placeholder=""
                  class={classes.inpText}
                  style={{paddingRight:10}}
                  />

              </div>
              <div className={classes.inpContainer}>
                  <div className={classes.head}>No of hrs per week *</div>
                  <input
                  onChange={onChange}
                  name='hoursweek'
                  type="number"
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
                  rows="18"
                  class={classes.inpTextArea}
                >

                </textarea>
              </div>
              <div className={classes.inpContainer}  style={{marginBottom:10,marginTop:40}}>
                  <div className={classes.head} style={{marginBottom:5}}>Required Skills *</div>
                  {/* <input
                  onChange={onChange}
                  name='skills'
                  type="text"
                  placeholder=""
                  class={classes.inpText}
                  /> */}
                            {/* <InputLabel id="demo-multiple-chip-label">Chip</InputLabel> */}

                  <Select
                
                    // id="demo-multiple-chip"
                    //  class={classes.root}

                    style={{
                      boxSizing:"border-box",
                      paddingLeft:12,
                      color: "black",
                      height:40,
                      width:318,
                      display: "flex",
                      padding: "11 16",
                      overflow: "hidden",
                      fontSize: 14,
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



                    // labelId="demo-multiple-name-label"
                    // id="demo-multiple-name"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={ <OutlinedInput label="Name" className={classes.root} theme={theme} />}
                    MenuProps={MenuProps}
                    name='skills'
                    // color="white"
            
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        
                        value={name}
                        style={getStyles(name, personName, theme)}
                     
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
              </div>

              <div className={classes.rightinpContainer} 
              style={{marginTop:0}}>
                  <div className={classes.head} style={{marginBottom:0}} >Stipend *</div>
                  <div style={{display:"flex",alignItems:"center",margin:20,marginLeft:0,marginTop:10,marginBottom:10}}
                  onChange={(e)=>{console.log(e.target.value);}}
                  >
                      <input
                      name='stipend'
                      type="radio"
                      checked={stipend}
                      className={classes.radio}
                      onChange={()=>{setStipend(true)}}
                  />
                  <label htmlFor="" style={{marginRight:10}} onClick={()=>{setStipend(true)}}>Yes</label>
                 
                  <input
                  className={classes.radio}
                      type="radio"
                      name='stipend'
                      checked = {!stipend}
                      placeholder="No"
                      onChange={()=>{setStipend(false)}}
                  />
                  <label htmlFor="" onClick={()=>{setStipend(false)}}>No</label>
                  </div> 
                  <input
                  onChange={onChange}
                  name='stipend'
                  type="number"
                  placeholder={stipend?"Enter amount": "Unpaid"}
                  class={classes.inpText}
                  disabled = {!stipend}
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
