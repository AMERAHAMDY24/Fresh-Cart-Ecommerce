import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

export default function CategoriesSlider() {


  
 let settings= {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay:true
};


const [Categories,setCategories]=useState([])
  async function getCategories(){

    let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/categories `)
    setCategories(data.data)
  }


  useEffect(()=>{
    getCategories()
  },[])
  return <>
  <div className="">
    <h3 className=' text-center my-4'> Show Popular Categories</h3>
    <Slider {...settings}>
{ Categories.map(category => <div className='item px-1'>
      <img src={category.image} height={200} className='w-100' alt="" />
      <h5>{category.name}</h5>
    </div>)}


    </Slider>

  </div>
      
    </>

}
