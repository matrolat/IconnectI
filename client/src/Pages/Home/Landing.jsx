import React from 'react'
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { styled,Button } from "@mui/material";
import logo from '../../Assets/landingLogo.png'
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@mui/material/Typography";



const StyledBox = styled(Box)`
    height:  647px;
    background-color:#F5F7FA;
`
const LoginButton = styled(Button)`
  

  display: block;
  margin:2px 5px 0px 5px;
    height:51px;
    width:128px;
    color:white;

    background: #4CAF4F;

`

const useStyles = makeStyles((theme) => ({
    
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`, // Subtracting the height of the toolbar
    },
    left:{
        width:"45%",
        // backgroundColor:"blue",
        textAlign:"left",

    },
    right:{
        width:"45%",
        // backgroundColor:"pink",
        display:"flex",
        justifyContent:"flex-end"
    },
    landingImg:{
        height:407,
        width:391
    }

  }));

export const Landing = () => {

    const classes = useStyles();

  return (
    <StyledBox maxWidth="xl" sx={{display:"flex",alignItems:"center"}}>
        <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:"flex",justifyContent:"center",alignItems:'center'}}>

            <div className={classes.left}>
            <Typography
            variant="h2"        
            sx={{          
              fontFamily: "Inter",
              fontWeight: 700,
            //   letterSpacing: ".3rem",
              color: "#4D4D4D",
              textDecoration: "none",
            }}
          >
            Industry and</Typography>


            <Typography
            variant="h2"        
            sx={{          
              fontFamily: "Inter",
              fontWeight: 700,
            //   letterSpacing: ".3rem",
              color: "#4D4D4D",
              textDecoration: "none",
            }}
          >Institute Connects</Typography>


                <Typography
            variant="h2"        
            sx={{          
              fontFamily: "Inter",
              fontWeight: 700,
            //   letterSpacing: ".3rem",
              color: "#4CAF4F",
              textDecoration: "none",
            }}
          >from x years</Typography>

                <p style={{color:"#717171",fontSize:17,marginBottom:30}}>Want to use your skills as an intern</p>
                <LoginButton
                    key="Login"
                    >
                Register
                </LoginButton>
            </div>
            <div className={classes.right}>
                <img src={logo} alt="" className={classes.landingImg} />
            </div>

        </Toolbar>
        </Container>
    </StyledBox>
  )
}
