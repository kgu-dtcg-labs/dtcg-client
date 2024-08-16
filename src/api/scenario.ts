import { END_POINT } from '@constants/api';
import axios from 'axios';

export const postSaveScenarios = async (data: string) => {
  try {
    const response = await axios.post(END_POINT.SAVE, JSON.parse(data));

    return response;
  } catch (e) {
    console.log(e);
  }
};

export const deleteScenarios = async () => {
  try {
    const res = await axios.post(END_POINT.DELETE);

    return res;
  } catch (e) {
    console.log(e);
  }
};
