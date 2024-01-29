import Navigation from '@/components/layouts/Navigation';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Outlet />
      </main>
      <Navigation />
    </>
  );
};

export default Layout;
