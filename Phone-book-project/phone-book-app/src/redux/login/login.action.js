


import { api } from "../../api";
import axios from "axios";
import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGNUP } from "./login.actionTypes";


export const login = (cred, Toast,navigate) => async (dispatch) => {

    dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.post(`${api}/user/login`, cred);
        let data = res.data;
        if (data.status === 200) {
            let { credentials, message } = data;
           
            dispatch({ type: AUTH_LOGIN, payload: credentials });
            navigate("/Contact")
          
        
        
            sessionStorage.setItem("user", JSON.stringify(credentials));
           return Toast(message, "success");
           
        
        } else {
            let { message } = data;
            dispatch({ type: AUTH_ERROR });
            
            return Toast(message, "info");
        
        }

    } catch (error) {
        dispatch({ type: AUTH_ERROR });
        return Toast(error.response?.data?.message, "error");
    }

}

// registering user to database
export const signup = (cred, Toast,navigate) => async (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.post(`${api}/user/register`, cred);
        let data = await res.data;
        console.log(data)
        // if registration is succesfull
        if (data.status === 200) {
            let { credentials, message } = data;
            dispatch({ type: AUTH_SIGNUP, payload: credentials  });
            navigate("/contact")
            

            sessionStorage.setItem("user", JSON.stringify(credentials));
            Toast(message, "success");
        }
        // if user already exists
        else {
            dispatch({ type: AUTH_ERROR });
            Toast(data.message, "info");
        }
    } catch (error) {
        // server or internal error
        dispatch({ type: AUTH_ERROR });
        Toast(error.response?.data?.message || "something went wrong", "error");
    }
}



export const logout = (email, Toast) => async (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.post(`${api}/user/logout`, { email });
        let data = await res.data;

        if (data.status === 200) {
            dispatch({ type: AUTH_LOGOUT, payload: data.message });
            sessionStorage.clear();;
            Toast(data.message, "success");
        } else {
            dispatch({ type: AUTH_ERROR });
            Toast(data.message, "info");
        }
    } catch (error) {
        dispatch({ type: AUTH_ERROR });
        Toast(error.response?.data?.message, "error");
    }
}
