import * as React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './mainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header>
      <nav className={classes.navigation}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          Home
        </NavLink>
        |
        <NavLink
          to="events"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          Events
        </NavLink>
        <NavLink
          to="events/new"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          New Event
        </NavLink>
        |
      </nav>
    </header>
  );
};

export default MainNavigation;
