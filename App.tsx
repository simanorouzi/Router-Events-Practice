import * as React from 'react';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/main';
import Home from './components/home';
import Events from './components/events';
import EventDetail from './components/eventDetail';
import EditEvent from './components/editEvent';
import NewEvent from './components/newEvent';
import EventLayout from './components/eventLayout';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
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
