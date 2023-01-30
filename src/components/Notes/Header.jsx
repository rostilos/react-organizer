import React from 'react';
import useAppContext from '../../hook/useAppContext';

function Header() {
  const { setShowNotesContent } = useAppContext();

  return (
    <div className="notes__header">
      <h2>Notes</h2>
      <button
        type="button"
        onClick={() => setShowNotesContent(false)}
        className="notes__close-mobile-header _button _button-close"
      ></button>
    </div>
  );
}

export default Header;
