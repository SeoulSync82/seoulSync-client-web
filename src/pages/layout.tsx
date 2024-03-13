import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <main className="flex max-h-screen min-h-screen flex-col overflow-hidden">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
