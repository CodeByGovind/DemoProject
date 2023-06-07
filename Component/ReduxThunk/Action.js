import {USER_REQUEST,USER_SUCCESS,USER_ERROR} from './Type'
import { CUSTOMER_ERROR, CUSTOMER_REQUEST, CUSTOMER_SUCCESS } from './Type'
import axios from 'axios'

//===========================
const userRequest = () => {
    return {
        type: USER_REQUEST
    }
}
const userSuccess = (users) => {
    return {
        type: USER_SUCCESS,
        payload: users
    }
}
const userError = (error) => {
    return {
        type: USER_ERROR,
        payload: error
    }
}


//redux thunk middleware
export const fetchUsers = ()=>{
    return function(dispatch){
        dispatch(userRequest())
        axios.get("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/register")
        .then((response)=> {
            // console.log(response.data)
            const data = response.data
            const users = data.map(user=>user)
            dispatch(userSuccess(users))
        })
        .catch((error)=>{
            // console.log(error)
            dispatch(userError(error))
        })
    }
}
//===================================

const customerRequest = () => {
    return {
        type: CUSTOMER_REQUEST
    }
}
const customerSuccess = (details) => {
    return {
        type: CUSTOMER_SUCCESS,
        payload: details
    }
}
const customerError = (error) => {
    return {
        type: CUSTOMER_ERROR,
        payload: error
    }
}

export const customerLogin = (email, password) => {
    return function (dispatch) {
        dispatch(customerRequest())
        let params = {
            email: email,
            password: password
        }
        axios.post("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/login", params)
            .then((response) => {
                // console.log(response.data)
                const details = response.data
                dispatch(customerSuccess(details))
            })
            .catch((error) => {
                // console.log(error)
                dispatch(customerError(error))
            })
    }
}