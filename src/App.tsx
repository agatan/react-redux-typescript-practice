import * as React from 'react';
import VisibleTodoList from './containers/VisibleTodoList';
import AddTodoButton from './containers/AddTodoButton';
import Footer from './components/Footer';

export default function App() {
    return (
        <div>
            <AddTodoButton />
            <VisibleTodoList />
            <Footer />
        </div>
    );
}
