import axios from 'axios';

import { GET_TOP_MOVIES, GET_MOVIE_DETAIL, SEARCH_MOVIES } from './types';

export const getTopMovies = (page = 1) => {
  // {{url}}/api/movies?path=top&page=1
  const request = axios
    .get(`/api/movies?path=top&page=${page}`)
    .then((response) => {
      // console.log('getTopMovies response.data: ', response.data);
      return response.data;
    });
  return {
    type: GET_TOP_MOVIES,
    payload: request,
  };
};

export const getMovieDetails = (id) => {
  // {{url}}/api/movies/5
  const request = axios
    .get(`/api/movies/${id}`)
    .then(response => response.data);
  return {
    type: GET_MOVIE_DETAIL,
    payload: request,
  };
};

export const searchMovies = (page = 1, query = '') => {
  // {{url}}/api/movies?path=search&page=1&search=garry
  const request = axios
    .get(`/api/movies?path=search&page=${page}&search=${query}`)
    .then(response => response.data);
  return {
    type: SEARCH_MOVIES,
    payload: request,
  };
};
