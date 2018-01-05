import * as React from 'react';
import * as enzyme from 'enzyme';
import Link from './Link';

import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

it('renders link as <a/> if not active', () => {
    const dummyCb = () => { return; };
    const wrapper = enzyme.shallow(
        <Link active={false} onClick={dummyCb}>
            Hello
        </Link>
    );

    expect(wrapper.find('a').text()).toEqual('Hello');
});

it('renders link as <span/> if active', () => {
    const dummyCb = () => { return; };
    const wrapper = enzyme.shallow(
        <Link active={true} onClick={dummyCb}>
            Hello
        </Link>
    );

    expect(wrapper.find('span').text()).toEqual('Hello');
});
