import { Todos } from '../states/TodoState';
import { TodoActionType, TodoAction } from '../actions/index';

const initialState: Todos = [];

export default function todos(state: Todos = initialState, action: TodoAction): Todos {
    switch (action.type) {
    case TodoActionType.ADD_TODO:
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false,
            }
        ];
    case TodoActionType.TOGGLE_TODO:
        return state.map(todo =>
            (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo
        );
    default:
        return state;
    }
}
