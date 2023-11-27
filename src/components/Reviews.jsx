import React, { useEffect, useState } from 'react';
import BRIndex from './BRIndex';
import '../assets/Css Files/Reviews.css';
import { getAllDatas } from '../assets/Json Related Things/JSONAPI';
import BookDDD from './BookDDD';
const Reviews = () => {
  const [data,setData]=useState([]);
  useEffect(()=>
  {
    const fetchdata = async()=>
    {
      await getAllDatas()
      .then((res)=>setData(res.data))
      .catch((err)=>console.log(err));
    }
    fetchdata();
  },[])
  return (
    <div id='reviewbasediv' style={{width:"100%",border:"0.1px groove white"}}>
        <BRIndex />
        <div id='bookdetailsdynamicdiv' style={{width:"700px",height:"auto", border:"1px groove black",marginLeft:"450px",marginTop:"300px"}}>
          <BookDDD data={data}/>
        </div>
    </div>
  )
}
export default Reviews;

