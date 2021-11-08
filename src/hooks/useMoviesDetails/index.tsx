import { useEffect, useState } from 'react';
import MovieDB from '../../api';
import { Cast, CreditsMovies } from '../../interfaces/CreditsInterfaces';
import { MovieFull } from '../../interfaces/MovieInterface';

interface movieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

const useMoviesDetails = (movieId: number) => {
  const [moviesDetailsState, setMoviesDetailsState] = useState<movieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMoviesDeatils = async () => {
    const moviesDetailsPromise = MovieDB.get<MovieFull>(`${movieId}`);
    const castPromise = MovieDB.get<CreditsMovies>(`${movieId}/credits`);

    const [MoviesDetailsResponse, castPromiseResponse] = await Promise.all([
      moviesDetailsPromise,
      castPromise,
    ]);
    setMoviesDetailsState({
      isLoading: false,
      movieFull: MoviesDetailsResponse.data,
      cast: castPromiseResponse.data.cast,
    });
  };

  useEffect(() => {
    getMoviesDeatils();
  }, []);

  return { ...moviesDetailsState };
};

export default useMoviesDetails;
