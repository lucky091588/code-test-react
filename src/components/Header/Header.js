import React from 'react';

import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import classes from './Header.module.scss';

const header = () => {
   return(
     <header className={classes.header}>
        <Logo />
        <Nav />
      </header>
   );
}

export default header;