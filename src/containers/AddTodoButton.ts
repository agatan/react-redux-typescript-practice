import { connect, Dispatch } from 'react-redux';
import { addTodo, TodoAction } from '../actions/index';
import { Todos } from '../states/TodoState';
import AddTodoButton from '../components/AddTodoButton';

function mapStateToProps(state: Todos) {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>) {
  return {
    onSubmit: (s: string) => {
      dispatch(addTodo(s));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoButton);
