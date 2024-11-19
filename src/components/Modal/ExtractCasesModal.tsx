import { ElementType } from '@type/element';
import { Modal } from './Modal';
import clsx from 'clsx';
import { LAYER_LIST } from '@constants/layer';

interface ExtractCasesModalProps {
  cases: ElementType[];
  onClose: () => void;
}

const LayerTableData = ({
  layer,
  className,
  rowSpan,
}: {
  layer: number;
  className: string;
  rowSpan: number;
}) => {
  return (
    <td rowSpan={rowSpan} className={clsx('py-1 border', className)}>
      {`Layer${layer}`}
      <br />({LAYER_LIST[layer - 1].name})
    </td>
  );
};

const ExtractCasesModal = ({ cases, onClose }: ExtractCasesModalProps) => {
  return (
    <Modal onClose={onClose}>
      <div className="max-w-[1200px] flex flex-col items-center gap-3 w-[80vw]">
        <h2 className="text-2xl font-bold">추출 결과</h2>
        <div className="flex w-full">
          <table className="table break-keep w-full text-center border border-collapse">
            <colgroup>
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
            </colgroup>
            <tbody>
              <tr>
                <th className="py-1 border bg-slate-50">Layer</th>
                <th className="py-1 border bg-slate-50">Depth1</th>
                <th className="py-1 border bg-slate-50">Depth2</th>
                <th className="py-1 border bg-slate-50">Depth3</th>
              </tr>
              {/* LAYER 1 시작 */}
              <tr>
                <LayerTableData layer={1} rowSpan={9} className="bg-red-50" />
                <td className="py-1 border bg-red-50" colSpan={3}>
                  도로 기능과 등급
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-red-50" rowSpan={2}>
                  도로폭
                </td>
                <td className="py-1 border bg-red-50" colSpan={2}>
                  차로폭
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-red-50" colSpan={2}>
                  갓길폭
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-red-50" rowSpan={3}>
                  도로기하구조
                </td>
                <td className="py-1 border bg-red-50" colSpan={2}>
                  도로선형
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-red-50" colSpan={2}>
                  도로 경사
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-red-50" colSpan={2}>
                  차로 수
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-red-50" rowSpan={2}>
                  도로표면
                </td>
                <td className="py-1 border bg-red-50" colSpan={2}>
                  도로 포장
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-red-50" colSpan={2}>
                  노면 상태
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-red-50" colSpan={3}>
                  도로유형
                </td>
              </tr>

              {/* LAYER 2 시작 */}

              <tr>
                <LayerTableData
                  layer={2}
                  rowSpan={25}
                  className="bg-orange-50"
                />
                <td className="py-1 border bg-orange-50" rowSpan={6}>
                  도로안전시설
                </td>
                <td className="py-1 border bg-orange-50" rowSpan={3}>
                  차량방호시설
                </td>
                <td className="py-1 border bg-orange-50">중앙분리대</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">방호울타리</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">충격흡수시설</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" rowSpan={2}>
                  조명시설
                </td>
                <td className="py-1 border bg-orange-50">연속조명</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">국부조명</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" colSpan={2}>
                  과속방지턱
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">교통관리시설</td>
                <td className="py-1 border bg-orange-50">신호기</td>
                <td className="py-1 border bg-orange-50">차량 신호</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" rowSpan={9}>
                  도로표지
                </td>
                <td className="py-1 border bg-orange-50" rowSpan={4}>
                  주의표지
                </td>
                <td className="py-1 border bg-orange-50">도로상태 예고</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">노면상황 예고</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">기상상황 예고</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">기타주의 예고</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" rowSpan={3}>
                  규제표지
                </td>
                <td className="py-1 border bg-orange-50">통행금지</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">통행제한</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">금지사항</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" rowSpan={2}>
                  지시표지
                </td>
                <td className="py-1 border bg-orange-50">도로지정</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">통행방법</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" rowSpan={5}>
                  노면표시
                </td>
                <td className="py-1 border bg-orange-50" colSpan={2}>
                  중앙선
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" colSpan={2}>
                  차선
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" colSpan={2}>
                  사전예고 표시
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" colSpan={2}>
                  안전속도 표시
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" colSpan={2}>
                  금지구역 표시
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" rowSpan={4}>
                  운영제약
                </td>
                <td className="py-1 border bg-orange-50" rowSpan={2}>
                  제한속도
                </td>
                <td className="py-1 border bg-orange-50">최고제한속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">최저 제한속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" colSpan={2}>
                  보호구역
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" colSpan={2}>
                  전용도로
                </td>
              </tr>

              {/* LAYER 3 시작 */}

              <tr>
                <LayerTableData
                  layer={3}
                  rowSpan={4}
                  className="bg-yellow-50"
                />
                <td className="py-1 border bg-yellow-50" rowSpan={4}>
                  도로점용
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-yellow-50" colSpan={2}>
                  도로공사
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-yellow-50" colSpan={2}>
                  선행사고
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-yellow-50" colSpan={2}>
                  장애물
                </td>
              </tr>

              {/* LAYER 4 시작 */}

              <tr>
                <LayerTableData
                  layer={4}
                  rowSpan={46}
                  className="bg-green-50"
                />
                <td className="py-1 border bg-green-50" rowSpan={41}>
                  주변 객체
                </td>
                <td className="py-1 border bg-green-50" rowSpan={10}>
                  객체정보(NPC1)
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체종류</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체위치 - 차로</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체위치 - 상대거리</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 가감속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">Trigger(가감속)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 행동(시작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 행동(동작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">Trigger(동작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50" rowSpan={10}>
                  객체정보(NPC2)
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체종류</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체위치 - 차로</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체위치 - 상대거리</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 가감속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">Trigger(가감속)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 행동(시작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 행동(동작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">Trigger(동작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50" rowSpan={10}>
                  객체정보(NPC3)
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체종류</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체위치 - 차로</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체위치 - 상대거리</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 가감속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">Trigger(가감속)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 행동(시작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 행동(동작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">Trigger(동작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50" rowSpan={10}>
                  객체정보(NPC4)
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체종류</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체위치 - 차로</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체위치 - 상대거리</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 가감속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">Trigger(가감속)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 행동(시작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 행동(동작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">Trigger(동작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50" colSpan={3}>
                  교통상황(LOS)
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50" rowSpan={5}>
                  자율주행차
                </td>
                <td className="py-1 border bg-green-50" colSpan={2}>
                  객체종류
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50" colSpan={2}>
                  객체 위치 - 차로
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50" colSpan={2}>
                  객체 속도
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50" colSpan={2}>
                  객체 행동(시작)
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50" colSpan={2}>
                  객체 행동(동작)
                </td>
              </tr>

              {/* LAYER 5 시작 */}

              <tr>
                <LayerTableData layer={5} rowSpan={5} className="bg-blue-50" />
                <td className="py-1 border bg-blue-50" rowSpan={2}>
                  시간
                </td>
                <td className="py-1 border bg-blue-50" colSpan={2}>
                  시간대
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-blue-50" colSpan={2}>
                  요일
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-blue-50" rowSpan={3}>
                  기상환경
                </td>
                <td className="py-1 border bg-blue-50" colSpan={2}>
                  날씨
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-blue-50" colSpan={2}>
                  기온
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-blue-50" colSpan={2}>
                  조도
                </td>
              </tr>

              {/* LAYER 6 시작 */}

              <tr>
                <LayerTableData
                  layer={6}
                  rowSpan={10}
                  className="bg-indigo-50"
                />
                <td className="py-1 border bg-indigo-50" rowSpan={3}>
                  센싱정보
                </td>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  Camera 센서
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  Radar 센서
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  LiDAR 센서
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-indigo-50" rowSpan={5}>
                  통신정보
                </td>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  V2I
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  V2V
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  V2P
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  V2N
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  V2C
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-indigo-50" rowSpan={2}>
                  위치정보
                </td>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  GPS 정보
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  전자지도 정보
                </td>
              </tr>

              {/* LAYER 6 시작 */}

              <tr>
                <LayerTableData
                  layer={7}
                  rowSpan={1}
                  className="bg-purple-50"
                />
                <td className="py-1 border bg-purple-50" colSpan={3}>
                  법 · 규제
                </td>
              </tr>
            </tbody>
          </table>

          <div className="w-1/5">
            <div className="py-1 font-bold text-center border bg-slate-50">
              Depth4
            </div>
            {cases.map((item, index) => (
              <div
                key={item.id}
                className={clsx(
                  'text-center border-b border-r',
                  index === cases.length - 1 ? 'py-4' : 'py-1',
                )}
              >
                {item.value ? item.value : '-'}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ExtractCasesModal;
