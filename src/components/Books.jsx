import React, { useEffect, useState } from 'react'
import { getAllDatas, getAllgenres} from '../assets/Json Related Things/JSONAPI';
import BRIndex from './BRIndex';
import RatingStar from './RatingStar';
import '../assets/Css Files/Books.css';
import { Books } from './BRDatas';
const BOOKS = () => {
    const [data,setData]=useState([]);
    const [gendata,setGendata]=useState([]);
    const [genreofbook,setGenreofbook]=useState("ALL");
    const findImageUrl = (bookNamefromJS) => {
        const matchedbookd = Books.find((bookk) => bookk.name === bookNamefromJS);
        return matchedbookd ? matchedbookd.Image :'';};
    useEffect(()=>
    {
        const fetchdata=async()=>{
            try
            {
                const response1=await getAllgenres();
                setGendata(response1.data);
                const response=await getAllDatas();
                setData(response.data);
            }
            catch(e)
            {console.log("Error:",e);}
        }
        fetchdata();
    },[])
  return (
    <div style={{width:"100%",background:"linear-gradient(rgb(20, 20, 20),rgb(17,17,17))",color:"white",border:"0.1px groove black"}}>
        <BRIndex />
        <div style={{width:"1000px",height:"auto",marginLeft:"280px",position:"relative",marginTop:"200px",background:"none",paddingTop:"100px"}}>
            <div style={{width:"1000px",height:"40px",borderRadius:"10px",backgroundColor:"rgb(31,31,31"}}>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                    {gendata.map((gen)=>
                            <div id="bookselectionbut" title={gen.bookids.length+" Books"} style={{height:"30px",minWidth:"72px",borderRadius:"10px",textAlign:"center"}} onClick={(event)=>setGenreofbook(gen.genname)} key={gen.id}>{gen.genname}</div>
                        )}
                </div>
            </div>
        {data.map((book)=>
        {
            return book.genre[genreofbook]?(
            <div key={book.id} style={{boxShadow:"1px 1.5px 10px 3px black",borderRadius:"10px 30px 30px 10px",width:"1000px",height:"700px",margin:"auto",backgroundColor:"rgb(31,31,31)",marginBottom:"100px"}}>
                <div style={{width:"370px",height:"500px",position:"absolute",marginTop:"130px",marginLeft:"70px"}} ><img src={findImageUrl(book.name)} alt={book.name} style={{width:"370px",height:"500px"}}></img></div>
                <div style={{width:"500px",height:"570px",position:"absolute",marginTop:"60px",marginLeft:"480px",paddingLeft:"20px"}}>
                    <div style={{display:"flex"}}><p style={{fontSize:"22px",color:"ghostwhite"}}>Author</p><p style={{marginLeft:"30px",fontSize:"17px",marginTop:"27px",color:"mintcream"}}><b>{book.author}</b></p></div>
                    <div style={{overflow:"auto",scrollbarWidth:"thin",maxHeight:"360px",scrollBehavior:"smooth",marginTop:"10px",fontSize:"15px",background:"none",color:"aliceblue"}}>{book.Description}</div>
                    <div>
                        <p style={{fontSize:"19px",color:"snow"}}>Reviews & Ratings ({book.reviews.length})</p>
                        <div><RatingStar reviews={book.reviews} /></div>
                    </div>
                </div>
                <div style={{position:"absolute",marginTop:"50px",marginLeft:"70px",fontSize:"27px",width:"400px",color:"lavenderblush"}}>{book.name}</div>
            </div>):null;
        })}
    </div>
    </div>
  )
}

export default BOOKS