import { useState } from 'react';
import { IMG_CDN_URL } from '../utils/constants';
import useMovieTrailer from '../hooks/useMovieTrailer';

const MovieCard = ({ posterPath, movieID }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  useMovieTrailer(showTrailer ? movieID : null);

  if (!posterPath) return null;

  const handleMovieCardClick = () => {
    setShowTrailer(true);
  };

  return (
    <div className="w-36 md:w-48 pr-4 ">
      <img
        alt="Movie card"
        src={IMG_CDN_URL + posterPath}
        className="rounded-sm cursor-pointer"
        onClick={handleMovieCardClick}
      />
    </div>
  );
};

export default MovieCard;
