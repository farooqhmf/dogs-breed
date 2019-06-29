import * as types from './types';

export function getDogsData ( ) {
    return{
      type: types.GET_DOGS_DATA_REQUEST,
      payload: {
        key: 'fuck u redux-saga'
      }
    };
}

export function getDogsDataSuccess (data) {
  return{
    type: types.GET_DOGS_DATA_SUCCESS,
    payload: data
  };
}

export function getDogsDataFailure (err) {
  return {
    type: types.GET_DOGS_DATA_FAILURE,
    payload: err
  };
}

export function getBreedDataRequest (breed) {
  return{
    type: types.GET_BREED_DATA_REQUEST,
    payload: {
      breed: breed, 
    }
  };
}

export function getBreedDataSuccess (data) {
return{
  type: types.GET_BREED_DATA_SUCCESS,
  payload: data
};
}

export function getBreedDataFailure (err) {
return {
  type: types.GET_BREED_DATA_FAILURE,
  payload: err
};
}