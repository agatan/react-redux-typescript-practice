import * as React from 'react';

interface TodoProps {
    completed: boolean;
    text: string;
    onClick: () => void;
}

export default class Todo extends React.PureComponent<TodoProps, {}> {
    render() {
        const { completed, text, onClick } = this.props;
        return (
            <li
                onClick={onClick}
                style={{ textDecoration: completed ? 'line-through' : 'none' }}
            >
                {text}
            </li>
        );
    }
}
