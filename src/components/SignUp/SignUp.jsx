import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";

export default function SignUp() {


  let navigate = useNavigate()
//  btn loading

const [Loading,setLoading]=useState(true)
  // show error message "if email already exist"
  const [errMessage,setErrMessage]=useState("")
// Yup Validation

function validationSchema(){
let errors= Yup.object({
  name: Yup.string().min(2).max(25).required(),
  email: Yup.string().email().required(),
  password: Yup.string().matches(/^[A-Za-z0-9][a-z0-9A-Z]{6,}$/,'password must be at least contains 7 characters or numbers').required(),
  rePassword: Yup.string().oneOf([Yup.ref('password')],"rePasswo doesnt match the password")
})
   return errors
  
}

 function sendDataToApi(values){
setLoading(false)
 axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values).then(data=>
 {    console.log(data)

  if(data.data.message == 'success'){
    navigate("/Login")

  }
 }).catch(err=>{
setErrMessage(err.response.data.message)
setLoading(true)
 })
}





  const register=useFormik({

    initialValues:{
name:'',
email:'',
password:'',
rePassword:''

    },
    onSubmit:(values)=>{
console.log(values );
//  send to api
sendDataToApi(values)

    },
    validationSchema
  
  })
// show errors
  console.log("dirty",register.dirty)
  console.log("isValid",register.isValid)

  return <>
      <div className="w-75 m-auto">
<h4 className='mt-5 mb-3'>Register Now:</h4>
<form onSubmit={register.handleSubmit}>

  <label htmlFor="Name">Name:</label>
  <input onBlur={register.handleBlur} onChange={register.handleChange} value={register.values.name} className={`form-control my-2 ${register.errors.name && register.touched.name ? "is-invalid" :''}`} type="text" id='Name' name='name' />

{register.errors.name && register.touched.name?<div className="alert alert-danger">{register.errors.name}</div>:''}
  <label htmlFor="email">Email:</label>
  <input  onBlur={register.handleBlur} onChange={register.handleChange} value={register.values.email} className={`form-control my-2 ${register.errors.email && register.touched.email ? "is-invalid" :''} `} type="email" id='email' name='email' />

  {register.errors.email && register.touched.email?<div className="alert alert-danger">{register.errors.email}</div>:''}


  <label htmlFor="password">Password:</label>
  <input onBlur={register.handleBlur} onChange={register.handleChange} value={register.values.password} className={`form-control my-2 ${register.errors.password &&register.touched.password ? 'is-invalid' :''}`} type="password" id='password' name='password' />

  {register.errors.password && register.touched.password?<div className="alert alert-danger">{register.errors.password}</div>:''}

  <label htmlFor="repassword">RePassword:</label>

  <input onBlur={register.handleBlur} onChange={register.handleChange} value={register.values.rePassword} className={`form-control my-2 ${register.errors.rePassword &&register.touched.rePassword ? 'is-invalid':''}  `} type="password" id='repassword' name='rePassword' />
  {register.errors.rePassword && register.touched.rePassword?<div className="alert alert-danger">{register.errors.rePassword}</div>:''}


{errMessage?<div className="alert alert-danger">{errMessage}</div>
:' '}

  <button disabled={!(register.dirty && register.isValid )} type='submit' className=' btn bg-main text-white d-block mt-3 ms-auto'> 
  
  {Loading? "Signup" : <i className=' fa fa-spin fa-spinner'></i> }
  </button>
</form>
         
      </div>
      <Helmet>
        <title>
          Signup
        </title>
      </Helmet>
    </>
  
}
