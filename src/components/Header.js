import React from 'react';
import { useHistory } from 'react-router-dom';
import './css/Header.scss';

const Header = () => {
  const history = useHistory();
  const handleLogoClick = () => {
    history.push('/saeb');
  };
  return (
    <header className='Header' >
      <img 
        className='logo' 
        src='https://i.imgur.com/Fc1iS9H.png' 
        alt='saeb logo'
        onClick={handleLogoClick}
      />
      <div className='titles-ctnr'>
        <h1 className='site-title'>Sunday Assembly East Bay</h1>
        <h4 className='site-subtitle'>A Secular Community</h4>
      </div>
    </header>
)};

export default Header;