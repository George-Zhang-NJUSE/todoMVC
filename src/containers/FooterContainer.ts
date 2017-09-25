import { connect, Dispatch } from 'react-redux';
import { Store } from '../reducers/mainReducer';
import { FilterValues } from '../reducers/filter';
import { setFilter, clearCompleted, ActionType } from '../actions';
import Footer from '../components/Footer';

const mapStateToProps = (completeState: Store) => ({
    unfinishedItemNum: completeState.todoList.filter(item => !item.completed).length,
    filter: completeState.filter,
    hasCompletedItems: !!completeState.todoList.find(item => item.completed),
    hasData: completeState.todoList.length > 0
});

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
    onSetFilter: (filter: FilterValues) => {
        dispatch(setFilter(filter));
    },
    onClearCompleted: () => {
        dispatch(clearCompleted());
    }
});

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default FooterContainer;
