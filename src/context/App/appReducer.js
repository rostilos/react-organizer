import {
  SET_CURRENT_MONTH,
  SET_CURRENT_YEAR,
  SET_SELECTED_DATE,
} from './calendar/types';
import {
  setCurrentMonth,
  setCurrentYear,
  setSelectedDate,
} from './calendar/reducers';

import { SET_NOTES_DATA, SET_SHOW_NOTES } from './notes/types';
import { setNotesData, setShowNotesContent } from './notes/reducers';

const actions = {
  [SET_CURRENT_MONTH]: setCurrentMonth,
  [SET_CURRENT_YEAR]: setCurrentYear,
  [SET_NOTES_DATA]: setNotesData,
  [SET_SHOW_NOTES]: setShowNotesContent,
  [SET_SELECTED_DATE]: setSelectedDate,
};

export default function appReducer(state, { type, payload }) {
  const action = actions[type];

  if (action) {
    return action(state, payload);
  }

  return state;
}
