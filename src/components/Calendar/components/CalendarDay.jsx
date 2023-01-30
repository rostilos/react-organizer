import React from 'react';
import { fetchNotesList } from '../../../api/fetchNotesList/fetchNotesList';

function CalendarDay({ num, id }) {
  const fetchNotesByDay = () => {
    console.log(fetchNotesList(id));
  };

  return (
    <button
      type="button"
      onClick={() => fetchNotesByDay(id)}
      id={id}
      class="cal-day"
    >
      {num}
    </button>
  );
}

export default CalendarDay;
