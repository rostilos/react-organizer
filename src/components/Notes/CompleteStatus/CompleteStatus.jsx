import React from 'react';

function CompleteStatus({ status }) {
  return (
    <p className='complete'>
      <span>Complete status :</span>{' '}
      <span className='complete__info'>
        {status ? 'Complete' : 'Not complete'}
        <span
          className={`complete__status ${status ? 'active' : 'not-active'}`}
        ></span>
      </span>
    </p>
  );
}

export default CompleteStatus;
