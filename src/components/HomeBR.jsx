import React from 'react'
import BRIndex from './BRIndex'
import { showcase } from './BRDatas'
import BackgroundShowCase from './BackgroundShowCase';
import '../assets/Css Files/HomeBR.css';
const HomeBR = () => {
  return (
    <div style={{height:"1200px"}} id="homebasediv">
        <BRIndex />
        <div id='pillarofshowcase' style={{width:"1000px",height:"700px",marginLeft:"300px",marginTop:"300px",position:"absolute",display:"flex",justifyContent:"space-around",paddingTop:"50px"}}>
          <div id='bigshow'><span></span>
            {
              <BackgroundShowCase IIMMAA={showcase}/>
            }
          </div>
          <div id='smallsobox' style={{width:"300px",height:"650px"}}>
          {
              showcase.map((data,index)=>
              (
                  <div id='smallshow' style={{width:"290px",height:"120px",margin:"auto",marginTop:"7px",border:"1px groove black",display:"flex",justifyContent:"space-around",borderRadius:"5px 20px",animationDelay:`${index*5}s`}} key={index}>
                  <div><img src={data.Image} alt={data.name} style={{height:"110px",marginTop:"4px",width:"80px",borderRadius:"15px"}}/></div>
                  <div style={{height:"110px",width:"200px",fontSize:"larger"}}><p>{data.name}</p></div>
                  <div className='smallshow' style={{position:"absolute",right:"42px",height:"120px",animationDelay: `${index * 5}s`}}></div>
                  </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default HomeBR