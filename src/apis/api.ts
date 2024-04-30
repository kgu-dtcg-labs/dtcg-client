import axios from 'axios';

export const postData = async (data: string | undefined) => {
  try {
    const response = await axios.post(
      '/api',
      {
        content: data,
        layer: [1, 2, 3, 4, 5],
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response;
  } catch (e) {
    console.log(e);
  }
};
