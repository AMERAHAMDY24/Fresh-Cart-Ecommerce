import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from "yup";

export default function Signin() {
  const [Loading,setLoading]=useState(true)


  let navigate = useNavigate()

  // show error message "if email already exist"
  let [errMessage,setErrMessage]=useState("")
// Yup Validation

function validationSchema(){
let errors= Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().matches(/^[A-Za-z0-9][a-z0-9A-Z]{6,}$/,'password must be at least contains 7 characters or numbers').required(),
})
   return errors
  
}

 function sendDataToApi(values){
setLoading(false)
 axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values).then(data=>
 {    console.log(data)

  if(data.data.message == 'success'){

    localStorage.setItem("token",data.data.token)
    navigate("/")

  }
 }).catch(err=>{
setErrMessage(err.response.data.message)
setLoading(true)
 })
}





  const login=useFormik({

    initialValues:{
email:'',
password:''
    },
    onSubmit:(values)=>{
console.log(values );
//  send to api
sendDataToApi(values)

    },
    validationSchema
  
  })
// show errors
  console.log("dirty",login.dirty)
  console.log("isValid",login.isValid)

  return <>
      <div className="w-75 m-auto">
<h4 className='mt-5 mb-3'>login Now:</h4>
<form onSubmit={login.handleSubmit}>


  <label htmlFor="email">Email:</label>
  <input  onBlur={login.handleBlur} onChange={login.handleChange} value={login.values.email} className={`form-control my-2 ${login.errors.email && login.touched.email ? "is-invalid" :''} `} type="email" id='email' name='email' />

  {login.errors.email && login.touched.email?<div className="alert alert-danger">{login.errors.email}</div>:''}


  <label htmlFor="password">Password:</label>
  <input onBlur={login.handleBlur} onChange={login.handleChange} value={login.values.password} className={`form-control my-2 ${login.errors.password &&login.touched.password ? 'is-invalid' :''}`} type="password" id='password' name='password' />

  {login.errors.password && login.touched.password?<div className="alert alert-danger">{login.errors.password}</div>:''}




{errMessage?<div className="alert alert-danger">{errMessage}</div>
:' '}

<div className='d-flex justify-content-between mt-3'>
  <div className='d-flex flex-column'>

<Link className=' text-danger mb-2 ' to="/ForgetPassword" >Forget Password...?</Link>
<Link className=' text-main ' to="/SignUp" >SignUp...?</Link>
</div>

  <button disabled={!(login.dirty && login.isValid )} type='submit' className=' btn bg-main text-white  '> 
  
  {Loading? "Signin" : <i className=' fa fa-spin fa-spinner'></i> }

  </button>
  </div>

</form>
         
      </div>
      <Helmet>
        <title>Login</title>
      </Helmet>
    </>
  
}
