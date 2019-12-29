import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders variety of smoups link', () => {
  const { getByText } = render(<Router><App /></Router>);
  const linkElement = getByText(/variety of smoups/i);
  expect(linkElement).toBeInTheDocument();
});
