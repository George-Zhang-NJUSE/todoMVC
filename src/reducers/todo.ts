import { ActionType } from '../actions';

const todoItem = (state: TodoItemType = {
    id: 0, text: '', completed: false
}, action: ActionType) => {
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

const todoList = (state: TodoListType = [], action: ActionType) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, todoItem(undefined, action)];
        case 'DELETE_TODO':
            return state.filter(item => item.id !== action.id);
        case 'TOGGLE_TODO':
            return state.map((item) => todoItem(item, action));
        case 'CLEAR_COMPLETED':
            return state.filter(item => !item.completed);
        default:
            return state;
    }
};

export default todoList;
export type TodoItemType = {
    id: number,
    text: string,
    completed: boolean
};
export type TodoListType = TodoItemType[];
