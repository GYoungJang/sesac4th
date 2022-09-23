import React from 'react';
import ReactDOM from 'react-dom/client';
import StateClass from './StateClass';
import StateFunction from './StateFunction';
import Event from './Event';
import EventClass from './EventClass';
import Handler_ex from './ex/Handler_ex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateClass name='Sesac'/>
    <StateFunction/>
    <Event></Event>
    <EventClass></EventClass>
    <Handler_ex></Handler_ex>
  </React.StrictMode>
);
