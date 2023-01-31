import React from 'react';
import { fetchAllNotes } from '../../../api/notes/fetchNotesList';
import useAppContext from '../../../hook/useAppContext';

function ShowAll() {
  const { setNotesData, setShowAllNotes } = useAppContext();

  const fetchAllNotesRequest = async () => {
    const data = await fetchAllNotes().then((data) => {
      return data;
    });
    setNotesData(data);
    setShowAllNotes(true);
  };
  return (
    <div className="notes__show-all show-all">
      <button
        type="button"
        onClick={fetchAllNotesRequest}
        title="Show All Notes"
        className="_button show-all__button"
      >
        Show All
      </button>
    </div>
  );
}

export default ShowAll;
