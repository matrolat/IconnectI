import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    
    container: {
      backgroundColor:"red"
    },  

  }));

const Footer = () => {

  const classes = useStyles();

  return (
    <div className={classes.container}>Footer</div>
  )
}

export default Footer;