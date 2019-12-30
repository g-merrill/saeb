import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders variety of smoups link', ()=> {
    const renderedApp = render(<Router><App /></Router>);
    const linkElement = renderedApp.getByText('variety of smoups');
    expect(linkElement).toBeInTheDocument();
  });
  it('renders logo', async () => {
    const renderedApp = render(<Router><App /></Router>);
    const logoElement = renderedApp.getByAltText('saeb logo');
    expect(logoElement).toBeInTheDocument();
  });
});
