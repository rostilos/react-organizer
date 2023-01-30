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
    <div className="toolbar-actions__item">
      <button
        type="button"
        onClick={prevMonth}
        className="toolbar-item__arrow toolbar-item__arrow--left"
      ></button>
      <div className="toolbar-actions__name">{currentMonthName}</div>
      <button
        type="button"
        onClick={nextMonth}
        className="toolbar-item__arrow toolbar-item__arrow--right"
      ></button>
    </div>
  );
}

export default Months;
