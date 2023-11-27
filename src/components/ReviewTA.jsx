import React, { useState,useEffect, useContext } from 'react';
import '../assets/Css Files/ReviewTA.css';
import  Rating from '@mui/material/Rating';
import  Button  from '@mui/material/Button';
import { addBookReview,getCurUser} from '../assets/Json Related Things/JSONAPI';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from './GlobeData';
const Review = () => {
  const location=useLocation();
  const BN=location.state;
  const {ADOUser}=useContext(UserContext);
  // const [curuser,setCuruser]=useState('');
  const [SB,setSB]=useState(false);
  const navi=useNavigate();
    const [value, setValue] = useState(5.00);
    const [newReview,setNewReview]=useState({rename:"",rev:"",rating:5})
    const sub=(event)=>
    {
      console.log(ADOUser);
      console.log(newReview);
      event.preventDefault();
      addBookReview(BN,newReview);
      setSB(true);
    }
    useEffect(()=>
    {
      const getcuruname=()=>
      {
        setNewReview({...newReview,rename:ADOUser.Name});
      }
      getcuruname();
    },[])
  return (
    <div id='outre'>
      <form onSubmit={sub}>
    <div id='boxre'>
        <h2 id='namere'>Book Review</h2>
        <p id='botre'>Share your thoughts about the Book</p>
        <div id='sxre'>    
        <table id='tabre'><tbody>
            <tr><td><div style={{fontSize:"20px",width:"350px"}}>{BN}</div></td></tr></tbody></table>
    <table id='onere'><tbody><tr><td>Rating</td></tr></tbody></table>
    <table id='onre'><tbody><tr><td><Rating name="simple-controlled" precision={0.1} value={value} onChange={(event, newValue) => {
    setValue(newValue);setNewReview({...newReview,rating:parseFloat(event.target.value)});
  }}
/></td></tr></tbody></table>
    <table id='twore'><tbody><tr><td><textarea name="name" itemType='textarea' onChange={(event)=>setNewReview({...newReview,rev:event.target.value})} required id="reviewtext" cols="38.5" rows="6" placeholder='Write your review here' style={{fontSize:'17px'}}/></td></tr>
    </tbody></table></div>
    <Button variant="outlined" color="error" id='Btre' type='submit'>Submit Review</Button>
    </div></form>
    {SB?(<div style={{position:"absolute",paddingLeft:"10px",width:"400px",height:"70px",display:"flex",bottom:"0px",background:"#f57c00",color:"white",fontSize:"25px",cursor:"pointer",paddingBottom:"10px",borderRadius:"10px"}}><p>Review Submitted Successfully<button onClick={(event)=>{setSB(false);navi('/Reviews')}} style={{cursor:"pointer",fontSize:"30px",color:"black",border:"none",background:"none",marginLeft:"25px"}}>×</button></p></div>):<p></p>}
    </div>
  )
}


export default Review