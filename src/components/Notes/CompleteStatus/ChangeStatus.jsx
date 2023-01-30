import React from 'react';

function ChangeStatus({ changeStatusRequest }) {
  return (
    <button
      type="button"
      onClick={changeStatusRequest}
      className="_button change-status__button"
      title="Change complete status"
    ></button>
  );
}

export default ChangeStatus;
