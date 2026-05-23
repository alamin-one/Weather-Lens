import * as Icon from 'lucide-react';
import { useWeatherContext } from '../context/ContextProvider';
import useLIb from '../hook/useLIb';

const Dashboard = () => {
  const { loading, currentW } = useWeatherContext();
  const {
    curdate,curtime,curtemp,temp_max,temp_min,unit,speed,deg,sunrise,sunset,filtered,formatDay,pop,temp,
  } = useLIb();

  return (
    <>
      {!loading && (
        <div className="flex flex-col md:flex-row gap-4 ">
          {/* Dashboard 1 */}
          <div className="w-full p-5 border border-white/20 bg-white/10 backdrop-blur-3xl rounded-xl">
            {/* Dash1 */}
            <div className="flex  justify-between items-start ">
              <div className="flex items-start gap-1 text-white/40">
                <Icon.MapPin size={24} className="mt-1" />{' '}
                <div className="flex flex-col">
                  <span className="text-xl text-white font-bold">
                    {currentW?.name}
                  </span>
                  <span className="text-[10px] text-white/40">
                    {currentW.sys.country}{' '}
                  </span>
                </div>
              </div>
              <div className="text-end text-white/40 text-[13px]">
                <p>{curdate}</p>
                <p>{curtime}</p>
              </div>
            </div>
            {/* Dash 2 */}
            <div className="mt-5 flex justify-between items-end">
              <div className="text-[16px] text-white/60">
                <h4 className="text-white text-7xl ">
                  {curtemp}°
                  <span className="text-3xl"> {unit === 'C' ? 'C' : 'F'} </span>
                </h4>
                <p>{currentW.weather[0].description}</p>
                <p className="text-white/30 text-[12px]">{`H:${temp_max} ° L: ${temp_min}°`}</p>
              </div>
              <div className="">
                <Icon.SunMedium size={80} className="text-white/50" />
              </div>
            </div>
            {/* dash 3 */}
            <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-2">
              <div className="text-white/45 text-[12px] p-4 space-y-1 border border-white/20 rounded-xl  backdrop-blur-[0px] ">
                <span className="flex items-center gap-2">
                  <Icon.EyeClosed size={18} />
                  <p>Visibility</p>
                </span>
                <p className="text-[18px] text-white ">
                  1{currentW.visibility / 1000} Km
                </p>
              </div>
              <div className="text-white/45 text-[12px] p-4 space-y-1 border border-white/20 rounded-xl  backdrop-blur-[0px] ">
                <span className="flex items-center gap-2">
                  <Icon.Gauge size={18} />
                  <p>Wind Speed</p>
                </span>
                <p className="text-[18px] text-white ">
                  {speed} m/s {deg}°
                </p>
              </div>
              <div className="col-span-2 md:col-span-1 text-white/45 text-[12px] p-4 space-y-1 border border-white/20 rounded-xl  backdrop-blur-[0px] ">
                <span className="flex items-center gap-2">
                  <Icon.Droplet size={18} />

                  <p>Humidity</p>
                </span>
                <p className="text-[18px] text-white ">
                  {currentW?.main?.humidity}%
                </p>
              </div>
            </div>
            {/* dash 4 */}
            <div className="mt-2 grid grid-cols-5 md:grid-cols-2 gap-2">
              <div className="col-span-3 md:col-span-1 text-white/45 text-[12px] p-4 space-y-1 border border-white/20 rounded-xl  backdrop-blur-[0px] ">
                <span className="flex items-center gap-2">
                  <Icon.CircleGauge size={18} />
                  <p>Pressure</p>
                </span>
                <p className="text-[18px] text-white ">
                  {currentW?.main?.pressure} hPa
                </p>
              </div>
              <div className="col-span-2 md:col-span-1 text-white/45 text-[12px] p-4 space-y-1 border border-white/20 rounded-xl  backdrop-blur-[0px] ">
                <span className="flex items-center gap-2">
                  <Icon.SmilePlus size={18} />
                  <p>Feels Like</p>
                </span>
                <p className="text-[18px] text-white ">
                  {currentW?.main?.feels_like}°C
                </p>
              </div>
            </div>
            {/* dash 5 */}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className=" text-white/50 text-[12px] p-4 space-y-1 border border-white/20 rounded-xl  bg-sky-500/20 backdrop-blur-[0px] ">
                <span className="flex items-center gap-2">
                  <Icon.CloudSun size={32} />
                  <span>
                    <p>Sunrise</p>
                    <p className="text-[18px] text-white ">{sunrise}</p>
                  </span>
                </span>
              </div>
              <div className=" text-white/50 text-[12px] p-4 space-y-1 border border-white/20 rounded-xl  bg-pink-400/20 backdrop-blur-[0px] ">
                <span className="flex items-center gap-2">
                  <Icon.Sunset size={32} />
                  <span>
                    <p>Sunset</p>
                    <p className="text-[18px] text-white ">{sunset}</p>
                  </span>
                </span>
              </div>
            </div>
          </div>
          {/* Dashboard 2 */}
          <div className="w-full md:w-1/2  ">
            <div className="p-4 border border-white/20 bg-white/10 backdrop-blur-3xl rounded-xl">
              <div className="text-[16px] font-bold text-white mb-5 flex items-center gap-3 ">
                <Icon.CalendarRange size={18} /> <p>5-Day Forecast</p>
              </div>
              {/* Forecast Map */}
              <div className="">
                {/* {  forecast} */}
                {filtered.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center gap-4 mt-2 py-2 px-4 border border-white/20 bg-white/0 backdrop-blur-3xl rounded-xl"
                  >
                    <div className="text-white text-[14px]">
                      <p>{formatDay(item?.dt)}</p>
                      <p className="text-white/40 text-[12px]">
                        {item.weather[0].description}
                      </p>
                    </div>

                    <div className="text-[10px] text-white flex items-center gap-1">
                      <Icon.Droplet size={15} className="text-white" />
                      <p>{pop(item.pop)}%</p>
                    </div>
                    <div className="text-white text-[14px]">
                      <p>{temp(item.main.temp)}°</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
