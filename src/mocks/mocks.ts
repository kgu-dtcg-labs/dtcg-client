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
  { id: 186, type: 'group', name: '행동 정의', parentId: 4 },
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
  { id: 200, type: 'group', name: 'Lateral Action', parentId: 186 },

  { id: 201, type: 'group', name: 'Target Speed Reached', parentId: 187 },
  { id: 202, type: 'group', name: 'TargetDistance Achieved', parentId: 187 },
  { id: 203, type: 'group', name: 'Time Elapsed', parentId: 187 },
  { id: 204, type: 'group', name: 'Event Completed', parentId: 187 },

  { id: 205, type: 'group', name: '객체종류', parentId: 192 },
  { id: 206, type: 'group', name: '객체종류', parentId: 193 },
  { id: 207, type: 'group', name: '객체종류', parentId: 194 },
  { id: 208, type: 'group', name: '객체종류', parentId: 195 },

  { id: 209, type: 'group', name: 'O', parentId: 196 },
  { id: 210, type: 'case', name: 'X', parentId: 196 },

  { id: 211, type: 'group', name: 'O', parentId: 197 },
  { id: 212, type: 'case', name: 'X', parentId: 197 },

  { id: 213, type: 'group', name: 'O', parentId: 198 },
  { id: 214, type: 'case', name: 'X', parentId: 198 },

  { id: 215, type: 'group', name: 'Speed Action Dynamics', parentId: 199 },
  { id: 216, type: 'group', name: 'Speed Action Target', parentId: 199 },

  { id: 217, type: 'group', name: 'Lane Change Action', parentId: 200 },
  { id: 218, type: 'group', name: 'Target Lane Change Action', parentId: 200 },

  { id: 219, type: 'case', name: '0km/h', parentId: 201 },
  { id: 220, type: 'case', name: '20km/h', parentId: 201 },
  { id: 221, type: 'case', name: '40km/h', parentId: 201 },
  { id: 222, type: 'case', name: '60km/h', parentId: 201 },
  { id: 223, type: 'case', name: '80km/h', parentId: 201 },
  { id: 224, type: 'case', name: '100km/h', parentId: 201 },
  { id: 225, type: 'case', name: '120km/h', parentId: 201 },
  { id: 226, type: 'case', name: '140km/h', parentId: 201 },
  { id: 227, type: 'case', name: '160km/h', parentId: 201 },
  { id: 228, type: 'case', name: '180km/h', parentId: 201 },

  { id: 229, type: 'group', name: 'Trigger 선정 유무', parentId: 202 },

  { id: 230, type: 'case', name: '30', parentId: 203 },
  { id: 231, type: 'case', name: '60', parentId: 203 },
  { id: 232, type: 'case', name: '90', parentId: 203 },
  { id: 233, type: 'case', name: '120', parentId: 203 },
  { id: 234, type: 'case', name: '150', parentId: 203 },
  { id: 235, type: 'case', name: '180', parentId: 203 },
  { id: 236, type: 'case', name: '210', parentId: 203 },
  { id: 237, type: 'case', name: '240', parentId: 203 },
  { id: 238, type: 'case', name: '270', parentId: 203 },
  { id: 239, type: 'case', name: '300', parentId: 203 },

  { id: 240, type: 'case', name: 'Change lane Completed', parentId: 204 },

  { id: 241, type: 'case', name: '승용차', parentId: 205 },
  { id: 242, type: 'case', name: '승합차', parentId: 205 },
  { id: 243, type: 'case', name: '버스', parentId: 205 },
  { id: 244, type: 'case', name: '화물차', parentId: 205 },
  { id: 245, type: 'case', name: '특수차', parentId: 205 },

  { id: 246, type: 'case', name: '승용차', parentId: 206 },
  { id: 247, type: 'case', name: '승합차', parentId: 206 },
  { id: 248, type: 'case', name: '버스', parentId: 206 },
  { id: 249, type: 'case', name: '화물차', parentId: 206 },
  { id: 250, type: 'case', name: '특수차', parentId: 206 },

  { id: 251, type: 'case', name: '승용차', parentId: 207 },
  { id: 252, type: 'case', name: '승합차', parentId: 207 },
  { id: 253, type: 'case', name: '버스', parentId: 207 },
  { id: 254, type: 'case', name: '화물차', parentId: 207 },
  { id: 255, type: 'case', name: '특수차', parentId: 207 },

  { id: 256, type: 'case', name: '승용차', parentId: 208 },
  { id: 257, type: 'case', name: '승합차', parentId: 208 },
  { id: 258, type: 'case', name: '버스', parentId: 208 },
  { id: 259, type: 'case', name: '화물차', parentId: 208 },
  { id: 260, type: 'case', name: '특수차', parentId: 208 },

  { id: 261, type: 'group', name: '객체위치', parentId: 209 },
  { id: 262, type: 'group', name: '객체 속도', parentId: 209 },
  { id: 263, type: 'group', name: '객체 간의 거리', parentId: 209 },

  { id: 264, type: 'group', name: '객체위치', parentId: 211 },
  { id: 265, type: 'group', name: '객체 속도', parentId: 211 },
  { id: 266, type: 'group', name: '객체 간의 거리', parentId: 211 },

  { id: 267, type: 'group', name: '객체위치', parentId: 213 },
  { id: 268, type: 'group', name: '객체 속도', parentId: 213 },
  { id: 269, type: 'group', name: '객체 간의 거리', parentId: 213 },

  { id: 270, type: 'group', name: 'Dynamics Shape', parentId: 215 },
  { id: 271, type: 'group', name: 'Dynamics Dimension', parentId: 215 },
  { id: 272, type: 'group', name: 'value', parentId: 215 },

  { id: 273, type: 'group', name: 'Dynamics Shape', parentId: 216 },
  { id: 274, type: 'group', name: 'Dynamics Dimension', parentId: 216 },
  { id: 275, type: 'group', name: 'value', parentId: 216 },

  { id: 276, type: 'group', name: 'Dynamics Shape', parentId: 217 },
  { id: 277, type: 'group', name: 'Dynamics Dimension', parentId: 217 },

  { id: 278, type: 'group', name: 'Dynamics Shape', parentId: 218 },
  { id: 279, type: 'group', name: 'Dynamics Dimension', parentId: 218 },
  { id: 280, type: 'group', name: 'value', parentId: 218 },

  { id: 281, type: 'group', name: 'NPC1', parentId: 229 },
  { id: 282, type: 'group', name: 'NPC2', parentId: 229 },
  { id: 283, type: 'group', name: 'NPC3', parentId: 229 },

  { id: 284, type: 'group', name: '방향', parentId: 261 },
  { id: 285, type: 'group', name: '차로', parentId: 261 },

  { id: 286, type: 'case', name: '30~50', parentId: 262 },
  { id: 287, type: 'case', name: '50~70', parentId: 262 },
  { id: 288, type: 'case', name: '70~90', parentId: 262 },
  { id: 289, type: 'case', name: '90~120', parentId: 262 },

  { id: 290, type: 'case', name: '+50', parentId: 263 },
  { id: 291, type: 'case', name: '+40', parentId: 263 },
  { id: 292, type: 'case', name: '+30', parentId: 263 },
  { id: 293, type: 'case', name: '+20', parentId: 263 },
  { id: 294, type: 'case', name: '+10', parentId: 263 },
  { id: 295, type: 'case', name: '0', parentId: 263 },
  { id: 296, type: 'case', name: '-10', parentId: 263 },
  { id: 297, type: 'case', name: '-20', parentId: 263 },
  { id: 298, type: 'case', name: '-30', parentId: 263 },
  { id: 299, type: 'case', name: '-40', parentId: 263 },
  { id: 300, type: 'case', name: '-50', parentId: 263 },

  { id: 301, type: 'group', name: '방향', parentId: 264 },
  { id: 302, type: 'group', name: '차로', parentId: 264 },

  { id: 303, type: 'case', name: '30~50', parentId: 265 },
  { id: 304, type: 'case', name: '50~70', parentId: 265 },
  { id: 305, type: 'case', name: '70~90', parentId: 265 },
  { id: 306, type: 'case', name: '90~120', parentId: 265 },

  { id: 307, type: 'case', name: '+50', parentId: 266 },
  { id: 308, type: 'case', name: '+40', parentId: 266 },
  { id: 309, type: 'case', name: '+30', parentId: 266 },
  { id: 310, type: 'case', name: '+20', parentId: 266 },
  { id: 311, type: 'case', name: '+10', parentId: 266 },
  { id: 312, type: 'case', name: '0', parentId: 266 },
  { id: 313, type: 'case', name: '-10', parentId: 266 },
  { id: 314, type: 'case', name: '-20', parentId: 266 },
  { id: 315, type: 'case', name: '-30', parentId: 266 },
  { id: 316, type: 'case', name: '-40', parentId: 266 },
  { id: 317, type: 'case', name: '-50', parentId: 266 },

  { id: 318, type: 'group', name: '방향', parentId: 267 },
  { id: 319, type: 'group', name: '차로', parentId: 267 },

  { id: 320, type: 'case', name: '30~50', parentId: 268 },
  { id: 321, type: 'case', name: '50~70', parentId: 268 },
  { id: 322, type: 'case', name: '70~90', parentId: 268 },
  { id: 323, type: 'case', name: '90~120', parentId: 268 },

  { id: 324, type: 'case', name: '+50', parentId: 269 },
  { id: 325, type: 'case', name: '+40', parentId: 269 },
  { id: 326, type: 'case', name: '+30', parentId: 269 },
  { id: 327, type: 'case', name: '+20', parentId: 269 },
  { id: 328, type: 'case', name: '+10', parentId: 269 },
  { id: 329, type: 'case', name: '0', parentId: 269 },
  { id: 330, type: 'case', name: '-10', parentId: 269 },
  { id: 331, type: 'case', name: '-20', parentId: 269 },
  { id: 332, type: 'case', name: '-30', parentId: 269 },
  { id: 333, type: 'case', name: '-40', parentId: 269 },
  { id: 334, type: 'case', name: '-50', parentId: 269 },

  { id: 335, type: 'case', name: 'Linear', parentId: 270 },
  { id: 336, type: 'case', name: 'Step', parentId: 270 },
  { id: 337, type: 'case', name: 'Sinusoidal', parentId: 270 },

  { id: 338, type: 'group', name: 'time', parentId: 271 },
  { id: 339, type: 'group', name: '객체간 거리', parentId: 271 },

  { id: 340, type: 'case', name: '+50', parentId: 272 },
  { id: 341, type: 'case', name: '+40', parentId: 272 },
  { id: 342, type: 'case', name: '+30', parentId: 272 },
  { id: 343, type: 'case', name: '+20', parentId: 272 },
  { id: 344, type: 'case', name: '+10', parentId: 272 },
  { id: 345, type: 'case', name: '0', parentId: 272 },
  { id: 346, type: 'case', name: '-10', parentId: 272 },
  { id: 347, type: 'case', name: '-20', parentId: 272 },
  { id: 348, type: 'case', name: '-30', parentId: 272 },
  { id: 349, type: 'case', name: '-40', parentId: 272 },
  { id: 350, type: 'case', name: '-50', parentId: 272 },

  { id: 351, type: 'case', name: 'Linear', parentId: 273 },
  { id: 352, type: 'case', name: 'Step', parentId: 273 },
  { id: 353, type: 'case', name: 'Sinusoidal', parentId: 273 },

  { id: 354, type: 'group', name: 'time', parentId: 274 },
  { id: 355, type: 'group', name: '객체간 거리', parentId: 274 },

  { id: 356, type: 'group', name: '목표 속도 값', parentId: 275 },

  { id: 357, type: 'case', name: 'Linear', parentId: 276 },
  { id: 358, type: 'case', name: 'Step', parentId: 276 },
  { id: 359, type: 'case', name: 'Sinusoidal', parentId: 276 },

  { id: 360, type: 'group', name: 'time', parentId: 277 },
  { id: 361, type: 'group', name: '객체 간 거리', parentId: 277 },

  { id: 362, type: 'case', name: 'Linear', parentId: 278 },
  { id: 363, type: 'case', name: 'Step', parentId: 278 },
  { id: 364, type: 'case', name: 'Sinusoidal', parentId: 278 },

  { id: 365, type: 'group', name: 'time', parentId: 279 },
  { id: 366, type: 'group', name: '객체 간 거리', parentId: 279 },

  { id: 367, type: 'group', name: '목표 차선 값', parentId: 280 },

  { id: 368, type: 'group', name: 'O', parentId: 281 },
  { id: 369, type: 'case', name: 'X', parentId: 281 },

  { id: 370, type: 'group', name: 'O', parentId: 282 },
  { id: 371, type: 'case', name: 'X', parentId: 282 },

  { id: 372, type: 'group', name: 'O', parentId: 283 },
  { id: 373, type: 'case', name: 'X', parentId: 283 },

  { id: 374, type: 'case', name: 'N', parentId: 284 },
  { id: 375, type: 'case', name: 'S', parentId: 284 },
  { id: 376, type: 'case', name: 'E', parentId: 284 },
  { id: 377, type: 'case', name: 'W', parentId: 284 },

  { id: 378, type: 'case', name: '1', parentId: 285 },
  { id: 379, type: 'case', name: '2', parentId: 285 },
  { id: 380, type: 'case', name: '3', parentId: 285 },
  { id: 381, type: 'case', name: '4', parentId: 285 },
  { id: 382, type: 'case', name: '5', parentId: 285 },

  { id: 383, type: 'case', name: 'N', parentId: 301 },
  { id: 384, type: 'case', name: 'S', parentId: 301 },
  { id: 385, type: 'case', name: 'E', parentId: 301 },
  { id: 386, type: 'case', name: 'W', parentId: 301 },

  { id: 387, type: 'case', name: '1', parentId: 302 },
  { id: 388, type: 'case', name: '2', parentId: 302 },
  { id: 389, type: 'case', name: '3', parentId: 302 },
  { id: 390, type: 'case', name: '4', parentId: 302 },
  { id: 391, type: 'case', name: '5', parentId: 302 },

  { id: 392, type: 'case', name: 'N', parentId: 318 },
  { id: 393, type: 'case', name: 'S', parentId: 318 },
  { id: 394, type: 'case', name: 'E', parentId: 318 },
  { id: 395, type: 'case', name: 'W', parentId: 318 },

  { id: 396, type: 'case', name: '1', parentId: 319 },
  { id: 397, type: 'case', name: '2', parentId: 319 },
  { id: 398, type: 'case', name: '3', parentId: 319 },
  { id: 399, type: 'case', name: '4', parentId: 319 },
  { id: 400, type: 'case', name: '5', parentId: 319 },

  { id: 401, type: 'case', name: '30', parentId: 338 },
  { id: 402, type: 'case', name: '60', parentId: 338 },
  { id: 403, type: 'case', name: '90', parentId: 338 },
  { id: 404, type: 'case', name: '120', parentId: 338 },
  { id: 405, type: 'case', name: '150', parentId: 338 },
  { id: 406, type: 'case', name: '180', parentId: 338 },
  { id: 407, type: 'case', name: '210', parentId: 338 },
  { id: 408, type: 'case', name: '240', parentId: 338 },
  { id: 409, type: 'case', name: '270', parentId: 338 },
  { id: 410, type: 'case', name: '300', parentId: 338 },

  { id: 411, type: 'group', name: 'NPC1', parentId: 339 },
  { id: 412, type: 'group', name: 'NPC2', parentId: 339 },
  { id: 413, type: 'group', name: 'NPC3', parentId: 339 },

  { id: 414, type: 'case', name: '30', parentId: 354 },
  { id: 415, type: 'case', name: '60', parentId: 354 },
  { id: 416, type: 'case', name: '90', parentId: 354 },
  { id: 417, type: 'case', name: '120', parentId: 354 },
  { id: 418, type: 'case', name: '150', parentId: 354 },
  { id: 419, type: 'case', name: '180', parentId: 354 },
  { id: 420, type: 'case', name: '210', parentId: 354 },
  { id: 421, type: 'case', name: '240', parentId: 354 },
  { id: 422, type: 'case', name: '270', parentId: 354 },
  { id: 423, type: 'case', name: '300', parentId: 354 },

  { id: 424, type: 'group', name: 'NPC1', parentId: 355 },
  { id: 425, type: 'group', name: 'NPC2', parentId: 355 },
  { id: 426, type: 'group', name: 'NPC3', parentId: 355 },

  { id: 427, type: 'case', name: '30~50', parentId: 356 },
  { id: 428, type: 'case', name: '50~70', parentId: 356 },
  { id: 429, type: 'case', name: '70~90', parentId: 356 },
  { id: 430, type: 'case', name: '90~120', parentId: 356 },
  { id: 431, type: 'case', name: '120~140', parentId: 356 },
  { id: 432, type: 'case', name: '140~160', parentId: 356 },
  { id: 433, type: 'case', name: '160~180', parentId: 356 },

  { id: 434, type: 'case', name: '30', parentId: 360 },
  { id: 435, type: 'case', name: '60', parentId: 360 },
  { id: 436, type: 'case', name: '90', parentId: 360 },
  { id: 437, type: 'case', name: '120', parentId: 360 },
  { id: 438, type: 'case', name: '150', parentId: 360 },
  { id: 439, type: 'case', name: '180', parentId: 360 },
  { id: 440, type: 'case', name: '210', parentId: 360 },
  { id: 441, type: 'case', name: '240', parentId: 360 },
  { id: 442, type: 'case', name: '270', parentId: 360 },
  { id: 443, type: 'case', name: '300', parentId: 360 },

  { id: 444, type: 'group', name: 'NPC1', parentId: 361 },
  { id: 445, type: 'group', name: 'NPC2', parentId: 361 },
  { id: 446, type: 'group', name: 'NPC3', parentId: 361 },

  { id: 447, type: 'case', name: '30', parentId: 365 },
  { id: 448, type: 'case', name: '60', parentId: 365 },
  { id: 449, type: 'case', name: '90', parentId: 365 },
  { id: 450, type: 'case', name: '120', parentId: 365 },
  { id: 451, type: 'case', name: '150', parentId: 365 },
  { id: 452, type: 'case', name: '180', parentId: 365 },
  { id: 453, type: 'case', name: '210', parentId: 365 },
  { id: 454, type: 'case', name: '240', parentId: 365 },
  { id: 455, type: 'case', name: '270', parentId: 365 },
  { id: 456, type: 'case', name: '300', parentId: 365 },

  { id: 457, type: 'group', name: 'NPC1', parentId: 366 },
  { id: 458, type: 'group', name: 'NPC2', parentId: 366 },
  { id: 459, type: 'group', name: 'NPC3', parentId: 366 },

  { id: 460, type: 'case', name: '1', parentId: 367 },
  { id: 461, type: 'case', name: '2', parentId: 367 },
  { id: 462, type: 'case', name: '3', parentId: 367 },
  { id: 463, type: 'case', name: '4', parentId: 367 },
  { id: 464, type: 'case', name: '5', parentId: 367 },

  { id: 465, type: 'case', name: '+50', parentId: 368 },
  { id: 466, type: 'case', name: '+40', parentId: 368 },
  { id: 467, type: 'case', name: '+30', parentId: 368 },
  { id: 468, type: 'case', name: '+20', parentId: 368 },
  { id: 469, type: 'case', name: '+10', parentId: 368 },
  { id: 470, type: 'case', name: '0', parentId: 368 },
  { id: 471, type: 'case', name: '-10', parentId: 368 },
  { id: 472, type: 'case', name: '-20', parentId: 368 },
  { id: 473, type: 'case', name: '-30', parentId: 368 },
  { id: 474, type: 'case', name: '-40', parentId: 368 },
  { id: 475, type: 'case', name: '-50', parentId: 368 },

  { id: 476, type: 'case', name: '+50', parentId: 370 },
  { id: 477, type: 'case', name: '+40', parentId: 370 },
  { id: 478, type: 'case', name: '+30', parentId: 370 },
  { id: 479, type: 'case', name: '+20', parentId: 370 },
  { id: 480, type: 'case', name: '+10', parentId: 370 },
  { id: 481, type: 'case', name: '0', parentId: 370 },
  { id: 482, type: 'case', name: '-10', parentId: 370 },
  { id: 483, type: 'case', name: '-20', parentId: 370 },
  { id: 484, type: 'case', name: '-30', parentId: 370 },
  { id: 485, type: 'case', name: '-40', parentId: 370 },
  { id: 486, type: 'case', name: '-50', parentId: 370 },

  { id: 487, type: 'case', name: '+50', parentId: 372 },
  { id: 488, type: 'case', name: '+40', parentId: 372 },
  { id: 489, type: 'case', name: '+30', parentId: 372 },
  { id: 490, type: 'case', name: '+20', parentId: 372 },
  { id: 491, type: 'case', name: '+10', parentId: 372 },
  { id: 492, type: 'case', name: '0', parentId: 372 },
  { id: 493, type: 'case', name: '-10', parentId: 372 },
  { id: 494, type: 'case', name: '-20', parentId: 372 },
  { id: 495, type: 'case', name: '-30', parentId: 372 },
  { id: 496, type: 'case', name: '-40', parentId: 372 },
  { id: 497, type: 'case', name: '-50', parentId: 372 },

  { id: 498, type: 'group', name: 'O', parentId: 411 },
  { id: 499, type: 'case', name: 'X', parentId: 411 },

  { id: 500, type: 'group', name: 'O', parentId: 412 },
  { id: 501, type: 'case', name: 'X', parentId: 412 },

  { id: 502, type: 'group', name: 'O', parentId: 413 },
  { id: 503, type: 'case', name: 'X', parentId: 413 },

  { id: 504, type: 'group', name: 'O', parentId: 424 },
  { id: 505, type: 'case', name: 'X', parentId: 424 },

  { id: 506, type: 'group', name: 'O', parentId: 425 },
  { id: 507, type: 'case', name: 'X', parentId: 425 },

  { id: 508, type: 'group', name: 'O', parentId: 426 },
  { id: 509, type: 'case', name: 'X', parentId: 426 },

  { id: 510, type: 'group', name: 'O', parentId: 444 },
  { id: 511, type: 'case', name: 'X', parentId: 444 },

  { id: 512, type: 'group', name: 'O', parentId: 445 },
  { id: 513, type: 'case', name: 'X', parentId: 445 },

  { id: 514, type: 'group', name: 'O', parentId: 446 },
  { id: 515, type: 'case', name: 'X', parentId: 446 },

  { id: 516, type: 'group', name: 'O', parentId: 457 },
  { id: 517, type: 'case', name: 'X', parentId: 457 },

  { id: 518, type: 'group', name: 'O', parentId: 458 },
  { id: 519, type: 'case', name: 'X', parentId: 458 },

  { id: 520, type: 'group', name: 'O', parentId: 459 },
  { id: 521, type: 'case', name: 'X', parentId: 459 },

  { id: 522, type: 'case', name: '+50', parentId: 498 },
  { id: 523, type: 'case', name: '+40', parentId: 498 },
  { id: 524, type: 'case', name: '+30', parentId: 498 },
  { id: 525, type: 'case', name: '+20', parentId: 498 },
  { id: 526, type: 'case', name: '+10', parentId: 498 },
  { id: 527, type: 'case', name: '0', parentId: 498 },
  { id: 528, type: 'case', name: '-10', parentId: 498 },
  { id: 529, type: 'case', name: '-20', parentId: 498 },
  { id: 530, type: 'case', name: '-30', parentId: 498 },
  { id: 531, type: 'case', name: '-40', parentId: 498 },
  { id: 532, type: 'case', name: '-50', parentId: 498 },

  { id: 533, type: 'case', name: '+50', parentId: 500 },
  { id: 534, type: 'case', name: '+40', parentId: 500 },
  { id: 535, type: 'case', name: '+30', parentId: 500 },
  { id: 536, type: 'case', name: '+20', parentId: 500 },
  { id: 537, type: 'case', name: '+10', parentId: 500 },
  { id: 538, type: 'case', name: '0', parentId: 500 },
  { id: 539, type: 'case', name: '-10', parentId: 500 },
  { id: 540, type: 'case', name: '-20', parentId: 500 },
  { id: 541, type: 'case', name: '-30', parentId: 500 },
  { id: 542, type: 'case', name: '-40', parentId: 500 },
  { id: 543, type: 'case', name: '-50', parentId: 500 },

  { id: 544, type: 'case', name: '+50', parentId: 502 },
  { id: 545, type: 'case', name: '+40', parentId: 502 },
  { id: 546, type: 'case', name: '+30', parentId: 502 },
  { id: 547, type: 'case', name: '+20', parentId: 502 },
  { id: 548, type: 'case', name: '+10', parentId: 502 },
  { id: 549, type: 'case', name: '0', parentId: 502 },
  { id: 550, type: 'case', name: '-10', parentId: 502 },
  { id: 551, type: 'case', name: '-20', parentId: 502 },
  { id: 552, type: 'case', name: '-30', parentId: 502 },
  { id: 553, type: 'case', name: '-40', parentId: 502 },
  { id: 554, type: 'case', name: '-50', parentId: 502 },

  { id: 555, type: 'case', name: '+50', parentId: 504 },
  { id: 556, type: 'case', name: '+40', parentId: 504 },
  { id: 557, type: 'case', name: '+30', parentId: 504 },
  { id: 558, type: 'case', name: '+20', parentId: 504 },
  { id: 559, type: 'case', name: '+10', parentId: 504 },
  { id: 560, type: 'case', name: '0', parentId: 504 },
  { id: 561, type: 'case', name: '-10', parentId: 504 },
  { id: 562, type: 'case', name: '-20', parentId: 504 },
  { id: 563, type: 'case', name: '-30', parentId: 504 },
  { id: 564, type: 'case', name: '-40', parentId: 504 },
  { id: 565, type: 'case', name: '-50', parentId: 504 },

  { id: 566, type: 'case', name: '+50', parentId: 506 },
  { id: 567, type: 'case', name: '+40', parentId: 506 },
  { id: 568, type: 'case', name: '+30', parentId: 506 },
  { id: 569, type: 'case', name: '+20', parentId: 506 },
  { id: 570, type: 'case', name: '+10', parentId: 506 },
  { id: 571, type: 'case', name: '0', parentId: 506 },
  { id: 572, type: 'case', name: '-10', parentId: 506 },
  { id: 573, type: 'case', name: '-20', parentId: 506 },
  { id: 574, type: 'case', name: '-30', parentId: 506 },
  { id: 575, type: 'case', name: '-40', parentId: 506 },
  { id: 576, type: 'case', name: '-50', parentId: 506 },

  { id: 577, type: 'case', name: '+50', parentId: 508 },
  { id: 578, type: 'case', name: '+40', parentId: 508 },
  { id: 579, type: 'case', name: '+30', parentId: 508 },
  { id: 580, type: 'case', name: '+20', parentId: 508 },
  { id: 581, type: 'case', name: '+10', parentId: 508 },
  { id: 582, type: 'case', name: '0', parentId: 508 },
  { id: 583, type: 'case', name: '-10', parentId: 508 },
  { id: 584, type: 'case', name: '-20', parentId: 508 },
  { id: 585, type: 'case', name: '-30', parentId: 508 },
  { id: 586, type: 'case', name: '-40', parentId: 508 },
  { id: 587, type: 'case', name: '-50', parentId: 508 },

  { id: 588, type: 'case', name: '+50', parentId: 510 },
  { id: 589, type: 'case', name: '+40', parentId: 510 },
  { id: 590, type: 'case', name: '+30', parentId: 510 },
  { id: 591, type: 'case', name: '+20', parentId: 510 },
  { id: 592, type: 'case', name: '+10', parentId: 510 },
  { id: 593, type: 'case', name: '0', parentId: 510 },
  { id: 594, type: 'case', name: '-10', parentId: 510 },
  { id: 595, type: 'case', name: '-20', parentId: 510 },
  { id: 596, type: 'case', name: '-30', parentId: 510 },
  { id: 597, type: 'case', name: '-40', parentId: 510 },
  { id: 598, type: 'case', name: '-50', parentId: 510 },

  { id: 599, type: 'case', name: '+50', parentId: 512 },
  { id: 600, type: 'case', name: '+40', parentId: 512 },
  { id: 601, type: 'case', name: '+30', parentId: 512 },
  { id: 602, type: 'case', name: '+20', parentId: 512 },
  { id: 603, type: 'case', name: '+10', parentId: 512 },
  { id: 604, type: 'case', name: '0', parentId: 512 },
  { id: 605, type: 'case', name: '-10', parentId: 512 },
  { id: 606, type: 'case', name: '-20', parentId: 512 },
  { id: 607, type: 'case', name: '-30', parentId: 512 },
  { id: 608, type: 'case', name: '-40', parentId: 512 },
  { id: 609, type: 'case', name: '-50', parentId: 512 },

  { id: 610, type: 'case', name: '+50', parentId: 514 },
  { id: 611, type: 'case', name: '+40', parentId: 514 },
  { id: 612, type: 'case', name: '+30', parentId: 514 },
  { id: 613, type: 'case', name: '+20', parentId: 514 },
  { id: 614, type: 'case', name: '+10', parentId: 514 },
  { id: 615, type: 'case', name: '0', parentId: 514 },
  { id: 616, type: 'case', name: '-10', parentId: 514 },
  { id: 617, type: 'case', name: '-20', parentId: 514 },
  { id: 618, type: 'case', name: '-30', parentId: 514 },
  { id: 619, type: 'case', name: '-40', parentId: 514 },
  { id: 620, type: 'case', name: '-50', parentId: 514 },

  { id: 621, type: 'case', name: '+50', parentId: 516 },
  { id: 622, type: 'case', name: '+40', parentId: 516 },
  { id: 623, type: 'case', name: '+30', parentId: 516 },
  { id: 624, type: 'case', name: '+20', parentId: 516 },
  { id: 625, type: 'case', name: '+10', parentId: 516 },
  { id: 626, type: 'case', name: '0', parentId: 516 },
  { id: 627, type: 'case', name: '-10', parentId: 516 },
  { id: 628, type: 'case', name: '-20', parentId: 516 },
  { id: 629, type: 'case', name: '-30', parentId: 516 },
  { id: 630, type: 'case', name: '-40', parentId: 516 },
  { id: 631, type: 'case', name: '-50', parentId: 516 },

  { id: 632, type: 'case', name: '+50', parentId: 518 },
  { id: 633, type: 'case', name: '+40', parentId: 518 },
  { id: 634, type: 'case', name: '+30', parentId: 518 },
  { id: 635, type: 'case', name: '+20', parentId: 518 },
  { id: 636, type: 'case', name: '+10', parentId: 518 },
  { id: 637, type: 'case', name: '0', parentId: 518 },
  { id: 638, type: 'case', name: '-10', parentId: 518 },
  { id: 639, type: 'case', name: '-20', parentId: 518 },
  { id: 640, type: 'case', name: '-30', parentId: 518 },
  { id: 641, type: 'case', name: '-40', parentId: 518 },
  { id: 642, type: 'case', name: '-50', parentId: 518 },

  { id: 643, type: 'case', name: '+50', parentId: 520 },
  { id: 644, type: 'case', name: '+40', parentId: 520 },
  { id: 645, type: 'case', name: '+30', parentId: 520 },
  { id: 646, type: 'case', name: '+20', parentId: 520 },
  { id: 647, type: 'case', name: '+10', parentId: 520 },
  { id: 648, type: 'case', name: '0', parentId: 520 },
  { id: 649, type: 'case', name: '-10', parentId: 520 },
  { id: 650, type: 'case', name: '-20', parentId: 520 },
  { id: 651, type: 'case', name: '-30', parentId: 520 },
  { id: 652, type: 'case', name: '-40', parentId: 520 },
  { id: 653, type: 'case', name: '-50', parentId: 520 },

  /* ------------------------------------------------------------------------------------------------------------------------------ */
  /* ---------------------------------------------------------Layer 5-------------------------------------------------------------- */

  { id: 654, type: 'group', name: '시간', parentId: 5 },
  { id: 655, type: 'group', name: '기상 환경', parentId: 5 },

  { id: 656, type: 'group', name: '시간대', parentId: 654 },
  { id: 657, type: 'group', name: '요일', parentId: 654 },

  { id: 658, type: 'group', name: '날씨', parentId: 655 },
  { id: 659, type: 'group', name: '기온', parentId: 655 },
  { id: 660, type: 'group', name: '조도', parentId: 655 },

  { id: 661, type: 'case', name: '새벽', parentId: 656 },
  { id: 662, type: 'case', name: '오후', parentId: 656 },
  { id: 663, type: 'case', name: '야간', parentId: 656 },
  { id: 664, type: 'case', name: '오전', parentId: 656 },

  { id: 665, type: 'case', name: '주중', parentId: 657 },
  { id: 666, type: 'case', name: '주말', parentId: 657 },

  { id: 667, type: 'case', name: '맑음', parentId: 658 },
  { id: 668, type: 'case', name: '흐림', parentId: 658 },
  { id: 669, type: 'case', name: '눈', parentId: 658 },
  { id: 670, type: 'case', name: '비', parentId: 658 },
  { id: 671, type: 'case', name: '악천후', parentId: 658 },

  { id: 672, type: 'case', name: '영상', parentId: 659 },
  { id: 673, type: 'case', name: '영하', parentId: 659 },

  { id: 674, type: 'case', name: '빛(조명)', parentId: 660 },
  { id: 675, type: 'case', name: '빛(태양)', parentId: 660 },
  { id: 676, type: 'case', name: '어둠', parentId: 660 },

  /* ------------------------------------------------------------------------------------------------------------------------------ */
  /* ---------------------------------------------------------Layer 6-------------------------------------------------------------- */

  { id: 677, type: 'group', name: '센싱정보', parentId: 6 },
  { id: 678, type: 'group', name: '통신정보', parentId: 6 },
  { id: 679, type: 'group', name: '위치정보', parentId: 6 },

  { id: 680, type: 'group', name: 'Camera센서', parentId: 677 },
  { id: 681, type: 'group', name: 'Radar센서', parentId: 677 },
  { id: 682, type: 'group', name: 'LiDAR센서', parentId: 677 },

  { id: 683, type: 'group', name: 'V2I', parentId: 678 },
  { id: 684, type: 'group', name: 'V2V', parentId: 678 },
  { id: 685, type: 'group', name: 'V2P', parentId: 678 },
  { id: 686, type: 'group', name: 'V2N', parentId: 678 },
  { id: 687, type: 'group', name: 'V2C', parentId: 678 },

  { id: 688, type: 'group', name: 'GPS 정보', parentId: 679 },
  { id: 689, type: 'group', name: '전자지도 정보', parentId: 679 },

  { id: 690, type: 'case', name: '--', parentId: 680 },
  { id: 691, type: 'case', name: '-', parentId: 680 },
  { id: 692, type: 'case', name: '0', parentId: 680 },
  { id: 693, type: 'case', name: '+', parentId: 680 },
  { id: 694, type: 'case', name: '++', parentId: 680 },

  { id: 695, type: 'case', name: '--', parentId: 681 },
  { id: 696, type: 'case', name: '-', parentId: 681 },
  { id: 697, type: 'case', name: '0', parentId: 681 },
  { id: 698, type: 'case', name: '+', parentId: 681 },
  { id: 699, type: 'case', name: '++', parentId: 681 },

  { id: 700, type: 'case', name: '--', parentId: 682 },
  { id: 701, type: 'case', name: '-', parentId: 682 },
  { id: 702, type: 'case', name: '0', parentId: 682 },
  { id: 703, type: 'case', name: '+', parentId: 682 },
  { id: 704, type: 'case', name: '++', parentId: 682 },

  { id: 705, type: 'case', name: '사용', parentId: 683 },
  { id: 706, type: 'case', name: '미사용', parentId: 683 },

  { id: 707, type: 'case', name: '사용', parentId: 684 },
  { id: 708, type: 'case', name: '미사용', parentId: 684 },

  { id: 709, type: 'case', name: '사용', parentId: 685 },
  { id: 710, type: 'case', name: '미사용', parentId: 685 },

  { id: 711, type: 'case', name: '사용', parentId: 686 },
  { id: 712, type: 'case', name: '미사용', parentId: 686 },

  { id: 713, type: 'case', name: '사용', parentId: 687 },
  { id: 714, type: 'case', name: '미사용', parentId: 687 },

  { id: 715, type: 'case', name: '--', parentId: 688 },
  { id: 716, type: 'case', name: '-', parentId: 688 },
  { id: 717, type: 'case', name: '0', parentId: 688 },
  { id: 718, type: 'case', name: '+', parentId: 688 },
  { id: 719, type: 'case', name: '++', parentId: 688 },

  { id: 720, type: 'case', name: '--', parentId: 689 },
  { id: 721, type: 'case', name: '-', parentId: 689 },
  { id: 722, type: 'case', name: '0', parentId: 689 },
  { id: 723, type: 'case', name: '+', parentId: 689 },
  { id: 724, type: 'case', name: '++', parentId: 689 },
];
