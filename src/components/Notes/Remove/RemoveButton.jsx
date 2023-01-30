import React from 'react';

function RemoveButton({removeNote}) {
  return (
    <button
        type="button"
        onClick={removeNote}
        className="_button _button-close"
        title="Remove Note"
      ></button>
  );
}

export default RemoveButton;
