import {Routes,Route} from "react-router-dom"

import React from "react"
import Login from "../components/login"
import Signup from "../components/signup"
import Contact from "../components/contact"
import PrivateRoute from "../hoc/PrivateRoute"
import NotFound from "../components/404notfound"

const AllRouter=()=>{
    return (
        <Routes>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/" element={<Login />}></Route>
            <Route path="/contact" element={
            <PrivateRoute><Contact /></PrivateRoute>}> 
            </Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    )
}
export default AllRouter