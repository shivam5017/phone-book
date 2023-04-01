import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGNUP } from "./login.actionTypes";

const initialState = {
    token: "",
    error: false,
    loading: false,
    credentials: {},
    auth:false
}

if (typeof window !== "undefined") {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
        initialState.token = user.token;
        initialState.credentials = user;
    }
}

export const loginReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case AUTH_LOADING: {
            return {
                ...state,
                loading: true
            }
        }

        case AUTH_LOGIN: {
            return {
                ...state,
                token: payload.token,
                credentials: payload,
                loading: false,
                auth:true
            }
        }

        case AUTH_LOGOUT: {
            return {
                ...state,
                token: "",
                credentials: {},
                error: false,
                loading: false,
                auth:false
            }
        }

        case AUTH_SIGNUP: {

            return {
                ...state,
                loading: false,
                credentials:payload,
            }
        }

        case AUTH_ERROR: {
            return {
                ...state,
                error: true,
                loading: false
            }

        }
        default: return state;

    }

}