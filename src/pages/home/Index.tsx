import Header from '@/components/layouts/Header';
import Navigation from '@/components/layouts/Navigation';

const Home = () => {
  return (
    <>
      <Header />
      <div className="page mt-[57px]">
        <div className="max-container">
          <p className="text-20 text-red-500">Home page 입니다.</p>
        </div>
      </div>
      <Navigation />
    </>
  );
};

export default Home;
