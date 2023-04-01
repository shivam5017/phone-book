import { CONTACT_ADD, CONTACT_ERROR, CONTACT_LOADING,CONTACT_GET, CONTACT_DELETE, CONTACT_EDIT } from "./contact.actionTypes";

const initialState = {
    error: false,
    loading: false,
    contacts:[]
}


export const contactReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case CONTACT_LOADING: {
            return {
                ...state,
                loading: true
            }
        }

        case CONTACT_ADD: {
            return {
                ...state,
                contacts: [...state.contacts,payload],
                loading: false
            }
        }
        case CONTACT_DELETE:{
            return {
                ...state,
                loading: false,
                contacts: payload
            }
        }

        case CONTACT_GET:{
            return{
                ...state,
                contacts:payload,
                loading:false,
                error:false
            }
        }

        case CONTACT_EDIT:{
            return{
                ...state,
                contacts:[...state.contacts,payload],
                loading:false,
                error:false
            }
        }
       
      


        case CONTACT_ERROR: {
            return {
                ...state,
                error: true,
                loading: false
            }

        }
        default: return state;

    }

}