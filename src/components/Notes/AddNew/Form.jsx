import React, { useState } from 'react';
import useAppContext from '../../../hook/useAppContext';
import { addNoteToSpecificDate } from '../../../api/notes/addNoteToSpecificDate';
import { fetchNotesList } from '../../../api/notes/fetchNotesList';

function Form({ setShowForm }) {
  const { selectedDate, setNotesData } = useAppContext();

  const titleRef = React.useRef();
  const contentRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      date: selectedDate,
      title: titleRef.current.value,
      content: contentRef.current.value,
      complete: false,
    };
    addNewNoteRequest(data);
  };

  const addNewNoteRequest = (formData) => {
    addNoteToSpecificDate(formData);
    reloadNotesSection();
  };
  const reloadNotesSection = async () => {
    const data = await fetchNotesList(selectedDate).then((data) => {
      return data;
    });
    setNotesData(data);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <form onSubmit={handleSubmit} className="add-new-note__form add-form">
      <button
        type="button"
        onClick={closeForm}
        className="add-form__close _button"
      ></button>
      <p>Title</p>
      <input ref={titleRef} type="text" className="add-form__input" />
      <p>Text</p>
      <textarea ref={contentRef} type="text" className="add-form__input" />
      <button type="submit" className="add-form__button _button">
        Add
      </button>
    </form>
  );
}

export default Form;
