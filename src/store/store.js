import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './reducer';

const rootReducer = combineReducers({
  app: appReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
