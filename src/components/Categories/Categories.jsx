import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useQuery } from 'react-query'
import Loader from '../Loader/Loader'
import Category from '../Category/Category'

export default function Categories() {


  function getCategories(){
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
  }


let{data,isLoading}=useQuery("Categories",getCategories)

if(isLoading) return <Loader/>
return <>


<div className="container">
  <div className="row gy-4 gx-4 my-5 ">
    {data?.data.data.map((category)=> {

      return<Category  category={category}/>
    }
    
      )}

  </div>
</div>





    <div>
      <Helmet>
        <title>Categories</title>
      </Helmet>
    </div>
    </>

}
