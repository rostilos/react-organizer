import React from 'react';
import useAppContext from '../../hook/useAppContext';
import ShowAll from './ShowAll/ShowAll';

function Header() {
  const { setShowNotesContent, showAllNotes } = useAppContext();

  return (
    <div className="notes__header">
      <h2> {showAllNotes ? 'All Notes' : 'Notes by day'}</h2>
      <button
        type="button"
        onClick={() => setShowNotesContent(false)}
        title="Back to calendar"
        className="notes__close-mobile-header _button _button-close"
      ></button>
      <ShowAll />
    </div>
  );
}

export default Header;
