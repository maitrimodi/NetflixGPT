import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames ? (
          movieNames?.map((movie, index) => {
            return (
              <MovieList
                key={movie}
                title={movie}
                movies={movieResults[index]}
              />
            );
          })
        ) : (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
