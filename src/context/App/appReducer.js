import { SET_CURRENT_MONTH, SET_CURRENT_YEAR } from './calendar/types';
import { setCurrentMonth, setCurrentYear } from './calendar/reducers';

import { SET_NOTES_DATA, SET_SHOW_NOTES } from './notes/types';
import { setNotesData, setShowNotesContent } from './notes/reducers';

const actions = {
  [SET_CURRENT_MONTH]: setCurrentMonth,
  [SET_CURRENT_YEAR]: setCurrentYear,
  [SET_NOTES_DATA]: setNotesData,
  [SET_SHOW_NOTES]: setShowNotesContent,
};

export default function appReducer(state, { type, payload }) {
  const action = actions[type];

  if (action) {
    return action(state, payload);
  }

  return state;
}
