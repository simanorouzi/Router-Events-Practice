import * as React from 'react';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/main';
import Home from './components/home';
import Events from './components/events';
import EventDetail from './components/eventDetail';
import EditEvent from './components/editEvent';
import NewEvent from './components/newEvent';

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
          element: <Events />,
        },
        {
          path: 'events/:eventId',
          element: <EventDetail />,
        },
        {
          path: 'events/:eventId/edit',
          element: <EditEvent />,
        },
        {
          path: 'events/new',
          element: <NewEvent />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
