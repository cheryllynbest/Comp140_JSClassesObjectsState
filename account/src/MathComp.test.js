import React from 'react';
import ReactDOM from 'react-dom';
import MathComp from './Components/MathComp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MathComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});