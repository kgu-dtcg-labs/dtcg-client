import { END_POINT } from '@constants/api';
import axios from 'axios';

export const postSaveScenarios = async (data: string) => {
  const body = data.split(';').map((scenario) => ({ result: scenario }));

  try {
    const response = await axios.post(END_POINT.SAVE, body);

    return response;
  } catch (e) {
    console.log(e);
  }
};
