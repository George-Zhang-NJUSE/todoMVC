import { connect } from 'react-redux';
import * as React from 'react';
import { toggleTodo } from '../actions';
import { TodoListType } from '../reducers/todo';
import { FilterValues } from '../reducers/filter';
import TodoList from '../components/TodoList';

const getVisibleTodos = (allTodos: TodoListType, filter: FilterValues) => {
    switch (filter) {
        case FilterValues.ALL:
            return allTodos;
        case FilterValues.ACTIVE:
            return allTodos.filter(todo => !todo.completed);
        case FilterValues.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        default:
            return allTodos;
    }
};

const mapStateToProps = (completeState: {
    todoList: TodoListType,
    filter: FilterValues
}) => ({
    list: getVisibleTodos(completeState.todoList, completeState.filter)
});
