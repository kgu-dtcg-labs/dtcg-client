import { END_POINT } from '@constants/api';
import axios from 'axios';

export const postSaveScenarios = async (data: string) => {
  try {
    const response = await axios.post(END_POINT.SAVE, data);

    return response;
  } catch (e) {
    console.log(e);
  }
};
