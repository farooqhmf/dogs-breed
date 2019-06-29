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