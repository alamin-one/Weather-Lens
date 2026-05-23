import { CircleAlert, MapPin, RefreshCw } from 'lucide-react';
const Search = () => {
  return (
    <>
      <div className="flex justify-center gap-2 md:gap-3 my-5">
        <div className=" relative flex flex-col items-center md:min-w-130">
          {/* search by city & search by coords apply & input clear icon */}
          <form action="submit" className="w-full relative mb-0.5">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for any city worldwide..."
              className="text-white placeholder:text-white/40 text-[14px] py-2 pl-7 pr-10  border border-white/20 rounded-2xl focus:rounded-b-none! focus:border-white/40 focus-within:outline-none bg-white/10 backdrop:backdrop-blur-3xl w-full h-full"
            />

            {/* <X
                size={18}
                className="text-white/40 absolute right-3 bottom-1/4 cursor-pointer"
              /> */}
            <MapPin
              size={18}
              className="text-white/40 absolute right-3 bottom-1/4 cursor-pointer "
            />
          </form>

          {/* search suggation map data  */}
          <div className="hidden border border-white/20 rounded-b-xl bg-white/20 backdrop:backdrop-blur-3xl overflow-hidden w-full    absolute top-9.25 z-10">
            <div className="py-2 px-4 flex justify-between items-center border-b border-b-white/20 hover:bg-white/10 cursor-pointer">
              <span>
                <p className="text-[14px] text-white">Dhaka</p>
                <p className="text-[10px] text-white/40">BD</p>
              </span>
              <MapPin size={14} className="text-white/40" />
            </div>
            <div className="py-2 px-4 flex justify-between items-center border-b border-b-white/20 hover:bg-white/10 cursor-pointer">
              <span>
                <p className="text-[14px] text-white">Dhaka</p>
                <p className="text-[10px] text-white/40">BD</p>
              </span>
              <MapPin size={14} className="text-white/40" />
            </div>
            <div className="py-2 px-4 flex justify-between items-center border-b border-b-white/20 hover:bg-white/10 cursor-pointer">
              <span>
                <p className="text-[14px] text-white">Dhaka</p>
                <p className="text-[10px] text-white/40">BD</p>
              </span>
              <MapPin size={14} className="text-white/40" />
            </div>
            <div className="py-2 px-4 flex justify-between items-center border-b border-b-white/20 hover:bg-white/10 cursor-pointer">
              <span>
                <p className="text-[14px] text-white">Dhaka</p>
                <p className="text-[10px] text-white/40">BD</p>
              </span>
              <MapPin size={14} className="text-white/40" />
            </div>
          </div>

          {/* error */}
          <div className="hidden p-10 rounded-xl bg-red-500 w-full mt-5   absolute top-9.25">
            <div
              className="flex items-center gap-2 text-[16px] font-bold text-white
            "
            >
              <CircleAlert size={20} className="text-white" />
              <h4>Somthing Went Worng </h4>
            </div>
            <p className="text-white text-[14px] my-5">
              Lorem ipsum dolor sit amet.
            </p>
            <button className="flex gap-2 items-center py-2 px-4 rounded-xl text-white  border border-white/30 bg-white/20  hover:bg-white/40 backdrop:backdrop-blur-3xl transition-all duration-100 ease-in-out">
              <RefreshCw size={16} /> Try Again
            </button>
          </div>

          {/* loading */}
          <div className="hidden w-10 h-10 mt-5 border border-t-2 border-t-white/20 border-white/10 rounded-full   absolute top-9.25 animate-spin"></div>
        </div>

        {/* unit chenge button local state */}
        <div>
          <div className="w-18  h-8 rounded-full border border-white/20  bg-white/10 backdrop:backdrop-blur-3xl">
            <button className="text-[14px] text-gray-700 w-1/2 h-full bg-white rounded-full cursor-pointer">
              °F
            </button>
            <button className="text-[14px] text-white/40 w-1/2 h-full rounded-full cursor-pointer">
              °C
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
