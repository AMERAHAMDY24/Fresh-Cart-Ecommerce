import React from 'react'
import MainSlider from '../MainSlider/MainSlider'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'
import { Helmet } from 'react-helmet'
import Products from '../Products/Products'

export default function Home() {
  return <>  
      <MainSlider/>
      <CategoriesSlider/>
      <Products/>
      <Helmet>
        <title>Home</title>
      </Helmet>
    </>
  
}
