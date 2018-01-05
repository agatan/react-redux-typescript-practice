import { connect, Dispatch } from 'react-redux';
import { toggleTodo, TodoAction } from '../actions/index';
import TodoList from '../components/TodoList';
import { Todos } from '../states/TodoState';

function mapStateToProps(state: Todos) {
    return {
        todos: state,
    };
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>) {
    return {
        onTodoClick: (id: number) => {
            dispatch(toggleTodo(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
