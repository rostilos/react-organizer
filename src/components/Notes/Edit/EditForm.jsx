import React from 'react';
import useAppContext from '../../../hook/useAppContext';

function EditForm({ setShowEditForm, data, changeNoteContentRequest }) {
  const { selectedDate } = useAppContext();

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
    closeForm();
  };
  const closeForm = () => {
    setShowEditForm(false);
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
        required
        type="text"
        className="_form__input"
        defaultValue={data.title}
      />
      <p>Text</p>
      <textarea
        ref={contentRef}
        required
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
