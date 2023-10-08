import React from 'react';
import logoImage from '../../static/logo.png'; // Import your logo image

import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='logo'>
        <img src={logoImage} alt="Logo"/>
      </div>
      <div className='buttons'>
      <button className='home'>Home</button>
      <button className='gettingStarted'>Getting Started</button>
      <button className='examples'>Examples</button>
      <button className='docs'>Docs</button>
      <button className='login'>Login</button>
      </div>
    </div>
  );
};

export default Header;
