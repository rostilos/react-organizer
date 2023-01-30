import { config } from '../../config';

export const editNoteContent = async (data) => {
  const { id, complete } = data;
  const baseUrl = config.dbEndpoint;
  const url = `${baseUrl}/notes/${id}`;

  const options = {
    method: 'PUT',
    body: JSON.stringify({
      ...data,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  fetch(url, options);
};
