import * as React from 'react';
import TodoList from './containers/TodoList';
import AddTodoButton from './containers/AddTodoButton';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <AddTodoButton />
      <TodoList />
      <Footer />
    </div>
  );
}
