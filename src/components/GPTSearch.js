import { LOGIN_BG } from '../utils/constants';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import GPTSearchBar from './GPTSearchBar';

const GPTSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img
          src={LOGIN_BG}
          className="w-full fixed object-cover h-screen"
          alt="Login Background"
        />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
