import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup"

export default function ResetPassword() {

    let navigate=useNavigate()
let validationSchema=Yup.object({

    email:Yup.string().email().required(),
    newPassword:Yup.string().matches(/^[A-Za-z0-9][a-z0-9A-Z]{6,}$/,'newPassword must be at least contains 7 characters or numbers').required("newPassword required"),


})

async  function ResetPasswordApi(values){
    let req= await axios.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",values).catch((err)=>{
        console.log(err)
    })

    if(req.data.token){
navigate("/Login")
    }
    console.log(req);
        }
  let formik=  useFormik({
        initialValues:{
            email:"",
            newPassword:""
        },
        onSubmit:(values)=>{
            ResetPasswordApi(values)
        },
        validationSchema
    })

  



  return <>
  <div className="container">

   <h2 className='my-3 text-main'>Reset Password:</h2>
   <form onSubmit={formik.handleSubmit}>
    <label htmlFor="email" className='my-2'>Email:</label>
    <input type="email" id='email' value={formik.values.email} name='email' onBlur={formik.handleBlur } onChange={formik.handleChange} className='form-control' />
   
    <label htmlFor="newPassword" className='my-2'>New Password:</label>
    <input type="password" id='newPassword' name='newPassword' value={formik.values.newPassword} onBlur={formik.handleBlur } onChange={formik.handleChange}  className='form-control'/>
<button type='submit' className='btn bg-main text-white mt-2 '>Update Password</button>
   </form>
   </div>

    </>
  
}
