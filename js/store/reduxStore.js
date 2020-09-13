import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import BaseReducer from '../reducers';

export default function reduxStore() {
  const enhancer = applyMiddleware(thunk);
  let store = createStore(BaseReducer, enhancer);
  return store;
}
