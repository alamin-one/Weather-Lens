import Dashboard from './Dashboard';
import Search from './Search';

const Home = () => {
  return (
    <>
      <div>
        <h2 className="text-center text-[32px] md:text-[40px] font-bold text-white">
          Weather <span className="text-sky-600">Lens</span>
        </h2>
        <p className="text-center  text-[14px] tracking-wide leading-6  text-white/50 w-full md:w-1/2 mx-auto mb-4">
          Experience weather like never before with real-time data, beautiful
          visuals, and precise forecasts for any location worldwide
        </p>
      </div>
      <Search />
      <Dashboard />
    </>
  );
};

export default Home;
