import todoListApp from './reducers/';
import { combineReducers, createStore } from 'redux';

const reducers = combineReducers({

  todoListApp,
  
});

export default createStore(reducers);
