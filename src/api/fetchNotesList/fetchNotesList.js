import { config } from '../../config';

export function fetchNotesList(date) {
  const baseUrl = config.dbEndpoint;
  const url = `${baseUrl}/${date}`;
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
}
