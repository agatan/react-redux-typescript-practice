import { connect, Dispatch } from 'react-redux';
import { toggleTodo, TodoAction } from '../actions/index';
import TodoList from '../components/TodoList';
import { RootState } from '../states/index';
import { Todos } from '../states/TodoState';
import { VisibilityFilter } from '../states/VisibilityState';

const getVisibleTodos = (todos: Todos, filter: VisibilityFilter) => {
    switch (filter) {
        case VisibilityFilter.ShowActive:
            return todos.filter(t => !t.completed);
        case VisibilityFilter.ShowCompleted:
            return todos.filter(t => t.completed);
        case VisibilityFilter.ShowAll:
        default:
            return todos;
    }
};

function mapStateToProps(state: RootState) {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter.filter),
    };
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>) {
    return {
        onTodoClick: (id: number) => {
            dispatch(toggleTodo(id));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
