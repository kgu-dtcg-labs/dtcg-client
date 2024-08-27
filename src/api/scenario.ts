import { END_POINT } from '@constants/api';
import axios from 'axios';

export const postSaveScenarios = async (data: string) => {
  try {
    const parsedData = JSON.parse(data);
    const response = await axios.post(END_POINT.TEST_CASE, parsedData);

    return response;
  } catch (e) {
    console.log(e);
  }
};

export const deleteScenarios = async () => {
  try {
    const res = await axios.delete(END_POINT.TEST_CASE);

    return res;
  } catch (e) {
    console.log(e);
  }
};
