import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { cartContext } from '../../Context/CartContext'

export default function Product({item}) {
  
  let [btnLoading,setBtnLoading]=useState(true)
  let { counter,setCounter,AddToCart}=useContext(cartContext)


  
    async function addProductToCart(id){
    setBtnLoading(false)
     let  data= await AddToCart(id)
     console.log(data)
     if(data.status=="success"){
      toast.success("Product added successfully")
      setCounter(data.numOfCartItems)
      setBtnLoading(true)
     }
    }

return <>


<div  className="col-md-2 my-3 ">

<div className="product py-3 px-2 rounded-3 cursor-pointer">
<Link  to={"/Product-Details/" + item._id} >
<img src={item.imageCover}  className='w-100' alt="" />

<span className='text-main'>{item.category.name}</span>
<h6>{item.title.split(" ").slice(0,2).join(" ") }</h6>

<div className='d-flex justify-content-between' >
<div>

<p> {item.price} EGP </p>
</div>
<div>

<p>
<i className="fa-solid fa-star rating-color"></i> {item.ratingsAverage}
</p>
</div>
</div>
</Link>

<button disabled={!btnLoading} onClick={()=> addProductToCart(item._id)} className='btn bg-main w-100 text-white '>
{btnLoading?"Add To Cart" : <><i className='fa fa-spin fa-spinner'></i></>}</button>
</div>
</div>

</>

}

