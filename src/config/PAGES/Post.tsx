import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import IconButton from '@mui/material/IconButton';
import '../../App.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from 'react-bootstrap/Card';
import ANavbar from '../components/ANavbar';
import AMenu from '../components/AMenu';
import Footer from '../components/FOOTER/Footer';
export default function Post() {
  const[listData , SetListData] = useState<any>([]);
let main = ()=>{
  
axios.get('https://fakestoreapi.com/products').then((res)=>{
  
  SetListData([...res.data]);
  
  }).catch((err)=>{
  console.log(err.data);
  })
  
}
useEffect(()=>{
  main ();
},[])
  

let Add = ()=>{
  navigate('../AddPost')
}

  const navigate = useNavigate()
  let singlePost=(id:any)=>{
    
    navigate(`./singlePost/${id}`)
  }
    return (
    <div>
<ANavbar/>


<div className="poster">
  <div className="text">
  <div className='fs-1 fw-bold m-2'>WELCOME TO ALI BABA.COM <br /> WE HAVE A BRANDED ITEMS ENJOY YOUR SHOPPING <br />HAPPY SHOPPING  </div>
<button  onClick={Add} className='btn btn-primary m-4 '>ADD POST</button>
</div>
</div>








<AMenu />

    <div className="row">
   {listData.map((x:any, i:any )=>{
    return(
      <>
     
      
      <Card key={i} className='col-md-3 col-sm-12 mt-3'  style={{ width: '18rem',border:'2px soild black',  }}>
      <Card.Img variant="top" className='cardimg' src={x.image} />
      <Card.Body className='bg-dark text-light'>
        <Card.Title>{x.category}</Card.Title>
        <Card.Text>{x.title}</Card.Text>
        <Card.Text>{x.price}</Card.Text>
        
        <Card.Text>
        <IconButton onClick={()=>{
          axios.delete(`https://fakestoreapi.com/products/${x.id}`).then((res)=>{alert("delete successfully"+x.id)}).catch((err)=>{console.log(err)})
        }} className='text-white'><DeleteIcon /></IconButton>
        <IconButton onClick={()=>{
          navigate(`../AddPost/${x.id}`)
        }} className='text-white'><EditIcon /></IconButton>
        </Card.Text>

      
      </Card.Body>
    </Card>
     


</> ) })}
    </div>
    <Footer/>
    </div>
  )
}
