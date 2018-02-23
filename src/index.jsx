import React from 'react';
import { render } from 'react-dom';
import TestComponent from './component.jsx';

render(
    <TestComponent />,
    document.querySelector('#react-app')
);