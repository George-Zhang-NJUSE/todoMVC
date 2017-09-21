import { Action } from '../actions';

const todoItem = (state = {
    id: 0, text: '', completed: false
}, action: Action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (action.id !== state.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const todoList = (state = [], action: Action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, todoItem(undefined, action)];
        case 'DELETE_TODO':
            return state.filter((item) => item.id !== action.id);
        case 'TOGGLE_TODO':
            return state.map((item) => todoItem(item, action));
        default:
            return state;
    }
};

export default todoList;