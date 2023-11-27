import React, { useState } from 'react'
import '../assets/Css Files/BookwithDt.css'
const BookwithDt = ({book}) => {
  const [hideorshow,setHideorshow]=useState(false);
  const show=()=>
  {
    setHideorshow(true);
  }
  return (
    <div>
        <div id='bookprofilepic' style={{width:"400px",height:"400px",margin:"auto"}}><img src={book.Image} alt={book.name} style={{width:'400px',height:'400px'}}></img></div>
        <div style={{maxWidth:"400px",margin:"auto",fontSize:"40px",fontFamily:"cursive"}}><p>{book.name}</p></div>
        <div style={{maxWidth:"600px",margin:"auto"}}><p style={{fontSize:"30px"}}>Description</p><p style={{fontSize:"20px"}}>{book.Description}</p><hr style={{width:"350px"}} /></div>
        <div style={{maxWidth:"400px",margin:"auto"}}>
          <h2 onClick={show} style={{cursor:"pointer"}}>Reviews({book.reviews.length})</h2>
          {(hideorshow)?
          <div >
            {
                book.reviews.map((rev,ind)=>
                (
                    <div key={ind}>
                      <div>{rev.name}</div>
                      <div style={{marginLeft:"50px"}}>{rev.revi}</div>
                    </div>
                ))
            }
            </div>:<p></p>}
        </div>
        <br /><br />
    </div>
  )
}

export default BookwithDt