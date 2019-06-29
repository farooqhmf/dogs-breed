import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import App from './App';
import Breed from './Breed';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { createStore,compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
//import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga  from './saga';
import { logger } from 'redux-logger';

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
sagaMiddleware,
logger
];

// mount it on the Store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares), reduxDevTools)
    );


// then run the saga
sagaMiddleware.run(rootSaga);


const routing = (
  <Provider  store={store}>
  <Router>
    <div>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/dogdetail/:breed' component={Breed} />
      </Switch>
    </div>
  </Router>
  </Provider>
);
ReactDOM.render(routing, document.getElementById('root'));
// export default store;


// import {createStore,combineReducers,applyMiddleware} from 'redux';
// import logger from "redux-logger";

//   const mathReducer= (state={
//   result: 1,
//   lastValue: []
// },action) => {
//   switch(action.type){
//     case "ADD":
     
//       state={
//         ...state, 
//         result: state.result + action.payload,
//         lastValue: [...state.lastValue,action.payload]
//       };
//       break;
//       case "SUBTRACT":
//           state={
//             ...state,
//             result: state.result - action.payload,
//             lastValue: [...state.lastValue,action.payload]
//           };
//         break;
//   }
//   return state; 
// };
// const userReducer= (state={
//   name: "Shami",
//   age: 25
// },action) => {
//   switch(action.type){
//     case "set_name":
//        state={
//         ...state,
//         name: action.payload
//       };
//       break;
//       case "set_age":
//           state={
//             ...state,
//             age: action.payload
//           };
//         break;
//   }
//   return state; 
// };
// const myLogger= (store) => (next) => (action) =>{
//               console.log("logged action:",action);
//               next(action);

// }
// const store= createStore(
//   combineReducers({mathReducer,userReducer}),
//   {},
//   applyMiddleware(myLogger,logger)
//   );

// store.subscribe( () => {
//   console.log("store updated!", store.getState())

// });
// store.dispatch({
//   type: "ADD",
//   payload: 100
// }); 
// store.dispatch({
//   type: "ADD",
//   payload: 22
// }); 
// store.dispatch({
//   type: "SUBTRACT",
//   payload: 80
// })

// export default store;