import Header from '@/components/layouts/Header';
import Navigation from '@/components/layouts/Navigation';

const Community = () => {
  return (
    <>
      <Header />
      <div className="page mt-[48px]">
        <div className="max-container">
          <p className="text-20 text-red-500">Community page 입니다.</p>
        </div>
        <Navigation />
      </div>
    </>
  );
};

export default Community;
