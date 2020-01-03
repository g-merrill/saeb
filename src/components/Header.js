import React from 'react';
import { useHistory } from 'react-router-dom';
import './css/Header.scss';

const Header = () => {
  const history = useHistory();
  const handleHeaderClick = () => {
    history.push('/saeb');
  };
  return (
    <header onClick={handleHeaderClick} className='Header' >
      <img 
        className='logo' 
        src='https://i.imgur.com/77VuBTQ.png' 
        alt='saeb logo' 
      />
      <h1 className='site-title'>Sunday Assembly East Bay</h1>
      <h4 className='site-subtitle'>A Secular Community</h4>
    </header>
)};

export default Header;