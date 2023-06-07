import {INJECTION, PAINKILLER} from './Type'
//ACTION
const action1 = {
    type: INJECTION
}
const action2 = {
    type: PAINKILLER 
}   
//ACTION CREATOR: It is used to wrap an action.
export const increINJECTION = () => {
    return action1
}
export const increPAINKILLER = () => {
    return action2
}