import axios from 'axios';

const MovieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'a4ebfa2cdcdc1a391d3a5d862f800192',
    language: 'es-ES',
  },
});

export default MovieDB;
