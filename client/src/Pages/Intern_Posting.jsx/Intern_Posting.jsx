import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../Components/Header/Header';

const useStyles = makeStyles((theme) => ({

    // content: {
    //     backgroundColor : "#28CB8B",
    //     height : 200,
    //     width : "100%",
    //     borderBottomRightRadius : 62,
    //     borderBottomLeftRadius : 62
    //    },
    

  }));

export default function Intern_Posting() {
      const classes = useStyles();

  return (
    <div className="page">
    <Header title="New Internship Posting form."/>

</div>
  )
}
