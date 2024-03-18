import Footer from '@components/common/Footer/Footer';
import Navbar from '@components/common/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col dark:bg-zinc-800 dark:text-white/80 min-h-svh">
      <Navbar />
      <main className="container flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
