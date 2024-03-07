import logo from "../../../public/logo.svg";

const Navbar = () => {
  return (
    <div className="flex w-screen h-20 border-b items-center justify-between px-8">
      <div className="flex gap-4 items-center select-none">
        <img src={logo} alt="kgu" className="max-w-[80px]" />
        <div>
          <h1 className="text-[12.2px] font-semibold">
            경기대학교 교통계획연구실
          </h1>
          <h1 className="text-[20.5px] font-bold">시나리오 생성기</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
