import { USER_REQUEST, USER_SUCCESS, USER_ERROR } from './Type'
import { CUSTOMER_ERROR, CUSTOMER_REQUEST, CUSTOMER_SUCCESS } from './Type'


const initialStateUser = {
    loading: 'false',
    users: [],
    error: ""
}

const initialStateLogin = {
    loading: 'false',
    details: {},
    error: ""
}
export const reducerUser = (state = initialStateUser, action) => {

    switch (action.type) {

        case USER_REQUEST: return {
            ...state,
            loading: true
        }

        case USER_SUCCESS: return {
            ...state,
            loading: false,
            users: action.payload
        }

        case USER_ERROR: return {
            ...state,
            loading: false,
            users: [],
            error: action.payload
        }

        default: return state;
    }
}

export const reducerLogin = (state = initialStateLogin, action) => {


    switch (action.type) {

        case CUSTOMER_REQUEST: return {
            ...state,
            loading: true
        }

        case CUSTOMER_SUCCESS: return {
            ...state,
            loading: false,
            details: action.payload
        }

        case CUSTOMER_ERROR: return {
            ...state,
            loading: false,
            details: {},
            error: action.payload
        }

        default: return state;
    }
}