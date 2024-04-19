import React from 'react'
import emptyCart from "../../assets/images/screens/Essay-on-Online-Shopping.png"
import { jwtDecode } from 'jwt-decode'



export default function MyProfile() {

let encodedToken=localStorage.getItem("token")
let decodedToken=jwtDecode(encodedToken)
  return <>

  <h2 className="text-center text-main mt-4"> Hello {decodedToken.name} </h2>
  <div className="container mb-3 d-flex justify-content-center align-items-center">

      <img src={emptyCart} className="w-50" alt="" />
      </div>

    </>
  
}
