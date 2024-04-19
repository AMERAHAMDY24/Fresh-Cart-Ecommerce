import React, { useContext, useEffect } from 'react'
import logo from "../../assets/images/freshcart-logo.svg"
import { NavLink } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext'

export default function Navbar() {

 let {counter,getUserCart,setCounter}= useContext(cartContext)



  function removeToken(){
    localStorage.clear()
  }

  useEffect(()=>{

    (async()=>{
     let data= await getUserCart()
     console.log(data)
     setCounter(data.numOfCartItems)
    })()


  },[])
  return <>
  
  <nav className="navbar navbar-expand-lg bg-body-tertiary py-4">
  <div className="container  ">
    <NavLink className="navbar-brand" to="/Home"><img src={logo}  alt="" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      
        <li className="nav-item ms-5">
          <NavLink className="nav-link " aria-current="page" to="/Home">Home</NavLink>
        </li>


        <li className="nav-item ">
          <NavLink className="nav-link " aria-current="page" to="/Categories">Categories</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link " aria-current="page" to="/Products">Products</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link " aria-current="page" to="/Brands">Brands</NavLink>
        </li>
      
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
     
     
      <li className="nav-item ">

<NavLink to='/Cart' className=" btn   position-relative">
Cart
<i class="fa-solid fa-cart-shopping  mx-2 fs-4"></i>
 
 {counter ?
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {counter}
    <span className="visually-hidden">unread messages</span>
  </span>: ""}
</NavLink>

      </li>


      <li className="nav-item ">
      <NavLink className="nav-link" aria-current="page" to="/MyProfile" >Profile</NavLink>

</li>

<li className="nav-item ">
<NavLink className="nav-link" aria-current="page" to="/Login" onClick={removeToken}>Logout</NavLink>


</li>

</ul>
       
    </div>
  </div>
</nav>


  
  </>
}
