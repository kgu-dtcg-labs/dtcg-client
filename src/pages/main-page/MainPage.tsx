import Navbar from "../../components/layout/Navbar";
import closeIcon from "../../../public/closeWhite.svg";
import reloadIcon from "../../../public/reloadWhite.svg";
import { useState } from "react";

interface Layer {
  layer: number;
  name: string;
}

const MainPage = () => {
  const layerList: Layer[] = [
    { layer: 1, name: "도로정보" },
    { layer: 2, name: "도로 교통시설" },
    { layer: 3, name: "일시적 사건" },
    { layer: 4, name: "동적 객체" },
    { layer: 5, name: "주행 환경" },
    { layer: 6, name: "디지털" },
    { layer: 7, name: "법ㆍ규제" },
  ];

  const [nowLayer, setNowLayer] = useState<number>(1);

  return (
    <main>
      <Navbar />
      {/* 전체 해제 및 초기화 버튼 */}
      <div className="px-8 mt-10">
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-1 rounded-md text-white font-semibold bg-gray-400 p-2 hover:bg-gray-300">
            <img src={closeIcon} alt="close" className="w-5" />
            <p>전체해제</p>
          </button>
          <button className="flex items-center gap-1 rounded-md text-white font-bold bg-blue-500 px-4 py-2 hover:bg-blue-400">
            <img src={reloadIcon} alt="close" className="w-5" />
            <p>초기화</p>
          </button>
        </div>

        {/* Layer 탭 바 */}
        <ul className="flex w-full mt-10 cursor-pointer select-none">
          {layerList.map((item, index) => (
            <li
              key={item.layer}
              className={`${layerList[index].layer === nowLayer ? "bg-orange-400 text-white" : "text-gray"} grid w-full h-16 text-center items-center border font-thin`}
              onClick={() => {
                setNowLayer(index + 1);
              }}
            >
              <p>Layer{item.layer}</p>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default MainPage;
