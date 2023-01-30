import React, { useState } from 'react';
import { useEffect } from 'react';

import useAppContext from '../../../hook/useAppContext';
import {
  getMonthName,
  calculateDaysInMonth,
  getFirstWeekDayOfMonth,
} from '../utils/calendar';

import CalendarDay from './CalendarDay';
import Toolbar from '../../Toolbar/components/Toolbar';

function Calendar() {
  const { currentMonthNum, currentYear } = useAppContext();
  const [daysCount, setDaysCount] = useState(30);
  const [curMonthName, setCurMonthName] = useState('');
  const [firstDayOfWeek, setFirstDayOfWeek] = useState(0);

  useEffect(() => {
    const days = calculateDaysInMonth(currentMonthNum, currentYear);
    const monthName = getMonthName(currentMonthNum, currentYear);
    const firstMonthDay = getFirstWeekDayOfMonth(currentMonthNum, currentYear);
    setDaysCount(days);
    setCurMonthName(monthName);
    setFirstDayOfWeek(firstMonthDay);
  }, [currentYear, currentMonthNum]);

  console.log(firstDayOfWeek);
  const components = [];
  for (let k = 0; k < firstDayOfWeek - 1; k++) {
    components.push(<CalendarDay num={null} />);
  }
  for (let i = 0; i < daysCount; i++) {
    components.push(
      <CalendarDay
        num={i + 1}
        id={`${currentYear}-${
          currentMonthNum <= 10
            ? '0' + (currentMonthNum + 1)
            : currentMonthNum + 1
        }-${i + 1 < 10 ? '0' + (i + 1) : i + 1}`}
      />
    );
  }

  return (
    <div className="cal-scene -calendar">
      <Toolbar currentMonth={curMonthName} />
      <div className="cal-month">{components}</div>
    </div>
  );
}

export default Calendar;
