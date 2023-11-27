import React, { useEffect, useState } from 'react'
// import BackgroundShowCase from '../assets/Css Files/BackgroundShowCase.css';
const BackgroundShowCase = ({IIMMAA}) => {
    const [bagimg,setBagimg]=useState(0);
    useEffect(()=>{
        const timedur=setInterval(()=>
        {
            setBagimg((prev)=>(prev+1)%IIMMAA.length);
        },5000);
        return()=>clearInterval(timedur);
    },[IIMMAA]
    );
    const curimg=IIMMAA[bagimg];
  return (
    <img src={curimg.Image} alt={bagimg.name} style={{width:"550px",height:"650px",borderRadius:"20px 0px 0px 20px"}}  />
  )
}

export default BackgroundShowCase;