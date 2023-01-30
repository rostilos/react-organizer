import React from 'react';
import useAppContext from '../../../hook/useAppContext';

function Years() {
  const { setCurrentYear, currentYear } = useAppContext();

  const nextYear = () => {
    setCurrentYear(currentYear + 1);
  };
  const prevYear = () => {
    setCurrentYear(currentYear - 1);
  };

  return (
    <div className="toolbar-actions__months">
      <button
        type="button"
        onClick={prevYear}
        className="toolbar-moths__arrow toolbar-moths__arrow--left"
      >
        {'<'}
      </button>
      {currentYear}
      <button
        type="button"
        onClick={nextYear}
        className="toolbar-moths__arrow toolbar-moths__arrow--right"
      >
        {'>'}
      </button>
    </div>
  );
}

export default Years;
