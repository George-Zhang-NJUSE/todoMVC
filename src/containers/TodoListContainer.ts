import { connect, Dispatch } from 'react-redux';
import { toggleTodo, deleteTodo, ActionType } from '../actions';
import { TodoListType } from '../reducers/todo';
import { FilterValues } from '../reducers/filter';
import { Store } from '../reducers/mainReducer';
import TodoList from '../components/TodoList';

const getVisibleTodos = (allTodos: TodoListType, filter: FilterValues) => {
    switch (filter) {
        case FilterValues.ALL:
            return allTodos;
        case FilterValues.ACTIVE:
            return allTodos.filter(todo => !todo.completed);
        case FilterValues.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        default:
            return allTodos;
    }
};

const mapStateToProps = (completeState: Store) => ({
    visibleList: getVisibleTodos(completeState.todoList, completeState.filter),
});

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
    handleToggle: (id: number) => {
        dispatch(toggleTodo(id));
    },
    handleDelete: (id: number) => {
        dispatch(deleteTodo(id));
    }
});

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
