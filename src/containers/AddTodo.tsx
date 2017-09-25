import { connect, DispatchProp, Dispatch } from 'react-redux';
import * as React from 'react';
import { addTodo, ActionType } from '../actions';
import './AddTodo.css';

// 只输出，不接受redux输入
const content = ({ dispatch }: DispatchProp<ActionType>) => {
    let input: HTMLInputElement;
    return (
        <div>
            <form
                className="add-todo"
                onSubmit={e => {
                    e.preventDefault();
                    let text: string = input.value.trim();
                    if (!text) {
                        return;
                    }
                    (dispatch as Dispatch<ActionType>)(addTodo(text));
                    input.value = '';
                }}
            >
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    ref={inputNode => { input = (inputNode as HTMLInputElement); }}
                />
                <button type="submit">ADD</button>
            </form>
        </div>
    );
};

const AddTodo = connect()(content);

export default AddTodo;