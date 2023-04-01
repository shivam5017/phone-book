



import axios from "axios";
import { CONTACT_ERROR, CONTACT_LOADING, CONTACT_ADD,CONTACT_GET,CONTACT_DELETE,CONTACT_EDIT } from "./contact.actionTypes";
import { api } from "../../api";

export const add = (value, Toast) => async (dispatch) => {
 
    dispatch({ type: CONTACT_LOADING });
    try {
        const user= sessionStorage.getItem("user")
        let res = await axios.post(`${api}/contact/add`, value,{
            headers:{
                Authorization:`${JSON.parse(user).token}`
            }
        });
        let data = res.data;
           console.log(data)
        if (data.status === 200) {
            let { contacts, message } = data;
            console.log(contacts)
            dispatch({ type: CONTACT_ADD , payload: contacts });
            dispatch(get(),Toast)
           return Toast(message, "success");
           
        
        } else {
            let { message } = data;
            dispatch({ type: CONTACT_ERROR });
            return Toast(message, "info");
        
        }

    } catch (error) {
        dispatch({ type: CONTACT_ERROR });
        return Toast(error.response?.data?.message, "error");
    }

}


export const update=(id,value,Toast)=>async(dispatch)=>{
 
    dispatch({ type: CONTACT_LOADING });

    try {
        const user= sessionStorage.getItem("user")
    let res = await axios.patch(`${api}/contact/update/${id}`,{value}, {  headers:{
            Authorization:`${JSON.parse(user).token}`
        } });
        let data = res.data;
      
    if (data.status === 200) {
        let { contacts, message } = data;
        console.log(contacts)
        dispatch({ type: CONTACT_EDIT, payload: contacts  });
        Toast(message,`contact is updated`, "success");
     
 
    
    } else {
        let { message } = data;
        dispatch({ type: CONTACT_ERROR });
         dispatch(get(),Toast)
        return Toast(message, "success");
    }

    } catch (error) {

        dispatch({ type: CONTACT_ERROR});
      return Toast(error.response?.data?.message || "Something went wrong while removing contact", "error");

    }
   
   
}


export const remove=(id,Toast)=>async(dispatch)=>{

    dispatch({ type: CONTACT_LOADING });

    try {
        const user= sessionStorage.getItem("user")
        let res = await axios.delete(`${api}/contact/delete/${id}`, {  headers:{
            Authorization:`${JSON.parse(user).token}`
        } });
        let data = res.data;
    
    if (data.status === 200) {
        let { contacts, message } = data;
        dispatch({ type: CONTACT_DELETE, payload: contacts  });
        Toast(message,`contact is removed`, "success");
       return dispatch(get(),Toast)
         
    
    } else {
        let { message } = data;
        dispatch({ type: CONTACT_ERROR });
        dispatch(get(),Toast)
        return Toast(message, "success");
    
    }

    } catch (error) {

        dispatch({ type: CONTACT_ERROR});
      
      return Toast(error.response?.data?.message || "Something went wrong while removing contact", "error");

    }
   
   
}


export const get=(Toast)=>async(dispatch)=>{
    dispatch({ type: CONTACT_LOADING });

     try {
      const user= sessionStorage.getItem("user")
        let res = await axios.get(`${api}/contact/get`,
      {
        headers:{
            Authorization:`${JSON.parse(user).token}`
        }
      }
        );
        let data = res.data;
       
               
        if (data.status === 200) {
            let { contacts, message } = data;
            dispatch({ type: CONTACT_GET ,payload:contacts});
           return Toast(message, "success");
           
        
        } else {
            let { message } = data;
            dispatch({ type: CONTACT_ERROR });
            return Toast(message, "info");
        
        }
         

    } catch (error) {
        dispatch({ type: CONTACT_ERROR });
         
    }

   
   
}


