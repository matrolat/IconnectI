import React from 'react'
import back from '../../Assets/backButton.png'

export default function BackBtn() {
  
  const handleBack=()=>{
    window.history.back();
  }

  return (
    <>
        <img onClick={handleBack} style={{width:50, height:50, position:"absolute", left: 60}}
        src={back}
        alt="Arrow"
  />
  </>
  )
}
