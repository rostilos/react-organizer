import React from 'react';
import Calendar from '../components/Calendar/components/Calendar';
import Notes from '../components/Notes/Notes';
import useAppContext from '../hook/useAppContext';

function Main() {
  const { showNotesContent, setShowNotesContent } = useAppContext();
  return (
    <div className="page">
      <div
        className={`page__container _container ${
          showNotesContent ? 'burger-active' : ''
        }`}
      >
        <div className={`page__sidebar ${showNotesContent ? 'active' : ''}`}>
          <Notes />
        </div>
        <div className="page__main">
          <button
            onClick={() => setShowNotesContent(true)}
            className="page__burger-icon"
          ></button>
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default Main;
