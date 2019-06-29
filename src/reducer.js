import * as types from './types';

const initialState = {
    isFetching: false,
    dogList: [],
    images: [],
    erro: '',
}
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_DOGS_DATA_REQUEST: 
            return { ...state, 
                isFetching: true,
            };
        case types.GET_DOGS_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dogList: Object.keys(action.payload)
            };
        case types.GET_DOGS_DATA_FAILURE:
            return {
                ...state, 
                isFetching: false,
                error: 'some thing went wrong',
            };
        case types.GET_BREED_DATA_REQUEST: 
            return { ...state, 
                isFetching: true,
            };
        case types.GET_BREED_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                images: action.payload
            };
        case types.GET_BREED_DATA_FAILURE:
            return {
                ...state, 
                isFetching: false,
                error: 'some thing went wrong',
            };

        default:
            return state;
    }
};

export default rootReducer;