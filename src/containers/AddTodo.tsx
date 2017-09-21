import { connect } from 'react-redux';
import * as React from 'react';
import { addTodo } from '../actions';

const content = ({ dispatch }) => {
    let input: HTMLInputElement;
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    let text: string = input.value.trim();
                    if (!text) {
                        return;
                    }
                    dispatch(addTodo(text));
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