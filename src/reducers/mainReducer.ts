import todoList from './todo';
import filter from './filter';
import { combineReducers } from 'redux';

const todoApp = combineReducers({
    todoList,
    filter
});

export default todoApp;