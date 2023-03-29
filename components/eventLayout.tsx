import * as React from 'react';
import { Outlet } from 'react-router-dom';
import EventNavigation from './eventNavigation';

const EventLayout = () => {
  return (
    <React.Fragment>
      <EventNavigation />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default EventLayout;
