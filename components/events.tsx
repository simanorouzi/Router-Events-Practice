import * as React from 'react';
import { Link, useNavigate, json, useLoaderData } from 'react-router-dom';
import classess from './events.module.css';

const Events = () => {
  const navigate = useNavigate();
  const events = useLoaderData();
  const data = Object.entries(events).map(([key, value]) => {
    return { id: key, title: value.title };
  });
  const newEventHandler = () => {
    navigate('new');
  };

  return (
    <React.Fragment>
      <h1>this is events page</h1>
      {data.map((item) => (
        <Link to={item.id} className={classess.links}>
          {item.title}
        </Link>
      ))}
      <button onClick={newEventHandler}>New Event</button>
    </React.Fragment>
  );
};

export default Events;

export const loader = async () => {
  const response = await fetch(
    'https://foodorder-35902-default-rtdb.europe-west1.firebasedatabase.app/Events.json'
  );

  if (!response.ok) {
    console.log(response);
    throw json({ message: 'somethings went worng' }, { status: 500 });
  }

  return response;
};
