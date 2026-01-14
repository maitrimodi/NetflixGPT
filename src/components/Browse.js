import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import ManinContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <ManinContainer />
      <SecondaryContainer />
      {/* 
        Main Container
          - Video Background
          - Video Title
        Secondary Container
          - MovieList * n
            - cards * n
       */}
    </div>
  );
};

export default Browse;
