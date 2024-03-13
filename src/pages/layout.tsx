import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <main className="flex flex-col overflow-hidden">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
