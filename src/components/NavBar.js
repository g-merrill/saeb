import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/NavBar.scss';

const NavBar = () => {
  const expandCollapseBurger = () => {
    document.querySelector('.NavLinkCtnr').classList.toggle('hidden');
  }

  const handleNavLinkClick = () => {
    document.querySelector('.NavLinkCtnr').classList.toggle('hidden');
  }
  return (
    <nav className='NavBar-small'>
      <div className="NavBar-small-burger-ctnr" onClick={expandCollapseBurger}>
        <div className='burger-icon'>
          <div className="burger-stripe"></div>
          <div className="burger-stripe"></div>
          <div className="burger-stripe"></div>
        </div>
        <h3>Menu</h3>
      </div>
      <div className="NavLinkCtnr hidden">
        <NavLink to='/saeb' className='NavLink' onClick={handleNavLinkClick}>Home</NavLink>
        <NavLink to='/saeb/about' className='NavLink' onClick={handleNavLinkClick}>About</NavLink>
        <NavLink to='/saeb/smoups' className='NavLink' onClick={handleNavLinkClick}>Smoups</NavLink>
        <NavLink to='/saeb/music' className='NavLink' onClick={handleNavLinkClick}>Music</NavLink>
        <NavLink to='/saeb/resources' className='NavLink' onClick={handleNavLinkClick}>Resources</NavLink>
        <NavLink to='/saeb/speakers' className='NavLink' onClick={handleNavLinkClick}>Past Speakers</NavLink>
        <NavLink to='/saeb/contact' className='NavLink' onClick={handleNavLinkClick}>Contact</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;