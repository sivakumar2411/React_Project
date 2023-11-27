import React ,{useEffect, useState}from 'react';
import { useContext } from 'react';
import '../assets/Css Files/SignIn.css';
import Button from '@mui/material/Button';
import  TextField  from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { getAllUserDatas, getAllUserDatasFP, updatecurUser } from '../assets/Json Related Things/JSONAPI';
import { UserContext } from './GlobeData';

const SignIn = () => {  
  const navi=useNavigate();
  const [data,setData]=useState([]);
  const [Udata,setUData]=useState([]);
  const [curuser,setCuruser]=useState({id:"1",nameorem:""});
  const {LogIn}=useContext(UserContext);
  useEffect(()=>
  {
    const fetchdata = async()=>
    {
      await getAllUserDatas()
      .then((res)=>setData(res.data))
      .catch((err)=>console.log(err));
      const response=await getAllUserDatasFP();
      setUData(response.data);
    }
    fetchdata();
  },[])
  const setnavi=(event)=>
  {
    event.preventDefault();
    const nameorEm=document.getElementById("demo-helper-text-misaligned-no-helpersi1").value;
    const pass=document.getElementById("demo-helper-text-misaligned-no-helpersi2").value;
    const nameexistorno=data.findIndex(({name})=> name===nameorEm);
    const Emexistorno=data.findIndex(({email})=> email===nameorEm);
    if(nameexistorno===-1&&Emexistorno===-1)
    alert("UserName and Email Doesn't Exist");
    else if((Emexistorno!==-1&&data[Emexistorno].password===pass)||(nameexistorno!==-1&&data[nameexistorno].password===pass))
    {
      if(Emexistorno===-1)
      LogIn(Udata[nameexistorno]);
      else
      LogIn(Udata[Emexistorno]);
      updatecurUser(curuser);
      navi('/HomeBR');
    }
    else 
    alert("Password Didn't Match");
  }
  return (
    <div className='totalsi'>
    <div id='outersi'>
        <h1 id='headsi'>Sign In</h1>
          {/* <div id='top'>
            <button id='x'>X</button>
          </div> */}
          <div className='totsi'>
          <div id='profsi'><span></span></div>
        <form id='forsi' onSubmit={setnavi}>
        <table>
          <tbody>
            <tr id='feisi'><td><TextField id="demo-helper-text-misaligned-no-helpersi1" label="Name/Email" type='text' className='xxsi'  onChange={(event)=>setCuruser({...curuser,nameorem:event.target.value})} required/></td></tr>
            <tr id='feisi'><td><TextField id="demo-helper-text-misaligned-no-helpersi2" label="Password" type='password' className='xxsi' required/></td></tr>
        </tbody></table>
    <div id='suxsi'>
      <Button variant="contained" color="success" id='Btsi' type='submit'>
        Sign In
      </Button>
      </div>
        </form>
      </div>
      <p style={{color:"black",marginLeft:"100px"}}>If you Don't Have an Account <b style={{color:"blue",cursor:"pointer"}} onClick={(event)=>(navi("/SignUp"))}>SignUp</b> Here</p>
    </div>
    </div>
  )
}
export default SignIn;