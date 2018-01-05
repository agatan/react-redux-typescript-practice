import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import todos from './todos';
import { TodoActionType } from '../actions/index';

enzyme.configure({ adapter: new Adapter() });

it('adds a new TODO when ADD_TODO action is reached', () => {
  const base = [
    { id: 0, text: 'Hello', completed: false },
  ];
  const nextState = todos(base, {
    type: TodoActionType.ADD_TODO,
    id: 1,
    text: 'Thank you',
  });

  expect(nextState).toEqual([
    ...base,
    { id: 1, text: 'Thank you', completed: false },
  ]);
});
