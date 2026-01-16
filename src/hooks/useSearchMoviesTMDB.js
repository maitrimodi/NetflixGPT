import { useDispatch } from 'react-redux';
import { API_OPTIONS, GPT_ERR_MSG } from '../utils/constants';
import openai from '../utils/openai';
import { useState } from 'react';
import { addGPTMovieResult } from '../utils/gptSlice';

const useSearchMoviesTMDB = (searchText) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' +
        movieName +
        '&include_adult=false&language=en-US&page=1',
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    if (!searchText.current.value) return;

    try {
      setError(null);
      setLoading(true);

      const gptQuery =
        'Act as a movie recommendation system and suggest some movies for the query: ' +
        searchText.current.value +
        '. Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, sholay, Don, Kuch Kuch Hota hai, Golmaal';

      const gptResults = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: gptQuery,
          },
        ],
      });
      if (!gptResults.choices) {
        setError({ GPT_ERR_MSG });
        return;
      }

      const gptMovies = gptResults?.choices?.[0]?.message?.content.split(',');
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const TMDBResults = await Promise.all(promiseArray);

      dispatch(
        addGPTMovieResult({ movieNames: gptMovies, movieResults: TMDBResults }),
      );
      searchText.current.value = '';
    } catch (err) {
      setError(err.message || GPT_ERR_MSG);
    } finally {
      setLoading(false); // ✅ stop spinner
    }
  };

  return { error, loading, handleGPTSearchClick };
};

export default useSearchMoviesTMDB;
