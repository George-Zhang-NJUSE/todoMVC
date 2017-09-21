import { ActionType } from '../actions';

const filter = (state: FilterValues = FilterValues.ALL, action: ActionType) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.filter;
        default:
            return state;
    }
};

export default filter;
export enum FilterValues {
    ALL, ACTIVE, COMPLETED
}