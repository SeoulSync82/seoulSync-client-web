import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col overflow-hidden">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
