import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Nav.module.scss'

const Nav = () => {
  return(
    <ul className={classes.nav}>
      <li className={classes.navItem}>
        <NavLink
          to="/feeds"
          activeClassName={classes.isActive}
        >Feeds</NavLink>
      </li>
      <li className={classes.navItem}>
        <NavLink
          to="/expander"
          activeClassName={classes.isActive}
        >Expander</NavLink>
      </li>
      <li className={classes.navItem}>
        <NavLink
          to="/filterable"
          activeClassName={classes.isActive}
        >Filterable</NavLink>
      </li>
    </ul>
  );
}

export default Nav;