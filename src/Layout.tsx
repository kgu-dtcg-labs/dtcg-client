import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="dark:bg-zinc-800 dark:text-white/80 min-h-svh flex flex-col justify-between">
      <Navbar />
      <main className="px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
