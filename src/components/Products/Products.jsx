import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext'
import { toast } from 'react-toastify'
import Product from '../Product/Product'
import { Helmet } from 'react-helmet'
import Loader from '../Loader/Loader'


export default function Products() {
  /*
let [products,setProducts]=useState([])
let [Loading,setLoading]=useState(true)
async  function getProducts(){
   let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
   console.log(data.data)
   setProducts(data.data)
   setLoading(false)
  }
  useEffect(()=>{
getProducts()
  },[])
*/



// react Query

function getProducts(){
 return  axios.get(`https://ecommerce.routemisr.com/api/v1/products`)


}
let {data,isLoading,isFetching }=useQuery("getProducts",getProducts,{
  // cacheTime:3000

  //  refetchOnMount:false,
  // refetchOnWindowFocus:false,
  // refetchOnReconnect:false

   




} )

if(isLoading) return <Loader/>

  return <>
<div className="container my-5">
  <div className="row">
    {
      data?.data.data.map(item=>{
        return <Product item={item} key={item._id}/>
      })



    }
  </div>
</div>
<Helmet>
  <title>Products</title>
</Helmet>
</>
  
}
