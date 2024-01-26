const Navigation = () => {
  return (
    <nav className="h-[117px] w-full transition-all">
      <div className="fixed bottom-0 left-0 z-50 h-[70px] w-full rounded-t-[20px] bg-white shadow-[0_-4px_8px_rgba(0,0,0,0.08)]">
        <ul className="max-container flex h-full items-center justify-between py-2.5">
          <li className="group flex grow cursor-pointer justify-center">
            <div className="text-12 text-gray-136 group-[&.active]:text-primary font-medium">
              <p>home</p>
            </div>
          </li>
          <li className="group flex grow cursor-pointer justify-center">
            <div className="text-12 text-gray-136 group-[&.active]:text-primary font-medium">
              <p>커뮤니티</p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
