import { FilterValues } from './reducers/filter';

let nextTodoId = 0;

export const addTodo = (text: string) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

export const deleteTodo = (id: number) => ({
    type: 'DELETE_TODO',
    id
});

export const toggleTodo = (id: number) => ({
    type: 'TOGGLE_TODO',
    id
});

export const setFilter = (filter: FilterValues) => ({
    type: 'SET_FILTER',
    filter
});

export const clearCompleted = () => ({
    type: 'CLEAR_COMPLETED'
});

export type ActionType = {
    type: string,
    id?: number,
    text?: string,
    filter?: string
};