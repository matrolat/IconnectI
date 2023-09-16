import React from 'react'
import Logo from '../../Assets/Main_Logo.png'

export default function MainLogo(props) {
  return (
    <>
        <img style={{width:props.width, height:props.height}}
        src={Logo}
        alt="Logo-img"
  />
  </>
  )
}
