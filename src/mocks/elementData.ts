import type { ElementType } from '@type/element';

export const elementData: ElementType[] = [
  /* -----------------------------------------------------Highest Layers----------------------------------------------------------- */

  { id: 1, type: 'layer', name: '도로 정보', parentId: null },
  { id: 2, type: 'layer', name: '도로 교통시설', parentId: null },
  { id: 3, type: 'layer', name: '일시적 사건', parentId: null },
  { id: 4, type: 'layer', name: '동적 객체', parentId: null },
  { id: 5, type: 'layer', name: '주행 환경', parentId: null },
  { id: 6, type: 'layer', name: '디지털', parentId: null },
  { id: 7, type: 'layer', name: '법ㆍ규제', parentId: null },

  /* -----------------------------------------------------Layer 1 start----------------------------------------------------------- */

  { id: 8, type: 'group', name: '도로 기능과 등급', parentId: 1 },
  { id: 9, type: 'group', name: '도로폭', parentId: 1 },
  { id: 10, type: 'group', name: '도로기하구조', parentId: 1 },
  { id: 11, type: 'group', name: '도로표면', parentId: 1 },
  { id: 12, type: 'group', name: '도로유형', parentId: 1 },

  { id: 13, type: 'case', name: '주간선도로', parentId: 8 },
  { id: 14, type: 'case', name: '보조간선도로', parentId: 8 },
  { id: 15, type: 'case', name: '집산도로', parentId: 8 },
  { id: 16, type: 'case', name: '국지도로', parentId: 8 },

  { id: 17, type: 'group', name: '차로폭', parentId: 9 },
  { id: 18, type: 'group', name: '갓길폭', parentId: 9 },

  { id: 19, type: 'group', name: '도로선형', parentId: 10 },
  { id: 20, type: 'group', name: '도로경사', parentId: 10 },
  { id: 21, type: 'group', name: '차로 수', parentId: 10 },

  { id: 22, type: 'group', name: '도로 포장', parentId: 11 },
  { id: 23, type: 'group', name: '노면 상태', parentId: 11 },

  { id: 24, type: 'case', name: '연속류도로', parentId: 12 },
  { id: 25, type: 'case', name: '단속류-3지 교차로', parentId: 12 },
  { id: 26, type: 'case', name: '단속류-4지 교차로', parentId: 12 },
  { id: 27, type: 'case', name: '단속류-교차로 사이구간', parentId: 12 },
  { id: 28, type: 'case', name: '단속류-기타', parentId: 12 },

  { id: 29, type: 'case', name: '3.0m', parentId: 17 },
  { id: 30, type: 'case', name: '3.1m', parentId: 17 },
  { id: 31, type: 'case', name: '3.2m', parentId: 17 },
  { id: 32, type: 'case', name: '3.3m', parentId: 17 },
  { id: 33, type: 'case', name: '3.4m', parentId: 17 },
  { id: 34, type: 'case', name: '3.5m 이상', parentId: 17 },

  { id: 35, type: 'case', name: '0.70m', parentId: 18 },
  { id: 36, type: 'case', name: '0.75m', parentId: 18 },
  { id: 37, type: 'case', name: '0.80m', parentId: 18 },
  { id: 38, type: 'case', name: '0.85m', parentId: 18 },
  { id: 39, type: 'case', name: '0.9m', parentId: 18 },

  { id: 40, type: 'case', name: '직선부', parentId: 19 },
  { id: 41, type: 'case', name: '곡선부', parentId: 19 },

  { id: 42, type: 'case', name: '0.50%', parentId: 20 },
  { id: 43, type: 'case', name: '1.00%', parentId: 20 },
  { id: 44, type: 'case', name: '1.50%', parentId: 20 },
  { id: 45, type: 'case', name: '2.00%', parentId: 20 },
  { id: 46, type: 'case', name: '2.50%', parentId: 20 },
  { id: 47, type: 'case', name: '3% 초과', parentId: 20 },

  { id: 48, type: 'case', name: '왕복 2차로', parentId: 21 },
  { id: 49, type: 'case', name: '왕복 4차로', parentId: 21 },
  { id: 50, type: 'case', name: '왕복 5차로', parentId: 21 },
  { id: 51, type: 'case', name: '왕복 6차로', parentId: 21 },
  { id: 52, type: 'case', name: '왕복 7차로', parentId: 21 },
  { id: 53, type: 'case', name: '왕복 8차로 이상', parentId: 21 },

  { id: 54, type: 'case', name: '아스팔트', parentId: 22 },
  { id: 55, type: 'case', name: '콘크리트', parentId: 22 },
  { id: 56, type: 'case', name: '비포장', parentId: 22 },

  { id: 57, type: 'case', name: '마름', parentId: 23 },
  { id: 58, type: 'case', name: '젖음', parentId: 23 },
  { id: 59, type: 'case', name: '결빙', parentId: 23 },

  /* -----------------------------------------------------Layer 1 end----------------------------------------------------------- */
  /* -----------------------------------------------------Layer 2 start----------------------------------------------------------- */
  { id: 60, type: 'group', name: '도로안전시설', parentId: 2 },
  { id: 61, type: 'group', name: '교통 관리 시설', parentId: 2 },
  { id: 62, type: 'group', name: '도로표지', parentId: 2 },
  { id: 63, type: 'group', name: '노면표시', parentId: 2 },
  { id: 64, type: 'group', name: '운영제약', parentId: 2 },

  { id: 65, type: 'group', name: '차량방호시설', parentId: 60 },
  { id: 66, type: 'group', name: '조명시설', parentId: 60 },
  { id: 67, type: 'group', name: '과속방지턱', parentId: 60 },

  { id: 68, type: 'group', name: '신호기', parentId: 61 },

  { id: 69, type: 'group', name: '주의표지', parentId: 62 },
  { id: 70, type: 'group', name: '규제표지', parentId: 62 },
  { id: 71, type: 'group', name: '지시표지', parentId: 62 },

  { id: 72, type: 'group', name: '중앙선', parentId: 63 },
  { id: 73, type: 'group', name: '차선', parentId: 63 },
  { id: 74, type: 'group', name: '사전예고 표시', parentId: 63 },
  { id: 75, type: 'group', name: '안전속도 표시', parentId: 63 },
  { id: 76, type: 'group', name: '금지구역 표시', parentId: 63 },

  { id: 77, type: 'group', name: '제한속도', parentId: 64 },
  { id: 78, type: 'group', name: '보호구역', parentId: 64 },
  { id: 79, type: 'group', name: '전용도로', parentId: 64 },

  { id: 80, type: 'group', name: '중앙분리대', parentId: 65 },
  { id: 81, type: 'group', name: '방호울타리', parentId: 65 },
  { id: 82, type: 'group', name: '충격흡수시설', parentId: 65 },

  { id: 83, type: 'group', name: '연속조명', parentId: 66 },
  { id: 84, type: 'group', name: '국부조명', parentId: 66 },

  { id: 85, type: 'case', name: '있음', parentId: 67 },
  { id: 86, type: 'case', name: '없음', parentId: 67 },

  { id: 87, type: 'group', name: '차량신호', parentId: 68 },

  { id: 88, type: 'group', name: '도로상태 예고', parentId: 69 },
  { id: 89, type: 'group', name: '노면상황 예고', parentId: 69 },
  { id: 90, type: 'group', name: '기상상황 예고', parentId: 69 },
  { id: 91, type: 'group', name: '기타주의 예고', parentId: 69 },

  { id: 92, type: 'group', name: '통행금지', parentId: 70 },
  { id: 93, type: 'group', name: '통행제한', parentId: 70 },
  { id: 94, type: 'group', name: '금지사항', parentId: 70 },

  { id: 95, type: 'group', name: '도로지정', parentId: 71 },
  { id: 96, type: 'group', name: '통행방법', parentId: 71 },

  { id: 97, type: 'case', name: '실선', parentId: 72 },
  { id: 98, type: 'case', name: '점선', parentId: 72 },

  { id: 99, type: 'case', name: '실선', parentId: 73 },
  { id: 100, type: 'case', name: '점선', parentId: 73 },

  { id: 101, type: 'case', name: '횡단보도 예고', parentId: 74 },
  { id: 102, type: 'case', name: '오르막 경사면', parentId: 74 },
  { id: 103, type: 'case', name: '표시 없음', parentId: 74 },

  { id: 104, type: 'case', name: '속도 제한', parentId: 75 },
  { id: 105, type: 'case', name: '서행', parentId: 75 },
  { id: 106, type: 'case', name: '표시 없음', parentId: 75 },

  { id: 107, type: 'case', name: '안전지대', parentId: 76 },
  { id: 108, type: 'case', name: '정차금지지대', parentId: 76 },
  { id: 109, type: 'case', name: '표시 없음', parentId: 76 },

  { id: 110, type: 'group', name: '최고제한속도', parentId: 77 },
  { id: 111, type: 'group', name: '최저제한속도', parentId: 77 },

  { id: 112, type: 'case', name: '어린이 보호구역', parentId: 78 },
  { id: 113, type: 'case', name: '해당 없음', parentId: 78 },

  { id: 114, type: 'case', name: '버스 전용차로', parentId: 79 },
  { id: 115, type: 'case', name: '해당 없음', parentId: 79 },

  { id: 116, type: 'case', name: '있음', parentId: 80 },
  { id: 117, type: 'case', name: '없음', parentId: 80 },

  { id: 118, type: 'case', name: '있음', parentId: 81 },
  { id: 119, type: 'case', name: '없음', parentId: 81 },

  { id: 120, type: 'case', name: '있음', parentId: 82 },
  { id: 121, type: 'case', name: '없음', parentId: 82 },

  { id: 122, type: 'case', name: '있음', parentId: 83 },
  { id: 123, type: 'case', name: '없음', parentId: 83 },

  { id: 124, type: 'case', name: '있음', parentId: 84 },
  { id: 125, type: 'case', name: '없음', parentId: 84 },

  { id: 126, type: 'case', name: '녹색', parentId: 87 },
  { id: 127, type: 'case', name: '황색', parentId: 87 },
  { id: 128, type: 'case', name: '적색', parentId: 87 },
  { id: 129, type: 'case', name: '좌회전', parentId: 87 },
  { id: 130, type: 'case', name: '신호 영향 없음', parentId: 87 },

  { id: 131, type: 'case', name: '교차로 예고', parentId: 88 },
  { id: 132, type: 'case', name: '합류 도로', parentId: 88 },
  { id: 133, type: 'case', name: '분류 지점', parentId: 88 },
  { id: 134, type: 'case', name: '굽은 도로', parentId: 88 },
  { id: 135, type: 'case', name: '표지 없음', parentId: 88 },

  { id: 136, type: 'case', name: '미끄러운 도로', parentId: 89 },
  { id: 137, type: 'case', name: '노면 고르지 못함', parentId: 89 },
  { id: 138, type: 'case', name: '표지 없음', parentId: 89 },

  { id: 139, type: 'case', name: '횡풍', parentId: 90 },
  { id: 140, type: 'case', name: '표지 없음', parentId: 90 },

  { id: 141, type: 'case', name: '횡단보도', parentId: 91 },
  { id: 142, type: 'case', name: '자전거', parentId: 91 },
  { id: 143, type: 'case', name: '터널', parentId: 91 },
  { id: 144, type: 'case', name: '표지 없음', parentId: 91 },

  { id: 145, type: 'case', name: '통행금지', parentId: 92 },
  { id: 146, type: 'case', name: '표지없음', parentId: 92 },

  { id: 147, type: 'case', name: '직진 금지', parentId: 93 },
  { id: 148, type: 'case', name: '우회전 금지', parentId: 93 },
  { id: 149, type: 'case', name: '좌회전 금지', parentId: 93 },
  { id: 150, type: 'case', name: '유턴 금지', parentId: 93 },
  { id: 151, type: 'case', name: '앞지르기 금지', parentId: 93 },
  { id: 152, type: 'case', name: '표지 없음', parentId: 93 },

  { id: 153, type: 'case', name: '주·정차 금지', parentId: 94 },
  { id: 154, type: 'case', name: '표지 없음', parentId: 94 },

  { id: 155, type: 'case', name: '자전거 전용도로', parentId: 95 },
  { id: 156, type: 'case', name: '자동차 전용도로', parentId: 95 },
  { id: 157, type: 'case', name: '표지 없음', parentId: 95 },

  { id: 158, type: 'case', name: '일반통행', parentId: 96 },
  { id: 159, type: 'case', name: '비보호 좌회전', parentId: 96 },
  { id: 160, type: 'case', name: '표지 없음', parentId: 96 },

  { id: 161, type: 'case', name: '30', parentId: 110 },
  { id: 162, type: 'case', name: '50', parentId: 110 },

  { id: 163, type: 'case', name: '없음', parentId: 111 },

  /* -----------------------------------------------------Layer 2 end----------------------------------------------------------- */
  /* -----------------------------------------------------Layer 3 start----------------------------------------------------------- */

  { id: 164, type: 'group', name: '없음', parentId: 3 },

  { id: 165, type: 'group', name: '도로공사', parentId: 164 },
  { id: 166, type: 'group', name: '선행사고', parentId: 164 },
  { id: 167, type: 'group', name: '장애물', parentId: 164 },

  { id: 168, type: 'case', name: '공사 있음', parentId: 165 },
  { id: 169, type: 'case', name: '공사 없음', parentId: 165 },

  { id: 170, type: 'case', name: '선행사고 있음', parentId: 166 },
  { id: 171, type: 'case', name: '선행사고 없음', parentId: 166 },

  { id: 172, type: 'case', name: '장애물 있음', parentId: 167 },
  { id: 173, type: 'case', name: '장애물 없음', parentId: 167 },

  /* -----------------------------------------------------Layer 3 end----------------------------------------------------------- */
  /* -----------------------------------------------------Layer 4 start----------------------------------------------------------- */
  { id: 174, type: 'group', name: '주변 객체', parentId: 4 },
  { id: 175, type: 'group', name: '자율주행차', parentId: 4 },

  { id: 176, type: 'group', name: 'NPC1', parentId: 174 },
  { id: 177, type: 'group', name: 'NPC2', parentId: 174 },
  { id: 178, type: 'group', name: 'NPC3', parentId: 174 },
  { id: 179, type: 'group', name: 'NPC4', parentId: 174 },
  { id: 180, type: 'group', name: '교통상황(LOS)', parentId: 174 },

  { id: 181, type: 'group', name: '객체종류', parentId: 175 },
  { id: 182, type: 'group', name: '객체위치-차로', parentId: 175 },
  { id: 183, type: 'group', name: '객체속도', parentId: 175 },
  { id: 184, type: 'group', name: '객체 행동(시작)', parentId: 175 },
  { id: 185, type: 'group', name: '객체 예상 행동(동작)', parentId: 175 },

  { id: 186, type: 'group', name: '객체종류', parentId: 176 },
  { id: 187, type: 'group', name: '객체 위치-차로', parentId: 176 },
  { id: 188, type: 'group', name: '객체 위치-상대 거리', parentId: 176 },
  { id: 189, type: 'group', name: '객체 속도', parentId: 176 },
  { id: 190, type: 'group', name: '객체 가감속도', parentId: 176 },
  { id: 191, type: 'group', name: 'Trigger(가감속)', parentId: 176 },
  { id: 192, type: 'group', name: '객체 행동(시작)', parentId: 176 },
  { id: 193, type: 'group', name: '객체 행동(동작)', parentId: 176 },
  { id: 194, type: 'group', name: 'Trigger(동작)', parentId: 176 },

  { id: 195, type: 'group', name: '객체종류', parentId: 177 },
  { id: 196, type: 'group', name: '객체 위치-차로', parentId: 177 },
  { id: 197, type: 'group', name: '객체 위치-상대 거리', parentId: 177 },
  { id: 198, type: 'group', name: '객체 속도', parentId: 177 },
  { id: 199, type: 'group', name: '객체 가감속도', parentId: 177 },
  { id: 200, type: 'group', name: 'Trigger(가감속)', parentId: 177 },
  { id: 201, type: 'group', name: '객체 행동(시작)', parentId: 177 },
  { id: 202, type: 'group', name: '객체 행동(동작)', parentId: 177 },
  { id: 203, type: 'group', name: 'Trigger(동작)', parentId: 177 },

  { id: 204, type: 'group', name: '객체종류', parentId: 178 },
  { id: 205, type: 'group', name: '객체 위치-차로', parentId: 178 },
  { id: 206, type: 'group', name: '객체 위치-상대 거리', parentId: 178 },
  { id: 207, type: 'group', name: '객체 속도', parentId: 178 },
  { id: 208, type: 'group', name: '객체 가감속도', parentId: 178 },
  { id: 209, type: 'group', name: 'Trigger(가감속)', parentId: 178 },
  { id: 210, type: 'group', name: '객체 행동(시작)', parentId: 178 },
  { id: 211, type: 'group', name: '객체 행동(동작)', parentId: 178 },
  { id: 212, type: 'group', name: 'Trigger(동작)', parentId: 178 },

  { id: 213, type: 'group', name: '객체종류', parentId: 179 },
  { id: 214, type: 'group', name: '객체 위치-차로', parentId: 179 },
  { id: 215, type: 'group', name: '객체 위치-상대 거리', parentId: 179 },
  { id: 216, type: 'group', name: '객체 속도', parentId: 179 },
  { id: 217, type: 'group', name: '객체 가감속도', parentId: 179 },
  { id: 218, type: 'group', name: 'Trigger(가감속)', parentId: 179 },
  { id: 219, type: 'group', name: '객체 행동(시작)', parentId: 179 },
  { id: 220, type: 'group', name: '객체 행동(동작)', parentId: 179 },
  { id: 221, type: 'group', name: 'Trigger(동작)', parentId: 179 },

  { id: 222, type: 'case', name: 'A', parentId: 180 },
  { id: 223, type: 'case', name: 'B', parentId: 180 },
  { id: 224, type: 'case', name: 'C', parentId: 180 },
  { id: 225, type: 'case', name: 'D', parentId: 180 },
  { id: 226, type: 'case', name: 'E', parentId: 180 },
  { id: 227, type: 'case', name: 'F', parentId: 180 },

  { id: 228, type: 'case', name: '승용차', parentId: 181 },
  { id: 229, type: 'case', name: '승합차', parentId: 181 },
  { id: 230, type: 'case', name: '버스', parentId: 181 },
  { id: 231, type: 'case', name: '화물차', parentId: 181 },
  { id: 232, type: 'case', name: '특수차', parentId: 181 },

  { id: 233, type: 'case', name: '1', parentId: 182 },
  { id: 234, type: 'case', name: '2', parentId: 182 },
  { id: 235, type: 'case', name: '3', parentId: 182 },
  { id: 236, type: 'case', name: '4', parentId: 182 },
  { id: 237, type: 'case', name: '5', parentId: 182 },
  { id: 238, type: 'case', name: '6', parentId: 182 },

  { id: 239, type: 'case', name: '0', parentId: 183 },
  { id: 240, type: 'case', name: '1~10', parentId: 183 },
  { id: 241, type: 'case', name: '10~20', parentId: 183 },
  { id: 242, type: 'case', name: '20~30', parentId: 183 },
  { id: 243, type: 'case', name: '30~40', parentId: 183 },
  { id: 244, type: 'case', name: '40~50', parentId: 183 },
  { id: 245, type: 'case', name: '50~60', parentId: 183 },
  { id: 246, type: 'case', name: '60~70', parentId: 183 },
  { id: 247, type: 'case', name: '70~80', parentId: 183 },
  { id: 248, type: 'case', name: '80~90', parentId: 183 },
  { id: 249, type: 'case', name: '90~100', parentId: 183 },
  { id: 250, type: 'case', name: '100~110', parentId: 183 },
  { id: 251, type: 'case', name: '110~120', parentId: 183 },
  { id: 252, type: 'case', name: '120~130', parentId: 183 },

  { id: 253, type: 'case', name: '정지', parentId: 184 },
  { id: 254, type: 'case', name: '직진', parentId: 184 },

  { id: 255, type: 'case', name: '정지', parentId: 185 },
  { id: 256, type: 'case', name: '직진', parentId: 185 },
  { id: 257, type: 'case', name: '좌회전(진입)', parentId: 185 },
  { id: 258, type: 'case', name: '우회전(진출)', parentId: 185 },
  { id: 259, type: 'case', name: '유턴', parentId: 185 },
  { id: 260, type: 'case', name: '차선변경', parentId: 185 },

  { id: 261, type: 'case', name: '승용차', parentId: 186 },
  { id: 262, type: 'case', name: '승합차', parentId: 186 },
  { id: 263, type: 'case', name: '버스', parentId: 186 },
  { id: 264, type: 'case', name: '화물차', parentId: 186 },
  { id: 265, type: 'case', name: '특수차', parentId: 186 },
  { id: 266, type: 'case', name: '자전거', parentId: 186 },
  { id: 267, type: 'case', name: '보행자', parentId: 186 },
  { id: 268, type: 'case', name: '기타', parentId: 186 },

  { id: 269, type: 'case', name: '1', parentId: 187 },
  { id: 270, type: 'case', name: '2', parentId: 187 },
  { id: 271, type: 'case', name: '3', parentId: 187 },
  { id: 272, type: 'case', name: '4', parentId: 187 },
  { id: 273, type: 'case', name: '5', parentId: 187 },
  { id: 274, type: 'case', name: '6', parentId: 187 },

  { id: 275, type: 'case', name: '-50~-40', parentId: 188 },
  { id: 276, type: 'case', name: '-40~-30', parentId: 188 },
  { id: 277, type: 'case', name: '-30~-20', parentId: 188 },
  { id: 278, type: 'case', name: '-20~-10', parentId: 188 },
  { id: 279, type: 'case', name: '-10~0', parentId: 188 },
  { id: 280, type: 'case', name: '0~10', parentId: 188 },
  { id: 281, type: 'case', name: '10~20', parentId: 188 },
  { id: 282, type: 'case', name: '20~30', parentId: 188 },
  { id: 283, type: 'case', name: '30~40', parentId: 188 },
  { id: 284, type: 'case', name: '40~50', parentId: 188 },

  { id: 285, type: 'case', name: '0', parentId: 189 },
  { id: 286, type: 'case', name: '1~10', parentId: 189 },
  { id: 287, type: 'case', name: '10~20', parentId: 189 },
  { id: 288, type: 'case', name: '20~30', parentId: 189 },
  { id: 289, type: 'case', name: '30~40', parentId: 189 },
  { id: 290, type: 'case', name: '40~50', parentId: 189 },
  { id: 291, type: 'case', name: '50~60', parentId: 189 },
  { id: 292, type: 'case', name: '60~70', parentId: 189 },
  { id: 293, type: 'case', name: '70~80', parentId: 189 },
  { id: 294, type: 'case', name: '80~90', parentId: 189 },
  { id: 295, type: 'case', name: '90~100', parentId: 189 },
  { id: 296, type: 'case', name: '100~110', parentId: 189 },
  { id: 297, type: 'case', name: '110~120', parentId: 189 },
  { id: 298, type: 'case', name: '120~130', parentId: 189 },

  { id: 299, type: 'case', name: '-50~-40', parentId: 190 },
  { id: 300, type: 'case', name: '-40~-30', parentId: 190 },
  { id: 301, type: 'case', name: '-30~-20', parentId: 190 },
  { id: 302, type: 'case', name: '-20~-10', parentId: 190 },
  { id: 303, type: 'case', name: '-10~-1', parentId: 190 },
  { id: 304, type: 'case', name: '0', parentId: 190 },
  { id: 305, type: 'case', name: '1~10', parentId: 190 },
  { id: 306, type: 'case', name: '10~20', parentId: 190 },
  { id: 307, type: 'case', name: '20~30', parentId: 190 },
  { id: 308, type: 'case', name: '30~40', parentId: 190 },
  { id: 309, type: 'case', name: '40~50', parentId: 190 },

  { id: 310, type: 'case', name: '상대 거리', parentId: 191 },
  { id: 311, type: 'case', name: '상대 시간', parentId: 191 },

  { id: 312, type: 'case', name: '정지', parentId: 192 },
  { id: 313, type: 'case', name: '직진', parentId: 192 },

  { id: 314, type: 'case', name: '정지', parentId: 193 },
  { id: 315, type: 'case', name: '직진', parentId: 193 },
  { id: 316, type: 'case', name: '좌회전(진입)', parentId: 193 },
  { id: 317, type: 'case', name: '우회전(진출)', parentId: 193 },
  { id: 318, type: 'case', name: '유턴', parentId: 193 },
  { id: 319, type: 'case', name: '차선변경', parentId: 193 },

  { id: 320, type: 'case', name: 'Headway(안전거리 이내)', parentId: 194 },
  { id: 321, type: 'case', name: 'Headway(안전거리 초과)', parentId: 194 },
  { id: 322, type: 'case', name: '녹색신호', parentId: 194 },
  { id: 323, type: 'case', name: '황색신호', parentId: 194 },
  { id: 324, type: 'case', name: '적색신호', parentId: 194 },
  { id: 325, type: 'case', name: '좌회전 신호', parentId: 194 },
  { id: 326, type: 'case', name: '시뮬레이션 시간', parentId: 194 },

  { id: 327, type: 'case', name: '승용차', parentId: 195 },
  { id: 328, type: 'case', name: '승합차', parentId: 195 },
  { id: 329, type: 'case', name: '버스', parentId: 195 },
  { id: 330, type: 'case', name: '화물차', parentId: 195 },
  { id: 331, type: 'case', name: '특수차', parentId: 195 },
  { id: 332, type: 'case', name: '자전거', parentId: 195 },
  { id: 333, type: 'case', name: '보행자', parentId: 195 },
  { id: 334, type: 'case', name: '기타', parentId: 195 },

  { id: 335, type: 'case', name: '1', parentId: 196 },
  { id: 336, type: 'case', name: '2', parentId: 196 },
  { id: 337, type: 'case', name: '3', parentId: 196 },
  { id: 338, type: 'case', name: '4', parentId: 196 },
  { id: 339, type: 'case', name: '5', parentId: 196 },
  { id: 340, type: 'case', name: '6', parentId: 196 },

  { id: 341, type: 'case', name: '-50~-40', parentId: 197 },
  { id: 342, type: 'case', name: '-40~-30', parentId: 197 },
  { id: 343, type: 'case', name: '-30~-20', parentId: 197 },
  { id: 344, type: 'case', name: '-20~-10', parentId: 197 },
  { id: 345, type: 'case', name: '-10~0', parentId: 197 },
  { id: 346, type: 'case', name: '0~10', parentId: 197 },
  { id: 347, type: 'case', name: '10~20', parentId: 197 },
  { id: 348, type: 'case', name: '20~30', parentId: 197 },
  { id: 349, type: 'case', name: '30~40', parentId: 197 },
  { id: 350, type: 'case', name: '40~50', parentId: 197 },

  { id: 351, type: 'case', name: '0', parentId: 198 },
  { id: 352, type: 'case', name: '1~10', parentId: 198 },
  { id: 353, type: 'case', name: '10~20', parentId: 198 },
  { id: 354, type: 'case', name: '20~30', parentId: 198 },
  { id: 355, type: 'case', name: '30~40', parentId: 198 },
  { id: 356, type: 'case', name: '40~50', parentId: 198 },
  { id: 357, type: 'case', name: '50~60', parentId: 198 },
  { id: 358, type: 'case', name: '60~70', parentId: 198 },
  { id: 359, type: 'case', name: '70~80', parentId: 198 },
  { id: 360, type: 'case', name: '80~90', parentId: 198 },
  { id: 361, type: 'case', name: '90~100', parentId: 198 },
  { id: 362, type: 'case', name: '100~110', parentId: 198 },
  { id: 363, type: 'case', name: '110~120', parentId: 198 },
  { id: 364, type: 'case', name: '120~130', parentId: 198 },

  { id: 365, type: 'case', name: '-50~-40', parentId: 199 },
  { id: 366, type: 'case', name: '-40~-30', parentId: 199 },
  { id: 367, type: 'case', name: '-30~-20', parentId: 199 },
  { id: 368, type: 'case', name: '-20~-10', parentId: 199 },
  { id: 369, type: 'case', name: '-10~-1', parentId: 199 },
  { id: 370, type: 'case', name: '0', parentId: 199 },
  { id: 371, type: 'case', name: '1~10', parentId: 199 },
  { id: 372, type: 'case', name: '10~20', parentId: 199 },
  { id: 373, type: 'case', name: '20~30', parentId: 199 },
  { id: 374, type: 'case', name: '30~40', parentId: 199 },
  { id: 375, type: 'case', name: '40~50', parentId: 199 },

  { id: 376, type: 'case', name: '상대 거리', parentId: 200 },
  { id: 377, type: 'case', name: '상대 시간', parentId: 200 },

  { id: 378, type: 'case', name: '정지', parentId: 201 },
  { id: 379, type: 'case', name: '직진', parentId: 201 },

  { id: 380, type: 'case', name: '정지', parentId: 202 },
  { id: 381, type: 'case', name: '직진', parentId: 202 },
  { id: 382, type: 'case', name: '좌회전(진입)', parentId: 202 },
  { id: 383, type: 'case', name: '우회전(진출)', parentId: 202 },
  { id: 384, type: 'case', name: '유턴', parentId: 202 },
  { id: 385, type: 'case', name: '차선변경', parentId: 202 },

  { id: 386, type: 'case', name: 'Headway(안전거리 이내)', parentId: 203 },
  { id: 387, type: 'case', name: 'Headway(안전거리 초과)', parentId: 203 },
  { id: 388, type: 'case', name: '녹색신호', parentId: 203 },
  { id: 389, type: 'case', name: '황색신호', parentId: 203 },
  { id: 390, type: 'case', name: '적색신호', parentId: 203 },
  { id: 391, type: 'case', name: '좌회전 신호', parentId: 203 },
  { id: 392, type: 'case', name: '시뮬레이션 시간', parentId: 203 },

  { id: 393, type: 'case', name: '승용차', parentId: 204 },
  { id: 394, type: 'case', name: '승합차', parentId: 204 },
  { id: 395, type: 'case', name: '버스', parentId: 204 },
  { id: 396, type: 'case', name: '화물차', parentId: 204 },
  { id: 397, type: 'case', name: '특수차', parentId: 204 },
  { id: 398, type: 'case', name: '자전거', parentId: 204 },
  { id: 399, type: 'case', name: '보행자', parentId: 204 },
  { id: 400, type: 'case', name: '기타', parentId: 204 },

  { id: 401, type: 'case', name: '1', parentId: 205 },
  { id: 402, type: 'case', name: '2', parentId: 205 },
  { id: 403, type: 'case', name: '3', parentId: 205 },
  { id: 404, type: 'case', name: '4', parentId: 205 },
  { id: 405, type: 'case', name: '5', parentId: 205 },
  { id: 406, type: 'case', name: '6', parentId: 205 },

  { id: 407, type: 'case', name: '-50~-40', parentId: 206 },
  { id: 408, type: 'case', name: '-40~-30', parentId: 206 },
  { id: 409, type: 'case', name: '-30~-20', parentId: 206 },
  { id: 410, type: 'case', name: '-20~-10', parentId: 206 },
  { id: 411, type: 'case', name: '-10~0', parentId: 206 },
  { id: 412, type: 'case', name: '0~10', parentId: 206 },
  { id: 413, type: 'case', name: '10~20', parentId: 206 },
  { id: 414, type: 'case', name: '20~30', parentId: 206 },
  { id: 415, type: 'case', name: '30~40', parentId: 206 },
  { id: 416, type: 'case', name: '40~50', parentId: 206 },

  { id: 417, type: 'case', name: '0', parentId: 207 },
  { id: 418, type: 'case', name: '1~10', parentId: 207 },
  { id: 419, type: 'case', name: '10~20', parentId: 207 },
  { id: 420, type: 'case', name: '20~30', parentId: 207 },
  { id: 421, type: 'case', name: '30~40', parentId: 207 },
  { id: 422, type: 'case', name: '40~50', parentId: 207 },
  { id: 423, type: 'case', name: '50~60', parentId: 207 },
  { id: 424, type: 'case', name: '60~70', parentId: 207 },
  { id: 425, type: 'case', name: '70~80', parentId: 207 },
  { id: 426, type: 'case', name: '80~90', parentId: 207 },
  { id: 427, type: 'case', name: '90~100', parentId: 207 },
  { id: 428, type: 'case', name: '100~110', parentId: 207 },
  { id: 429, type: 'case', name: '110~120', parentId: 207 },
  { id: 430, type: 'case', name: '120~130', parentId: 207 },

  { id: 431, type: 'case', name: '-50~-40', parentId: 208 },
  { id: 432, type: 'case', name: '-40~-30', parentId: 208 },
  { id: 433, type: 'case', name: '-30~-20', parentId: 208 },
  { id: 434, type: 'case', name: '-20~-10', parentId: 208 },
  { id: 435, type: 'case', name: '-10~-1', parentId: 208 },
  { id: 436, type: 'case', name: '0', parentId: 208 },
  { id: 437, type: 'case', name: '1~10', parentId: 208 },
  { id: 438, type: 'case', name: '10~20', parentId: 208 },
  { id: 439, type: 'case', name: '20~30', parentId: 208 },
  { id: 440, type: 'case', name: '30~40', parentId: 208 },
  { id: 441, type: 'case', name: '40~50', parentId: 208 },

  { id: 442, type: 'case', name: '상대 거리', parentId: 209 },
  { id: 443, type: 'case', name: '상대 시간', parentId: 209 },

  { id: 444, type: 'case', name: '정지', parentId: 210 },
  { id: 445, type: 'case', name: '직진', parentId: 210 },

  { id: 446, type: 'case', name: '정지', parentId: 211 },
  { id: 447, type: 'case', name: '직진', parentId: 211 },
  { id: 448, type: 'case', name: '좌회전(진입)', parentId: 211 },
  { id: 449, type: 'case', name: '우회전(진출)', parentId: 211 },
  { id: 450, type: 'case', name: '유턴', parentId: 211 },
  { id: 451, type: 'case', name: '차선변경', parentId: 211 },

  { id: 452, type: 'case', name: 'Headway(안전거리 이내)', parentId: 212 },
  { id: 453, type: 'case', name: 'Headway(안전거리 초과)', parentId: 212 },
  { id: 454, type: 'case', name: '녹색신호', parentId: 212 },
  { id: 455, type: 'case', name: '황색신호', parentId: 212 },
  { id: 456, type: 'case', name: '적색신호', parentId: 212 },
  { id: 457, type: 'case', name: '좌회전 신호', parentId: 212 },
  { id: 458, type: 'case', name: '시뮬레이션 시간', parentId: 212 },

  { id: 459, type: 'case', name: '승용차', parentId: 213 },
  { id: 460, type: 'case', name: '승합차', parentId: 213 },
  { id: 461, type: 'case', name: '버스', parentId: 213 },
  { id: 462, type: 'case', name: '화물차', parentId: 213 },
  { id: 463, type: 'case', name: '특수차', parentId: 213 },
  { id: 464, type: 'case', name: '자전거', parentId: 213 },
  { id: 465, type: 'case', name: '보행자', parentId: 213 },
  { id: 466, type: 'case', name: '기타', parentId: 213 },

  { id: 467, type: 'case', name: '1', parentId: 214 },
  { id: 468, type: 'case', name: '2', parentId: 214 },
  { id: 469, type: 'case', name: '3', parentId: 214 },
  { id: 470, type: 'case', name: '4', parentId: 214 },
  { id: 471, type: 'case', name: '5', parentId: 214 },
  { id: 472, type: 'case', name: '6', parentId: 214 },

  { id: 473, type: 'case', name: '-50~-40', parentId: 215 },
  { id: 474, type: 'case', name: '-40~-30', parentId: 215 },
  { id: 475, type: 'case', name: '-30~-20', parentId: 215 },
  { id: 476, type: 'case', name: '-20~-10', parentId: 215 },
  { id: 477, type: 'case', name: '-10~0', parentId: 215 },
  { id: 478, type: 'case', name: '0~10', parentId: 215 },
  { id: 479, type: 'case', name: '10~20', parentId: 215 },
  { id: 480, type: 'case', name: '20~30', parentId: 215 },
  { id: 481, type: 'case', name: '30~40', parentId: 215 },
  { id: 482, type: 'case', name: '40~50', parentId: 215 },

  { id: 483, type: 'case', name: '0', parentId: 216 },
  { id: 484, type: 'case', name: '1~10', parentId: 216 },
  { id: 485, type: 'case', name: '10~20', parentId: 216 },
  { id: 486, type: 'case', name: '20~30', parentId: 216 },
  { id: 487, type: 'case', name: '30~40', parentId: 216 },
  { id: 488, type: 'case', name: '40~50', parentId: 216 },
  { id: 489, type: 'case', name: '50~60', parentId: 216 },
  { id: 490, type: 'case', name: '60~70', parentId: 216 },
  { id: 491, type: 'case', name: '70~80', parentId: 216 },
  { id: 492, type: 'case', name: '80~90', parentId: 216 },
  { id: 493, type: 'case', name: '90~100', parentId: 216 },
  { id: 494, type: 'case', name: '100~110', parentId: 216 },
  { id: 495, type: 'case', name: '110~120', parentId: 216 },
  { id: 496, type: 'case', name: '120~130', parentId: 216 },

  { id: 497, type: 'case', name: '-50~-40', parentId: 217 },
  { id: 498, type: 'case', name: '-40~-30', parentId: 217 },
  { id: 499, type: 'case', name: '-30~-20', parentId: 217 },
  { id: 500, type: 'case', name: '-20~-10', parentId: 217 },
  { id: 501, type: 'case', name: '-10~-1', parentId: 217 },
  { id: 502, type: 'case', name: '0', parentId: 217 },
  { id: 503, type: 'case', name: '1~10', parentId: 217 },
  { id: 504, type: 'case', name: '10~20', parentId: 217 },
  { id: 505, type: 'case', name: '20~30', parentId: 217 },
  { id: 506, type: 'case', name: '30~40', parentId: 217 },
  { id: 507, type: 'case', name: '40~50', parentId: 217 },

  { id: 508, type: 'case', name: '상대 거리', parentId: 218 },
  { id: 509, type: 'case', name: '상대 시간', parentId: 218 },

  { id: 510, type: 'case', name: '정지', parentId: 219 },
  { id: 511, type: 'case', name: '직진', parentId: 219 },

  { id: 512, type: 'case', name: '정지', parentId: 220 },
  { id: 513, type: 'case', name: '직진', parentId: 220 },
  { id: 514, type: 'case', name: '좌회전(진입)', parentId: 220 },
  { id: 515, type: 'case', name: '우회전(진출)', parentId: 220 },
  { id: 516, type: 'case', name: '유턴', parentId: 220 },
  { id: 517, type: 'case', name: '차선변경', parentId: 220 },

  { id: 518, type: 'case', name: 'Headway(안전거리 이내)', parentId: 221 },
  { id: 519, type: 'case', name: 'Headway(안전거리 초과)', parentId: 221 },
  { id: 520, type: 'case', name: '녹색신호', parentId: 221 },
  { id: 521, type: 'case', name: '황색신호', parentId: 221 },
  { id: 522, type: 'case', name: '적색신호', parentId: 221 },
  { id: 523, type: 'case', name: '좌회전 신호', parentId: 221 },
  { id: 524, type: 'case', name: '시뮬레이션 시간', parentId: 221 },

  /* -----------------------------------------------------Layer 4 end----------------------------------------------------------- */
  /* -----------------------------------------------------Layer 5 start----------------------------------------------------------- */
  { id: 525, type: 'group', name: '시간', parentId: 5 },
  { id: 526, type: 'group', name: '기상환경', parentId: 5 },

  { id: 527, type: 'group', name: '시간대', parentId: 525 },
  { id: 528, type: 'group', name: '요일', parentId: 525 },

  { id: 529, type: 'group', name: '날씨', parentId: 526 },
  { id: 530, type: 'group', name: '기온', parentId: 526 },
  { id: 531, type: 'group', name: '조도', parentId: 526 },

  { id: 532, type: 'case', name: '새벽', parentId: 527 },
  { id: 533, type: 'case', name: '오전', parentId: 527 },
  { id: 534, type: 'case', name: '오후', parentId: 527 },
  { id: 535, type: 'case', name: '야간', parentId: 527 },

  { id: 536, type: 'case', name: '주중', parentId: 528 },
  { id: 537, type: 'case', name: '주말', parentId: 528 },

  { id: 538, type: 'case', name: '맑음', parentId: 529 },
  { id: 539, type: 'case', name: '흐림', parentId: 529 },
  { id: 540, type: 'case', name: '눈', parentId: 529 },
  { id: 541, type: 'case', name: '비', parentId: 529 },
  { id: 542, type: 'case', name: '악천후', parentId: 529 },

  { id: 543, type: 'case', name: '영하', parentId: 530 },
  { id: 544, type: 'case', name: '영상', parentId: 530 },

  { id: 545, type: 'case', name: '빛(조명)', parentId: 531 },
  { id: 546, type: 'case', name: '빛(태양)', parentId: 531 },
  { id: 547, type: 'case', name: '어둠', parentId: 531 },

  /* -----------------------------------------------------Layer 5 end----------------------------------------------------------- */
  /* -----------------------------------------------------Layer 6 start----------------------------------------------------------- */

  { id: 548, type: 'group', name: '센싱정보', parentId: 6 },
  { id: 549, type: 'group', name: '통신정보', parentId: 6 },
  { id: 550, type: 'group', name: '위치정보', parentId: 6 },

  { id: 551, type: 'group', name: 'Camera 센서', parentId: 548 },
  { id: 552, type: 'group', name: 'Radar 센서', parentId: 548 },
  { id: 553, type: 'group', name: 'LiDAR 센서', parentId: 548 },

  { id: 554, type: 'group', name: 'V2I', parentId: 549 },
  { id: 555, type: 'group', name: 'V2V', parentId: 549 },
  { id: 556, type: 'group', name: 'V2P', parentId: 549 },
  { id: 557, type: 'group', name: 'V2N', parentId: 549 },
  { id: 558, type: 'group', name: 'V2C', parentId: 549 },

  { id: 559, type: 'group', name: 'GPS 정보', parentId: 550 },
  { id: 560, type: 'group', name: '전자지도 정보', parentId: 550 },

  { id: 561, type: 'case', name: '--', parentId: 551 },
  { id: 562, type: 'case', name: '-', parentId: 551 },
  { id: 563, type: 'case', name: '0', parentId: 551 },
  { id: 564, type: 'case', name: '+', parentId: 551 },
  { id: 565, type: 'case', name: '++', parentId: 551 },

  { id: 566, type: 'case', name: '--', parentId: 552 },
  { id: 567, type: 'case', name: '-', parentId: 552 },
  { id: 568, type: 'case', name: '0', parentId: 552 },
  { id: 569, type: 'case', name: '+', parentId: 552 },
  { id: 570, type: 'case', name: '++', parentId: 552 },

  { id: 571, type: 'case', name: '--', parentId: 553 },
  { id: 572, type: 'case', name: '-', parentId: 553 },
  { id: 573, type: 'case', name: '0', parentId: 553 },
  { id: 574, type: 'case', name: '+', parentId: 553 },
  { id: 575, type: 'case', name: '++', parentId: 553 },

  { id: 576, type: 'case', name: '사용', parentId: 554 },
  { id: 577, type: 'case', name: '미사용', parentId: 554 },

  { id: 578, type: 'case', name: '사용', parentId: 555 },
  { id: 579, type: 'case', name: '미사용', parentId: 555 },

  { id: 580, type: 'case', name: '사용', parentId: 556 },
  { id: 581, type: 'case', name: '미사용', parentId: 556 },

  { id: 582, type: 'case', name: '사용', parentId: 557 },
  { id: 583, type: 'case', name: '미사용', parentId: 557 },

  { id: 584, type: 'case', name: '사용', parentId: 558 },
  { id: 585, type: 'case', name: '미사용', parentId: 558 },

  { id: 586, type: 'case', name: '--', parentId: 559 },
  { id: 587, type: 'case', name: '-', parentId: 559 },
  { id: 588, type: 'case', name: '0', parentId: 559 },
  { id: 589, type: 'case', name: '+', parentId: 559 },
  { id: 590, type: 'case', name: '++', parentId: 559 },

  { id: 591, type: 'case', name: '--', parentId: 560 },
  { id: 592, type: 'case', name: '-', parentId: 560 },
  { id: 593, type: 'case', name: '0', parentId: 560 },
  { id: 594, type: 'case', name: '+', parentId: 560 },
  { id: 595, type: 'case', name: '++', parentId: 560 },

  /* -----------------------------------------------------Layer 6 end----------------------------------------------------------- */
  /* -----------------------------------------------------Layer 7 start----------------------------------------------------------- */

  {
    id: 596,
    type: 'case',
    name: '제19조',
    parentId: 7,
    value:
      '편도 차도 도로 도심부 최고 최저 km/h 감속 악천후 우천 날씨 비 눈 노면 얼어 가시거리',
  },
  {
    id: 597,
    type: 'case',
    name: '제13조 제1항',
    parentId: 7,
    value: '차마의 운전자는 보도와 차도가 구분된 도로에서 차도로 통행하여야 함',
  },
  {
    id: 598,
    type: 'case',
    name: '제13조 제3항',
    parentId: 7,
    value: '차마의 운전자는 도로의 중앙(중앙선) 우측 부분을 통행하여야 함',
  },
  {
    id: 599,
    type: 'case',
    name: '제14조 제2항',
    parentId: 7,
    value:
      '차마의 운전자는 차로가 설치되어 있는 도로에서 그 차로를 따라 통행하여야 함',
  },
  {
    id: 600,
    type: 'case',
    name: '제19조 제1항',
    parentId: 7,
    value:
      '모든 차의 운전자는 같은 방향으로 가고 있는 앞차의 뒤를 따르는 경우 앞차가 갑자기 정지하게 되는 경우 그 앞차와의 충돌을 피할 수 있는 필요한 거리를 확보하여야 함',
  },
  {
    id: 601,
    type: 'case',
    name: '제19조 제3항',
    parentId: 7,
    value:
      '모든 차의 운전자는 차의 진로를 변경하려는 경우에 그 변경하려는 방향으로 오고 있는 다른 차의 정상적인 통행에 장애를 줄 우려가 있을 때에는 진로를 변경하여서는 아니됨',
  },
  {
    id: 602,
    type: 'case',
    name: '제19조 제4항',
    parentId: 7,
    value:
      '모든 차의 운전자는 위험방지를 위한 경우와 그 밖의 부득이한 경우가 아니면 운전하는 차를 갑자기 정지시키거나 속도를 줄이는 등의 급제동을 하여서는 아니됨',
  },
  {
    id: 603,
    type: 'case',
    name: '제38조 제1항',
    parentId: 7,
    value:
      '모든 차의 운전자는 좌회전ㆍ우회전ㆍ횡단ㆍ유턴ㆍ서행ㆍ정지 또는 후진을 하거나 같은 방향으로 진행하면서 진로를 바꾸려고 하는 경우와 회전교차로에 진입하거나 회전교차로에서 진출하는 경우에는 손이나 방향지시기 또는 등화로써 그 행위가 끝날 때까지 신호를 하여야 함',
  },
  {
    id: 604,
    type: 'case',
    name: '제22조',
    parentId: 7,
    value:
      '22조 각 호의 어느 하나에 해당하는 다른 차를 앞지르기하지 못함, 22조 제3호의 어느 하나에 해당하는 장소에서는 다른 차를 앞지르지 못함',
  },
  {
    id: 605,
    type: 'case',
    name: '제23조',
    parentId: 7,
    value:
      '모든 차의 운전자는 제22조 제2항 각 호의 어느 하나에 해당하는 다른 차 앞으로 끼어들어서는 안됨, 직진차선에 끼어들기 금지',
  },
  {
    id: 606,
    type: 'case',
    name: '제50조 2',
    parentId: 7,
    value:
      '행정안전부령으로 정하는 완전 자율주행시스템에 해당하지 아니하는 자율주행시스템을 갖춘 자동차의 운전자는 자율주행시스템의 직접 운전 요구에 지체 없이 대응하여 조향장치, 제동장치 및 그 밖의 장치를 직접 조작하여 운전하여야 함',
  },
  {
    id: 607,
    type: 'case',
    name: '제5조 제1항',
    parentId: 7,
    value:
      '도로를 통행하는 보행자, 차마 또는 노면전차의 운전자는 교통안전시설이 표시하는 신호 또는 지시 드에 따라야 함',
  },
  {
    id: 608,
    type: 'case',
    name: '제25조 제1항',
    parentId: 7,
    value:
      '모든 차의 운전자는 교차로에서 우회전을 하려는 경우에는 미리 도로의 우측 가장자리에를 서행하며 우회전해야 함',
  },
  {
    id: 609,
    type: 'case',
    name: '제48조 제1항',
    parentId: 7,
    value:
      '모든 차 또는 노면전차의 운전자는 차 또는 노면전차의 조향장치와 제동장치, 그 밖의 장치를 정확하게 조작하여야 하며, 도로의 교통상황과 차 또는 노면전차의 구조 및 성능에 따라 다른 사람에게 위험과 장해를 주는 속도나 방법으로 운전하여서는 아니됨',
  },
  {
    id: 610,
    type: 'case',
    name: '제60조 제1항',
    parentId: 7,
    value:
      '자동차의 운전자는 고속도로등에서 자동차의 고장 등 부득이한 사정이 있는 경우를 제외하고는 행정안전부령으로 정하는 차로에 따라 통행하여야 하며, 갓길(「도로법」에 따른 길어깨를 말한다)로 통행하여서는 아니됨',
  },
  {
    id: 611,
    type: 'case',
    name: '제64조',
    parentId: 7,
    value:
      '자동차의 운전자는 고속도로등에서 차를 정차하거나 주차시켜서는 아니됨. 다만, 다음의 경우 예외에 해당함',
  },
  {
    id: 612,
    type: 'case',
    name: '제12조 제1항',
    parentId: 7,
    value:
      '시장등은 교통사고의 위험으로부터 어린이를 보호하기 위하여 필요하다고 인정하는 경우에는 다음 각 호의 어느 하나에 해당하는 시설이나 장소의 주변도로 가운데 일정 구간을 어린이 보호구역으로 지정하여 자동차등과 노면전차의 통행속도를 시속 30킬로미터 이내로 제한할 수 있음',
  },
  {
    id: 613,
    type: 'case',
    name: '제32조',
    parentId: 7,
    value:
      '모든 차의 운전자는 다음 각 호의 어느 하나에 해당하는 곳에서는 차를 정차하거나 주차하여서는 아니됨.  다만, 이 법이나 이 법에 따른 명령 또는 경찰공무원의 지시를 따르는 경우와 위험방지를 위하여 일시정지하는 경우에는 그러하지 아니함',
  },
  {
    id: 614,
    type: 'case',
    name: '제49조',
    parentId: 7,
    value: '모든 차 또는 노면전차의 운전자는 각 호의 사항을 지켜야 함',
  },
];
/**
 * 케이스의 부모에 대한 메모이제이션
 */
const cases = elementData.filter((data) => data.type === 'case');
export const memoCases: { [key: number]: ElementType[] } = {};

for (const data of cases) {
  const parentId = data.parentId;
  if (parentId) {
    if (!memoCases[parentId]) {
      memoCases[parentId] = [];
    }
    memoCases[parentId].push(data);
  }
}
