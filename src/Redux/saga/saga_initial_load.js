import { put, takeLatest,call} from 'redux-saga/effects'
import { ActionTypes } from '../ActionTypes';
import axios from 'axios'
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export  function* loadInitialData(){
    let contents=yield call(()=>axios.get(`http://localhost:3000/db/db.json`))
    yield put({ type: ActionTypes.TEST_ACTION_SUCCESS, payload: contents.data})
  
  }
  
export function* sagaInitialLoad(){
    yield takeLatest(ActionTypes.TEST_ACTION,loadInitialData)
}
  