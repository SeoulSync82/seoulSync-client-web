import Header from '@/components/layouts/Header';
import Navigation from '@/components/layouts/Navigation';

const MyCourse = () => {
  return (
    <>
      <Header />
      <div className="page mt-12">
        <div className="max-container">
          <p className="text-20 text-red-500">MyCourse page 입니다.</p>
        </div>
        <Navigation />
      </div>
    </>
  );
};

export default MyCourse;
