import React, { useState } from 'react';
import RemoveButton from './Remove/RemoveButton';
import { removeNote } from '../../api/notes/removeNote';
import { editNoteContent } from '../../api/notes/editNoteContent';
import useAppContext from '../../hook/useAppContext';
import { fetchNotesList } from '../../api/notes/fetchNotesList';
import CompleteStatus from './CompleteStatus/CompleteStatus';
import ChangeStatus from './CompleteStatus/ChangeStatus';
import Edit from './Edit/Edit';
import EditForm from './Edit/EditForm';

function NotesItem({ data }) {
  const { setNotesData, selectedDate } = useAppContext();
  const [showEditForm, setShowEditForm] = useState(false);

  const removeNoteRequest = async () => {
    await removeNote(data.id).then(() => reloadNotesSection());
  };
  const changeStatusRequest = async () => {
    await editNoteContent({ ...data, complete: !data.complete }).then(() =>
      reloadNotesSection()
    );
  };

  const changeNoteContentRequest = async (data) => {
    await editNoteContent(data).then(() => reloadNotesSection());
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
      <ChangeStatus
        changeStatusRequest={changeStatusRequest}
        status={data.complete}
      />
      <Edit setShowEditForm={setShowEditForm} />
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
        <CompleteStatus status={data.complete} />
      </div>
      {showEditForm && (
        <EditForm
          changeNoteContentRequest={changeNoteContentRequest}
          setShowEditForm={setShowEditForm}
          data={data}
        />
      )}
    </div>
  );
}

export default NotesItem;
