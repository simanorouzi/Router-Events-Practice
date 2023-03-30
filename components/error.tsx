import * as React from 'react';
import MainNavigation from './mainNavigation';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  let errorHandle = {
    title: '404',
    message: 'Page has not found!',
  };
  const error = useRouteError();
  if (error.status === 500) {
    errorHandle.title = '500';
    errorHandle.message = error.data.message;
  }
  return (
    <React.Fragment>
      <MainNavigation />
      <h1>{errorHandle.title}</h1>
      <p>{errorHandle.message}</p>
    </React.Fragment>
  );
};

export default Error;
