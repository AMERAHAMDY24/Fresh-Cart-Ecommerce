import React from 'react'
import { Link } from 'react-router-dom'
import SpecificCategory from '../SpecificCategory/SpecificCategory'

export default function Category({category}) {

  
  return <>
  
  
  
  <div className="col-md-4 Brand  ">

  <img src={category.image} className='w-100 border-bottom' height={350} alt="" />
  <h4 className='text-center text-main bg-white p-4'>{category.name} </h4>
</div>

  </>
    
      
    
  
}
