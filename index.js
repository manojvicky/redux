import { combineReducers } from 'redux';
import todos from './reducerTodo';

const todoApp = combineReducers({
  todos
})

export default todoApp;