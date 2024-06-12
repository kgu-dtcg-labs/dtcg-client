import { END_POINT } from '@constants/api';
import axios from 'axios';

export const postSaveScenarios = async (data: string) => {
  console.log(data);
  try {
    const response = await axios.post(END_POINT.SAVE, JSON.parse(data));

    return response;
  } catch (e) {
    console.log(e);
  }
};
