import React from 'react';
import { useEffect } from 'react';
import { fetchNotesList } from '../../../api/notes/fetchNotesList';
import useAppContext from '../../../hook/useAppContext';

function CalendarDay({ num, id, className }) {
  const { setNotesData, setSelectedDate, selectedDate, setShowNotesContent } = useAppContext();

  const fetchNotesByDay = async () => {
    const data = await fetchNotesList(id).then((data) => {
      return data;
    });
    setNotesData(data);

  };
  const handleClick = () => {
    setSelectedDate(id);
  };
  useEffect(() => {
    if(selectedDate === id){
      fetchNotesByDay(id);
      setShowNotesContent(true);
    }
  }, [selectedDate]);

  return (
    <button
      type="button"
      onClick={handleClick}
      id={id}
      data-active={selectedDate === id}
      className={className ? className : 'cal-day'}
    >
      {num}
    </button>
  );
}

export default CalendarDay;
