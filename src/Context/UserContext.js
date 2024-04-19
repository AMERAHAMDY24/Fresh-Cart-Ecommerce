import React, { createContext } from 'react'
import { useState } from 'react'

export const UserContext=createContext(null)

export default function UserContext() {


    let [login,setLogin]=useState(null)

    let[isOPen,setIsOPen]=useState(false)
  return <>
  
  <UserContext.Provider val ></UserContext.Provider>
  
  </>
}
