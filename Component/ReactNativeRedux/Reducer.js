import { INJECTION, PAINKILLER } from './Type'

const initialStateINJECTOION = {
    INJECTION: 1
}
const initialStatePAINKILLER = {
    PAINKILLER: 10
}
//REDUCER
export const INJECTIONreducer = (state = initialStateINJECTOION, action) => {
    switch (action.type) {
        case INJECTION: return {
            ...state,
            INJECTION: state.INJECTION + 1
        }
         
        default: return state;
    }
}
export const PAINKILLERreducer = (state = initialStatePAINKILLER, action) => {
    switch (action.type) {
       
        case PAINKILLER: return {
            ...state,
            PAINKILLER: state.PAINKILLER + 10
        }
        default: return state;
    }
}