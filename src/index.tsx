import * as React from 'react';
import { render } from 'react-dom';

interface HelloProps {
    compiler: string;
    framework: string;
}

const Hello = ({ compiler, framework }: HelloProps) => (
    <h1>Hello from {compiler} and {framework}</h1>
);

render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById('root'),
);
