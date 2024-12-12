import { END_POINT } from '@constants/api';
import { http } from '@utils/http';

export function postSaveScenarios(data: string) {
  return http.post(END_POINT.TEST_CASE, {
    method: 'POST',
    body: {
      type: 'Json',
      payload: JSON.parse(data),
    },
  });
}

export function deleteScenarios() {
  return http.delete(END_POINT.TEST_CASE);
}
