import { all, put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { getDogsDataSuccess, getDogsDataFailure } from './action';
import axios from 'axios';

export function* getDogsData(action) {
    console.log('action :: ', action.payload.key)
    try{
      const req = yield axios.get('https://dog.ceo/api/breeds/list/all');
      yield put(getDogsDataSuccess(req.data.message));
    } catch(e){
      console.log('error ::', e);
      yield put(getDogsDataFailure(e));
    }
  }
  
  function* actionWatcher() {
    yield takeLatest(types.GET_DOGS_DATA_REQUEST, getDogsData);
}

  export default function* rootSaga() {
    yield all([
      actionWatcher(),
    ]);
 }