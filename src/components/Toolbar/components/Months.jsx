import React from 'react';
import useAppContext from '../../../hook/useAppContext';

function Months({ currentMonthName }) {
  const { setCurrentMonth, currentMonthNum } = useAppContext();

  const nextMonth = () => {
    setCurrentMonth(currentMonthNum + 1);
  };
  const prevMonth = () => {
    setCurrentMonth(currentMonthNum - 1);
  };
  return (
    <div className="toolbar-actions__months">
      <button
        type="button"
        onClick={prevMonth}
        className="toolbar-moths__arrow toolbar-moths__arrow--left"
      >
        {'<'}
      </button>
      {currentMonthName}
      <button
        type="button"
        onClick={nextMonth}
        className="toolbar-moths__arrow toolbar-moths__arrow--right"
      >
        {'>'}
      </button>
    </div>
  );
}

export default Months;
