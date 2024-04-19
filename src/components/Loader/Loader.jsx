import React from 'react'
import { ColorRing } from 'react-loader-spinner'

export default function Loader() {
  return (
    <div className='d-flex justify-content-center align-items-center'>


    <ColorRing
        visible={true}
        height="300"
        width="300"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
            </div>
)
      
    
  
}
