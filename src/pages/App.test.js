import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  const renderApp = () => {
    return render(
      <Router>
        <Route render={props => <App {...props} />} />
      </Router>
    )
  };
  it('renders variety of smoups link', ()=> {
    const renderedApp = renderApp();
    const linkElement = renderedApp.getByText('variety of smoups');
    expect(linkElement).toBeInTheDocument();
  });
  it('renders logo', async () => {
    const renderedApp = renderApp();
    const logoElement = renderedApp.getByAltText('saeb logo');
    expect(logoElement).toBeInTheDocument();
  });
});
