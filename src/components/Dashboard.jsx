import {
  CalendarRange,
  CircleGauge,
  CloudHail,
  CloudSun,
  Droplet,
  EyeClosed,
  Gauge,
  MapPin,
  SmilePlus,
  SunMedium,
  Sunset,
} from 'lucide-react';

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 ">
        {/* Dashboard 1 */}
        <div className="w-full p-5 border border-white/20 bg-white/10 backdrop-blur-3xl rounded-xl">
          {/* Dash1 */}
          <div className="flex  justify-between items-start ">
            <div className="flex items-start gap-1 text-white/40">
              <MapPin size={24} className="mt-1" />{' '}
              <div className="flex flex-col">
                <span className="text-xl text-white font-bold">Dhaka </span>
                <span className="text-[10px] text-white/40">BD </span>
              </div>
            </div>
            <div className="text-end text-white/40 text-[13px]">
              <p>Saturday, May 23</p>
              <p>06:27 AM</p>
            </div>
          </div>
          {/* Dash 2 */}
          <div className="mt-5 flex justify-between items-end">
            <div className="text-[16px] text-white/60">
              <h4 className="text-white text-7xl ">
                {' '}
                29°<span className="text-3xl">C</span>
              </h4>
              <p>Clear Sky</p>
              <p className="text-white/30 text-[12px]">H: 29° L: 29</p>
            </div>
            <div className="">
              <SunMedium size={80} className="text-white/50" />
            </div>
          </div>
          {/* dash 3 */}
          <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-2">
            <div className="text-white/45 text-[12px] p-4 space-y-1 border border-white/20 rounded-xl  backdrop-blur-[0px] ">
              <span className="flex items-center gap-2">
                <EyeClosed size={18} />
                <p>Visibility</p>
              </span>
              <p className="text-[18px] text-white ">10 km</p>
            </div>
            <div className="text-white/45 text-[12px] p-4 space-y-1 border border-white/20 rounded-xl  backdrop-blur-[0px] ">
              <span className="flex items-center gap-2">
                <Gauge size={18} />
                <p>Wind Speed</p>
              </span>
              <p className="text-[18px] text-white ">8.8 m/s</p>
            </div>
            <div className="col-span-2 md:col-span-1 text-white/45 text-[12px] p-4 space-y-1 border border-white/20 rounded-xl  backdrop-blur-[0px] ">
              <span className="flex items-center gap-2">
                <Droplet  size={18} />

                <p>Humidity</p>
              </span>
              <p className="text-[18px] text-white ">24%</p>
            </div>
          </div>
          {/* dash 4 */}
          <div className="mt-2 grid grid-cols-5 md:grid-cols-2 gap-2">
            <div className="col-span-3 md:col-span-1 text-white/45 text-[12px] p-4 space-y-1 border border-white/20 rounded-xl  backdrop-blur-[0px] ">
              <span className="flex items-center gap-2">
                <CircleGauge size={18} />
                <p>Pressure</p>
              </span>
              <p className="text-[18px] text-white ">1009 hPa</p>
            </div>
            <div className="col-span-2 md:col-span-1 text-white/45 text-[12px] p-4 space-y-1 border border-white/20 rounded-xl  backdrop-blur-[0px] ">
              <span className="flex items-center gap-2">
                <SmilePlus size={18} />
                <p>Wind Speed</p>
              </span>
              <p className="text-[18px] text-white ">14°C</p>
            </div>
          </div>
          {/* dash 5 */}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className=" text-white/50 text-[12px] p-4 space-y-1 border border-white/20 rounded-xl  bg-sky-500/20 backdrop-blur-[0px] ">
              <span className="flex items-center gap-2">
                <CloudSun size={32} />
                <span>
                  <p>Sunrise</p>
                  <p className="text-[18px] text-white ">07:00 AM</p>
                </span>
              </span>
            </div>
            <div className=" text-white/50 text-[12px] p-4 space-y-1 border border-white/20 rounded-xl  bg-pink-400/20 backdrop-blur-[0px] ">
              <span className="flex items-center gap-2">
                <Sunset size={32} />
                <span>
                  <p>Sunset</p>
                  <p className="text-[18px] text-white ">07:00 AM</p>
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* Dashboard 2 */}
        <div className="w-full md:w-1/2  ">
          <div className="p-4 border border-white/20 bg-white/10 backdrop-blur-3xl rounded-xl">
            <div className="text-[16px] font-bold text-white mb-5 flex items-center gap-3 ">
              <CalendarRange size={18} /> <p>5-Day Forecast</p>
            </div>
            {/* Forecast Map */}
            <div className="">
              <div className="flex justify-between items-center gap-4 mt-2 py-2 px-4 border border-white/20 bg-white/0 backdrop-blur-3xl rounded-xl">
                <div className="text-white text-[14px]">
                  <p>Today</p>
                  <p className="text-white/40 text-[12px]">Light Rain</p>
                </div>
                <div>
                  <CloudHail size={15} className="text-white" />
                </div>
                <div className="text-[10px] text-white flex items-center gap-1">
                  <Droplet size={15} className="text-white" />
                  <p>8%</p>
                </div>
                <div className="text-white text-[14px]">
                  <p>16°</p>
                  <p className="text-white/40 text-[12px]">14°</p>
                </div>
              </div>
              <div className="flex justify-between items-center gap-4 mt-2 py-2 px-4 border border-white/20 bg-white/0 backdrop-blur-3xl rounded-xl">
                <div className="text-white text-[14px]">
                  <p>Today</p>
                  <p className="text-white/40 text-[12px]">Light Rain</p>
                </div>
                <div>
                  <CloudHail size={15} className="text-white" />
                </div>
                <div className="text-[10px] text-white flex items-center gap-1">
                  <Droplet size={15} className="text-white" />
                  <p>8%</p>
                </div>
                <div className="text-white text-[14px]">
                  <p>16°</p>
                  <p className="text-white/40 text-[12px]">14°</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
