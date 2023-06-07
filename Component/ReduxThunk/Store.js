import { reducerUser, reducerLogin } from './Reducer'
import {createStore,applyMiddleware , combineReducers} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const reducer = combineReducers({
    user: reducerUser,
    login: reducerLogin
})

const Store = createStore(reducer,applyMiddleware(thunk,logger))
export default Store 