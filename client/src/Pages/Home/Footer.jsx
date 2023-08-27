import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import insta from "../../Assets/Insta_Icons.png";
import Web from "../../Assets/Web_Icons.png";
import YT from "../../Assets/YT_Icons.png";
import twitter from "../../Assets/Twitter_Icons.png";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#263238",
    width: "100%",
  },
  outerSection: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    color: "#FFFFFF",
    margin: "0 12%",
    padding: "64px 0",
    fontSize: 14,
  },

  leftSection: {
    width: "40%",
    height: 120,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "left",
  },
  copyright: {
    height: 48,
    display:"flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  p: {
    margin: 0
  },
  icons:{
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 32,
    width: 176
    
  },

  rightSection: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  alignLeft: {
    textAlign: "left"
  },
  colSection: {
    color: "#F5F7FA",
  }, 
  h2: {
    marginTop: 0,
    color: "green"
  },
  img:{
    backgroundColor:"blue"
  }
 
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.outerSection}>
        <div className={classes.leftSection}>
          <div className={classes.copyright}>
            <div className={classes.alignLeft}>Copyright © 2020 ici ltd.</div>
            <div className={classes.alignLeft}>All rights reserved</div>
          </div>
          <div className={classes.icons}>
            <img src={insta} alt="" />
            <img src={Web} alt="" />
            <img src={twitter} alt="" />
            <img src={YT} alt="" />
          </div>
        </div>
        <div className={classes.rightSection}>
          <div className={classes.colSection}>
            <h2 className={classes.alignLeft} style={{marginTop: 0}}>Company</h2>
            <div className={classes.keys}>
              <p className={classes.alignLeft}>About us</p>
              <p className={classes.alignLeft}>Blog</p>
              <p className={classes.alignLeft}>Contact us</p>
              <p className={classes.alignLeft}>Pricing</p>
              <p className={classes.alignLeft}>Testimonials</p>
            </div>
          </div>
          <div className={classes.colSection}>
            <h2 className={classes.alignLeft} style={{marginTop: 0}}>Company</h2>
            <div className={classes.keys}>
              <p className={classes.alignLeft}>About us</p>
              <p className={classes.alignLeft}>Blog</p>
              <p className={classes.alignLeft}>Contact us</p>
              <p className={classes.alignLeft}>Pricing</p>
              <p className={classes.alignLeft}>Testimonials</p>
            </div>
          </div>
          <div className={classes.colSection}>
            <h2 className={classes.alignLeft} style={{marginTop: 0}}>Stay up to date</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
