import React ,{useEffect, useState}from 'react';

import '../assets/Css Files/SignUp.css';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import  TextField  from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { addNewUser, getAllUserDatas } from '../assets/Json Related Things/JSONAPI';
const SignUp = () => {  
  const navi=useNavigate();
  const [udata,setUdata]=useState({name:"",email:"",password:""})
  const [data,setData]=useState([])
  const [mismatch,setMismatch]=useState(false);
  const [checkbox,setCheckbox]=useState(false);
  useEffect(()=>
  {
    const fetchdata = async()=>
    {
      await getAllUserDatas()
      .then((res)=>setData(res.data))
      .catch((err)=>console.log(err));
    }
    fetchdata();
  },[])
  const sub=(event)=>
  {
    event.preventDefault();
    if(document.getElementById("outlined-password-input").value!==udata.password)
    setMismatch(true);
    else
    {
      const nameexistorno=data.findIndex(({name})=> name===udata.name);
      const Emexistorno=data.findIndex(({email})=> email===udata.email);
      if(nameexistorno===-1&&Emexistorno===-1)
      {
        addNewUser(udata);
        navi('/SignIn')
      }
      else if(nameexistorno!==-1)
      alert("User Name Already Exist");
      else if(Emexistorno!==-1)
      alert("Email Already Exist");
      document.getElementById("outlined-password-input").value="";
      document.getElementById("demo-helper-text-misaligned-no-helper1").value="";
      document.getElementById("demo-helper-text-misaligned-no-helper2").value="";
      document.getElementById("demo-helper-text-misaligned-no-helper3").value="";
      setMismatch(false);
      setCheckbox(false);
    }
  }
  return (
    <div className='totalup'>
    <div id='outerup' style={{position:"absolute"}}>
        <h1 id='headup'>Sign Up</h1>
        <form id='forup' onSubmit={sub}>
        <table id='signuptable'>
            <tbody><tr><td><TextField id="demo-helper-text-misaligned-no-helper1" label="Name" onChange={(event)=>setUdata({...udata,name:event.target.value})} className='xxup1' style={{width:'100%'}} required/></td></tr>
            <tr><td><TextField id="demo-helper-text-misaligned-no-helper2"  label="Email" onChange={(event)=>setUdata({...udata,email:event.target.value})} className='xxup2' required/></td></tr>
            <tr><td><TextField id="demo-helper-text-misaligned-no-helper3" label="Password" onClick={(event)=>setMismatch(false)} onChange={(event)=>setUdata({...udata,password:event.target.value})} type="password" required className='xxup3'/></td></tr>
            <tr><td><TextField id="outlined-password-input" label="Confirm Password" type="password" onClick={(event)=>setMismatch(false)} required autoComplete="current-password"
        /></td></tr></tbody>
        </table>
      {(mismatch)?<div style={{position:"absolute",fontSize:"10px",bottom:"150px",color:"red"}}>Password and Confirm Password Mismatched</div>:<div></div>}
    <div id='termup'>
      <Checkbox id='check' checked={checkbox} onClick={(event)=>setCheckbox(prev=>!prev)} required/>Terms and Conditions
    </div><br />
    <div id='suxup'>
      <Button variant="contained" color="success" id='Btup' type='submit'>
        Sign Up
      </Button>
      </div>
        </form>
      <p style={{color:"black",marginLeft:"100px",bottom:"0px",position:"absolute"}}>If you Already Have an Account <b style={{color:"blue",cursor:"pointer"}} onClick={(event)=>(navi("/SignIn"))}>LogIn</b> Here</p>
    </div>
    
        </div>
  )
}
export default SignUp;