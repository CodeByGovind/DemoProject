import { ADD_USER, FETCH_USER, DELETE_USER } from './Typetask'


export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}


export const fetchUser = (users) => {
    return {
        type: FETCH_USER,
        payload: users
    }
}


export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        payload: id
    }
}
