import * as React from 'react';
import Todo from './Todo';
import * as State from '../states/TodoState';

export interface TodoListProps {
    todos: State.Todos;
    onTodoClick: (id: number) => void;
}

export default class TodoList extends React.PureComponent<TodoListProps, {}> {
    render() {
        const { todos, onTodoClick } = this.props;
        return <ul>{todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />)}</ul>;
    }
}
