import { END_POINT } from '@constants/api';
import axios from 'axios';

export const postAccidentData = async (data: string) => {
  try {
    const response = await axios.post(END_POINT.ACRYL, {
      content: data,
      layer: [1, 2, 3, 4, 5],
    });

    return response;
  } catch (e) {
    console.log(e);
  }
};
