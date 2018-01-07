import { Todos } from './TodoState';
import VisibilityState from './VisibilityState';

export interface RootState {
    todos: Todos;
    visibilityFilter: VisibilityState;
}
