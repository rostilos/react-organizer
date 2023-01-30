import React, { useState } from 'react';
import useAppContext from '../../../hook/useAppContext';
import { addNoteToSpecificDate } from '../../../api/notes/addNoteToSpecificDate';
import { fetchNotesList } from '../../../api/notes/fetchNotesList';

function EditForm({ setShowForm, data, changeNoteContentRequest }) {
  const { selectedDate, setNotesData } = useAppContext();

  const titleRef = React.useRef();
  const contentRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    data = {
      id: data.id,
      date: selectedDate,
      title: titleRef.current.value,
      content: contentRef.current.value,
      complete: data.complete,
    };
    changeNoteContentRequest(data);
  };
  const handleChange = (e) => {

  }

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-note__form _form">
      <button
        type="button"
        onClick={closeForm}
        className="_form__close _button"
      ></button>
      <p>Title</p>
      <input
        ref={titleRef}
        type="text"
        className="_form__input"
        defaultValue={data.title}
      />
      <p>Text</p>
      <textarea
        ref={contentRef}
        type="text"
        className="_form__input"
        defaultValue={data.content}
      />
      <button type="submit" className="_form__button _button">
        Edit
      </button>
    </form>
  );
}

export default EditForm;
