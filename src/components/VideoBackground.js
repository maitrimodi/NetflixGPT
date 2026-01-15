import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((state) => state.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video object-cover"
        src={
          'https://www.youtube.com/embed/' +
          trailer +
          '?&autoplay=1&mute=1&loop=1&playlist=' +
          trailer +
          '&controls=0&modestbranding=1'
        }
        frameBorder="0"
        allowFullScreen
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
