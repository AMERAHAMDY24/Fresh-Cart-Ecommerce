import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';
import { date } from 'yup';

export default function SpecificCategory() {
  
 let {id}= useParams();

 let [SubCategories,setSubCategories] =useState()
  
 
 /*
  function getSubCategories(id){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
  }


let{data,isLoading}=useQuery("subCategories",getSubCategories)
console.log(data?.data.data)
console.log(data)

if(isLoading) return<Loader/>
  */
 
 


async function getSubCategories(id){
    let data=await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
    setSubCategories(data?.data.data)
    console.log("sub",SubCategories)

 }
 useEffect(()=>{

    getSubCategories(id)
 },[])
 
 return <>

<div className="container">

    <div className="row">

        <div className="col-md-4">

        </div>
    </div>
</div>


    </>
  
}
