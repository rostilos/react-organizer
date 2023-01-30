import { config } from '../../config';

export const fetchNotesList = async (date) => {
  const baseUrl = config.dbEndpoint;
  const url = `${baseUrl}/notes/?date_like=${date}`;

  const data = await fetch(url)
  return data.json();
}
