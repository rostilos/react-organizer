import React from 'react';

function ChangeStatus({ changeStatusRequest }) {
  return (
    <button
      type="button"
      onClick={changeStatusRequest}
      className="_button change-status__button"
    ></button>
  );
}

export default ChangeStatus;
