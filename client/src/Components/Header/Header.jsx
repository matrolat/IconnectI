import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MainLogo from '../Main_Logo/MainLogo';

const useStyles = makeStyles((theme) => ({

    content: {
        backgroundColor : "#28CB8B",
        height : 200,
        width : "100%",
        borderBottomRightRadius : 62,
        borderBottomLeftRadius : 62,
        display : "flex",
        flexDirection : 'column',
        justifyContent : "center",
        alignItems : "center",
       },
    

  }));

export default function Header(props) {
      const classes = useStyles();

  return (
    
    <div className={classes.content}>
        <MainLogo />
        {props.title}
    </div>

  )
}
