import * as React from 'react';
import { TodoItemType } from '../reducers/todo';
import './Todo.css';

type ToggleHandlerType = {
    onToggle: (id: number) => void,
    onDelete: (id: number) => void
};

type TodoPropsType = TodoItemType & ToggleHandlerType;

export default function Todo({ id, text, completed, onToggle, onDelete }: TodoPropsType) {
    return (
        <li className="todo-item">
            <input type="checkbox" className="check" defaultChecked={completed} onClick={() => onToggle(id)} />
            <label className={'text' + (completed ? ' completed' : '')} >{text}</label>
            <button className="delete" onClick={() => onDelete(id)}>X</button>
        </li>
    );
}