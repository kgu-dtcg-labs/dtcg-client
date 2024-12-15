import { useCallback, useEffect, useState } from 'react';
import { WiDaySunny, WiNightClear } from 'react-icons/wi';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    () =>
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches),
  );

  useEffect(() => {
    const className = darkMode ? 'dark' : 'light';
    document.documentElement.className = className;
    localStorage.setItem('theme', className);
  }, [darkMode]);

  const handleDarkModeClick = useCallback(() => {
    setDarkMode(!darkMode);
  }, [darkMode]);

  return (
    <nav className="py-3 border-t-4 border-b border-t-blue-800 dark:border-zinc-600 dark:border-t-blue-900">
      <div className="px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="logo" className="max-w-[80px]" />
          <div className="text-nowrap">
            <h1 className="text-xs font-semibold">경기대학교 교통계획연구실</h1>
            <h1 className="text-xl font-bold">주행 테스트 케이스 생성기</h1>
          </div>
        </div>
        <button type="button" onClick={handleDarkModeClick}>
          {darkMode ? <WiDaySunny size={32} /> : <WiNightClear size={32} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
