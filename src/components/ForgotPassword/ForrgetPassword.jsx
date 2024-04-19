import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from "yup"
import ResetPassword from '../ResetPassword/ResetPassword'
import { Link, useNavigate } from 'react-router-dom'

export default function ForgetPassword() {
let navigate=useNavigate()
let [errMsg,setErrMessage]=useState("")
const [Loading,setLoading]=useState(true)
const [Loading2,setLoading2]=useState(true)

let [formState,setFormState]=useState(true)

    let validationSchema=Yup.object({
email:Yup.string().required("Email Required").email("Enter Vaalid Email")

    })

let validationSchema2=Yup.object({
    resetCode: Yup.string().required("resetCode is Requires").matches(/^[0-9]{5,6}$/,"enter valid code")
})

    let Formik=useFormik(

        {
            initialValues:{
                email:""
            },
            onSubmit:(values)=>{
                ForgetPasswordAPI(values)
            },
            validationSchema
        }
    )



    let Formik2=useFormik({
initialValues:{
    resetCode:""
},
onSubmit:(value)=>{
    console.log(value)
    VerifyResetCode(value)


},
validationSchema:validationSchema2
    })



async function ForgetPasswordAPI(values){
    setLoading(false)
        console.log(values)
let res= await axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",values).catch((err)=>{

setErrMessage(err.response.data.message )
console.log(err.response.data.message)
setLoading(true)
})

if(res.data.statusMsg=="success"){
setFormState(false)

}
console.log(res)
    }


async function VerifyResetCode(value){
    setLoading2(false)
let Req=await axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",value).catch((err)=>{
    setErrMessage(err.response.data.message)
})
console.log(Req)
setLoading2(true)
if(Req.data.status=="Success"){
console.log(Req)
navigate("/ResetPassword")
}

}

  return <> 

<div className="container">


{formState ?

  <form onSubmit={Formik.handleSubmit}>

<label htmlFor="email" className='my-3'>Enter Your Email:</label>
<input type="email" id='email' className=' form-control'  onBlur={Formik.handleBlur} onChange={Formik.handleChange} />
{errMsg? <div className='alert alert-danger mt-3 '>{errMsg}</div>:""}

<button type='submit' className='btn bg-main text-white mt-3' >

{Loading? "Send Code" : <i className=' fa fa-spin fa-spinner'></i> }

</button>
</form>

:

<form onSubmit={Formik2.handleSubmit}>

<label htmlFor="resetCode" className='my-3'> Enter Reset Code :</label>
<input value={Formik2.values.resetCode} type='text' onBlur={Formik2.handleBlur} onChange={Formik2.handleChange}  id='resetCode' name='resetCode' className=' form-control'/>
{Formik2.errors.resetCode &&Formik2.touched.resetCode ? <div className='alert alert-danger mt-2'>{errMsg}</div> :""}
<button  type='submit' className='btn bg-main text-white mt-2 ' >

 
{Loading2? "Verify Code" : <i className=' fa fa-spin fa-spinner'></i> }

</button>
</form>

}

</div>

      
    </>
}
