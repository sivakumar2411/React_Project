import React from 'react';
import '../assets/Css Files/Home.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navi=useNavigate('');
  return (
    <div id='boxO'>
        <h1>SuxuS</h1>
            <div id='butO'>
                <Button variant="contained" color="success" onClick={(event)=>(navi("/SignIn"))}>Login</Button>
                <Button variant="contained" color="success" onClick={(event)=>(navi("/SignUp"))}>SignUp</Button>
            </div>
    </div>
  )
}
export default Home;