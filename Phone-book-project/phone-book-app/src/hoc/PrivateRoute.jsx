

import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

    const {auth}=useSelector((store)=>store.login)
    console.log(auth)


  return auth?children:<Navigate to="/" replace/>
}

export default PrivateRoute