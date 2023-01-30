import { config } from '../../config';

export const addNoteToSpecificDate = async (formData) => {
  const baseUrl = config.dbEndpoint;
  const url = `${baseUrl}/notes`;

  const options = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
  }
  const data = await fetch(url, options)
  return data.json();
}
