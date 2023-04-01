import React,{useState,useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {signup} from "../redux/login/login.action"
import {useToastMsg} from "../custom-hooks/useToast";
import "./css/signup.css"
import {Link, useNavigate} from "react-router-dom"
import { Spinner } from '@chakra-ui/react'

const Signup = () => {
   const [loading,setLoading]=useState(false)
     const [email,setEmail]=useState("")
     const [password,setPassword]=useState("")
     const [name,setName]=useState("")
     const [confirmpassword,setConfirmpassword]=useState("")
     const Toast = useToastMsg();
     const navigate=useNavigate()
      const dispatch=useDispatch();


      const emailInput = useCallback((inputElement) => {
         if (inputElement) {
           inputElement.focus();
         }
       }, []);


     const Register=async(event)=>{
      event.preventDefault()
         if (!email || !password || !confirmpassword ||  !name  ) return Toast("Please fill all the fields", "error");
         if (password.length < 6 ) return Toast("Password length must be greater than or equal to 6", "error");
         if(confirmpassword.length < 6)  return Toast("ConfirmPassword length must be greater than or equal to 6", "error");
         if(confirmpassword===password){
            setLoading(true)
            dispatch(signup({ username: name, email,password }, Toast,navigate));
         }else{
            setLoading(false)
            return Toast("ConfirmPassword doesn't match with password", "error");
         }
        
     }

  return (
   <>
   <h1 className='Header'>MY PHONE BOOK</h1>
   <form className='signup-form' onSubmit={Register}>
      <h1>Register Here..</h1>
      <div>
      <label>Enter UserName: </label>
      <input placeholder='UserName..' type="text" onChange={(e)=>setName(e.target.value)} ref={emailInput} />
      </div>
      <div>
      <label>Enter Email: </label>
      <input placeholder='Email...' type="email" onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div>
      <label>Enter Password: </label>
      <input placeholder='Password...' type="password" onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <div>
      <label>Confirm Password: </label>
      <input placeholder='Confirm Password...' type="password" onChange={(e)=>setConfirmpassword(e.target.value)}/>
      </div>
      
      <button type="submit" className="button" >
            {
              loading?<Spinner />:"Create Account"
            }
           </button>
      <h3>Already Have an Account? <Link to='/'style={{color: 'blue',textDecoration:"underline" }} >Login</Link></h3>
   </form>
   </>
  )
}

export default Signup