import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./login/login.reducer";
import {contactReducer} from "./contact/contact.reducer"


const rootReducer = combineReducers({
    login: loginReducer,
    contact:contactReducer
});

export const store = legacy_createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
);