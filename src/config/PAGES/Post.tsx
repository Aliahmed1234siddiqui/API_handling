import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import Card from 'react-bootstrap/Card';
export default function Post() {
  const[listData , SetListData] = useState<any>([]);

axios.get('https://fakestoreapi.com/products').then((res)=>{
console.log(res.data);
SetListData([...res.data]);

}).catch((err)=>{
console.log(err.data);
})

  
  const navigate = useNavigate()
  let singlePost=(id:any)=>{
    
    navigate(`./singlePost/${id}`)
  }
    return (
    <div>
<h1 className='text-center py-3 text-light bg-dark'>POST</h1>


    <div className="row ">
   {listData.map((x:any, i:any )=>{
    return(
      <>
     
      
      <Card key={i} className='col-md-3 col-sm-12 m-1'  onClick={()=>singlePost(x.id)}  style={{ width: '18rem',  }}>
      <Card.Img variant="top" className='cardimg' src={x.image} />
      <Card.Body className='bg-dark text-light'>
        <Card.Title>{x.category}</Card.Title>
        <Card.Text>{x.title}</Card.Text>
        <Card.Text>{x.price}</Card.Text>
      
      </Card.Body>
    </Card>
     


</> ) })}
    </div>
    
    </div>
  )
}
