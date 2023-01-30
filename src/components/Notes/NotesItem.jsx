import React from 'react';
import RemoveButton from './Remove/RemoveButton';
import { removeNote } from '../../api/notes/removeNote';
import useAppContext from '../../hook/useAppContext';
import { fetchNotesList } from '../../api/notes/fetchNotesList';

function NotesItem({ data }) {
  const { setNotesData, selectedDate } = useAppContext();

  const removeNoteRequest = async () => {
    await removeNote(data.id).then(() => reloadNotesSection());
  };

  const reloadNotesSection = async () => {
    const data = await fetchNotesList(selectedDate).then((data) => {
      return data;
    });
    setNotesData(data);
  };

  return (
    <div className="notes-item note">
      <RemoveButton removeNote={removeNoteRequest} />
      <div className="note__header">
        <p>
          <span>{data.id} </span>
          <span>{data.title}</span>{' '}
        </p>
      </div>
      <div className="note__content">
        <p>
          <span>To Do: </span> <span>{data.content}</span>
        </p>

        <p>
          <span>Complete status:</span> <span>{data.complete}</span>
        </p>
      </div>
    </div>
  );
}

export default NotesItem;
