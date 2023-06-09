import * as React from 'react';
import MainNavigation from './mainNavigation';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default Main;
