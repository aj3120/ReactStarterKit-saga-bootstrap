import {combineReducers} from 'redux'
import TestReducer from './Reducers/TestReducer';
import { connectRouter } from 'connected-react-router';

export default (history)=>combineReducers({
    router:connectRouter(history),
    testReducer:TestReducer
})