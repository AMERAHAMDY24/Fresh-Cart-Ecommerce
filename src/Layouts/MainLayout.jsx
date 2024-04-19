import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Offline, Online } from "react-detect-offline";

export default function MainLayout() {
  return <>
<Navbar/>
<Outlet/>
<Footer/>

<div>

<Offline>
<div className='network'>
  <i className='fas fa-wifi'></i>
<span className='ms-2'>     You are offline ( Surprice ! )
</span>
</div>
</Offline>

</div>

    </>
  
}
