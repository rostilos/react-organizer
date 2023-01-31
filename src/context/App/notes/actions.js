import { SET_NOTES_DATA, SET_SHOW_NOTES, SET_SHOW_ALL_NOTES } from './types';

export function setNotesDataAction(dispatch, notesData) {
  dispatch({
    type: SET_NOTES_DATA,
    payload: notesData,
  });
}

export function setShowNotesContentAction(dispatch, showNotesContent) {
  dispatch({
    type: SET_SHOW_NOTES,
    payload: showNotesContent,
  });
}

export function setShowAllNotesAction(dispatch, showAllNotes) {
  dispatch({
    type: SET_SHOW_ALL_NOTES,
    payload: showAllNotes,
  });
}
