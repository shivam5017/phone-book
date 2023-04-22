

import React,{useState,useEffect,useRef,useCallback} from 'react'
import "./css/contact.css"
import { useDispatch, useSelector } from "react-redux";
import  {useToastMsg} from "../custom-hooks/useToast";
import {logout} from "../redux/login/login.action"
import { useNavigate } from 'react-router-dom';
import { add,get } from '../redux/contact/contact.action';
import {remove,update} from "../redux/contact/contact.action"
import { Box } from '@chakra-ui/react'
import { Button,useColorModeValue } from '@chakra-ui/react'
import { useColorMode} from '@chakra-ui/react';
  import {BsFillMoonFill,BsFillSunFill} from "react-icons/bs"

const Contact = () => {
 
  const [data,setData]=useState({})
   const user=useSelector(store=>store.login.credentials)
  const [deleteUser,setDeleteUser]=useState("")
  const output=useSelector(store=>store.contact.contacts)

  // loading states
  const [loading,setLoading]=useState(false)
  const [confirm,setConfirm]=useState(false)
  const [updateLoader,setUpdateLoader]=useState(false)
  // loading states end
   const ref=useRef()
   const dispatch=useDispatch()
  const Toast=useToastMsg()
  const navigate=useNavigate()
  const [username,setUsername]=useState("")
  const [phone,setPhone]=useState("")
  const [changeid,setChangeid]=useState("")
  const [deleteId,setDeleteId]=useState("")

  const [initial,setInitial]=useState(
    {
      username:"",
      phone:""
    }
  )
  
  
const emailInput = useCallback((inputElement) => {
  if (inputElement) {
    inputElement.focus();
  }
}, []);


   useEffect(()=>{
    setData(user)
    dispatch(get(),Toast)
   },[])

    
  
  
   
  const addContact=async()=>{
   const updateform=ref.current;
   updateform.style.display="block"
  }
 

  // edit button
  const editContact=async(event)=>{
  const data = output.find((el) => el._id === event.target.id);
    setInitial(data)
    const update=ref.current.current;
    update.style.display="block"
    setChangeid(event.target.id)
   
  }
  
  
 
  

  const closeform=()=>{
    const form=ref.current;
    form.style.display="none"
    setUsername("")
    setPhone("")
  }

  
  const contactAdd=async(userID)=>{
      setLoading(true)
  await dispatch(add({username,phone},Toast))
  setLoading(false)
   closeform()
   setUsername("")
   setPhone("")
  }
  
  
  const closeupdateform=()=>{
    const update=ref.current.current;
    update.style.display="none"
  }

  const signout=async()=>{

    if (user.email) dispatch(logout(user.email, Toast));
   
    setData({})
    navigate("/")
  }
  
  
  const deleteContact=async(event,id)=>{
  setDeleteUser(event.target.name)
    document.getElementById("delete-modal").style.display="block"
    setDeleteId(event.target.id)
    
  }
  const onInputChange= e =>{
    setInitial({...initial,[e.target.name]:e.target.value})
  }

// update button
  const updateContact=async()=>{
   const value={
    username:initial.username,
    phone:initial.phone,
   }
   setUpdateLoader(true)
   await dispatch(update(changeid,value,Toast))
   setUpdateLoader(false)
    closeupdateform()
   
 
    
  }
 
 
 
  const confirmDelete=async()=>{
 
    setConfirm(true)
   await dispatch(remove(deleteId ,Toast))
   setConfirm(false)
 
    document.getElementById("delete-modal").style.display="none"
  }

  const cancelDelete=()=>{
    document.getElementById("delete-modal").style.display="none"
    setDeleteId("")
    setDeleteUser('')
   
  }
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('gray.800', 'white')
  const color = useColorModeValue('white', 'gray.800')

  return (
    <div className='Main-container'>
      <nav className='navbar'>
         <h1>Phone Book</h1>
         <h3>User:{data.username}</h3>
         <Button onClick={toggleColorMode}>
       {colorMode === 'light' ? <BsFillMoonFill />:<BsFillSunFill />}
      </Button>
         <button className='logout' onClick={signout}>Logout</button>
      </nav>
      <div className='content'>
        <h1>My Contacts</h1>
        <button className='addContact' onClick={addContact}>Add Contact</button>
      </div>
      {/* form part */}
      <Box ref={ref} id="form" color={bg} backgroundColor={color}>
        <div id="close" onClick={closeform}>X</div>
      <div id="inner-form-add">
           <label>Enter Name : </label>
           <input type="text" placeholder='Name...' id='name' value={username} onChange={(e)=>setUsername(e.target.value)} ref={emailInput} />
           </div>
           <div>
           <label>Enter Phone No : </label>
           <input type="number" placeholder='Phone No.' id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
    </div>
    <Button isLoading={loading} type='submit' className='contactAdd' colorScheme='grey' variant='solid' onClick={contactAdd}>Add Contact</Button>
    </Box>
    {/* update form */}
    <Box ref={ref.current} id="updateform"  color={bg} backgroundColor={color}>
        <div id="close" onClick={closeupdateform}>X</div>
      <div id="inner-form-update">
           <label>Enter Name : </label>
           <input type="text" placeholder='Name...' id='name' name="username" value={initial.username}  onChange={e=>onInputChange(e)}   />
           </div>
           <div>
           <label>Enter Phone No : </label>
           <input type="number" placeholder='Phone No.' id="phone" name="phone" value={initial.phone} onChange={e=>onInputChange(e)} />
    </div>
    <Button isLoading={updateLoader} className='contactAdd'  colorScheme='grey' variant='solid'  onClick={updateContact}>Update Contact</Button>
    </Box>
    {/* delete modal */}
    <Box id="delete-modal" color={bg} backgroundColor={color} >
       <h1>You are trying to Delete: {deleteUser}</h1>
        <h1>Are you sure you want to Delete?</h1>
         <Button isLoading={confirm} id="confirmDelete" marginBottom={"20px"} colorScheme='grey' variant='solid' onClick={confirmDelete}>Confirm</Button>
         <Button  id="cancelDelete"  colorScheme='grey' variant='solid' onClick={cancelDelete}>Cancel</Button>
    </Box>
    {/* form part done */}
    <div id="table">
    <table>
        <thead className='thead'>
      <tr id="tr">
        <th className='th1'>Name</th>
        <th className='th2'>Contact No.</th>
        <th >Edit</th>
        <th>Delete</th>
    </tr>
    </thead>
   
    <tbody id="tbody">
        {
          output.map((e,id)=>{
          return<tr key={e?._id} id="trtr">
          <td className='td1'>{e?.username}</td>
          <td className='td2'>{e?.phone}</td>
          <button onClick={editContact} id={e?._id} contact={e?.phone} name={e?.username}   className="edit">Edit</button>
          <button onClick={deleteContact} id={e?._id} name={e?.username} contact={e?.phone} className="delete">Delete</button>
        </tr>
})
        
        
        }
    </tbody>
    </table>
</div>
           
    </div>
  )
}

export default Contact
