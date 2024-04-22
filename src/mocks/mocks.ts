import type { ElementType } from '@type/element';

export const mocks: ElementType[] = [
  /* -----------------------------------------------------Highest Layers----------------------------------------------------------- */

  { id: 1, type: 'layer', name: '도로 정보', parentId: null },
  { id: 2, type: 'layer', name: '도로 교통시설', parentId: null },
  { id: 3, type: 'layer', name: '일시적 사건', parentId: null },
  { id: 4, type: 'layer', name: '동적 객체', parentId: null },
  { id: 5, type: 'layer', name: '주행 환경', parentId: null },
  { id: 6, type: 'layer', name: '디지털', parentId: null },
  { id: 7, type: 'layer', name: '법ㆍ규제', parentId: null },

  /* ---------------------------------------------------------Layer 1-------------------------------------------------------------- */
  { id: 8, type: 'group', name: '도로 기능과 등급', parentId: 1 },
  { id: 9, type: 'group', name: '도로폭', parentId: 1 },
  { id: 10, type: 'group', name: '도로기하구조', parentId: 1 },
  { id: 11, type: 'group', name: '도로표면', parentId: 1 },
  { id: 12, type: 'group', name: '도로 유형', parentId: 1 },

  { id: 13, type: 'group', name: '주간선도로', parentId: 8 },
  { id: 14, type: 'group', name: '보조간선도로', parentId: 8 },
  { id: 15, type: 'group', name: '집산도로', parentId: 8 },
  { id: 16, type: 'group', name: '국지도로', parentId: 8 },

  { id: 17, type: 'group', name: '차로폭', parentId: 9 },
  { id: 18, type: 'group', name: '갓길폭', parentId: 9 },

  { id: 19, type: 'group', name: '도로선형', parentId: 10 },
  { id: 20, type: 'group', name: '도로경사', parentId: 10 },
  { id: 21, type: 'group', name: '차로 수', parentId: 10 },

  { id: 22, type: 'group', name: '도로 포장', parentId: 11 },
  { id: 23, type: 'group', name: '노면 상태', parentId: 11 },

  { id: 24, type: 'case', name: '3지 교차로', parentId: 12 },
  { id: 25, type: 'case', name: '4지 교차로', parentId: 12 },
  { id: 26, type: 'case', name: '교차로 사이구간', parentId: 12 },
  { id: 27, type: 'case', name: '연속류 도로', parentId: 12 },
  { id: 28, type: 'case', name: '기타', parentId: 12 },

  { id: 29, type: 'case', name: '주간선도로', parentId: 13 },
  { id: 30, type: 'case', name: '해당 없음', parentId: 13 },

  { id: 31, type: 'case', name: '보조간선도로', parentId: 14 },
  { id: 32, type: 'case', name: '해당 없음', parentId: 14 },

  { id: 33, type: 'case', name: '집산도로', parentId: 15 },
  { id: 34, type: 'case', name: '해당 없음', parentId: 15 },

  { id: 35, type: 'case', name: '국지도로', parentId: 16 },
  { id: 36, type: 'case', name: '해당 없음', parentId: 16 },

  { id: 37, type: 'case', name: '3.0m', parentId: 17 },
  { id: 38, type: 'case', name: '3.1m', parentId: 17 },
  { id: 39, type: 'case', name: '3.2m', parentId: 17 },
  { id: 40, type: 'case', name: '3.3m', parentId: 17 },
  { id: 41, type: 'case', name: '3.4m', parentId: 17 },
  { id: 42, type: 'case', name: '3.5m 이상', parentId: 17 },

  { id: 43, type: 'case', name: '0.6m', parentId: 18 },
  { id: 44, type: 'case', name: '0.7m', parentId: 18 },
  { id: 45, type: 'case', name: '0.8m', parentId: 18 },
  { id: 46, type: 'case', name: '0.9m', parentId: 18 },
  { id: 47, type: 'case', name: '1m 이상', parentId: 18 },

  { id: 48, type: 'case', name: '직선부', parentId: 19 },
  { id: 49, type: 'case', name: '곡선부', parentId: 19 },

  { id: 51, type: 'case', name: '0~3 퍼센트', parentId: 20 },
  { id: 52, type: 'case', name: '3~6 퍼센트', parentId: 20 },
  { id: 53, type: 'case', name: '6~7 퍼센트', parentId: 20 },
  { id: 54, type: 'case', name: '7~8 퍼센트', parentId: 20 },
  { id: 55, type: 'case', name: '8 퍼센트 초과', parentId: 20 },

  { id: 56, type: 'case', name: '왕복 4차로', parentId: 21 },
  { id: 57, type: 'case', name: '왕복 5차로', parentId: 21 },
  { id: 58, type: 'case', name: '왕복 6차로', parentId: 21 },
  { id: 59, type: 'case', name: '왕복 7차로', parentId: 21 },
  { id: 60, type: 'case', name: '왕복 8차로 이상', parentId: 21 },

  { id: 61, type: 'case', name: '아스팔트', parentId: 22 },
  { id: 62, type: 'case', name: '콘크리트', parentId: 22 },
  { id: 63, type: 'case', name: '비포장', parentId: 22 },

  { id: 64, type: 'case', name: '마름', parentId: 23 },
  { id: 65, type: 'case', name: '젖음', parentId: 23 },
  { id: 66, type: 'case', name: '결빙', parentId: 23 },

  /* ------------------------------------------------------------------------------------------------------------------------------ */
  /* ---------------------------------------------------------Layer 2-------------------------------------------------------------- */

  { id: 67, type: 'group', name: '도로 안전시설', parentId: 2 },
  { id: 68, type: 'group', name: '교통 관리시설', parentId: 2 },
  { id: 69, type: 'group', name: '도로표지', parentId: 2 },
  { id: 70, type: 'group', name: '노면표시', parentId: 2 },
  { id: 71, type: 'group', name: '운영 제약', parentId: 2 },

  { id: 72, type: 'group', name: '차량방호시설', parentId: 67 },
  { id: 73, type: 'group', name: '조명시설', parentId: 67 },
  { id: 74, type: 'group', name: '과속방지턱', parentId: 67 },

  { id: 75, type: 'group', name: '신호기', parentId: 68 },

  { id: 76, type: 'group', name: '주의표지', parentId: 69 },
  { id: 77, type: 'group', name: '규제표지', parentId: 69 },
  { id: 78, type: 'group', name: '지시표지', parentId: 69 },

  { id: 79, type: 'group', name: '중앙선', parentId: 70 },
  { id: 80, type: 'group', name: '차선', parentId: 70 },
  { id: 81, type: 'group', name: '사전예고 표시', parentId: 70 },
  { id: 82, type: 'group', name: '안전속도 표시', parentId: 70 },
  { id: 83, type: 'group', name: '금지구역 표시', parentId: 70 },

  { id: 84, type: 'group', name: '제한속도', parentId: 71 },
  { id: 85, type: 'group', name: '보호구역', parentId: 71 },
  { id: 86, type: 'group', name: '전용도로', parentId: 71 },

  { id: 87, type: 'group', name: '중앙분리대', parentId: 72 },
  { id: 88, type: 'group', name: '방호울타리', parentId: 72 },
  { id: 89, type: 'group', name: '충격흡수시설', parentId: 72 },

  { id: 90, type: 'group', name: '연속조명', parentId: 73 },
  { id: 91, type: 'group', name: '국부조명', parentId: 73 },

  { id: 92, type: 'case', name: '있음', parentId: 74 },
  { id: 93, type: 'case', name: '없음', parentId: 74 },

  { id: 94, type: 'group', name: '차량신호', parentId: 75 },

  { id: 95, type: 'group', name: '도로상태 예고', parentId: 76 },
  { id: 96, type: 'group', name: '노면상황 예고', parentId: 76 },
  { id: 97, type: 'group', name: '기상상황 예고', parentId: 76 },
  { id: 98, type: 'group', name: '기타주의 예고', parentId: 76 },

  { id: 99, type: 'group', name: '통행금지', parentId: 77 },
  { id: 100, type: 'group', name: '통행제한', parentId: 77 },
  { id: 101, type: 'group', name: '금지사항', parentId: 77 },

  { id: 102, type: 'group', name: '도로지정', parentId: 78 },
  { id: 103, type: 'group', name: '통행방법', parentId: 78 },
  { id: 104, type: 'group', name: '기타지정', parentId: 78 },

  { id: 105, type: 'case', name: '실선', parentId: 79 },
  { id: 106, type: 'case', name: '점선', parentId: 79 },

  { id: 107, type: 'case', name: '실선', parentId: 80 },
  { id: 108, type: 'case', name: '점선', parentId: 80 },

  { id: 109, type: 'case', name: '횡단보도 예고', parentId: 81 },
  { id: 110, type: 'case', name: '오르막 경사면', parentId: 81 },
  { id: 111, type: 'case', name: '표시 없음', parentId: 81 },

  { id: 112, type: 'case', name: '속도 제한', parentId: 82 },
  { id: 113, type: 'case', name: '서행', parentId: 82 },
  { id: 114, type: 'case', name: '표시 없음', parentId: 82 },

  { id: 115, type: 'case', name: '안전지대', parentId: 83 },
  { id: 116, type: 'case', name: '정차금지지대', parentId: 83 },
  { id: 117, type: 'case', name: '표시 없음', parentId: 83 },

  { id: 118, type: 'group', name: '최고 제한속도', parentId: 84 },
  { id: 119, type: 'group', name: '최저 제한속도', parentId: 84 },

  { id: 120, type: 'case', name: '어린이 보호구역', parentId: 85 },
  { id: 121, type: 'case', name: '해당 없음', parentId: 85 },

  { id: 122, type: 'case', name: '버스 전용차로', parentId: 86 },
  { id: 123, type: 'case', name: '해당 없음', parentId: 86 },

  { id: 124, type: 'case', name: '있음', parentId: 87 },
  { id: 125, type: 'case', name: '없음', parentId: 87 },

  { id: 126, type: 'case', name: '있음', parentId: 88 },
  { id: 127, type: 'case', name: '없음', parentId: 88 },

  { id: 128, type: 'case', name: '있음', parentId: 89 },
  { id: 129, type: 'case', name: '없음', parentId: 89 },

  { id: 130, type: 'case', name: '있음', parentId: 90 },
  { id: 131, type: 'case', name: '없음', parentId: 90 },

  { id: 131, type: 'case', name: '있음', parentId: 91 },
  { id: 132, type: 'case', name: '없음', parentId: 91 },

  { id: 133, type: 'case', name: '녹색', parentId: 94 },
  { id: 134, type: 'case', name: '황색', parentId: 94 },
  { id: 135, type: 'case', name: '적색', parentId: 94 },
  { id: 136, type: 'case', name: '좌회전', parentId: 94 },
  { id: 137, type: 'case', name: '신호 영향 없음', parentId: 94 },

  { id: 138, type: 'case', name: '교차로 예고', parentId: 95 },
  { id: 139, type: 'case', name: '합류 도로', parentId: 95 },
  { id: 140, type: 'case', name: '굽은 도로', parentId: 95 },
  { id: 141, type: 'case', name: '표지 없음', parentId: 95 },

  { id: 142, type: 'case', name: '미끄러운 도로', parentId: 96 },
  { id: 143, type: 'case', name: '노면 고르지 못함', parentId: 96 },
  { id: 144, type: 'case', name: '표지 없음', parentId: 96 },

  { id: 145, type: 'case', name: '횡풍', parentId: 97 },
  { id: 146, type: 'case', name: '표시 없음', parentId: 97 },

  { id: 147, type: 'case', name: '횡단보도', parentId: 98 },
  { id: 148, type: 'case', name: '자전거', parentId: 98 },
  { id: 149, type: 'case', name: '터널', parentId: 98 },
  { id: 150, type: 'case', name: '표지 없음', parentId: 98 },

  { id: 151, type: 'case', name: '통행 금지', parentId: 99 },
  { id: 152, type: 'case', name: '표지 없음', parentId: 99 },

  { id: 153, type: 'case', name: '직진 금지', parentId: 100 },
  { id: 154, type: 'case', name: '우회전 금지', parentId: 100 },
  { id: 155, type: 'case', name: '좌회전 금지', parentId: 100 },
  { id: 156, type: 'case', name: '유턴 금지', parentId: 100 },
  { id: 157, type: 'case', name: '앞지르기 금지', parentId: 100 },
  { id: 158, type: 'case', name: '표지 없음', parentId: 100 },

  { id: 159, type: 'case', name: '주정차 금지', parentId: 101 },
  { id: 160, type: 'case', name: '표지 없음', parentId: 101 },

  { id: 161, type: 'case', name: '표지 없음', parentId: 102 },
  { id: 162, type: 'case', name: '자동차 전용도로', parentId: 102 },
  { id: 163, type: 'case', name: '자전거 전용도로', parentId: 102 },

  { id: 164, type: 'case', name: '일방통행', parentId: 103 },
  { id: 165, type: 'case', name: '비보호 좌회전', parentId: 103 },
  { id: 166, type: 'case', name: '표지 없음', parentId: 103 },

  { id: 167, type: 'case', name: '어린이 보호', parentId: 104 },
  { id: 168, type: 'case', name: '노인 보호', parentId: 104 },
  { id: 169, type: 'case', name: '표지 없음', parentId: 104 },

  { id: 170, type: 'case', name: '30', parentId: 118 },
  { id: 171, type: 'case', name: '50', parentId: 118 },

  { id: 172, type: 'case', name: '없음', parentId: 119 },

  /* ------------------------------------------------------------------------------------------------------------------------------ */
  /* ---------------------------------------------------------Layer 3-------------------------------------------------------------- */

  { id: 173, type: 'group', name: '도로 점용', parentId: 3 },

  { id: 174, type: 'group', name: '도로공사', parentId: 173 },
  { id: 175, type: 'group', name: '선행사고', parentId: 173 },
  { id: 176, type: 'group', name: '장애물', parentId: 173 },

  { id: 177, type: 'case', name: '시행', parentId: 174 },
  { id: 178, type: 'case', name: '미시행', parentId: 174 },

  { id: 179, type: 'case', name: '있음', parentId: 175 },
  { id: 180, type: 'case', name: '없음', parentId: 175 },

  { id: 181, type: 'case', name: '있음', parentId: 176 },
  { id: 182, type: 'case', name: '없음', parentId: 176 },

  /* ------------------------------------------------------------------------------------------------------------------------------ */
  /* ---------------------------------------------------------Layer 4-------------------------------------------------------------- */

  { id: 183, type: 'group', name: '객체 수', parentId: 4 },
  { id: 184, type: 'group', name: '객체 종류', parentId: 4 },
  { id: 185, type: 'group', name: 'Trigger 활성화 객체 선정', parentId: 4 },
  { id: 186, type: 'group', name: '행동 정의 (Action)', parentId: 4 },
  { id: 187, type: 'group', name: '이벤트 종료 조건', parentId: 4 },

  { id: 188, type: 'case', name: '1', parentId: 183 },
  { id: 189, type: 'case', name: '2', parentId: 183 },
  { id: 190, type: 'case', name: '3', parentId: 183 },
  { id: 191, type: 'case', name: '4', parentId: 183 },

  { id: 192, type: 'group', name: 'NPC1', parentId: 184 },
  { id: 193, type: 'group', name: 'NPC2', parentId: 184 },
  { id: 194, type: 'group', name: 'NPC3', parentId: 184 },
  { id: 195, type: 'group', name: 'Ego', parentId: 184 },

  { id: 196, type: 'group', name: 'NPC1', parentId: 185 },
  { id: 197, type: 'group', name: 'NPC2', parentId: 185 },
  { id: 198, type: 'group', name: 'NPC3', parentId: 185 },

  { id: 199, type: 'group', name: 'Longitudinal Action', parentId: 186 },
  { id: 200, type: 'group', name: 'LateralAction', parentId: 186 },

  { id: 201, type: 'group', name: 'TargetSpeed Reached', parentId: 187 },
  { id: 202, type: 'group', name: 'TargetDistance Achieved', parentId: 187 },
  { id: 203, type: 'group', name: 'TimeElapsed', parentId: 187 },
  { id: 204, type: 'group', name: 'Event Completed', parentId: 187 },

  { id: 205, type: 'group', name: '객체 종류', parentId: 192 },

  { id: 206, type: 'group', name: '객체 종류', parentId: 193 },

  { id: 207, type: 'group', name: '객체 종류', parentId: 194 },

  { id: 208, type: 'group', name: '객체 종류', parentId: 195 },

  { id: 209, type: 'group', name: 'O', parentId: 196 },
  { id: 210, type: 'case', name: 'X', parentId: 196 },

  { id: 211, type: 'group', name: 'O', parentId: 197 },
  { id: 212, type: 'case', name: 'X', parentId: 197 },

  { id: 213, type: 'group', name: 'O', parentId: 198 },
  { id: 214, type: 'case', name: 'X', parentId: 198 },

  { id: 215, type: 'group', name: 'SpeedAction Dynamics', parentId: 199 },
  { id: 216, type: 'group', name: 'SpeedAction Target', parentId: 199 },

  { id: 217, type: 'group', name: '직진', parentId: 200 },
  { id: 218, type: 'group', name: '좌회전', parentId: 200 },
  { id: 219, type: 'group', name: '우회전', parentId: 200 },

  { id: 220, type: 'case', name: '0km/h', parentId: 201 },
  { id: 221, type: 'case', name: '30km/h', parentId: 201 },
  { id: 222, type: 'case', name: '60km/h', parentId: 201 },
  { id: 223, type: 'case', name: '90km/h', parentId: 201 },
  { id: 224, type: 'case', name: '120km/h', parentId: 201 },
  { id: 225, type: 'case', name: '150km/h', parentId: 201 },
  { id: 226, type: 'case', name: '180km/h', parentId: 201 },

  {
    id: 227,
    type: 'group',
    name: 'Trigger활성화 객체 선정 유무',
    parentId: 202,
  },

  { id: 228, type: 'case', name: '30', parentId: 203 },
  { id: 229, type: 'case', name: '60', parentId: 203 },
  { id: 230, type: 'case', name: '90', parentId: 203 },
  { id: 231, type: 'case', name: '120', parentId: 203 },
  { id: 232, type: 'case', name: '150', parentId: 203 },
  { id: 233, type: 'case', name: '180', parentId: 203 },
  { id: 234, type: 'case', name: '210', parentId: 203 },
  { id: 235, type: 'case', name: '240', parentId: 203 },
  { id: 236, type: 'case', name: '270', parentId: 203 },
  { id: 237, type: 'case', name: '300', parentId: 203 },

  { id: 238, type: 'case', name: 'Change Lane Completed', parentId: 204 },

  { id: 239, type: 'case', name: '승용차', parentId: 205 },
  { id: 240, type: 'case', name: '승합차', parentId: 205 },
  { id: 241, type: 'case', name: '버스', parentId: 205 },
  { id: 242, type: 'case', name: '화물차', parentId: 205 },
  { id: 243, type: 'case', name: '특수차', parentId: 205 },

  { id: 244, type: 'case', name: '승용차', parentId: 206 },
  { id: 245, type: 'case', name: '승합차', parentId: 206 },
  { id: 246, type: 'case', name: '버스', parentId: 206 },
  { id: 247, type: 'case', name: '화물차', parentId: 206 },
  { id: 248, type: 'case', name: '특수차', parentId: 206 },

  { id: 249, type: 'case', name: '승용차', parentId: 207 },
  { id: 250, type: 'case', name: '승합차', parentId: 207 },
  { id: 251, type: 'case', name: '버스', parentId: 207 },
  { id: 252, type: 'case', name: '화물차', parentId: 207 },
  { id: 253, type: 'case', name: '특수차', parentId: 207 },

  { id: 254, type: 'case', name: '승용차', parentId: 208 },
  { id: 255, type: 'case', name: '승합차', parentId: 208 },
  { id: 256, type: 'case', name: '버스', parentId: 208 },
  { id: 257, type: 'case', name: '화물차', parentId: 208 },
  { id: 258, type: 'case', name: '특수차', parentId: 208 },

  { id: 259, type: 'group', name: '객체 위치', parentId: 209 },
  { id: 260, type: 'group', name: '객체 속도', parentId: 209 },
  { id: 261, type: 'group', name: '객체 간의 거리', parentId: 209 },

  { id: 262, type: 'group', name: '객체 위치', parentId: 211 },
  { id: 263, type: 'group', name: '객체 속도', parentId: 211 },
  { id: 264, type: 'group', name: '객체 간의 거리', parentId: 211 },

  { id: 265, type: 'group', name: '객체 위치', parentId: 213 },
  { id: 266, type: 'group', name: '객체 속도', parentId: 213 },
  { id: 267, type: 'group', name: '객체 간의 거리', parentId: 213 },

  { id: 268, type: 'group', name: 'Dynamics Shape', parentId: 215 },
  { id: 269, type: 'group', name: 'Dynamics Dimensions', parentId: 215 },
  { id: 270, type: 'group', name: 'value', parentId: 215 },

  { id: 271, type: 'group', name: 'Dynamics Shape', parentId: 216 },
  { id: 272, type: 'group', name: 'Dynamics Dimensions', parentId: 216 },
  { id: 273, type: 'group', name: 'value', parentId: 216 },

  { id: 274, type: 'group', name: 'O', parentId: 217 },
  { id: 275, type: 'case', name: 'X', parentId: 217 },

  { id: 276, type: 'group', name: 'O', parentId: 218 },
  { id: 277, type: 'case', name: 'X', parentId: 218 },

  { id: 278, type: 'group', name: 'O', parentId: 219 },
  { id: 279, type: 'case', name: 'X', parentId: 219 },

  { id: 280, type: 'group', name: 'NPC1', parentId: 227 },
  { id: 281, type: 'group', name: 'NPC2', parentId: 227 },
  { id: 282, type: 'group', name: 'NPC3', parentId: 227 },

  { id: 283, type: 'group', name: '방향', parentId: 259 },
  { id: 284, type: 'group', name: '차로', parentId: 259 },

  { id: 285, type: 'case', name: '30~50', parentId: 260 },
  { id: 286, type: 'case', name: '50~70', parentId: 260 },
  { id: 287, type: 'case', name: '70~90', parentId: 260 },
  { id: 288, type: 'case', name: '90~120', parentId: 260 },

  { id: 289, type: 'case', name: '+50', parentId: 261 },
  { id: 290, type: 'case', name: '+40', parentId: 261 },
  { id: 291, type: 'case', name: '+30', parentId: 261 },
  { id: 292, type: 'case', name: '+20', parentId: 261 },
  { id: 293, type: 'case', name: '+10', parentId: 261 },
  { id: 294, type: 'case', name: '0', parentId: 261 },
  { id: 295, type: 'case', name: '-10', parentId: 261 },
  { id: 296, type: 'case', name: '-20', parentId: 261 },
  { id: 297, type: 'case', name: '-30', parentId: 261 },
  { id: 298, type: 'case', name: '-40', parentId: 261 },
  { id: 299, type: 'case', name: '-50', parentId: 261 },

  { id: 300, type: 'group', name: '방향', parentId: 262 },
  { id: 301, type: 'group', name: '차로', parentId: 262 },

  { id: 302, type: 'case', name: '30~50', parentId: 263 },
  { id: 303, type: 'case', name: '50~70', parentId: 263 },
  { id: 304, type: 'case', name: '70~90', parentId: 263 },
  { id: 305, type: 'case', name: '90~120', parentId: 263 },

  { id: 306, type: 'case', name: '+50', parentId: 264 },
  { id: 307, type: 'case', name: '+40', parentId: 264 },
  { id: 308, type: 'case', name: '+30', parentId: 264 },
  { id: 309, type: 'case', name: '+20', parentId: 264 },
  { id: 310, type: 'case', name: '+10', parentId: 264 },
  { id: 311, type: 'case', name: '0', parentId: 264 },
  { id: 312, type: 'case', name: '-10', parentId: 264 },
  { id: 313, type: 'case', name: '-20', parentId: 264 },
  { id: 314, type: 'case', name: '-30', parentId: 264 },
  { id: 315, type: 'case', name: '-40', parentId: 264 },
  { id: 316, type: 'case', name: '-50', parentId: 264 },

  { id: 317, type: 'group', name: '방향', parentId: 265 },
  { id: 318, type: 'group', name: '차로', parentId: 265 },

  { id: 319, type: 'case', name: '30~50', parentId: 266 },
  { id: 320, type: 'case', name: '50~70', parentId: 266 },
  { id: 321, type: 'case', name: '70~90', parentId: 266 },
  { id: 322, type: 'case', name: '90~120', parentId: 266 },

  { id: 323, type: 'case', name: '+50', parentId: 267 },
  { id: 324, type: 'case', name: '+40', parentId: 267 },
  { id: 325, type: 'case', name: '+30', parentId: 267 },
  { id: 326, type: 'case', name: '+20', parentId: 267 },
  { id: 327, type: 'case', name: '+10', parentId: 267 },
  { id: 328, type: 'case', name: '0', parentId: 267 },
  { id: 329, type: 'case', name: '-10', parentId: 267 },
  { id: 330, type: 'case', name: '-20', parentId: 267 },
  { id: 331, type: 'case', name: '-30', parentId: 267 },
  { id: 332, type: 'case', name: '-40', parentId: 267 },
  { id: 333, type: 'case', name: '-50', parentId: 267 },

  { id: 334, type: 'case', name: 'Linear', parentId: 268 },
  { id: 335, type: 'case', name: 'Step', parentId: 268 },
  { id: 336, type: 'case', name: 'Sinusoidal', parentId: 268 },

  { id: 337, type: 'case', name: '30', parentId: 269 },
  { id: 338, type: 'case', name: '60', parentId: 269 },
  { id: 339, type: 'case', name: '90', parentId: 269 },
  { id: 340, type: 'case', name: '120', parentId: 269 },
  { id: 341, type: 'case', name: '150', parentId: 269 },
  { id: 342, type: 'case', name: '180', parentId: 269 },
  { id: 343, type: 'case', name: '210', parentId: 269 },
  { id: 344, type: 'case', name: '140', parentId: 269 },
  { id: 345, type: 'case', name: '170', parentId: 269 },
  { id: 346, type: 'case', name: '300', parentId: 269 },
  { id: 347, type: 'group', name: '객체 간 거리', parentId: 269 },

  { id: 348, type: 'case', name: '+50', parentId: 270 },
  { id: 349, type: 'case', name: '+40', parentId: 270 },
  { id: 350, type: 'case', name: '+30', parentId: 270 },
  { id: 351, type: 'case', name: '+20', parentId: 270 },
  { id: 352, type: 'case', name: '+10', parentId: 270 },
  { id: 353, type: 'case', name: '0', parentId: 270 },
  { id: 354, type: 'case', name: '-10', parentId: 270 },
  { id: 355, type: 'case', name: '-20', parentId: 270 },
  { id: 356, type: 'case', name: '-30', parentId: 270 },
  { id: 357, type: 'case', name: '-40', parentId: 270 },
  { id: 358, type: 'case', name: '-50', parentId: 270 },

  { id: 359, type: 'case', name: 'Linear', parentId: 271 },
  { id: 360, type: 'case', name: 'Step', parentId: 271 },
  { id: 361, type: 'case', name: 'Sinusoidal', parentId: 271 },

  { id: 362, type: 'case', name: '30', parentId: 272 },
  { id: 363, type: 'case', name: '60', parentId: 272 },
  { id: 364, type: 'case', name: '90', parentId: 272 },
  { id: 365, type: 'case', name: '120', parentId: 272 },
  { id: 366, type: 'case', name: '150', parentId: 272 },
  { id: 367, type: 'case', name: '180', parentId: 272 },
  { id: 368, type: 'case', name: '210', parentId: 272 },
  { id: 369, type: 'case', name: '140', parentId: 272 },
  { id: 360, type: 'case', name: '170', parentId: 272 },
  { id: 371, type: 'case', name: '300', parentId: 272 },
  { id: 372, type: 'group', name: '객체 간 거리', parentId: 272 },

  { id: 373, type: 'group', name: '목표 속도 값', parentId: 273 },

  { id: 374, type: 'group', name: 'Lane Change Action', parentId: 274 },
  { id: 375, type: 'group', name: 'Target Lane Change Action', parentId: 274 },

  { id: 376, type: 'group', name: 'Lane Change Action', parentId: 276 },
  { id: 377, type: 'group', name: 'Target Lane Change Action', parentId: 276 },

  { id: 378, type: 'group', name: 'Lane Change Action', parentId: 278 },
  { id: 379, type: 'group', name: 'Target Lane Change Action', parentId: 278 },

  { id: 380, type: 'group', name: 'O', parentId: 280 },
  { id: 381, type: 'case', name: 'X', parentId: 280 },

  { id: 382, type: 'group', name: 'O', parentId: 281 },
  { id: 383, type: 'case', name: 'X', parentId: 281 },

  { id: 384, type: 'group', name: 'O', parentId: 282 },
  { id: 385, type: 'case', name: 'X', parentId: 282 },

  { id: 386, type: 'case', name: 'N', parentId: 283 },
  { id: 387, type: 'case', name: 'E', parentId: 283 },
  { id: 388, type: 'case', name: 'S', parentId: 283 },
  { id: 389, type: 'case', name: 'W', parentId: 283 },

  { id: 390, type: 'case', name: '1', parentId: 284 },
  { id: 391, type: 'case', name: '2', parentId: 284 },
  { id: 392, type: 'case', name: '3', parentId: 284 },
  { id: 393, type: 'case', name: '4', parentId: 284 },
  { id: 394, type: 'case', name: '5', parentId: 284 },

  { id: 395, type: 'case', name: 'N', parentId: 300 },
  { id: 396, type: 'case', name: 'E', parentId: 300 },
  { id: 397, type: 'case', name: 'S', parentId: 300 },
  { id: 398, type: 'case', name: 'W', parentId: 300 },

  { id: 399, type: 'case', name: '1', parentId: 301 },
  { id: 400, type: 'case', name: '2', parentId: 301 },
  { id: 401, type: 'case', name: '3', parentId: 301 },
  { id: 402, type: 'case', name: '4', parentId: 301 },
  { id: 403, type: 'case', name: '5', parentId: 301 },

  { id: 404, type: 'case', name: 'N', parentId: 317 },
  { id: 405, type: 'case', name: 'E', parentId: 317 },
  { id: 406, type: 'case', name: 'S', parentId: 317 },
  { id: 407, type: 'case', name: 'W', parentId: 317 },

  { id: 408, type: 'case', name: '1', parentId: 318 },
  { id: 409, type: 'case', name: '2', parentId: 318 },
  { id: 410, type: 'case', name: '3', parentId: 318 },
  { id: 411, type: 'case', name: '4', parentId: 318 },
  { id: 412, type: 'case', name: '5', parentId: 318 },

  { id: 413, type: 'group', name: 'NPC1', parentId: 347 },
  { id: 414, type: 'group', name: 'NPC2', parentId: 347 },
  { id: 415, type: 'group', name: 'NPC3', parentId: 347 },

  { id: 416, type: 'group', name: 'NPC1', parentId: 372 },
  { id: 417, type: 'group', name: 'NPC2', parentId: 372 },
  { id: 418, type: 'group', name: 'NPC3', parentId: 372 },

  { id: 419, type: 'case', name: '30~50', parentId: 373 },
  { id: 420, type: 'case', name: '50~70', parentId: 373 },
  { id: 421, type: 'case', name: '70~90', parentId: 373 },
  { id: 422, type: 'case', name: '90~120', parentId: 373 },
  { id: 423, type: 'case', name: '120~140', parentId: 373 },
  { id: 424, type: 'case', name: '140~160', parentId: 373 },
  { id: 425, type: 'case', name: '160~180', parentId: 373 },

  { id: 426, type: 'group', name: 'Dynamics Shape', parentId: 374 },
  { id: 427, type: 'group', name: 'Dynamics Dimension', parentId: 374 },

  { id: 428, type: 'group', name: 'Dynamics Shape', parentId: 375 },
  { id: 429, type: 'group', name: 'Dynamics Dimension', parentId: 375 },
  { id: 430, type: 'group', name: 'Value', parentId: 375 },

  { id: 431, type: 'group', name: 'Dynamics Shape', parentId: 376 },
  { id: 432, type: 'group', name: 'Dynamics Dimension', parentId: 376 },

  { id: 433, type: 'group', name: 'Dynamics Shape', parentId: 377 },
  { id: 434, type: 'group', name: 'Dynamics Dimension', parentId: 377 },
  { id: 435, type: 'group', name: 'Value', parentId: 377 },

  { id: 436, type: 'group', name: 'Dynamics Shape', parentId: 378 },
  { id: 437, type: 'group', name: 'Dynamics Dimension', parentId: 378 },

  { id: 438, type: 'group', name: 'Dynamics Shape', parentId: 379 },
  { id: 439, type: 'group', name: 'Dynamics Dimension', parentId: 379 },
  { id: 440, type: 'group', name: 'Value', parentId: 379 },

  { id: 441, type: 'case', name: '+50', parentId: 380 },
  { id: 442, type: 'case', name: '+40', parentId: 380 },
  { id: 443, type: 'case', name: '+30', parentId: 380 },
  { id: 444, type: 'case', name: '+20', parentId: 380 },
  { id: 445, type: 'case', name: '+10', parentId: 380 },
  { id: 446, type: 'case', name: '0', parentId: 380 },
  { id: 447, type: 'case', name: '-10', parentId: 380 },
  { id: 448, type: 'case', name: '-20', parentId: 380 },
  { id: 449, type: 'case', name: '-30', parentId: 380 },
  { id: 450, type: 'case', name: '-40', parentId: 380 },
  { id: 451, type: 'case', name: '-50', parentId: 380 },

  { id: 452, type: 'case', name: '+50', parentId: 382 },
  { id: 453, type: 'case', name: '+40', parentId: 382 },
  { id: 454, type: 'case', name: '+30', parentId: 382 },
  { id: 455, type: 'case', name: '+20', parentId: 382 },
  { id: 456, type: 'case', name: '+10', parentId: 382 },
  { id: 457, type: 'case', name: '0', parentId: 382 },
  { id: 458, type: 'case', name: '-10', parentId: 382 },
  { id: 459, type: 'case', name: '-20', parentId: 382 },
  { id: 460, type: 'case', name: '-30', parentId: 382 },
  { id: 461, type: 'case', name: '-40', parentId: 382 },
  { id: 462, type: 'case', name: '-50', parentId: 382 },

  { id: 463, type: 'case', name: '+50', parentId: 384 },
  { id: 464, type: 'case', name: '+40', parentId: 384 },
  { id: 465, type: 'case', name: '+30', parentId: 384 },
  { id: 466, type: 'case', name: '+20', parentId: 384 },
  { id: 467, type: 'case', name: '+10', parentId: 384 },
  { id: 468, type: 'case', name: '0', parentId: 384 },
  { id: 469, type: 'case', name: '-10', parentId: 384 },
  { id: 470, type: 'case', name: '-20', parentId: 384 },
  { id: 471, type: 'case', name: '-30', parentId: 384 },
  { id: 472, type: 'case', name: '-40', parentId: 384 },
  { id: 473, type: 'case', name: '-50', parentId: 384 },

  { id: 474, type: 'group', name: 'O', parentId: 413 },
  { id: 475, type: 'case', name: 'X', parentId: 413 },

  { id: 476, type: 'group', name: 'O', parentId: 414 },
  { id: 477, type: 'case', name: 'X', parentId: 414 },

  { id: 478, type: 'group', name: 'O', parentId: 415 },
  { id: 479, type: 'case', name: 'X', parentId: 415 },

  { id: 480, type: 'group', name: 'O', parentId: 416 },
  { id: 481, type: 'case', name: 'X', parentId: 416 },

  { id: 482, type: 'group', name: 'O', parentId: 417 },
  { id: 483, type: 'case', name: 'X', parentId: 417 },

  { id: 484, type: 'group', name: 'O', parentId: 418 },
  { id: 485, type: 'case', name: 'X', parentId: 418 },

  { id: 486, type: 'case', name: 'Linear', parentId: 426 },
  { id: 487, type: 'case', name: 'Step', parentId: 426 },
  { id: 488, type: 'case', name: 'Sinusoidal', parentId: 426 },

  { id: 489, type: 'case', name: '30', parentId: 427 },
  { id: 490, type: 'case', name: '60', parentId: 427 },
  { id: 491, type: 'case', name: '90', parentId: 427 },
  { id: 492, type: 'case', name: '120', parentId: 427 },
  { id: 493, type: 'case', name: '150', parentId: 427 },
  { id: 494, type: 'case', name: '180', parentId: 427 },
  { id: 495, type: 'case', name: '210', parentId: 427 },
  { id: 496, type: 'case', name: '240', parentId: 427 },
  { id: 497, type: 'case', name: '270', parentId: 427 },
  { id: 498, type: 'case', name: '300', parentId: 427 },
  { id: 499, type: 'group', name: '객체 간 거리', parentId: 427 },

  { id: 500, type: 'case', name: 'Linear', parentId: 428 },
  { id: 501, type: 'case', name: 'Step', parentId: 428 },
  { id: 502, type: 'case', name: 'Sinusoidal', parentId: 428 },

  { id: 503, type: 'case', name: '30', parentId: 429 },
  { id: 504, type: 'case', name: '60', parentId: 429 },
  { id: 505, type: 'case', name: '90', parentId: 429 },
  { id: 506, type: 'case', name: '120', parentId: 429 },
  { id: 507, type: 'case', name: '150', parentId: 429 },
  { id: 508, type: 'case', name: '180', parentId: 429 },
  { id: 509, type: 'case', name: '210', parentId: 429 },
  { id: 510, type: 'case', name: '240', parentId: 429 },
  { id: 511, type: 'case', name: '270', parentId: 429 },
  { id: 512, type: 'case', name: '300', parentId: 429 },
  { id: 5121, type: 'group', name: '객체 간 거리', parentId: 429 },

  { id: 5122, type: 'group', name: 'NPC1', parentId: 5121 },
  { id: 5123, type: 'group', name: 'NPC2', parentId: 5121 },
  { id: 5124, type: 'group', name: 'NPC3', parentId: 5121 },

  { id: 513, type: 'group', name: '목표 차선 값', parentId: 430 },

  { id: 514, type: 'case', name: 'Linear', parentId: 431 },
  { id: 515, type: 'case', name: 'Step', parentId: 431 },
  { id: 516, type: 'case', name: 'Sinusoidal', parentId: 431 },

  { id: 517, type: 'case', name: '30', parentId: 432 },
  { id: 518, type: 'case', name: '60', parentId: 432 },
  { id: 519, type: 'case', name: '90', parentId: 432 },
  { id: 520, type: 'case', name: '120', parentId: 432 },
  { id: 521, type: 'case', name: '150', parentId: 432 },
  { id: 522, type: 'case', name: '180', parentId: 432 },
  { id: 523, type: 'case', name: '210', parentId: 432 },
  { id: 524, type: 'case', name: '240', parentId: 432 },
  { id: 525, type: 'case', name: '270', parentId: 432 },
  { id: 526, type: 'case', name: '300', parentId: 432 },
  { id: 527, type: 'group', name: '객체 간 거리', parentId: 432 },

  { id: 528, type: 'case', name: 'Linear', parentId: 433 },
  { id: 529, type: 'case', name: 'Step', parentId: 433 },
  { id: 530, type: 'case', name: 'Sinusoidal', parentId: 433 },

  { id: 531, type: 'case', name: '30', parentId: 434 },
  { id: 532, type: 'case', name: '60', parentId: 434 },
  { id: 533, type: 'case', name: '90', parentId: 434 },
  { id: 534, type: 'case', name: '120', parentId: 434 },
  { id: 535, type: 'case', name: '150', parentId: 434 },
  { id: 536, type: 'case', name: '180', parentId: 434 },
  { id: 537, type: 'case', name: '210', parentId: 434 },
  { id: 538, type: 'case', name: '240', parentId: 434 },
  { id: 539, type: 'case', name: '270', parentId: 434 },
  { id: 540, type: 'case', name: '300', parentId: 434 },
  { id: 5401, type: 'group', name: '객체 간 거리', parentId: 434 },

  { id: 5402, type: 'group', name: 'NPC1', parentId: 5401 },
  { id: 5403, type: 'group', name: 'NPC2', parentId: 5401 },
  { id: 5404, type: 'group', name: 'NPC3', parentId: 5401 },

  { id: 541, type: 'group', name: '목표 차선 값', parentId: 435 },

  { id: 542, type: 'case', name: 'Linear', parentId: 436 },
  { id: 543, type: 'case', name: 'Step', parentId: 436 },
  { id: 544, type: 'case', name: 'Sinusoidal', parentId: 436 },

  { id: 545, type: 'case', name: '30', parentId: 437 },
  { id: 546, type: 'case', name: '60', parentId: 437 },
  { id: 547, type: 'case', name: '90', parentId: 437 },
  { id: 548, type: 'case', name: '120', parentId: 437 },
  { id: 549, type: 'case', name: '150', parentId: 437 },
  { id: 550, type: 'case', name: '180', parentId: 437 },
  { id: 551, type: 'case', name: '210', parentId: 437 },
  { id: 552, type: 'case', name: '240', parentId: 437 },
  { id: 553, type: 'case', name: '270', parentId: 437 },
  { id: 554, type: 'case', name: '300', parentId: 437 },
  { id: 555, type: 'group', name: '객체 간 거리', parentId: 437 },

  { id: 556, type: 'case', name: 'Linear', parentId: 438 },
  { id: 557, type: 'case', name: 'Step', parentId: 438 },
  { id: 558, type: 'case', name: 'Sinusoidal', parentId: 438 },

  { id: 559, type: 'case', name: '30', parentId: 439 },
  { id: 560, type: 'case', name: '60', parentId: 439 },
  { id: 561, type: 'case', name: '90', parentId: 439 },
  { id: 562, type: 'case', name: '120', parentId: 439 },
  { id: 563, type: 'case', name: '150', parentId: 439 },
  { id: 564, type: 'case', name: '180', parentId: 439 },
  { id: 565, type: 'case', name: '210', parentId: 439 },
  { id: 566, type: 'case', name: '240', parentId: 439 },
  { id: 567, type: 'case', name: '270', parentId: 439 },
  { id: 568, type: 'case', name: '300', parentId: 439 },
  { id: 5681, type: 'group', name: '객체 간 거리', parentId: 439 },

  { id: 5682, type: 'group', name: 'NPC1', parentId: 5681 },
  { id: 5683, type: 'group', name: 'NPC2', parentId: 5681 },
  { id: 5684, type: 'group', name: 'NPC3', parentId: 5681 },

  { id: 569, type: 'group', name: '목표 차선 값', parentId: 440 },

  { id: 570, type: 'case', name: '+50', parentId: 474 },
  { id: 571, type: 'case', name: '+40', parentId: 474 },
  { id: 572, type: 'case', name: '+30', parentId: 474 },
  { id: 573, type: 'case', name: '+20', parentId: 474 },
  { id: 574, type: 'case', name: '+10', parentId: 474 },
  { id: 575, type: 'case', name: '0', parentId: 474 },
  { id: 576, type: 'case', name: '-10', parentId: 474 },
  { id: 577, type: 'case', name: '-20', parentId: 474 },
  { id: 578, type: 'case', name: '-30', parentId: 474 },
  { id: 579, type: 'case', name: '-40', parentId: 474 },
  { id: 580, type: 'case', name: '-50', parentId: 474 },

  { id: 581, type: 'case', name: '+50', parentId: 476 },
  { id: 582, type: 'case', name: '+40', parentId: 476 },
  { id: 583, type: 'case', name: '+30', parentId: 476 },
  { id: 584, type: 'case', name: '+20', parentId: 476 },
  { id: 585, type: 'case', name: '+10', parentId: 476 },
  { id: 586, type: 'case', name: '0', parentId: 476 },
  { id: 587, type: 'case', name: '-10', parentId: 476 },
  { id: 588, type: 'case', name: '-20', parentId: 476 },
  { id: 589, type: 'case', name: '-30', parentId: 476 },
  { id: 590, type: 'case', name: '-40', parentId: 476 },
  { id: 591, type: 'case', name: '-50', parentId: 476 },

  { id: 592, type: 'case', name: '+50', parentId: 478 },
  { id: 593, type: 'case', name: '+40', parentId: 478 },
  { id: 594, type: 'case', name: '+30', parentId: 478 },
  { id: 595, type: 'case', name: '+20', parentId: 478 },
  { id: 596, type: 'case', name: '+10', parentId: 478 },
  { id: 597, type: 'case', name: '0', parentId: 478 },
  { id: 598, type: 'case', name: '-10', parentId: 478 },
  { id: 599, type: 'case', name: '-20', parentId: 478 },
  { id: 600, type: 'case', name: '-30', parentId: 478 },
  { id: 601, type: 'case', name: '-40', parentId: 478 },
  { id: 602, type: 'case', name: '-50', parentId: 478 },

  { id: 603, type: 'case', name: '+50', parentId: 480 },
  { id: 604, type: 'case', name: '+40', parentId: 480 },
  { id: 605, type: 'case', name: '+30', parentId: 480 },
  { id: 606, type: 'case', name: '+20', parentId: 480 },
  { id: 607, type: 'case', name: '+10', parentId: 480 },
  { id: 608, type: 'case', name: '0', parentId: 480 },
  { id: 609, type: 'case', name: '-10', parentId: 480 },
  { id: 610, type: 'case', name: '-20', parentId: 480 },
  { id: 611, type: 'case', name: '-30', parentId: 480 },
  { id: 612, type: 'case', name: '-40', parentId: 480 },
  { id: 613, type: 'case', name: '-50', parentId: 480 },

  { id: 614, type: 'case', name: '+50', parentId: 482 },
  { id: 615, type: 'case', name: '+40', parentId: 482 },
  { id: 616, type: 'case', name: '+30', parentId: 482 },
  { id: 617, type: 'case', name: '+20', parentId: 482 },
  { id: 618, type: 'case', name: '+10', parentId: 482 },
  { id: 619, type: 'case', name: '0', parentId: 482 },
  { id: 620, type: 'case', name: '-10', parentId: 482 },
  { id: 621, type: 'case', name: '-20', parentId: 482 },
  { id: 622, type: 'case', name: '-30', parentId: 482 },
  { id: 623, type: 'case', name: '-40', parentId: 482 },
  { id: 624, type: 'case', name: '-50', parentId: 482 },

  { id: 625, type: 'case', name: '+50', parentId: 484 },
  { id: 626, type: 'case', name: '+40', parentId: 484 },
  { id: 627, type: 'case', name: '+30', parentId: 484 },
  { id: 628, type: 'case', name: '+20', parentId: 484 },
  { id: 629, type: 'case', name: '+10', parentId: 484 },
  { id: 630, type: 'case', name: '0', parentId: 484 },
  { id: 631, type: 'case', name: '-10', parentId: 484 },
  { id: 632, type: 'case', name: '-20', parentId: 484 },
  { id: 633, type: 'case', name: '-30', parentId: 484 },
  { id: 634, type: 'case', name: '-40', parentId: 484 },
  { id: 635, type: 'case', name: '-50', parentId: 484 },

  { id: 636, type: 'group', name: 'NPC1', parentId: 499 },
  { id: 637, type: 'group', name: 'NPC2', parentId: 499 },
  { id: 638, type: 'group', name: 'NPC3', parentId: 499 },

  { id: 639, type: 'case', name: '1', parentId: 513 },
  { id: 640, type: 'case', name: '2', parentId: 513 },
  { id: 641, type: 'case', name: '3', parentId: 513 },
  { id: 642, type: 'case', name: '4', parentId: 513 },

  { id: 643, type: 'group', name: 'NPC1', parentId: 527 },
  { id: 644, type: 'group', name: 'NPC2', parentId: 527 },
  { id: 645, type: 'group', name: 'NPC3', parentId: 527 },

  { id: 646, type: 'case', name: '1', parentId: 541 },
  { id: 647, type: 'case', name: '2', parentId: 541 },
  { id: 648, type: 'case', name: '3', parentId: 541 },
  { id: 649, type: 'case', name: '4', parentId: 541 },

  { id: 650, type: 'group', name: 'NPC1', parentId: 555 },
  { id: 651, type: 'group', name: 'NPC2', parentId: 555 },
  { id: 652, type: 'group', name: 'NPC3', parentId: 555 },

  { id: 653, type: 'case', name: '1', parentId: 569 },
  { id: 654, type: 'case', name: '2', parentId: 569 },
  { id: 655, type: 'case', name: '3', parentId: 569 },
  { id: 656, type: 'case', name: '4', parentId: 569 },

  { id: 657, type: 'group', name: 'O', parentId: 636 },
  { id: 658, type: 'case', name: 'X', parentId: 636 },

  { id: 659, type: 'group', name: 'O', parentId: 637 },
  { id: 660, type: 'case', name: 'X', parentId: 637 },

  { id: 661, type: 'group', name: 'O', parentId: 638 },
  { id: 662, type: 'case', name: 'X', parentId: 638 },

  { id: 663, type: 'group', name: 'O', parentId: 643 },
  { id: 664, type: 'case', name: 'X', parentId: 643 },

  { id: 665, type: 'group', name: 'O', parentId: 644 },
  { id: 666, type: 'case', name: 'X', parentId: 644 },

  { id: 667, type: 'group', name: 'O', parentId: 645 },
  { id: 668, type: 'case', name: 'X', parentId: 645 },

  { id: 669, type: 'group', name: 'O', parentId: 650 },
  { id: 670, type: 'case', name: 'X', parentId: 650 },

  { id: 671, type: 'group', name: 'O', parentId: 651 },
  { id: 672, type: 'case', name: 'X', parentId: 651 },

  { id: 673, type: 'group', name: 'O', parentId: 652 },
  { id: 674, type: 'case', name: 'X', parentId: 652 },

  { id: 675, type: 'group', name: 'O', parentId: 5682 },
  { id: 676, type: 'case', name: 'X', parentId: 5682 },

  { id: 677, type: 'group', name: 'O', parentId: 5683 },
  { id: 678, type: 'case', name: 'X', parentId: 5683 },

  { id: 679, type: 'group', name: 'O', parentId: 5684 },
  { id: 680, type: 'case', name: 'X', parentId: 5684 },

  { id: 681, type: 'group', name: 'O', parentId: 5122 },
  { id: 682, type: 'case', name: 'X', parentId: 5122 },

  { id: 683, type: 'group', name: 'O', parentId: 5123 },
  { id: 684, type: 'case', name: 'X', parentId: 5123 },

  { id: 685, type: 'group', name: 'O', parentId: 5124 },
  { id: 686, type: 'case', name: 'X', parentId: 5124 },

  { id: 687, type: 'group', name: 'O', parentId: 5402 },
  { id: 688, type: 'case', name: 'X', parentId: 5402 },

  { id: 689, type: 'group', name: 'O', parentId: 5403 },
  { id: 690, type: 'case', name: 'X', parentId: 5403 },

  { id: 691, type: 'group', name: 'O', parentId: 5404 },
  { id: 692, type: 'case', name: 'X', parentId: 5404 },

  { id: 693, type: 'case', name: '+50', parentId: 657 },
  { id: 694, type: 'case', name: '+40', parentId: 657 },
  { id: 695, type: 'case', name: '+30', parentId: 657 },
  { id: 696, type: 'case', name: '+20', parentId: 657 },
  { id: 697, type: 'case', name: '+10', parentId: 657 },
  { id: 698, type: 'case', name: '0', parentId: 657 },
  { id: 699, type: 'case', name: '-10', parentId: 657 },
  { id: 700, type: 'case', name: '-20', parentId: 657 },
  { id: 701, type: 'case', name: '-30', parentId: 657 },
  { id: 702, type: 'case', name: '-40', parentId: 657 },
  { id: 703, type: 'case', name: '-50', parentId: 657 },

  { id: 704, type: 'case', name: '+50', parentId: 659 },
  { id: 705, type: 'case', name: '+40', parentId: 659 },
  { id: 706, type: 'case', name: '+30', parentId: 659 },
  { id: 707, type: 'case', name: '+20', parentId: 659 },
  { id: 708, type: 'case', name: '+10', parentId: 659 },
  { id: 709, type: 'case', name: '0', parentId: 659 },
  { id: 710, type: 'case', name: '-10', parentId: 659 },
  { id: 711, type: 'case', name: '-20', parentId: 659 },
  { id: 712, type: 'case', name: '-30', parentId: 659 },
  { id: 713, type: 'case', name: '-40', parentId: 659 },
  { id: 714, type: 'case', name: '-50', parentId: 659 },

  { id: 715, type: 'case', name: '+50', parentId: 661 },
  { id: 716, type: 'case', name: '+40', parentId: 661 },
  { id: 717, type: 'case', name: '+30', parentId: 661 },
  { id: 718, type: 'case', name: '+20', parentId: 661 },
  { id: 719, type: 'case', name: '+10', parentId: 661 },
  { id: 720, type: 'case', name: '0', parentId: 661 },
  { id: 721, type: 'case', name: '-10', parentId: 661 },
  { id: 722, type: 'case', name: '-20', parentId: 661 },
  { id: 723, type: 'case', name: '-30', parentId: 661 },
  { id: 724, type: 'case', name: '-40', parentId: 661 },
  { id: 725, type: 'case', name: '-50', parentId: 661 },

  { id: 726, type: 'case', name: '+50', parentId: 681 },
  { id: 727, type: 'case', name: '+40', parentId: 681 },
  { id: 728, type: 'case', name: '+30', parentId: 681 },
  { id: 729, type: 'case', name: '+20', parentId: 681 },
  { id: 730, type: 'case', name: '+10', parentId: 681 },
  { id: 731, type: 'case', name: '0', parentId: 681 },
  { id: 732, type: 'case', name: '-10', parentId: 681 },
  { id: 733, type: 'case', name: '-20', parentId: 681 },
  { id: 734, type: 'case', name: '-30', parentId: 681 },
  { id: 735, type: 'case', name: '-40', parentId: 681 },
  { id: 736, type: 'case', name: '-50', parentId: 681 },

  { id: 746, type: 'case', name: '+50', parentId: 683 },
  { id: 747, type: 'case', name: '+40', parentId: 683 },
  { id: 748, type: 'case', name: '+30', parentId: 683 },
  { id: 749, type: 'case', name: '+20', parentId: 683 },
  { id: 750, type: 'case', name: '+10', parentId: 683 },
  { id: 752, type: 'case', name: '0', parentId: 683 },
  { id: 753, type: 'case', name: '-10', parentId: 683 },
  { id: 754, type: 'case', name: '-20', parentId: 683 },
  { id: 755, type: 'case', name: '-30', parentId: 683 },
  { id: 756, type: 'case', name: '-40', parentId: 683 },
  { id: 757, type: 'case', name: '-50', parentId: 683 },

  { id: 758, type: 'case', name: '+50', parentId: 685 },
  { id: 759, type: 'case', name: '+40', parentId: 685 },
  { id: 760, type: 'case', name: '+30', parentId: 685 },
  { id: 761, type: 'case', name: '+20', parentId: 685 },
  { id: 762, type: 'case', name: '+10', parentId: 685 },
  { id: 763, type: 'case', name: '0', parentId: 685 },
  { id: 764, type: 'case', name: '-10', parentId: 685 },
  { id: 765, type: 'case', name: '-20', parentId: 685 },
  { id: 766, type: 'case', name: '-30', parentId: 685 },
  { id: 767, type: 'case', name: '-40', parentId: 685 },
  { id: 768, type: 'case', name: '-50', parentId: 685 },

  { id: 769, type: 'case', name: '+50', parentId: 663 },
  { id: 770, type: 'case', name: '+40', parentId: 663 },
  { id: 771, type: 'case', name: '+30', parentId: 663 },
  { id: 772, type: 'case', name: '+20', parentId: 663 },
  { id: 773, type: 'case', name: '+10', parentId: 663 },
  { id: 774, type: 'case', name: '0', parentId: 663 },
  { id: 775, type: 'case', name: '-10', parentId: 663 },
  { id: 776, type: 'case', name: '-20', parentId: 663 },
  { id: 777, type: 'case', name: '-30', parentId: 663 },
  { id: 778, type: 'case', name: '-40', parentId: 663 },
  { id: 779, type: 'case', name: '-50', parentId: 663 },

  { id: 780, type: 'case', name: '+50', parentId: 665 },
  { id: 781, type: 'case', name: '+40', parentId: 665 },
  { id: 782, type: 'case', name: '+30', parentId: 665 },
  { id: 783, type: 'case', name: '+20', parentId: 665 },
  { id: 784, type: 'case', name: '+10', parentId: 665 },
  { id: 785, type: 'case', name: '0', parentId: 665 },
  { id: 786, type: 'case', name: '-10', parentId: 665 },
  { id: 787, type: 'case', name: '-20', parentId: 665 },
  { id: 788, type: 'case', name: '-30', parentId: 665 },
  { id: 789, type: 'case', name: '-40', parentId: 665 },
  { id: 790, type: 'case', name: '-50', parentId: 665 },

  { id: 791, type: 'case', name: '+50', parentId: 667 },
  { id: 792, type: 'case', name: '+40', parentId: 667 },
  { id: 793, type: 'case', name: '+30', parentId: 667 },
  { id: 794, type: 'case', name: '+20', parentId: 667 },
  { id: 795, type: 'case', name: '+10', parentId: 667 },
  { id: 796, type: 'case', name: '0', parentId: 667 },
  { id: 797, type: 'case', name: '-10', parentId: 667 },
  { id: 798, type: 'case', name: '-20', parentId: 667 },
  { id: 799, type: 'case', name: '-30', parentId: 667 },
  { id: 800, type: 'case', name: '-40', parentId: 667 },
  { id: 801, type: 'case', name: '-50', parentId: 667 },

  { id: 802, type: 'case', name: '+50', parentId: 687 },
  { id: 803, type: 'case', name: '+40', parentId: 687 },
  { id: 804, type: 'case', name: '+30', parentId: 687 },
  { id: 805, type: 'case', name: '+20', parentId: 687 },
  { id: 806, type: 'case', name: '+10', parentId: 687 },
  { id: 807, type: 'case', name: '0', parentId: 687 },
  { id: 808, type: 'case', name: '-10', parentId: 687 },
  { id: 809, type: 'case', name: '-20', parentId: 687 },
  { id: 810, type: 'case', name: '-30', parentId: 687 },
  { id: 811, type: 'case', name: '-40', parentId: 687 },
  { id: 812, type: 'case', name: '-50', parentId: 687 },

  { id: 813, type: 'case', name: '+50', parentId: 689 },
  { id: 814, type: 'case', name: '+40', parentId: 689 },
  { id: 815, type: 'case', name: '+30', parentId: 689 },
  { id: 816, type: 'case', name: '+20', parentId: 689 },
  { id: 817, type: 'case', name: '+10', parentId: 689 },
  { id: 818, type: 'case', name: '0', parentId: 689 },
  { id: 819, type: 'case', name: '-10', parentId: 689 },
  { id: 820, type: 'case', name: '-20', parentId: 689 },
  { id: 821, type: 'case', name: '-30', parentId: 689 },
  { id: 822, type: 'case', name: '-40', parentId: 689 },
  { id: 823, type: 'case', name: '-50', parentId: 689 },

  { id: 824, type: 'case', name: '+50', parentId: 691 },
  { id: 825, type: 'case', name: '+40', parentId: 691 },
  { id: 826, type: 'case', name: '+30', parentId: 691 },
  { id: 827, type: 'case', name: '+20', parentId: 691 },
  { id: 828, type: 'case', name: '+10', parentId: 691 },
  { id: 829, type: 'case', name: '0', parentId: 691 },
  { id: 830, type: 'case', name: '-10', parentId: 691 },
  { id: 831, type: 'case', name: '-20', parentId: 691 },
  { id: 832, type: 'case', name: '-30', parentId: 691 },
  { id: 833, type: 'case', name: '-40', parentId: 691 },
  { id: 834, type: 'case', name: '-50', parentId: 691 },

  { id: 835, type: 'case', name: '+50', parentId: 669 },
  { id: 836, type: 'case', name: '+40', parentId: 669 },
  { id: 837, type: 'case', name: '+30', parentId: 669 },
  { id: 838, type: 'case', name: '+20', parentId: 669 },
  { id: 839, type: 'case', name: '+10', parentId: 669 },
  { id: 840, type: 'case', name: '0', parentId: 669 },
  { id: 841, type: 'case', name: '-10', parentId: 669 },
  { id: 842, type: 'case', name: '-20', parentId: 669 },
  { id: 843, type: 'case', name: '-30', parentId: 669 },
  { id: 844, type: 'case', name: '-40', parentId: 669 },
  { id: 845, type: 'case', name: '-50', parentId: 669 },

  { id: 846, type: 'case', name: '+50', parentId: 671 },
  { id: 847, type: 'case', name: '+40', parentId: 671 },
  { id: 848, type: 'case', name: '+30', parentId: 671 },
  { id: 849, type: 'case', name: '+20', parentId: 671 },
  { id: 850, type: 'case', name: '+10', parentId: 671 },
  { id: 851, type: 'case', name: '0', parentId: 671 },
  { id: 852, type: 'case', name: '-10', parentId: 671 },
  { id: 853, type: 'case', name: '-20', parentId: 671 },
  { id: 854, type: 'case', name: '-30', parentId: 671 },
  { id: 855, type: 'case', name: '-40', parentId: 671 },
  { id: 866, type: 'case', name: '-50', parentId: 671 },

  { id: 867, type: 'case', name: '+50', parentId: 673 },
  { id: 868, type: 'case', name: '+40', parentId: 673 },
  { id: 869, type: 'case', name: '+30', parentId: 673 },
  { id: 870, type: 'case', name: '+20', parentId: 673 },
  { id: 871, type: 'case', name: '+10', parentId: 673 },
  { id: 872, type: 'case', name: '0', parentId: 673 },
  { id: 873, type: 'case', name: '-10', parentId: 673 },
  { id: 874, type: 'case', name: '-20', parentId: 673 },
  { id: 875, type: 'case', name: '-30', parentId: 673 },
  { id: 876, type: 'case', name: '-40', parentId: 673 },
  { id: 877, type: 'case', name: '-50', parentId: 673 },

  { id: 878, type: 'case', name: '+50', parentId: 675 },
  { id: 879, type: 'case', name: '+40', parentId: 675 },
  { id: 880, type: 'case', name: '+30', parentId: 675 },
  { id: 881, type: 'case', name: '+20', parentId: 675 },
  { id: 882, type: 'case', name: '+10', parentId: 675 },
  { id: 883, type: 'case', name: '0', parentId: 675 },
  { id: 884, type: 'case', name: '-10', parentId: 675 },
  { id: 885, type: 'case', name: '-20', parentId: 675 },
  { id: 886, type: 'case', name: '-30', parentId: 675 },
  { id: 887, type: 'case', name: '-40', parentId: 675 },
  { id: 888, type: 'case', name: '-50', parentId: 675 },

  { id: 889, type: 'case', name: '+50', parentId: 677 },
  { id: 890, type: 'case', name: '+40', parentId: 677 },
  { id: 891, type: 'case', name: '+30', parentId: 677 },
  { id: 892, type: 'case', name: '+20', parentId: 677 },
  { id: 893, type: 'case', name: '+10', parentId: 677 },
  { id: 894, type: 'case', name: '0', parentId: 677 },
  { id: 895, type: 'case', name: '-10', parentId: 677 },
  { id: 896, type: 'case', name: '-20', parentId: 677 },
  { id: 897, type: 'case', name: '-30', parentId: 677 },
  { id: 898, type: 'case', name: '-40', parentId: 677 },
  { id: 899, type: 'case', name: '-50', parentId: 677 },

  { id: 900, type: 'case', name: '+50', parentId: 679 },
  { id: 901, type: 'case', name: '+40', parentId: 679 },
  { id: 902, type: 'case', name: '+30', parentId: 679 },
  { id: 903, type: 'case', name: '+20', parentId: 679 },
  { id: 904, type: 'case', name: '+10', parentId: 679 },
  { id: 905, type: 'case', name: '0', parentId: 679 },
  { id: 906, type: 'case', name: '-10', parentId: 679 },
  { id: 907, type: 'case', name: '-20', parentId: 679 },
  { id: 908, type: 'case', name: '-30', parentId: 679 },
  { id: 909, type: 'case', name: '-40', parentId: 679 },
  { id: 910, type: 'case', name: '-50', parentId: 679 },

  /* ------------------------------------------------------------------------------------------------------------------------------ */
  /* ---------------------------------------------------------Layer 5-------------------------------------------------------------- */

  { id: 911, type: 'group', name: '시간', parentId: 5 },
  { id: 912, type: 'group', name: '기상 환경', parentId: 5 },

  { id: 913, type: 'group', name: '시간대', parentId: 911 },
  { id: 914, type: 'group', name: '요일', parentId: 911 },

  { id: 915, type: 'group', name: '날씨', parentId: 912 },
  { id: 916, type: 'group', name: '기온', parentId: 912 },
  { id: 917, type: 'group', name: '조도', parentId: 912 },

  { id: 918, type: 'case', name: '새벽', parentId: 913 },
  { id: 919, type: 'case', name: '오후', parentId: 913 },
  { id: 920, type: 'case', name: '야간', parentId: 913 },
  { id: 921, type: 'case', name: '오전', parentId: 913 },

  { id: 922, type: 'case', name: '주중', parentId: 914 },
  { id: 923, type: 'case', name: '주말', parentId: 914 },

  { id: 924, type: 'case', name: '맑음', parentId: 915 },
  { id: 925, type: 'case', name: '흐림', parentId: 915 },
  { id: 926, type: 'case', name: '눈', parentId: 915 },
  { id: 927, type: 'case', name: '비', parentId: 915 },
  { id: 928, type: 'case', name: '악천후', parentId: 915 },

  { id: 929, type: 'case', name: '영상', parentId: 916 },
  { id: 930, type: 'case', name: '영하', parentId: 916 },

  { id: 931, type: 'case', name: '빛(조명)', parentId: 917 },
  { id: 932, type: 'case', name: '빛(태양)', parentId: 917 },
  { id: 933, type: 'case', name: '어둠', parentId: 917 },

  /* ------------------------------------------------------------------------------------------------------------------------------ */
  /* ---------------------------------------------------------Layer 6-------------------------------------------------------------- */

  { id: 934, type: 'group', name: '센싱정보', parentId: 6 },
  { id: 935, type: 'group', name: '통신정보', parentId: 6 },
  { id: 936, type: 'group', name: '위치정보', parentId: 6 },

  { id: 937, type: 'group', name: 'Camera센서', parentId: 934 },
  { id: 938, type: 'group', name: 'Radar센서', parentId: 934 },
  { id: 939, type: 'group', name: 'LiDAR센서', parentId: 934 },

  { id: 940, type: 'group', name: 'V2I', parentId: 935 },
  { id: 941, type: 'group', name: 'V2V', parentId: 935 },
  { id: 942, type: 'group', name: 'V2P', parentId: 935 },
  { id: 943, type: 'group', name: 'V2N', parentId: 935 },
  { id: 944, type: 'group', name: 'V2C', parentId: 935 },

  { id: 945, type: 'group', name: 'GPS 정보', parentId: 936 },
  { id: 946, type: 'group', name: '전자지도 정보', parentId: 936 },

  { id: 947, type: 'case', name: '--', parentId: 937 },
  { id: 948, type: 'case', name: '-', parentId: 937 },
  { id: 949, type: 'case', name: '0', parentId: 937 },
  { id: 950, type: 'case', name: '+', parentId: 937 },
  { id: 951, type: 'case', name: '++', parentId: 937 },

  { id: 952, type: 'case', name: '--', parentId: 938 },
  { id: 953, type: 'case', name: '-', parentId: 938 },
  { id: 954, type: 'case', name: '0', parentId: 938 },
  { id: 955, type: 'case', name: '+', parentId: 938 },
  { id: 956, type: 'case', name: '++', parentId: 938 },

  { id: 957, type: 'case', name: '--', parentId: 939 },
  { id: 958, type: 'case', name: '-', parentId: 939 },
  { id: 959, type: 'case', name: '0', parentId: 939 },
  { id: 960, type: 'case', name: '+', parentId: 939 },
  { id: 961, type: 'case', name: '++', parentId: 939 },

  { id: 962, type: 'case', name: '사용', parentId: 940 },
  { id: 963, type: 'case', name: '미사용', parentId: 940 },

  { id: 964, type: 'case', name: '사용', parentId: 941 },
  { id: 965, type: 'case', name: '미사용', parentId: 941 },

  { id: 966, type: 'case', name: '사용', parentId: 942 },
  { id: 967, type: 'case', name: '미사용', parentId: 942 },

  { id: 968, type: 'case', name: '사용', parentId: 943 },
  { id: 969, type: 'case', name: '미사용', parentId: 943 },

  { id: 970, type: 'case', name: '사용', parentId: 944 },
  { id: 971, type: 'case', name: '미사용', parentId: 944 },

  { id: 972, type: 'case', name: '--', parentId: 945 },
  { id: 973, type: 'case', name: '-', parentId: 945 },
  { id: 974, type: 'case', name: '0', parentId: 945 },
  { id: 975, type: 'case', name: '+', parentId: 945 },
  { id: 976, type: 'case', name: '++', parentId: 945 },

  { id: 977, type: 'case', name: '--', parentId: 946 },
  { id: 978, type: 'case', name: '-', parentId: 946 },
  { id: 979, type: 'case', name: '0', parentId: 946 },
  { id: 980, type: 'case', name: '+', parentId: 946 },
  { id: 981, type: 'case', name: '++', parentId: 946 },
];
