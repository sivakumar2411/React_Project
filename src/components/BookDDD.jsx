import React from 'react'
import { Books} from './BRDatas';
import ReviewwithDt from './ReviewwithDt';
import RatingStar from './RatingStar'

const BookDDD = ({data}) => {
  const findImageUrl = (bookNamefromJS) => {
    const matchedbookd = Books.find((bookk) => bookk.name === bookNamefromJS);
    return matchedbookd ? matchedbookd.Image :'';};
  return (
    <div>
    {data?.map((book)=>
    (<div key={book.id}>
        <div id='bookprofilepic' style={{width:"400px",height:"400px",margin:"auto"}}><img src={findImageUrl(book.name)} alt={book.name} style={{width:'400px',height:'400px'}}></img></div>
        <div style={{maxWidth:"420px",minWidth:"300px",margin:"auto",fontSize:"29px",fontFamily:"cursive",display:"flex",justifyContent:"space-between"}}><p style={{minWidth:"200px",maxWidth:"350px"}}>{book.name}</p><div style={{marginTop:"35px",marginLeft:"50px"}}><RatingStar reviews={book.reviews} /></div></div>
        <div style={{maxWidth:"400px",margin:"auto"}}>
          <ReviewwithDt BN={book.name} Reviewdata={book.reviews} />
        <hr style={{borderStyle:"dashed",width:"150px",marginTop:"40px"}} />
        </div>
        <br /><br />
    </div>
  ))}
  </div>
  )
}

export default BookDDD


