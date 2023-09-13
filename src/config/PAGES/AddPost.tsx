import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import'../../App.css'
export default function AddPost() {
  const [model , SetModel] = useState<any>({});
  let submit= ()=>{
    axios.post('https://fakestoreapi.com/products' , model).then((res)=>{
console.log(res.data);
    }).catch((err)=>{
console.log(err);
    })
console.log(model);
  
  }
let params = useParams();

let get = ()=>{
axios.get(`https://fakestoreapi.com/products/${params.id}`, model).then((res)=>{SetModel(res.data)}).catch((err)=>{console.log(err)})
}
useEffect(()=>{
  get();
} ,[] )

let update=()=>{
  
axios.put(`https://fakestoreapi.com/products/${params.id}` , model).then((res)=>{
alert("update successfully");
}).catch((err)=>{
console.log(err);
})

}









  return (
    <>
    <div className="main m-auto bg-secondary  color-light mt-5 text-center p-5">
    <h1 className='text-white text-center py-3'>ADD POST</h1>
    <input type="text" value={model.image}  onChange={(e)=>{
SetModel({...model,image: e.target.value}); 
  
    }}  className='p-3 m-3' placeholder='image url' /> <br />
    <input type="text" value={model.title}  onChange={(e)=>{
SetModel({...model,title: e.target.value}); 
  
    }}  className='p-3 m-3'  placeholder='title' /><br />
    <input type="text"value={model.category} 
    onChange={(e)=>{
      SetModel({...model,category: e.target.value}); 
        
          }}  className='p-3 m-3' placeholder='category' /><br />
    <input type="text" value={model.price}  onChange={(e)=>{
SetModel({...model,price: e.target.value}); 
  
    }}  className='p-3 m-3' placeholder='price' /><br />
{params.id ? <button onClick={update} className='btn btn-danger'>UPDATE</button> : <button onClick={submit} className='btn btn-danger'>SUBMIT</button>  }
    


    </div>
    
    
    </>
  )
}
