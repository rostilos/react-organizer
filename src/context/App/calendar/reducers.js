export function setCurrentMonth(state, currentMonthNum) {
  return {
    ...state,
    currentMonthNum,
  };
}

export function setCurrentYear(state, currentYear) {
  return {
    ...state,
    currentYear,
  };
}