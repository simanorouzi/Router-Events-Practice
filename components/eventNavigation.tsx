import * as React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './eventNavigation.module.css';

const EventNavigation = () => {
  return (
    <React.Fragment>
      <ul className={classes['event-navigation']}>
        <li>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="new"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            New Events
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default EventNavigation;
