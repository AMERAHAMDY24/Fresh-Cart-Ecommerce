import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useQuery } from 'react-query'
import Loader from '../Loader/Loader'


export default function Brands() {



  function getBrands(){

    return axios.get("https://ecommerce.routemisr.com/api/v1/brands")
  }

  let {data,isLoading}=useQuery("Brands",getBrands)



  if(isLoading)return<Loader/> 

  return <>




<h2 className='text-center text-main my-4 fw-bold '>All Brands</h2>


<div className="container my-3 ">

  <div className="row gy-3 gx-4 " >
      {data?.data.data.map((Brands)=><div className="col-md-3  Brand" key={data.data.data._id}>
        <img src={Brands.image} className='w-100' height={300} alt="" />
        <h4 className='text-center text-main py-4'>{Brands.name}</h4>
  
      </div>

        
        )
        
        
        
        
        }
    
  </div>
</div>












    <div>
      <Helmet><title>
        Brands 
        </title></Helmet>
    </div>
  </>
}
