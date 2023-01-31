import React from 'react';
import NotesList from './NotesList';
import Header from './Header';
import AddNew from './AddNew/AddNew';

import useAppContext from '../../hook/useAppContext';

function Notes() {
  const { notesData } = useAppContext();

  return (
    <div className="notes">
      <Header />
      <NotesList notesData={notesData} />
      <AddNew />
    </div>
  );
}

export default Notes;
