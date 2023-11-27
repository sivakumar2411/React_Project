import React, { useContext, useEffect, useState } from 'react'
import '../assets/Css Files/Profile.css'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import  Tooltip  from '@mui/material/Tooltip';
import { UserContext } from './GlobeData';
export const Profile = () => {
  const {ADOUser}=useContext(UserContext);
  const [pro,Setpro] = useState(true);
  const [info,Setinfo] = useState(false);
  const [history,Sethistory] = useState(false);
  const [male,Setmale] = useState(false);
  const [female,Setfemale] = useState(false);
  const [others,Setothers] = useState(false);
  const showhistory = () =>
  {
    Setinfo(false);
    Setpro(false);
    Sethistory(true);
  }
  const showinfo = () =>
  {
    Setinfo(true);
    Setpro(false);
    Sethistory(false);
  }
  const choosemale = () =>
  {
    Setmale(true);
    Setfemale(false);
    Setothers(false);
  }
  const choosefemale = () =>
  {
    Setmale(false);
    Setfemale(true);
    Setothers(false);
  }
  const chooseothers = () =>
  {
    Setmale(false);
    Setfemale(false);
    Setothers(true);
  }
  return (
    <div  className='totalpp'>
        <div id='leftpp'>
          <div id='lefttoppp'>
          <div className='cpp'><div id='circlepp'><span></span></div></div>
          <div id='namepp'>{ADOUser.Name}</div>
          <div id='usernamepp'>{ADOUser.uname}</div></div>
        <div id='leftbottompp'>
          <ul>
            <li onClick={showinfo}>Personal Info</li>
            <li style={{marginTop:'20px'}} onClick={showhistory}>Review History</li>
          </ul>
        </div>
        <div id='rightpp' style={{color:"white"}}>
          {pro?<p>Suxus</p>:<p></p>}
          {info?<div id='personalpp'>
            <form id='detailspp'>
            <table>
                  <tr>
                    <td>Name</td>
                    <td><input type="text" name="" id="infonamepp" style={{background:'none',border:'none',color:"white"}}/></td>
                  </tr>
                  <tr><td>Email</td><td><input type="email" name="" id="infoemailpp" /></td></tr>
                   {/* <tr><td>DOB</td>
                    <td><input type="date" id='Year'/></td>
                    </tr> */}
                    <tr><td>Region</td><td><select id='regionpp'>
                            <option value="" selected disabled>Region</option> 
                          <option value="">Africa</option>
                          <option value="">Antarctica</option>
                          <option value="">Asia</option>
                          <option value="">Australia</option>
                          <option value="">Europe</option>
                          <option value="">North America</option>
                          <option value="">South America</option></select></td></tr>
                          <tr><td>Gender</td>
                          {/* <td><input type="radio">Male</input></td> */}
                          <td><input checked={male} type="radio" id='manpp' onClick={choosemale}/>Male <input checked={female} type="radio" id='manpp'  onClick={choosefemale}/>Female <input checked={others} type="radio" id='manpp'  onClick={chooseothers}/>Others</td>
                          </tr>
                          <tr><td>Bio</td>
                          <td><textarea name="" id="biopp" cols="40" rows="7"></textarea></td></tr>
            </table>
                  <h4 >Interested Topics :</h4><div id='setpp'>
                  <input type="checkbox" id='sidepp'/>Fiction
                  <input type="checkbox" id='sidepp'/>Fantasy<input type="checkbox" id='sidepp'/>Action<input type="checkbox" id='sidepp'/>Horror <br />
                  <input type="checkbox" id='sidepp'/>Comic<input type="checkbox" id='sidepp'/>Romance<input type="checkbox" id='sidepp'/>History
                  </div>
                  <Tooltip title='Edit Profile' arrow><Fab color="secondary" aria-label="edit" className='editpp'><EditIcon /></Fab></Tooltip>
                  <Tooltip title='Save Changes' arrow><Fab color="secondary" aria-label="edit" className='savepp'><BookmarkAddedIcon /></Fab></Tooltip>
                  {/* <input type="file" /> */}
            </form>
            </div>:<div/>}
          {history?<p>Reveiws</p>:<p></p>}
        </div>
        </div>
    </div>
  )
}
