import React from 'react';

function Edit({ setShowEditForm }) {
  return (
    <button
      type="button"
      onClick={() => setShowEditForm(true)}
      className="_button edit-content__button"
      title="Edit Note"
    ></button>
  );
}

export default Edit;
