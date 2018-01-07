import * as React from 'react';
import * as enzyme from 'enzyme';
import AddTodoButton from './AddTodoButton';

import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

it('submit input value', () => {
    const dummyCb = (s: string) => {
        return;
    };
    const wrapper = enzyme.shallow(<AddTodoButton onSubmit={dummyCb} />);
    wrapper.setState({ input: 'Hello' });
    expect(wrapper.find('input').prop('value')).toBe('Hello');
});
