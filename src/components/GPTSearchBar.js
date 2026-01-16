import { IoSearch } from 'react-icons/io5';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import useSearchMoviesTMDB from '../hooks/useSearchMoviesTMDB';

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const { error, loading, handleGPTSearchClick } =
    useSearchMoviesTMDB(searchText);

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className=" bg-black w-11/12 md:w-1/2 grid grid-cols-12 border border-gray-700 rounded-lg p-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-2 m-2 md:p-4 md:m-4 col-span-9"
        />
        <button
          className=" py-2 px-4 m-2 md:m-4 bg-red-700 text-white rounded-lg col-span-3 flex items-center justify-center"
          onClick={handleGPTSearchClick}
          disabled={loading}
        >
          {loading ? (
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <IoSearch className=" size-2 md:size-5  mr-1 md:mr-3" />
              {lang[langKey].search}
            </>
          )}
        </button>
      </form>
      {error && (
        <div className="mt-4 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          <span className="font-medium">Error:</span> {error}
        </div>
      )}
    </div>
  );
};

export default GPTSearchBar;
