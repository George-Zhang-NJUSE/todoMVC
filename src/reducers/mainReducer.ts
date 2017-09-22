import todoList from './todo';
import filter from './filter';
import { combineReducers } from 'redux';
import { TodoListType } from './todo';
import { FilterValues } from './filter';

const todoApp = combineReducers({
    todoList,
    filter
});

export default todoApp;
export type Store = {
    todoList: TodoListType,
    filter: FilterValues
};