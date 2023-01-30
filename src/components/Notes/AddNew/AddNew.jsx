import React, { useState } from 'react';
import AddIcon from './AddIcon';
import Form from './Form';

function AddNew() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div
      className={
        'note__add-new add-new-note ' +
        (showForm ? 'add-new-note--active' : 'add-new-note--not-active')
      }
    >
      {showForm && <Form setShowForm={setShowForm}/>}
      {!showForm && <AddIcon setShowForm={setShowForm} />}
    </div>
  );
}

export default AddNew;
