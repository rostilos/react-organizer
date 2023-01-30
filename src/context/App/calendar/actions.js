import { SET_CURRENT_MONTH, SET_CURRENT_YEAR } from './types';

export function setCurrentMonthAction(dispatch, currentMonthNum) {
  dispatch({
    type: SET_CURRENT_MONTH,
    payload: currentMonthNum,
  });
}

export function setCurrentYearAction(dispatch, currentYear) {
  dispatch({
    type: SET_CURRENT_YEAR,
    payload: currentYear,
  });
}