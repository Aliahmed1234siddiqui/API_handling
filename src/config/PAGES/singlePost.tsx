import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SinglePost() {
  let params = useParams();
const[model , SetModel] = useState<any>({});  

  axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res)=>{

SetModel({...res.data})
console.log();
  }).catch((err)=>{
console.log(err)
  })

  return (
    <div>
  <h1 className='text-center py-3 bg-dark text-light '>Post Detail</h1>


<div className="row">
  <div className="col-md-6 col-sm-12 text-center py-5">
  <img width={300} src={model.image} alt="" />
  </div>
  <div className="col-md-6 col-sm-12 ">
  <p><span className='fs-2 bg-primary text-light px-3'>TITLE</span> : {model.title}</p>
  <p><span className='fs-2 bg-primary text-light px-3' >ID</span> : {model.id}</p>
  <p><span className='fs-2 bg-primary text-light px-3'>PRICE</span> : {model.price}</p>
  <p><span className='fs-2 bg-primary text-light px-3'>CATEGORY </span>: {model.category}</p>
  <p><span className='fs-2 bg-primary text-light px-3'>DESCRIPTION</span>: {model.description}</p>



    </div>
  
</div>
    
    </div>
  )
}
