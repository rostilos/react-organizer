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
    <div className="toolbar-actions__item">
      <button
        type="button"
        onClick={prevYear}
        title="Previous Year"
        className="toolbar-item__arrow toolbar-item__arrow--left"
      >
        
      </button>
      <div className="toolbar-actions__name">{currentYear}</div>
      <button
        type="button"
        onClick={nextYear}
        title="Next Year"
        className="toolbar-item__arrow toolbar-item__arrow--right"
      >
      </button>
    </div>
  );
}

export default Years;
