import { config } from '../../config';

export const removeNote = async (id) => {
  const baseUrl = config.dbEndpoint;
  const url = `${baseUrl}/notes/${id}`;

  const options = {
    method: 'DELETE',
  };
  fetch(url, options);
};
