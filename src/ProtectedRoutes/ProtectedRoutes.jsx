import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Login from "../components/Login/Login.jsx"
import { jwtDecode } from "jwt-decode";

export default function ProtectedRoutes({children}) {
   
   
let token =localStorage.getItem("token")
// handle if there a wrong token
try{
// get data from token
const decoded = jwtDecode(token);
console.log(decoded)
}

catch(error){
// console.log("error")
localStorage.clear()
return <Navigate to="/Login"/>

}
   
if(token) return children 
// error return must  not be a function
return <Navigate to="/Login"/>

}
