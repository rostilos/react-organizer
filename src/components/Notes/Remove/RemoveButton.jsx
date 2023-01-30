import React from 'react';

function RemoveButton({removeNote}) {
  return (
    <button
        type="button"
        onClick={removeNote}
        className="_button _button-close"
      ></button>
  );
}

export default RemoveButton;
