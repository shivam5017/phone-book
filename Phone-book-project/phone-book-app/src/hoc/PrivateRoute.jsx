

import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'




const PrivateRoute = ({children}) => {
  const {token}=useSelector((store)=>store.login)

  if(token){
    return  children || <Navigate to="/contact" replace/>
  }else{
    return <Navigate to="/" replace/>
  } 
  
   
 

}

export default PrivateRoute