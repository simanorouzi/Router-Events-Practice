import * as React from 'react';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/main';
import Home from './components/home';
import Events, { loader as eventLoader } from './components/events';
import EventDetail from './components/eventDetail';
import EditEvent from './components/editEvent';
import NewEvent from './components/newEvent';
import EventLayout from './components/eventLayout';
import ErrorPage from './components/error';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'events',
          element: <EventLayout />,
          children: [
            {
              index: true,
              element: <Events />,
              loader: eventLoader,
            },
            {
              path: ':eventId',
              element: <EventDetail />,
            },
            {
              path: ':eventId/edit',
              element: <EditEvent />,
            },
            {
              path: 'new',
              element: <NewEvent />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
