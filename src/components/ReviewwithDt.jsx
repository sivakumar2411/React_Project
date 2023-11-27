import React, { useState } from 'react'
import { Fab, Rating } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
const ReviewwithDt = ({BN,Reviewdata}) => {
    const navi=useNavigate();
    const [hideorshow,setHideorshow]=useState(false);
    const show=()=>
    {
      setHideorshow(true);
    }
  return (
    <div >
        <Fab style={{position:"absolute",right:"180px",width:"35px",height:"35px"}} color="secondary" onClick={(event)=>navi('/ReviewTA',{state:BN})} aria-label="edit"><EditIcon /></Fab><h2 onClick={show} style={{cursor:"pointer"}}>Reviews({Array.isArray(Reviewdata) ? Reviewdata.length : 0})</h2>
          {(hideorshow)?
          <div >
            {Array.isArray(Reviewdata) &&
                Reviewdata?.map((review)=>
                (
                    <div key={review.id} style={{marginTop:"20px"}}>
                      <div style={{display:"flex",justifyContent:"space-between"}}><div style={{color:"cornsilk",fontSize:"20px"}}>{review.rename}</div><div title={review.rating}><Rating name="simple-controlled" precision={0.1} readOnly value={review.rating}/></div></div><br/>
                      <div style={{marginLeft:"50px",color:"lightskyblue"}}>{review.rev}</div>
                    </div>
                ))
            }
            </div>:<p></p>}
    </div>
  )
}

export default ReviewwithDt