import { END_POINT } from '@constants/api';
import type { ResponseDataType } from '@type/element';
import { http } from '@utils/http';

export function postAccidentData(data: string) {
  return http.post<ResponseDataType>(END_POINT.ACRYL, {
    method: 'POST',
    body: {
      type: 'Text',
      payload: {
        layer: [1, 2, 3, 4, 5],
        content: data,
      },
    },
  });
}
