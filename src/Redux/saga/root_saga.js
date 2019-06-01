import {all } from 'redux-saga/effects';
import {sagaInitialLoad} from './saga_initial_load';
export function *watchAll() {
  yield all([
    sagaInitialLoad()
  ]);
}