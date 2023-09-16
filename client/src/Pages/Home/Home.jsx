import React from 'react'
import { Landing } from './Landing'
import Footer from './Footer'
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { styled,Button } from "@mui/material";
import logo from '../../Assets/landingLogo.png'
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@mui/material/Typography";
import logo1 from "../../Assets/Logo.png"
import logo2 from "../../Assets/Logo1.png"
import logo3 from "../../Assets/Logo2.png"
import logo4 from "../../Assets/Logo3.png"

import icon from "../../Assets/Icon.png"
import icon1 from "../../Assets/Icon1.png"
import icon2 from "../../Assets/Icon2.png"
import aboutImg from "../../Assets/Frame2.png"
import { ClassNames } from '@emotion/react';
import dataIcon from "../../Assets/dataIcon.png"
import dataIcon1 from "../../Assets/dataIcon1.png"
import dataIcon2 from "../../Assets/dataIcon2.png"
import dataIcon3 from "../../Assets/dataIcon3.png"
import tenstimonial from "../../Assets/Testimonial.png"


const StyledBox = styled(Box)`
    height:  190px;
    margin:40px 0px;
`


const useStyles = makeStyles((theme) => ({
    
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`, // Subtracting the height of the toolbar
    },
   leftAbout:{
    marginLeft:91
   },
   rightAbout:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"flex-start",
    textAlign:"left",
    // backgroundColor:"pink",
    marginRight:91
   },
   leftData:{
    marginLeft:91,
    // backgroundColor:"red",
    textAlign:"left",
   },
   rightData:{
    marginRight:91,
    display:"flex",
    flexDirection:"column",
    textAlign:"left",
    paddingLeft:78
    // backgroundColor:"pink"
   }

  }));

export default function Home() {
    const classes = useStyles();
  return (
    <div>
        <Landing />

        <StyledBox maxWidth="xl" sx={{display:"flex",alignItems:"center"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{display:"flex",justifyContent:"center",alignItems:'center',flexDirection:"column"}}>
                <Typography
                    variant="h2"        
                    sx={{          
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize:36,
                    //   letterSpacing: ".3rem",
                    color: "#4D4D4D",
                    textDecoration: "none",
                    }}
                > Our Clients  </Typography>
                <p style={{fontSize:16,color:"#717171"}} >We have been working with 500+ clients</p>
                <div style={{ width:"100%",display:"flex",justifyContent:"space-evenly",alignItems:"center",marginTop:30,marginBottom:5}}>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                </div>
                </Toolbar>
            </Container>
        </StyledBox>


        <Box maxWidth="xl" sx={{display:"flex",height:288}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{display:"flex",justifyContent:"space-evenly",alignItems:'center',flexDirection:"column",height:"100%"}}>
                <Typography
                    variant="h2"        
                    sx={{          
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize:36,
                    //   letterSpacing: ".3rem",
                    color: "#4D4D4D",
                    textDecoration: "none",
                    }}
                >  Community Connect in a single system  </Typography>
                
                <div style={{ width:"100%",display:"flex",justifyContent:"space-evenly",alignItems:"flex-start",marginTop:5,marginBottom:5}}>

                    <div className="sect">
                        <img src={icon} alt="" style={{margin:15}}/>
                        <Typography
                            variant="h2"        
                            sx={{          
                            fontFamily: "Inter",
                            fontWeight: 700,
                            fontSize:28,
                            //   letterSpacing: ".3rem",
                            color: "#4D4D4D",
                            textDecoration: "none",
                            }}
                        >  Organisations  </Typography>
                        <p style={{fontSize:16,color:"#717171"}} >Descriptions</p>
                    </div>
                    <div className="sect">
                        <img src={icon1} alt="" style={{margin:15}}/>
                        <Typography
                            variant="h2"        
                            sx={{          
                            fontFamily: "Inter",
                            fontWeight: 700,
                            fontSize:28,
                            //   letterSpacing: ".3rem",
                            color: "#4D4D4D",
                            textDecoration: "none",
                            }}
                        >  Organisations  </Typography>
                        <p style={{fontSize:16,color:"#717171"}} >National Institutes</p>
                    </div>
                    <div className="sect">
                        <img src={icon2} alt="" style={{margin:15}}/>
                        <Typography
                            variant="h2"        
                            sx={{          
                            fontFamily: "Inter",
                            fontWeight: 700,
                            fontSize:28,
                            //   letterSpacing: ".3rem",
                            color: "#4D4D4D",
                            textDecoration: "none",
                            }}
                        >  Organisations  </Typography>
                        <p style={{fontSize:16,color:"#717171"}} >Students</p>
                    </div>
                    
                   

                </div>
                </Toolbar>
            </Container>
        </Box>

        <Box maxWidth="xl" sx={{display:"flex",mb:"40px",height:433}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{display:"flex",justifyContent:"center",alignItems:'center'}}>
                    <div className={classes.leftAbout}>
                            <img src={aboutImg} alt="" />
                    </div>
                    <div className={classes.rightAbout}>
                        <Typography
                                variant="h2"        
                                sx={{          
                                fontFamily: "Inter",
                                fontWeight: 700,
                                fontSize:28,
                                //   letterSpacing: ".3rem",
                                color: "#4D4D4D",
                                textDecoration: "none",
                                }}
                            > About Us </Typography>
                            <p style={{fontSize:16,color:"#717171"}} > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, cum alias. Praesentium vitae dicta dignissimos, quo numquam voluptatibus distinctio dolorum soluta exercitationem reprehenderit obcaecati vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio enim consequuntur inventore, blanditiis dolores! </p>
                    </div>
                </Toolbar>
            </Container>
        </Box>


        <Box maxWidth="xl" sx={{display:"flex",mb:"40px",height:288,backgroundColor:"#F5F7FA",alignItems:"center"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{display:"flex",justifyContent:"space-between",alignItems:'center'}}>
                    <div className={classes.leftData}>
                        <Typography
                                    variant="h2"        
                                    sx={{          
                                    fontFamily: "Inter",
                                    fontWeight: 700,
                                    fontSize:36,
                                    //   letterSpacing: ".3rem",
                                    color: "#4D4D4D",
                                    textDecoration: "none",
                                    }}
                                > Helping Students </Typography>
                        <Typography
                                    variant="h2"        
                                    sx={{          
                                    fontFamily: "Inter",
                                    fontWeight: 700,
                                    fontSize:36,
                                    //   letterSpacing: ".3rem",
                                    color: "#4CAF4F",
                                    textDecoration: "none",
                                    }}
                                > Reinvent themself </Typography>
                                  <p style={{fontSize:16,color:"#18191F"}} >We reached here with our hard work and dedication</p>
                    </div>
                    <div className={classes.rightData}>
                                    <div className="row" style={{display:"flex",alignItems:"center",textAlign:"left"}}>
                                        <img src={dataIcon} alt="" style={{height:48,widht:48,}}/>
                                        <div style={{margin:16,marginRight:"10vw"}}>
                                        <Typography
                                                    variant="h2"        
                                                    sx={{          
                                                    fontFamily: "Inter",
                                                    fontWeight: 700,
                                                    fontSize:28,
                                                    //   letterSpacing: ".3rem",
                                                    color: "#4D4D4D",
                                                    textDecoration: "none",
                                                   
                                                    }}
                                                > 224 </Typography>
                                                <p style={{fontSize:16,color:"#717171" ,margin:0}} >
                                                    Organisations
                                                </p>

                                        </div>
                                        
                                        <img src={dataIcon1} alt="" style={{height:48,widht:48}}/>
                                        <div style={{margin:16}}>
                                        <Typography
                                                    variant="h2"        
                                                    sx={{          
                                                    fontFamily: "Inter",
                                                    fontWeight: 700,
                                                    fontSize:28,
                                                    //   letterSpacing: ".3rem",
                                                    color: "#4D4D4D",
                                                    textDecoration: "none",
                                                   
                                                    }}
                                                > 224 </Typography>
                                                <p style={{fontSize:16,color:"#717171" ,margin:0,marginRight:30}} >
                                                    Students
                                                </p>

                                        </div>
                                    </div>
                                    <div className="row" style={{display:"flex",alignItems:"center",textAlign:"left"}}>
                                        <img src={dataIcon2} alt="" style={{height:48,widht:48,}}/>
                                        <div style={{margin:16,marginRight:173}}>
                                        <Typography
                                                    variant="h2"        
                                                    sx={{          
                                                    fontFamily: "Inter",
                                                    fontWeight: 700,
                                                    fontSize:28,
                                                    //   letterSpacing: ".3rem",
                                                    color: "#4D4D4D",
                                                    textDecoration: "none",
                                                   
                                                    }}
                                                > 224 </Typography>
                                                <p style={{fontSize:16,color:"#717171" ,margin:0}} >
                                                    Colleges
                                                </p>

                                        </div>

                                        <img src={dataIcon3} alt="" style={{height:48,widht:48,}}/>
                                        <div style={{margin:16,marginRight:30}}>
                                        <Typography
                                                    variant="h2"        
                                                    sx={{          
                                                    fontFamily: "Inter",
                                                    fontWeight: 700,
                                                    fontSize:28,
                                                    //   letterSpacing: ".3rem",
                                                    color: "#4D4D4D",
                                                    textDecoration: "none",
                                                   
                                                    }}
                                                > 224 </Typography>
                                                <p style={{fontSize:16,color:"#717171" ,margin:0}} >
                                                    Internships
                                                </p>

                                        </div>
                                    </div>
                                    
                    </div>




                </Toolbar>
            </Container>
        </Box>

        
        <Box maxWidth="xl" sx={{display:"flex",mb:"40px",height:390,backgroundColor:"#F5F7FA",alignItems:"center"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{display:"flex",justifyContent:"space-between",alignItems:'center'}}>
                    <div className={classes.leftData}>
                        <img src={tenstimonial} alt="" style={{height:326,width:326}} />
                    </div>
                   <div className={classes.rightData}>
                         <p style={{fontSize:16,color:"#717171"}} > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, cum alias. Praesentium vitae dicta dignissimos, quo numquam voluptatibus distinctio dolorum soluta exercitationem reprehenderit obcaecati vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio enim consequuntur inventore, blanditiis dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repudiandae facere nesciunt neque impedit, animi natus magni possimus rem, ullam officiis esse saepe tenetur quia ex molestiae placeat quod qui nemo! Necessitatibus.</p>
                        <Typography
                                    variant="h2"        
                                    sx={{          
                                    fontFamily: "Inter",
                                    fontWeight: 700,
                                    fontSize:20,
                                    //   letterSpacing: ".3rem",
                                    color: "#4CAF4F",
                                    textDecoration: "none",
                                    }}
                                >  xyz  </Typography>
                                <p style={{fontSize:16,color:"#717171"}} >British Dragon Boat Racing Association</p>
                                <div>
                                    <img src={logo1} alt="" style={{marginRight:30}} />
                                    <img src={logo2} alt="" style={{marginRight:30}} />
                                    <img src={logo3} alt="" style={{marginRight:30}} />
                                    <img src={logo4} alt="" style={{marginRight:30}} />
                                </div>
                   </div>





                </Toolbar>
            </Container>
        </Box>


        <Footer />
    </div>
  )
}
