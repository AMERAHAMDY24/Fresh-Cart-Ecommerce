import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Loader from '../Loader/Loader'
import { cartContext } from '../../Context/CartContext'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import Slider from 'react-slick'


export default function ProductDetails() {
let { counter,setCounter,AddToCart}=useContext(cartContext)

let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
  }

 let {id}= useParams()
let [Product,setProduct]=useState({})
let [Loading,setLoading]=useState(true)
let [btnLoading,setBtnLoading]=useState(true)

async function getProduct(){

    let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products/`+id)
   console.log(data.data)  
    setProduct(data.data)
    setLoading(false)
}
 useEffect(()=>{
getProduct()
 },[])

 async function addProductToCart(id){
    setBtnLoading(false)
     let  data= await AddToCart(id)
     console.log(data)
     if(data.status=="success"){
      toast.success("Product added successfully")
      setCounter(data.numOfCartItems)
      setBtnLoading(true)}}




if (Loading) return <><Loader/></>
  return <>

<div className="container my-5">
    <div className="row">
        <div className="col-md-3">
<Slider {...settings}>

<img src={Product.images[0]} className='w-100' height={550} alt="" />
<img src={Product.images[1]} className='w-100' height={550} alt="" />
<img src={Product.images[2]} className='w-100' height={550} alt="" />


</Slider>
            {/* <img src={Product.imageCover} className='w-100 mt-0'  /> */}

        </div>
<div className="col-md-9 mt-5">

<h4>{Product.title}</h4>
<p className='text-muted my-3'>{Product.description}</p>

<span className='mb-5'>{Product.category.name}</span>
<div className='d-flex justify-content-between my-2'>
<div><p>{Product.price} EGP</p>
</div>
<div >
<i className='fa-solid fa-star rating-color me-2'></i>
{Product.ratingsAverage}

</div>
</div>
<div className='d-flex justify-content-center'>
    
<button disabled={!btnLoading} onClick={()=> addProductToCart(Product._id)} className='btn bg-main w-100 text-white '>
{btnLoading?"Add To Cart" : <><i className='fa fa-spin fa-spinner'></i></>}</button>

</div>
</div>
</div>
</div>
</>
  
}
