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

  { id: 183, type: 'group', name: '주변객체', parentId: 4 },
  { id: 184, type: 'group', name: '자율주행차', parentId: 4 },

  { id: 185, type: 'group', name: '객체정보(N)', parentId: 183 },
  { id: 186, type: 'group', name: '객체정보(W)', parentId: 183 },
  { id: 187, type: 'group', name: '객체정보(E)', parentId: 183 },
  { id: 188, type: 'group', name: '객체정보(S)', parentId: 183 },
  { id: 189, type: 'group', name: '교통상황(LOS)', parentId: 183 },

  { id: 190, type: 'group', name: '연관 NPC', parentId: 184 },
  { id: 191, type: 'group', name: '객체 종류', parentId: 184 },
  { id: 192, type: 'group', name: '객체위치-차로', parentId: 184 },
  { id: 193, type: 'group', name: '객체위치-절대', parentId: 184 },
  { id: 194, type: 'group', name: '객체 속도', parentId: 184 },
  { id: 195, type: 'group', name: '객체 가속도', parentId: 184 },
  { id: 196, type: 'group', name: '객체 행동1', parentId: 184 },
  { id: 197, type: 'group', name: '객체 행동2', parentId: 184 },
  { id: 198, type: 'group', name: 'Trigger', parentId: 184 },

  { id: 199, type: 'group', name: '존재유무(N)', parentId: 185 },
  { id: 200, type: 'group', name: '객체 종류(N)', parentId: 185 },
  { id: 201, type: 'group', name: '객체위치-차로(N)', parentId: 185 },
  { id: 202, type: 'group', name: '객체위치-상대(N)', parentId: 185 },
  { id: 203, type: 'group', name: '객체 속도(N)', parentId: 185 },
  { id: 204, type: 'group', name: '객체 가속도(N)', parentId: 185 },
  { id: 205, type: 'group', name: '객체 행동-I(N)', parentId: 185 },
  { id: 206, type: 'group', name: '객체 행동-A(N)', parentId: 185 },
  { id: 207, type: 'group', name: 'Trigger(N)', parentId: 185 },

  { id: 208, type: 'group', name: '존재유무(W)', parentId: 186 },
  { id: 209, type: 'group', name: '객체 종류(W)', parentId: 186 },
  { id: 210, type: 'group', name: '객체위치-차로(W)', parentId: 186 },
  { id: 211, type: 'group', name: '객체위치-상대(W)', parentId: 186 },
  { id: 212, type: 'group', name: '객체 속도(W)', parentId: 186 },
  { id: 213, type: 'group', name: '객체 가속도(W)', parentId: 186 },
  { id: 214, type: 'group', name: '객체 행동-I(W)', parentId: 186 },
  { id: 215, type: 'group', name: '객체 행동-A(W)', parentId: 186 },
  { id: 216, type: 'group', name: 'Trigger(W)', parentId: 186 },

  { id: 217, type: 'group', name: '존재유무(E)', parentId: 187 },
  { id: 218, type: 'group', name: '객체 종류(E)', parentId: 187 },
  { id: 219, type: 'group', name: '객체위치-차로(E)', parentId: 187 },
  { id: 220, type: 'group', name: '객체위치-상대(E)', parentId: 187 },
  { id: 221, type: 'group', name: '객체 속도(E)', parentId: 187 },
  { id: 222, type: 'group', name: '객체 가속도(E)', parentId: 187 },
  { id: 223, type: 'group', name: '객체 행동-I(E)', parentId: 187 },
  { id: 224, type: 'group', name: '객체 행동-A(E)', parentId: 187 },
  { id: 225, type: 'group', name: 'Trigger(E)', parentId: 187 },

  { id: 226, type: 'group', name: '존재유무(S)', parentId: 188 },
  { id: 227, type: 'group', name: '객체 종류(S)', parentId: 188 },
  { id: 228, type: 'group', name: '객체위치-차로(S)', parentId: 188 },
  { id: 229, type: 'group', name: '객체위치-상대(S)', parentId: 188 },
  { id: 230, type: 'group', name: '객체 속도(S)', parentId: 188 },
  { id: 231, type: 'group', name: '객체 가속도(S)', parentId: 188 },
  { id: 232, type: 'group', name: '객체 행동1(S)', parentId: 188 },
  { id: 233, type: 'group', name: '객체 행동2(S)', parentId: 188 },
  { id: 234, type: 'group', name: 'Trigger(S)', parentId: 188 },

  { id: 235, type: 'case', name: 'A', parentId: 189 },
  { id: 236, type: 'case', name: 'B', parentId: 189 },
  { id: 237, type: 'case', name: 'C', parentId: 189 },
  { id: 238, type: 'case', name: 'D', parentId: 189 },
  { id: 239, type: 'case', name: 'E', parentId: 189 },
  { id: 240, type: 'case', name: 'F', parentId: 189 },

  { id: 241, type: 'case', name: '1', parentId: 190 },
  { id: 242, type: 'case', name: '2', parentId: 190 },
  { id: 243, type: 'case', name: '3', parentId: 190 },
  { id: 244, type: 'case', name: '4', parentId: 190 },
  { id: 245, type: 'case', name: '없음', parentId: 190 },

  { id: 246, type: 'case', name: '승용차', parentId: 191 },

  { id: 247, type: 'case', name: '주행차로', parentId: 192 },
  { id: 248, type: 'case', name: '추월차로(1차로)', parentId: 192 },

  { id: 249, type: 'case', name: '0m', parentId: 193 },
  { id: 250, type: 'case', name: '0~50m', parentId: 193 },
  { id: 251, type: 'case', name: '50~100m', parentId: 193 },
  { id: 252, type: 'case', name: '100m 초과', parentId: 193 },

  { id: 253, type: 'case', name: '30 미만', parentId: 194 },
  { id: 254, type: 'case', name: '30~50', parentId: 194 },
  { id: 255, type: 'case', name: '50 초과', parentId: 194 },

  { id: 256, type: 'case', name: '급가속', parentId: 195 },
  { id: 257, type: 'case', name: '금갑속', parentId: 195 },
  { id: 258, type: 'case', name: '정속', parentId: 195 },
  { id: 259, type: 'case', name: '가속', parentId: 195 },
  { id: 260, type: 'case', name: '감속', parentId: 195 },

  { id: 261, type: 'case', name: '끼어들기', parentId: 196 },
  { id: 262, type: 'case', name: '앞지르기', parentId: 196 },
  { id: 263, type: 'case', name: '직진', parentId: 196 },
  { id: 264, type: 'case', name: '좌ㆍ우회전', parentId: 196 },
  { id: 265, type: 'case', name: '유턴', parentId: 196 },
  { id: 266, type: 'case', name: '정지', parentId: 196 },
  { id: 267, type: 'case', name: '후진', parentId: 196 },

  { id: 268, type: 'case', name: '좌ㆍ우회전', parentId: 197 },
  { id: 269, type: 'case', name: 'Cut-in', parentId: 197 },
  { id: 270, type: 'case', name: 'Cut-out', parentId: 197 },
  { id: 271, type: 'case', name: 'ETC', parentId: 197 },
  { id: 272, type: 'case', name: '정지', parentId: 197 },

  { id: 273, type: 'case', name: 'Headway', parentId: 198 },
  { id: 274, type: 'case', name: 'ETC', parentId: 198 },
  { id: 275, type: 'case', name: '차량신호', parentId: 198 },

  { id: 276, type: 'case', name: '(N)객체 있음', parentId: 199 },
  { id: 277, type: 'case', name: '(N)객체 없음', parentId: 199 },

  { id: 278, type: 'case', name: '승용차', parentId: 200 },
  { id: 279, type: 'case', name: '승합차', parentId: 200 },
  { id: 280, type: 'case', name: '버스', parentId: 200 },
  { id: 281, type: 'case', name: '화물차', parentId: 200 },
  { id: 282, type: 'case', name: '특수차', parentId: 200 },
  { id: 283, type: 'case', name: '보행자', parentId: 200 },

  { id: 284, type: 'case', name: '추월차로', parentId: 201 },
  { id: 285, type: 'case', name: '주행차로', parentId: 201 },

  { id: 286, type: 'case', name: '안전거리 미만', parentId: 202 },
  { id: 287, type: 'case', name: '안전거리 이상', parentId: 202 },

  { id: 288, type: 'case', name: '30 미만', parentId: 203 },
  { id: 289, type: 'case', name: '30~50', parentId: 203 },
  { id: 290, type: 'case', name: '50 초과', parentId: 203 },

  { id: 291, type: 'case', name: '가속', parentId: 204 },
  { id: 292, type: 'case', name: '감속', parentId: 204 },
  { id: 293, type: 'case', name: '급감속ㆍ급가속', parentId: 204 },
  { id: 294, type: 'case', name: '정속', parentId: 204 },

  { id: 295, type: 'case', name: 'Cut-out', parentId: 205 },
  { id: 296, type: 'case', name: '직진', parentId: 205 },
  { id: 297, type: 'case', name: '좌ㆍ우회전', parentId: 205 },
  { id: 298, type: 'case', name: '유턴', parentId: 205 },
  { id: 299, type: 'case', name: '정지', parentId: 205 },
  { id: 300, type: 'case', name: '횡단', parentId: 205 },

  { id: 301, type: 'case', name: '좌ㆍ우회전', parentId: 206 },
  { id: 302, type: 'case', name: 'Cut-in', parentId: 206 },
  { id: 303, type: 'case', name: 'Cut-out', parentId: 206 },
  { id: 304, type: 'case', name: '정지', parentId: 206 },
  { id: 305, type: 'case', name: 'ETC', parentId: 206 },

  { id: 306, type: 'case', name: '차량신호', parentId: 207 },
  { id: 307, type: 'case', name: 'Headway', parentId: 207 },
  { id: 308, type: 'case', name: 'ETC', parentId: 207 }, //

  { id: 309, type: 'case', name: '(W)객체 있음', parentId: 208 },
  { id: 310, type: 'case', name: '(W)객체 없음', parentId: 208 },

  { id: 311, type: 'case', name: '승용차', parentId: 209 },
  { id: 312, type: 'case', name: '승합차', parentId: 209 },
  { id: 313, type: 'case', name: '버스', parentId: 209 },
  { id: 314, type: 'case', name: '화물차', parentId: 209 },
  { id: 315, type: 'case', name: '특수차', parentId: 209 },

  { id: 317, type: 'case', name: '추월차로', parentId: 210 },
  { id: 318, type: 'case', name: '주행차로', parentId: 210 },

  { id: 319, type: 'case', name: '안전거리 미만', parentId: 211 },
  { id: 320, type: 'case', name: '안전거리 이상', parentId: 211 },

  { id: 321, type: 'case', name: '30 미만', parentId: 212 },
  { id: 322, type: 'case', name: '30~50', parentId: 212 },
  { id: 323, type: 'case', name: '50 초과', parentId: 212 },

  { id: 324, type: 'case', name: '가속', parentId: 213 },
  { id: 325, type: 'case', name: '감속', parentId: 213 },
  { id: 326, type: 'case', name: '급감속ㆍ급가속', parentId: 213 },
  { id: 327, type: 'case', name: '정속', parentId: 213 },

  { id: 329, type: 'case', name: '직진', parentId: 214 },
  { id: 330, type: 'case', name: '좌ㆍ우회전', parentId: 214 },
  { id: 331, type: 'case', name: '유턴', parentId: 214 },
  { id: 328, type: 'case', name: 'Cut-in', parentId: 214 },
  { id: 332, type: 'case', name: '정지', parentId: 214 },

  { id: 334, type: 'case', name: '좌ㆍ우회전', parentId: 215 },
  { id: 335, type: 'case', name: 'Cut-in', parentId: 215 },
  { id: 336, type: 'case', name: 'Cut-out', parentId: 215 },
  { id: 338, type: 'case', name: 'ETC', parentId: 215 },

  { id: 339, type: 'case', name: '차량신호', parentId: 216 },
  { id: 340, type: 'case', name: 'Headway', parentId: 216 },
  { id: 341, type: 'case', name: 'ETC', parentId: 216 }, //

  { id: 342, type: 'case', name: '(E)객체 있음', parentId: 217 },
  { id: 343, type: 'case', name: '(E)객체 없음', parentId: 217 },

  { id: 344, type: 'case', name: '승용차', parentId: 218 },
  { id: 345, type: 'case', name: '승합차', parentId: 218 },
  { id: 346, type: 'case', name: '버스', parentId: 218 },
  { id: 347, type: 'case', name: '화물차', parentId: 218 },
  { id: 348, type: 'case', name: '특수차', parentId: 218 },

  { id: 350, type: 'case', name: '추월차로', parentId: 219 },
  { id: 351, type: 'case', name: '주행차로', parentId: 219 },

  { id: 352, type: 'case', name: '안전거리 미만', parentId: 220 },
  { id: 353, type: 'case', name: '안전거리 이상', parentId: 220 },

  { id: 354, type: 'case', name: '30 미만', parentId: 221 },
  { id: 355, type: 'case', name: '30~50', parentId: 221 },
  { id: 356, type: 'case', name: '50 초과', parentId: 221 },

  { id: 357, type: 'case', name: '가속', parentId: 222 },
  { id: 358, type: 'case', name: '감속', parentId: 222 },
  { id: 359, type: 'case', name: '급감속ㆍ급가속', parentId: 222 },
  { id: 360, type: 'case', name: '정속', parentId: 222 },

  { id: 362, type: 'case', name: '직진', parentId: 223 },
  { id: 363, type: 'case', name: '좌ㆍ우회전', parentId: 223 },
  { id: 364, type: 'case', name: '유턴', parentId: 223 },
  { id: 365, type: 'case', name: 'Cut-in', parentId: 223 },
  { id: 366, type: 'case', name: '정지', parentId: 223 },

  { id: 367, type: 'case', name: '좌ㆍ우회전', parentId: 224 },
  { id: 368, type: 'case', name: 'Cut-in', parentId: 224 },
  { id: 369, type: 'case', name: 'Cut-out', parentId: 224 },
  { id: 371, type: 'case', name: 'ETC', parentId: 224 },

  { id: 372, type: 'case', name: '차량신호', parentId: 225 },
  { id: 373, type: 'case', name: 'Headway', parentId: 225 },
  { id: 374, type: 'case', name: 'ETC', parentId: 225 }, //

  { id: 375, type: 'case', name: '(S)객체 있음', parentId: 226 },
  { id: 376, type: 'case', name: '(S)객체 없음', parentId: 226 },

  { id: 377, type: 'case', name: '승용차', parentId: 227 },
  { id: 378, type: 'case', name: '승합차', parentId: 227 },
  { id: 379, type: 'case', name: '버스', parentId: 227 },
  { id: 380, type: 'case', name: '화물차', parentId: 227 },
  { id: 381, type: 'case', name: '특수차', parentId: 227 },

  { id: 383, type: 'case', name: '추월차로', parentId: 228 },
  { id: 384, type: 'case', name: '주행차로', parentId: 228 },

  { id: 385, type: 'case', name: '안전거리 미만', parentId: 229 },
  { id: 386, type: 'case', name: '안전거리 이상', parentId: 229 },

  { id: 387, type: 'case', name: '30 미만', parentId: 230 },
  { id: 388, type: 'case', name: '30~50', parentId: 230 },
  { id: 389, type: 'case', name: '50 초과', parentId: 230 },
  { id: 394, type: 'case', name: '(S) 객체 없음', parentId: 230 },

  { id: 390, type: 'case', name: '가속', parentId: 231 },
  { id: 391, type: 'case', name: '감속', parentId: 231 },
  { id: 392, type: 'case', name: '급감속ㆍ급가속', parentId: 231 },
  { id: 393, type: 'case', name: '정속', parentId: 231 },

  { id: 395, type: 'case', name: '직진', parentId: 232 },
  { id: 396, type: 'case', name: '좌ㆍ우회전', parentId: 232 },
  { id: 397, type: 'case', name: '유턴', parentId: 232 },
  { id: 398, type: 'case', name: '정지', parentId: 232 },

  { id: 400, type: 'case', name: '좌ㆍ우회전', parentId: 233 },
  { id: 401, type: 'case', name: 'Cut-in', parentId: 233 },
  { id: 402, type: 'case', name: 'Cut-out', parentId: 233 },
  { id: 404, type: 'case', name: 'ETC', parentId: 233 },

  { id: 405, type: 'case', name: '차량신호', parentId: 234 },
  { id: 406, type: 'case', name: 'Headway', parentId: 234 },
  { id: 407, type: 'case', name: 'ETC', parentId: 234 },

  /* ------------------------------------------------------------------------------------------------------------------------------ */
  /* ---------------------------------------------------------Layer 5-------------------------------------------------------------- */

  { id: 408, type: 'group', name: '시간', parentId: 5 },
  { id: 409, type: 'group', name: '기상 환경', parentId: 5 },

  { id: 410, type: 'group', name: '시간대', parentId: 408 },
  { id: 411, type: 'group', name: '요일', parentId: 408 },

  { id: 412, type: 'group', name: '날씨', parentId: 409 },
  { id: 413, type: 'group', name: '기온', parentId: 409 },
  { id: 414, type: 'group', name: '조도', parentId: 409 },

  { id: 415, type: 'case', name: '새벽', parentId: 410 },
  { id: 416, type: 'case', name: '오후', parentId: 410 },
  { id: 417, type: 'case', name: '야간', parentId: 410 },
  { id: 418, type: 'case', name: '오전', parentId: 410 },

  { id: 419, type: 'case', name: '주중', parentId: 411 },
  { id: 420, type: 'case', name: '주말', parentId: 411 },

  { id: 421, type: 'case', name: '맑음', parentId: 412 },
  { id: 422, type: 'case', name: '흐림', parentId: 412 },
  { id: 423, type: 'case', name: '눈', parentId: 412 },
  { id: 424, type: 'case', name: '비', parentId: 412 },
  { id: 425, type: 'case', name: '악천후', parentId: 412 },

  { id: 426, type: 'case', name: '영상', parentId: 413 },
  { id: 427, type: 'case', name: '영하', parentId: 413 },

  { id: 428, type: 'case', name: '빛(조명)', parentId: 414 },
  { id: 429, type: 'case', name: '빛(태양)', parentId: 414 },
  { id: 430, type: 'case', name: '어둠', parentId: 414 },

  /* ------------------------------------------------------------------------------------------------------------------------------ */
  /* ---------------------------------------------------------Layer 6-------------------------------------------------------------- */

  { id: 431, type: 'group', name: '센싱정보', parentId: 6 },
  { id: 432, type: 'group', name: '통신정보', parentId: 6 },
  { id: 433, type: 'group', name: '위치정보', parentId: 6 },

  { id: 434, type: 'group', name: 'Camera센서', parentId: 431 },
  { id: 435, type: 'group', name: 'Radar센서', parentId: 431 },
  { id: 436, type: 'group', name: 'LiDAR센서', parentId: 431 },

  { id: 437, type: 'group', name: 'V2I', parentId: 432 },
  { id: 438, type: 'group', name: 'V2V', parentId: 432 },
  { id: 439, type: 'group', name: 'V2P', parentId: 432 },
  { id: 440, type: 'group', name: 'V2N', parentId: 432 },
  { id: 441, type: 'group', name: 'V2C', parentId: 432 },

  { id: 442, type: 'group', name: 'GPS 정보', parentId: 433 },
  { id: 443, type: 'group', name: '전자지도 정보', parentId: 433 },

  { id: 444, type: 'case', name: '--', parentId: 434 },
  { id: 445, type: 'case', name: '-', parentId: 434 },
  { id: 446, type: 'case', name: '0', parentId: 434 },
  { id: 447, type: 'case', name: '+', parentId: 434 },
  { id: 448, type: 'case', name: '++', parentId: 434 },

  { id: 449, type: 'case', name: '--', parentId: 435 },
  { id: 450, type: 'case', name: '-', parentId: 435 },
  { id: 451, type: 'case', name: '0', parentId: 435 },
  { id: 452, type: 'case', name: '+', parentId: 435 },
  { id: 453, type: 'case', name: '++', parentId: 435 },

  { id: 454, type: 'case', name: '--', parentId: 436 },
  { id: 455, type: 'case', name: '-', parentId: 436 },
  { id: 456, type: 'case', name: '0', parentId: 436 },
  { id: 457, type: 'case', name: '+', parentId: 436 },
  { id: 458, type: 'case', name: '++', parentId: 436 },

  { id: 459, type: 'case', name: '사용', parentId: 437 },
  { id: 460, type: 'case', name: '미사용', parentId: 437 },

  { id: 461, type: 'case', name: '사용', parentId: 438 },
  { id: 462, type: 'case', name: '미사용', parentId: 438 },

  { id: 463, type: 'case', name: '사용', parentId: 439 },
  { id: 464, type: 'case', name: '미사용', parentId: 439 },

  { id: 465, type: 'case', name: '사용', parentId: 440 },
  { id: 466, type: 'case', name: '미사용', parentId: 440 },

  { id: 467, type: 'case', name: '사용', parentId: 441 },
  { id: 468, type: 'case', name: '미사용', parentId: 441 },

  { id: 469, type: 'case', name: '--', parentId: 442 },
  { id: 470, type: 'case', name: '-', parentId: 442 },
  { id: 471, type: 'case', name: '0', parentId: 442 },
  { id: 472, type: 'case', name: '+', parentId: 442 },
  { id: 473, type: 'case', name: '++', parentId: 442 },

  { id: 474, type: 'case', name: '--', parentId: 443 },
  { id: 475, type: 'case', name: '-', parentId: 443 },
  { id: 476, type: 'case', name: '0', parentId: 443 },
  { id: 477, type: 'case', name: '+', parentId: 443 },
  { id: 478, type: 'case', name: '++', parentId: 443 },
];
