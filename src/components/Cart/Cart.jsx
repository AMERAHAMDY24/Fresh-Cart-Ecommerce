import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/CartContext'
import { toast } from 'react-toastify'
import emptyCart from "../../assets/images/102661.png"
import { Helmet } from 'react-helmet'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'
import { date } from 'yup'

export default function Cart() {
let {getUserCart,deleteItem,setCounter,UpdateQuentity,ClearCart}=useContext(cartContext)

let [items,setItem]=useState([])
let [Price,setTotalPrice]=useState(0)

useEffect(()=>{

(async()=>{
  let data=await getUserCart()
  setItem(data?.data)
})()


},[])
// delete Item


async function deleteProduct(id){
let data=await deleteItem(id)
console.log(data)
if(data.status=="success"){
  toast.error("Product deleted Successfully")
  setCounter(data.numOfCartItems)
  setItem(data?.data)
}
}


// UpdateQuentity
async function UpdateProductQuentity(id,count){
  let data=await UpdateQuentity(id,count)
  console.log(data)
  if(data.status=="success"){
    toast.success("Product updated successfully")

    setItem(data?.data)
  }

}

// ClearCart

async function ClearAllCart(){
  let data= await ClearCart()
  console.log(data)
  if(data.message=="success"){
    toast.success("Cart Cleared Successfully")

    setCounter(0)
    setItem([])
    setTotalPrice(0)
    
  }
}









  return <>


{items? <div className="container bg-main-light my-3 p-3">
{(items?.totalCartPrice)?<>
<div className='d-flex justify-content-between'>
<h2>Shop Cart</h2> 

<button className='btn btn-warning mt-3 ' onClick={()=>ClearAllCart()} >Clear Cart</button>

</div>

<p className='text-main'>Total Cart Price : {items?.totalCartPrice} EGP</p>
{items.products.map(item=>{
  return  <div className="row border-bottom p-2">
  <div className="col-md-1">

<img src={item.product.imageCover} className='w-100 my-2' alt="" />
  </div>


  <div className="col-md-11 d-flex  justify-content-between">


    <div>

<p className='m-0 mt-3 '>{item.product.title}</p>
<p className='text-main m-0'>Price: {item.price} EGP</p>
  <button className='btn p-0 m-0 mt-2' onClick={()=>deleteProduct(item.product._id)}>
  <i className="fa-solid fa-trash text-main  pe-2 "></i>
    Remove</button>



    </div>
<div>

<button  className='btn brdr ' onClick={()=>UpdateProductQuentity(item.product._id,item.count+1)}>+</button>

<span className='mx-2'>{item.count}</span>
<button disabled={item.count <=1} className='btn brdr1' onClick={()=>UpdateProductQuentity(item.product._id,item.count-1)}> - </button>



</div>

  </div>

</div>
})}


<div className='text-center'>
<Link to={`/Address/${items._id}`}className='btn bg-main my-4 w-25 text-white'>Place Order</Link>

</div>
</>
:<div className='text-center my-4s '>
  <h4 className='mb-5 text-main'>Cart is empty</h4>
<img src={emptyCart} alt="" />
</div>

}


</div>

:<><Loader/></>}

<Helmet>
  <title>Cart</title>
</Helmet>


    </>
  
}
