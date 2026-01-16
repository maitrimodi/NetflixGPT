import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-lg md:text-xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie?.id}
              posterPath={movie?.poster_path}
              movieID={movie?.id}
              name={movie?.original_title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
