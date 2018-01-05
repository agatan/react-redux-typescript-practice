import * as React from 'react';
import * as enzyme from 'enzyme';
import Todo from './Todo';
import TodoList from './TodoList';

import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

it('renders 2 todos', () => {
    const dummyCb = (id: number) => { return; };
    const todos = [
        { id: 0, text: 'Hello', completed: true },
        { id: 1, text: 'World', completed: true },
    ];
    const hello = enzyme.shallow(
        <TodoList
            todos={todos}
            onTodoClick={dummyCb}
        />
    );
    expect(hello.find(Todo)).toHaveLength(2);
});
