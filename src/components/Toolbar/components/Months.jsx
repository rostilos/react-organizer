import React from 'react';
import useAppContext from '../../../hook/useAppContext';

function Months({ currentMonthName }) {
  const { setCurrentMonth, currentMonthNum, setCurrentYear, currentYear } =
    useAppContext();

  const nextMonth = () => {
    if (currentMonthNum < 11) {
      setCurrentMonth(currentMonthNum + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    }
  };
  const prevMonth = () => {
    if(currentMonthNum > 0){
      setCurrentMonth(currentMonthNum - 1);
    }else{
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    }
  };
  return (
    <div className="toolbar-actions__item">
      <button
        type="button"
        onClick={prevMonth}
        title="Previous Month"
        className="toolbar-item__arrow toolbar-item__arrow--left"
      ></button>
      <div className="toolbar-actions__name">{currentMonthName}</div>
      <button
        type="button"
        onClick={nextMonth}
        title="Next Month"
        className="toolbar-item__arrow toolbar-item__arrow--right"
      ></button>
    </div>
  );
}

export default Months;
