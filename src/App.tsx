import * as React from 'react';
import TodoList from './containers/TodoList';
import AddTodoButton from './containers/AddTodoButton';

export default function App() {
    return (
        <div>
            <AddTodoButton />
            <TodoList />
        </div>
    );
};
