import React, { createContext, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import axios from 'axios'
import { date } from 'yup'

export let cartContext = createContext(0)


 async function AddToCart(productId){
 return   axios.post("https://ecommerce.routemisr.com/api/v1/cart",{productId},{
        headers:{
            token:localStorage.getItem("token")
        }
    }).then(({data})=> data ).catch(err=>err )
}


async function getUserCart(){
return axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
    headers:{token:localStorage.getItem("token")}
}).then(({data})=> data).catch(err=>err)

}
// delete item

async function deleteItem(productId){

  return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/` + productId,{
    headers:{
      token:localStorage.getItem("token")
    }
  }).then(({data})=>data).catch(err=>err)
}


// UpdateQuentity

async function UpdateQuentity(productId,count){
  return axios.put (`https://ecommerce.routemisr.com/api/v1/cart/` + productId,{count},{
    headers:{
      token:localStorage.getItem("token")
    }
  }).then(({data})=>data).catch(err=>err)

}


// Clear Cart
async function ClearCart(){
return axios.delete("https://ecommerce.routemisr.com/api/v1/cart",{
  headers:{
    token:localStorage.getItem("token")
  }
}) .then(({data})=>data).catch(err=>err)

}



// Pay order

async function Pay(productId,shippingAddress){

  return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/` + productId ,{shippingAddress},{
    headers:{
      token:localStorage.getItem("token")
    }
  }) .then(({data})=>data).catch(err=>err)
}



export default  function CartContextProvider({children}) {


    let [counter,setCounter]=useState(0)
  return <cartContext.Provider value={{counter,setCounter,AddToCart,getUserCart,deleteItem,UpdateQuentity,ClearCart,Pay}}>
{children}
  </cartContext.Provider>
  
}
