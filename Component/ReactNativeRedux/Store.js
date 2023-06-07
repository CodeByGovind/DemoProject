import { INJECTIONreducer,PAINKILLERreducer } from "./Reducer";
import { combineReducers, createStore } from 'redux';
const reducer=combineReducers({
   INJECTION:INJECTIONreducer,
   PAINKILLER: PAINKILLERreducer

})

const store = createStore(reducer)
export default store

