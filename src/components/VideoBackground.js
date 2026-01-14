import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((state) => state.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="absolute inset-0 -z-10">
      <iframe
        className="w-full h-full scale-125"
        src={
          'https://www.youtube.com/embed/' +
          trailer +
          '?&autoplay=1&mute=1&loop=1'
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
