import { useEffect, useState } from 'react';
import MovieDB from '../../api';
import { Movie, MovieDBNowResponse } from '../../interfaces/MovieInterface';

interface MoviesState {
  moviesCurrent: Movie[];
  moviesPopular: Movie[];
  moviesRated: Movie[];
  moviesUpcoming: Movie[];
}
const useMovies = () => {
  const [moviesState, setMoviesState] = useState<MoviesState>({
    moviesCurrent: [],
    moviesPopular: [],
    moviesRated: [],
    moviesUpcoming: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const moviesPromise = MovieDB.get<MovieDBNowResponse>('/now_playing');
    const moviesPopularPromise = MovieDB.get<MovieDBNowResponse>('/popular');
    const moviesRatedPromise = MovieDB.get<MovieDBNowResponse>('/top_rated');
    const moviesUpcomingPromise = MovieDB.get<MovieDBNowResponse>('/upcoming');

    const res = await Promise.all([
      moviesPromise,
      moviesPopularPromise,
      moviesRatedPromise,
      moviesUpcomingPromise,
    ]);

    setMoviesState({
      moviesCurrent: res[0].data.results,
      moviesPopular: res[1].data.results,
      moviesRated: res[2].data.results,
      moviesUpcoming: res[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { ...moviesState, isLoading };
};

export default useMovies;
