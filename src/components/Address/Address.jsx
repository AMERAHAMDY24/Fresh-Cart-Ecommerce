import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { cartContext } from '../../Context/CartContext'
import { useParams } from 'react-router-dom'

export default function Address() {


    let {id} =useParams()
const [loading,setLoading]=useState(true)

const [err,setErr]=useState("true")
let {Pay}=useContext(cartContext)

async  function payOnline(values){
    setLoading(false)
let data=await Pay(id ,values)
console.log(data)
setLoading(true)
if(data.status=="success"){

window.location.href= data.session.url
}
 
    }


    let Address=useFormik({

        initialValues:{
            Details:"",

            phone:"",
            city:""
            
        },
        onSubmit:(values)=>{
payOnline(values)
        }
    })


 

  return <>
  <div className='w-75 m-auto my-5'>

  <h2>Address Now:</h2>
      <form  onSubmit={Address.handleSubmit}>
<label htmlFor="Details" className='my-3'>Details:</label>
<textarea id='Details'  onBlur={Address.handleBlur} onChange={Address.handleChange} name='Details' className='form-control'> </textarea>
     
<label htmlFor="phone" className='my-3'>phone:</label>
<input id='phone' onBlur={Address.handleBlur}  onChange={Address.handleChange} type='phone' name='phone' className='form-control'/> 

<label htmlFor="city" className='my-3'>city:</label>
<input id='city' type='text' name='city' className='form-control' onBlur={ Address.handleBlur} onChange={Address.handleChange }/> 

<button className='btn bg-main mt-4 text-white px-4' disabled={!(Address.dirty && Address.isValid)} Type="submit">
    {loading ?"pay" :<i className='fa fa-spinner fa-spin'></i>}
</button>
      </form>
      </div>

    </>

}
