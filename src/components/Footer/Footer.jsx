import React from 'react'
import Style from "./Footer.module.css"

export default function Footer() {
  return <>

  <div className="bg-light">
    <div className="container">

<h5 className='pt-4'>Get The Fresh Cart App</h5>
<p>we will send you a link, open it on your phone to download the app</p>
<div className='d-flex  py-4 '>

<input type="email" name="" id=""   className='form-control me-3  w-75' placeholder='Email'/>
<button className='btn bg-main text-white   '> Share App Link</button>
</div>

</div>


  </div>




<ul className='text-center bg-light text-main py-4 '>
<i class="fa-brands fa-facebook fs-3  px-3"></i>
<i class="fa-brands fa-linkedin fs-3  px-3"></i>
<i class="fa-brands fa-x-twitter fs-3  px-3"></i>
<i class="fa-brands fa-github fs-3  px-3"></i>
<i class="fa-brands fa-instagram fs-3  px-3"></i>
</ul>

    </>
  
}
