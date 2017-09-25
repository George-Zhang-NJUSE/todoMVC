import * as React from 'react';
import { TodoListType } from '../reducers/todo';
import Todo from './Todo';
import './TodoList.css';

type TodoListPropsType = {
    visibleList: TodoListType,
    handleToggle: (id: number) => void,
    handleDelete: (id: number) => void
};

export default function TodoList({ visibleList, handleToggle, handleDelete }: TodoListPropsType) {
    return (
        <ul className="todo-list" style={visibleList.length > 0 ? {} : { display: 'none' }}>
            {visibleList.map(todoItem => (
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
