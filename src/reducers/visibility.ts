import { VisibilityAction, VisibilityActionType } from '../actions/index';
import VisibilityState, { VisibilityFilter } from '../states/VisibilityState';

const initialState: VisibilityState = {
    filter: VisibilityFilter.ShowAll,
};

const visibilityFilter = (state = initialState, action: VisibilityAction) => {
    switch (action.type) {
        case VisibilityActionType.SET_VISIBILITY_FILTER:
            return { filter: action.filter };
        default:
            return state;
    }
};

export default visibilityFilter;
