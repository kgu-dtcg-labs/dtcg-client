const Navbar = () => {
  return (
    <nav className="py-3 border-t-4 border-b border-t-blue-800">
      <div className="container flex items-center gap-4">
        <img src="/logo.svg" alt="logo" className="max-w-[80px]" />
        <div>
          <h1 className="text-xs font-semibold">경기대학교 교통계획연구실</h1>
          <h1 className="text-xl font-bold">시나리오 생성기</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
