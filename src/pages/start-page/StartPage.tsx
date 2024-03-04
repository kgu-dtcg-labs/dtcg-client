import { Link } from "react-router-dom";
import logo from "../../../public/logo.svg";

const StartPage = () => {
  return (
    <div className="flex my-auto flex-col items-center gap-10">
      <img src={logo} alt="kgu" className="max-w-[300px]" />

      <div className="flex flex-col gap-2 text-center text-[32px]">
        <h1>경기대학교 교통계획연구실</h1>
        <h1>시나리오 생성기</h1>
      </div>

      <Link to="/mainpage">
        <button className="hover:bg-orange-400 w-64 h-16 rounded-full bg-orange-500 font-bold text-white text-xl shadow-md">
          시작하기
        </button>
      </Link>
    </div>
  );
};

export default StartPage;
