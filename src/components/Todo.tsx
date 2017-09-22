import * as React from 'react';
import { TodoItemType } from '../reducers/todo';

type ToggleHandlerType = {
    onToggle: (id: number) => void,
    onDelete: (id: number) => void
};

type TodoPropsType = TodoItemType & ToggleHandlerType;

export default function Todo({ id, text, completed, onToggle, onDelete }: TodoPropsType) {
    return (
        <li>
            <input type="checkbox" defaultChecked={completed} onClick={() => onToggle(id)} />
            <label>{text}</label>
            <button onClick={() => onDelete(id)}>X</button>
        </li>
    );
}