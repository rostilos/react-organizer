import React from 'react';

function Edit({ setShowEditForm }) {
  return (
    <button
      type="button"
      onClick={() => setShowEditForm(true)}
      className="_button edit-content__button"
    ></button>
  );
}

export default Edit;
