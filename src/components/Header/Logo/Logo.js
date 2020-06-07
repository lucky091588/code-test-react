import React from 'react';

import logoImage from '../../../logo.svg';
import classes from './Logo.module.scss';

const logo = () => {
  return(
    <div className={classes.logo}>
      <a href="/">
        <img src={logoImage} alt="Site Logo" />
      </a>
    </div>
  );
}

export default logo;