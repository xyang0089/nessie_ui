import React from 'react';
import logoImage from '../../../static/logo.png'; // Import your logo image

import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img src={logoImage} alt="Logo" className={classes.logoImage} />
      </div>
      <div className={classes.buttons}>
        <button className={classes.loginButton}>Login</button>
        <button className={classes.examplesButton}>Examples</button>
        <button className={classes.homeButton}>Home</button>
        <button className={classes.gettingStartedButton}>Getting Started</button>
        <button className={classes.docsButton}>Docs</button>
      </div>
    </div>
  );
};

export default Header;
