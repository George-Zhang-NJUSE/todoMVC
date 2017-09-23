import * as React from 'react';
import './App.css';
import AddTodo from '../containers/AddTodo';
import TodoListContainer from '../containers/TodoListContainer';
import FooterContainer from '../containers/FooterContainer';

function App() {
    return (
        <div>
            <header>todos</header> 
            <div className="app">                 
                <AddTodo />
                <TodoListContainer />
                <FooterContainer />
            </div>
        </div>    
    );
}

export default App;
