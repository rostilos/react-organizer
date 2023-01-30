import React from 'react';

function AddIcon({ setShowForm }) {
  const displayForm = () => {
    setShowForm(true);
  };
  return (
    <button
      type="button"
      title="Add New Note to current date"
      className="add-new-note__icon"
      onClick={displayForm}
    >
      +
    </button>
  );
}

export default AddIcon;
