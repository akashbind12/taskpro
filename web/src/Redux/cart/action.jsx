import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Tost = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    }

export const GET_CART_REQUEST = "GET_CART_REQUEST";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CART_FAILURE = "GET_CART_FAILURE";
export const ADD_TO_CART = "ADD_TO_CART";

export const CartRequest = () => {
    return {
        type : GET_CART_REQUEST
    }
}

export const CartSuccess = (data) => {
    return {
        type: GET_CART_SUCCESS,
        payload : data
    }
}

export const CartFailure = (err) => {
    return {
        type: GET_CART_FAILURE,
        payload : err
    }
}


export const AddToCart = (payload) => (dispatch)=> {
    dispatch(CartRequest())
  
    console.log("payload",payload)
    axios.post('https://taskpro-p.herokuapp.com/products', payload)
      .then(function (response) {
          console.log("bag", response.data);
          toast.success('Product added sucessfully', Tost);
          dispatch(GetCart())
      })
      .catch(function (error) {
        toast.error('Product already exist in cart', Tost );
          dispatch(CartFailure(error.message))
      });
}

export const GetCart = (payload) => (dispatch)=> {
    dispatch(CartRequest())
  
    
    axios.get('https://taskpro-p.herokuapp.com/products')
      .then(function (response) {
          console.log(response.data);
          dispatch(CartSuccess(response.data))
      })
      .catch(function (error) {
          console.log(error);
          dispatch(CartFailure(error.message))
      });
}

export const DelteCart = (id) => (dispatch)=> {
    dispatch(CartRequest())
  
    
    axios.delete(`https://taskpro-p.herokuapp.com/products/${id}`)
    .then(function (response) {
        console.log(response.data);
        toast.success('Product removed sucessfully', Tost);
        dispatch(GetCart())
    })
    .catch(function (error) {
        console.log(error);
        dispatch(CartFailure(error.message))
    });
}

export const EditCart = (id,payload) => (dispatch) => {
    console.log(id,payload)
    dispatch(CartRequest())

    axios.put(`https://taskpro-p.herokuapp.com/products/${id}`, payload)
    .then(function (response) {
        console.log(response.data);
        toast.success('Product updated sucessfully', Tost);
        dispatch(GetCart())
    })
    .catch(function (error) {
        console.log(error);
        dispatch(CartFailure(error.message))
    });
    }