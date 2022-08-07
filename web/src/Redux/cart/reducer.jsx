import { GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS } from "./action"



const initState = {
    isLoading: false,
    isError: false,
    cart: [],
}

export const CartReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_CART_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError : false
            }
        }
        case GET_CART_SUCCESS: {

            return {
                ...state,
                cart : payload,
                isLoading: false,  
            }
        }
        case GET_CART_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }
      
        default:
            return state
    }
}