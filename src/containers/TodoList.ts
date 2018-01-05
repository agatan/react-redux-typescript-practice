import { connect, Dispatch } from 'react-redux';
import { toggleTodo, TodoAction } from '../actions/index';
import TodoList from '../components/TodoList';
import { RootState } from '../states/index';

function mapStateToProps(state: RootState) {
  return {
    todos: state.todos,
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
