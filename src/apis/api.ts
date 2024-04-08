import axios from 'axios';

export const postData = async (data: string | undefined) => {
  try {
    axios
      .post(
        '/api',
        {
          content: data,
          layer: [1, 2, 3, 4, 5],
        },
        { withCredentials: true },
      )
      .then((response) => console.log(response.data));
  } catch (e) {
    console.log(e);
  }
};
