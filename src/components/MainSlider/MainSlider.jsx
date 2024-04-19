import React from 'react'
import Slider from 'react-slick';

import img1 from "../../assets/images/slider-image-1.jpeg"
import img2 from "../../assets/images/slider-image-2.jpeg"
import img3 from "../../assets/images/slider-image-3.jpeg"

export default function() {
 

 let settings= {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true
};


const images=[
  {src:img1,name:"slide1"},
  {src:img2,name:"slide2"},
  {src:img3,name:"slide3"}


]








return (<>

<div className="container">
  <div className="row my-5 g-0">
    <div className="col-md-8">

    <Slider {...settings}>
    
{

  images.map((img)=>(

    <figure>

      <img src={img.src} alt={img.name} height={500} className='w-100' />
    </figure>
  )
  )
}

  </Slider>
    </div>
    <div className="col-md-4">
      <img src={img1}  className='w-100' alt="" />
      <img src={img2} className='w-100' alt="" />
      <img src={img3} className='w-100' alt="" />

    </div>
  </div>
</div>



  </>

);
}
  
