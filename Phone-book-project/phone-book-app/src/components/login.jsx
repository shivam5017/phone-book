import React,{useState,useCallback} from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/login/login.action'
    import  {useToastMsg} from "../custom-hooks/useToast";
import "./css/login.css"
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react'


const Login = () => {
    const [email,setEmail]=useState("")
    const [loading,setLoading]=useState(false)
    const [password,setPassword]=useState("")
    const dispatch=useDispatch();
    const Toast = useToastMsg();
       const navigate=useNavigate()
  
const emailInput = useCallback((inputElement) => {
  if (inputElement) {
    inputElement.focus();
  }
}, []);

 

    function Signin(event){
      event.preventDefault()
   setLoading(true)
        dispatch(login({email,password},Toast,navigate)) 
        
    }
    
   
     

  return (
    <>
    <h1 className='Header'>MY PHONE BOOK</h1>
  <form className='login-form' onSubmit={Signin} >
        <h1>Login</h1>
        <div>
           <label>Enter Email: </label>
           <input type="email" placeholder='Email...'  onChange={(e)=>setEmail(e.target.value)} ref={emailInput} />
           </div>
           <div>
           <label>Enter Password: </label>
           <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
           </div>
           {

           }
           <button type="submit" className="button" >
            {
              loading?<Spinner />:"Login"
            }
           </button>
           <h3>Don't have an account? <Link to='/signup'style={{color: 'blue',textDecoration:"underline" }} >Signup</Link></h3>
  </form>
  </>
  )
}

export default Login