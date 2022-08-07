import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const GET_AUTH_REQUEST = "GET_AUTH_REQUEST";
export const GET_AUTH_SUCCESS = "GET_AUTH_SUCCESS";
export const GET_AUTH_FAILURE = "GET_AUTH_FAILURE";
export const GET_AUTH_UPDATE = "GET_AUTH_UPDATE";

export const authRequest = () => {
    return {
        type : GET_AUTH_REQUEST
    }
}

export const authSuccess = (data) => {
    return {
        type: GET_AUTH_SUCCESS,
        payload : data
    }
}

export const authFailure = (err) => {
    return {
        type: GET_AUTH_FAILURE,
        payload : err
    }
}

export const signout = (data) => {
    return {
        type: GET_AUTH_UPDATE,
    }
}


