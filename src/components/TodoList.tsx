import * as React from 'react';
import { TodoListType } from '../reducers/todo';
import Todo from './Todo';
import './TodoList.css';

type TodoListPropsType = {
    list: TodoListType,
    handleToggle: (id: number) => void,
    handleDelete: (id: number) => void
};

export default function TodoList({ list, handleToggle, handleDelete }: TodoListPropsType) {
    return (
        <ul className="todo-list">
            {list.map(todoItem => (
                <Todo    
                    key={todoItem.id}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                    {...todoItem}
                />
            ))}
        </ul>
    );
}
