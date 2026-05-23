import { CircleAlert, MapPin, RefreshCw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useWeatherContext } from '../context/ContextProvider';
/*  */

const Search = () => {
  const {error,loading,unit,setUnit,weatherByCity,weatherByCoords,getSearchSuggestionByquary,
  } = useWeatherContext();
  const [search, setSearch] = useState('');
  const [suggestion, setSuggestion] = useState(false);
  const [shoSuggestion, setshoSuggestion] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const refS = useRef();
  useEffect(() => {
    weatherByCity('Dhaka');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setTimeout(async () => {
      if (search.length > 1) {
        const q = await getSearchSuggestionByquary(search.trim());
        setshoSuggestion(q);
        console.log(q)
      }
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  const submit = e => {
    e.preventDefault();
    weatherByCity(search);
    // setSearch('');
    setSuggestion(false);
    setIsLoading(true);
  };

  const closeSuggestion = e => {
    if (e.target.contains(refS.current)) {
      setSuggestion(false);
      setSearch('');
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', closeSuggestion);
    return () => {
      document.removeEventListener('mousedown', closeSuggestion);
    };
  }, []);
  // console.log(error);

  return (
    <>
      <div ref={refS} className="flex justify-center gap-2 md:gap-3 my-5">
        <div className=" relative flex flex-col items-center md:min-w-130">
          {/* search by city & search by coords apply & input clear icon */}
          <form
            action="submit"
            onSubmit={submit}
            className="w-full relative mb-0.5"
          >
            <input
              type="text"
              name="search"
              id="search"
              value={search}
              onChange={e => {
                (setSearch(e.target.value), setSuggestion(true));
              }}
              placeholder="Search for any city worldwide..."
              className="text-white placeholder:text-white/40 text-[14px] py-2 pl-7 pr-10  border border-white/20 rounded-2xl focus:rounded-b-none! focus:border-white/40 focus-within:outline-none bg-white/10 backdrop:backdrop-blur-3xl w-full h-full"
            />
            {/* <X
                size={18}
                className="text-white/40 absolute right-3 bottom-1/4 cursor-pointer"
              /> */}
            <MapPin
              size={18}
              onClick={() => weatherByCoords()}
              className="text-white absolute right-3 bottom-1/4 cursor-pointer "
            />
          </form>
          {/* search suggation map data  */}
          {suggestion && (
            <div className=" border border-white/20 rounded-b-xl bg-white/20 backdrop:backdrop-blur-3xl overflow-hidden w-full    absolute top-9.25 z-10">
              {shoSuggestion.map((itemS, indexS) => (
                <div
                  key={indexS}
                  onClick={() => {
                    (setSearch(itemS.name),
                      setSuggestion(false),
                      weatherByCity(search),
                      setSuggestion(false),
                      setIsLoading(true));
                  }}
                  className="py-2 px-4 flex justify-between items-center border-b border-b-white/20 hover:bg-white/10 cursor-pointer"
                >
                  <span>
                    <p className="text-[14px] text-white">{itemS.name}</p>
                    <p className="text-[10px] text-white/40">
                      {' '}
                      <strong> {itemS.country} </strong> {itemS.state}
                    </p>
                  </span>
                  <MapPin size={14} className="text-white/40" />
                </div>
              ))}
            </div>
          )}
          {/* error */}
          {error && !suggestion && (
            <div className=" p-10 rounded-xl bg-red-500 w-full mt-5   absolute top-9.25 z-50">
              <div
                className="flex items-center gap-2 text-[16px] font-bold text-white
                "
              >
                <CircleAlert size={20} className="text-white" />
                <h4>Somthing Went Worng </h4>
              </div>
              <p className="text-white text-[14px] my-5">{error}</p>
              <button
                onClick={() => setSuggestion(true)}
                className="flex gap-2 items-center py-2 px-4 rounded-xl text-white  border border-white/30 bg-white/20  hover:bg-white/40 backdrop:backdrop-blur-3xl transition-all duration-100 ease-in-out"
              >
                <RefreshCw size={16} /> Try Again
              </button>
            </div>
          )}
          {/* loading */}
          {isLoading && loading && (
            <div className=" w-10 h-10 mt-5 border border-t-2 border-t-white/20 border-white/10 rounded-full   absolute top-9.25 animate-spin"></div>
          )}
        </div>
        {/* unit chenge button local state */}
        <div>
          <div className="w-18  h-8 rounded-full border border-white/20  bg-white/10 backdrop:backdrop-blur-3xl">
            <button
              onClick={() => setUnit('C')}
              className={`text-[14px] w-1/2 h-full rounded-full cursor-pointer ${unit === 'C' ? 'bg-white text-gray-600' : 'text-white/40 '}`}
            >
              °C
            </button>

            <button
              onClick={() => setUnit('F')}
              className={`text-[14px] text-gray-700 w-1/2 h-full rounded-full cursor-pointer ${unit === 'F' ? 'bg-white' : 'text-white/40 '}`}
            > °F
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
