interface TableHeaderType {
  name: string;
}

export const TABLE_HEADER: TableHeaderType[] = [
  { name: '주간선도로' },
  { name: '보조간선도로' },
  { name: '집산도로' },
  { name: '국지도로' },
  { name: '차로폭' },
  { name: '갓길폭' },
  { name: '도로선형' },
  { name: '도로경사' },
  { name: '차로수' },
  { name: '도로포장' },
  { name: '노면상태' },
  { name: '도로유형' },
  { name: '중앙분리대' },
  { name: '방호울타리' },
  { name: '충격흡수시설' },
  { name: '연속조명' },
  { name: '국부조명' },
  { name: '과속방지턱' },
  { name: '차량신호' },
  { name: '도로상태예고' },
  { name: '노면상황예고' },
  { name: '기상상황예고' },
  { name: '기타주의예고' },
  { name: '통행금지' },
  { name: '통행제한' },
  { name: '금지사항' },
  { name: '도로지정' },
  { name: '통행방법' },
  { name: '기타지정' },
  { name: '중앙선' },
  { name: '차선' },
  { name: '사전예고표시' },
  { name: '안전속도표시' },
  { name: '금지구역표시' },
  { name: '최고제한속도' },
  { name: '최저제한속도' },
  { name: '보호구역' },
  { name: '전용도로' },
  { name: '도로공사' },
  { name: '선행사고' },
  { name: '장애물' },
  { name: '존재유무(N)' },
  { name: '객체종류(N)' },
  { name: '객체위치-차로(N)' },
  { name: '객체위치-상대(N)' },
  { name: '객체속도(N)' },
  { name: '객체가속도(N)' },
  { name: '객체행동-I(N)' },
  { name: '객체행동-A(N)' },
  { name: 'Trigger(N)' },
  { name: '존재유무(W)' },
  { name: '객체종류(W)' },
  { name: '객체위치-차로(W)' },
  { name: '객체위치-상대(W)' },
  { name: '객체속도(W)' },
  { name: '객체가속도(W)' },
  { name: '객체행동-I(W)' },
  { name: '객체행동-A(W)' },
  { name: 'Trigger(W)' },
  { name: '존재유무(E)' },
  { name: '객체종류(E)' },
  { name: '객체위치-차로(E)' },
  { name: '객체위치-상대(E)' },
  { name: '객체속도(E)' },
  { name: '객체가속도(E)' },
  { name: '객체행동-I(E)' },
  { name: '객체행동-A(E)' },
  { name: 'Trigger(E)' },
  { name: '존재유무(S)' },
  { name: '객체종류(S)' },
  { name: '객체위치-차로(S)' },
  { name: '객체위치-상대(S)' },
  { name: '객체속도(S)' },
  { name: '객체가속도(S)' },
  { name: '객체행동1(S)' },
  { name: '객체행동2(S)' },
  { name: 'Trigger(S)' },
  { name: '교통상황(LOS)' },
  { name: '연관NPC' },
  { name: '객체종류' },
  { name: '객체위치-차로' },
  { name: '객체위치-절대' },
  { name: '객체속도' },
  { name: '객체가속도' },
  { name: '객체행동1' },
  { name: '객체행동2' },
  { name: 'Trigger' },
  { name: '시간대' },
  { name: '요일' },
  { name: '날씨' },
  { name: '기온' },
  { name: '조도' },
  { name: 'Camera센서' },
  { name: 'Radar센서' },
  { name: 'LiDAR센서' },
  { name: 'V2I' },
  { name: 'V2V' },
  { name: 'V2P' },
  { name: 'V2N' },
  { name: 'V2C' },
  { name: 'GPS정보' },
  { name: '전자지도정보' },
] as const;
