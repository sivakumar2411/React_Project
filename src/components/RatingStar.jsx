import { Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'

const RatingStar = ({reviews}) => {
    const [strval,setStrval]=useState(0.0);
    const rateavg=()=>
    {
        if(reviews.length===0)
        setStrval(0);
        else{
            const trate=reviews.reduce((sum,{rating})=>sum+rating,0);
            setStrval(trate/reviews.length);
        }
    }
    useEffect(()=>
    {
        rateavg();
    },[])
  return (
    <div title={strval}><Rating size='large' name="simple-controlled" readOnly color="alert" precision={0.1} value={strval}/></div>
  )
}

export default RatingStar