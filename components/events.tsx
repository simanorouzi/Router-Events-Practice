import * as React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import classess from './events.module.css';

const DummyEvents = [
  { id: '1', title: 'Event1' },
  { id: '2', title: 'Event2' },
  { id: '3', title: 'Event3' },
  { id: '4', title: 'Event4' },
];
const Events = () => {
  const navigate=useNavigate();

  const newEventHandler=()=>{
    navigate('new');  
  }

  return (
    <React.Fragment>
      <h1>this is events page</h1>
      {DummyEvents.map((item) => (
        <Link to={item.id} className={classess.links}>
          {item.title}
        </Link>
      ))}
        <button onClick={newEventHandler}>New Event</button>

    </React.Fragment>
  );
};

export default Events;
