import React from 'react';
import ReactDOM from 'react-dom/client';
import StateClass from './StateClass';
import StateFunction from './StateFunction';
import Event from './Event';
import EventClass from './EventClass';
import HandlerEx from './ex/HandlerEx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateClass name="Sesac" />
    <StateFunction />
    <Event></Event>
    <EventClass></EventClass>
    <HandlerEx></HandlerEx>
  </React.StrictMode>
);
