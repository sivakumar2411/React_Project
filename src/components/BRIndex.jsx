import React, { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import '../assets/Css Files/BRIndex.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@mui/material';
import { UserContext } from './GlobeData';
import { profImg } from './BRDatas';

const BRIndex = () => {
    const {LogOut}=useContext(UserContext);
    const [profdiv,setProfdiv]=useState(false);
    const {ADOUser}=useContext(UserContext);
    const [menu,setMenu]=useState(false);
    const naviga=useNavigate();
    const goHome=()=>
    {
        naviga('/HomeBR');
    }
    const goRev=()=>
    {
        naviga('/Reviews');
    }
    const goco=()=>
    {
        naviga('/Contact')
    }
  return (
    <div id='base'>
        {menu?
    <div id='sidebar' style={{width:"200px"}}>
        <ul id='sideul'>
        <button id='menuexit' style={{cursor:"pointer"}}  onClick={(event)=>{setMenu(false)}}>×</button>
            <li id='sli'>Settings</li>
            <li id='sli'>Help</li>
        </ul>
    </div>:<div id='sidebar' onClick={(event)=>{setMenu(true)}}><Button><MenuIcon  style={{width:"40px",height:"40px"}}/></Button></div>}
        <div id='navbar'>
            <ul id='navul'>
                <li id='nli'  onClick={goHome}>Home</li>
                <li id='nli'  onClick={goRev}>Reviews</li>
                <li id='nli' onClick={(event)=>naviga('/Books')}>Books</li>
                <li id='nli' onClick={goco}>Contact Us</li>
                <div id='profileonhome' style={{width:"40px",height:"40px",borderRadius:"50%",position:"absolute",right:"10px",top:"35px"}}>
                    <img onClick={(event)=>setProfdiv(true)} src={profImg.Img} alt={ADOUser.Name} style={{cursor:"pointer",fontSize:"5px",width:"40px",height:"40px",borderRadius:"50%"}}></img>
                </div>
            </ul>
        </div>
        {(profdiv)?(<div style={{width:"280px",height:"200px",position:"absolute",backgroundColor:"rgb(31,31,31)",right:"70px",top:"85px",borderRadius:"10px"}}>
            <div style={{width:"270px",height:"70px",margin:"auto",display:"flex",justifyContent:"space-around",paddingTop:"5px",marginTop:"15px"}}>
                <div style={{width:"55px",height:"55px",borderRadius:"50%"}}><img src={profImg.Img} alt={ADOUser.Name} style={{fontSize:"5px",width:"55px",height:"55px",borderRadius:"50%"}}></img></div>
                <div style={{minWidth:"160px",maxWidth:"200px",height:"55px",paddingTop:"5px"}}>
                    <div style={{fontSize:"20px",cursor:"pointer"}}>{ADOUser.Name}</div>
                    <div style={{fontSize:"14px",opacity:".5"}}>{ADOUser.uname}</div>
                </div>
            </div>
                <ul style={{fontSize:"21px",position:"absolute",left:"30px",cursor:"pointer",textAlign:"left"}}>
                    <li>Profile</li>
                    <li onClick={(event)=>{(naviga('/Home'));LogOut();}}>Logout</li>
                </ul>
            <div style={{position:"absolute",top:"-7px",right:"5px",fontSize:"25px",cursor:"pointer"}} onClick={(event)=>setProfdiv(false)}>×</div>
        </div>):null}
    </div>
  )
}

export default BRIndex