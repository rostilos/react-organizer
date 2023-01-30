import React, { useState } from 'react';
import useAppContext from '../../../hook/useAppContext';
import { addNoteToSpecificDate } from '../../../api/notes/addNoteToSpecificDate';
import { fetchNotesList } from '../../../api/notes/fetchNotesList';

function AddNewForm({ setShowForm }) {
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
    <form onSubmit={handleSubmit} className="add-new-note__form _form">
      <button
        type="button"
        onClick={closeForm}
        className="_form__close _button"
      ></button>
      <p>Title</p>
      <input ref={titleRef} type="text" className="_form__input" />
      <p>Text</p>
      <textarea ref={contentRef} type="text" className="_form__input" />
      <button type="submit" className="_form__button _button">
        Add
      </button>
    </form>
  );
}

export default AddNewForm;
