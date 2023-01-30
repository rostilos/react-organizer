import React from 'react';
import NotesItem from './NotesItem';

function NotesList({ notesData }) {
  if (!notesData.length) {
    return (
      <div className="notes__content">
        <div className="notes-item note">
          <p>No data by this date</p>
        </div>
      </div>
    );
  }
  return (
    <div className="notes__content">
      {notesData.map((data) => (
        <NotesItem data={data} />
      ))}
    </div>
  );
}

export default NotesList;
