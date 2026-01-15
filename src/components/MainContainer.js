import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return null;
  const randomNumber = Math.floor(Math.random() * movies?.length);
  const mainMovie = movies[randomNumber];
  console.log('main movie', mainMovie);

  const { title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>

    // <div className="relative w-screen aspect-video">
    //   <VideoBackground movieId={id} />
    //   <VideoTitle title={title} overview={overview} />
    // </div>
  );
};

export default MainContainer;
