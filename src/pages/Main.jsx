import React from 'react';
import Calendar from '../components/Calendar/components/Calendar';
import Notes from '../components/Notes/Notes';

function Main() {
  return (
    <div className="page">
      <div className="page__container _container">
        <div className="page__sidebar">
          <Notes />
        </div>
        <div className="page__main">
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default Main;
