// WARNING: Don't check your actual API key into GitHub
import config from '../../config';

const createMovieDbUrl = (relativeUrl, queryParams) => {
  let baseUrl = `${config.movieDbBaseUrl}${relativeUrl}?api_key=${config.movieDbApiKey}&language=en-US`;
  if (queryParams) {
    Object.keys(queryParams).forEach(paramName => (baseUrl += `&${paramName}=${queryParams[paramName]}`));
  }
  return baseUrl;
};

export const getTopMovies = async ({ page }) => {
  const fullUrl = createMovieDbUrl('/movie/top_rated', {
    page,
  });
  return fetch(fullUrl);
};

export const searchMovies = async ({ page, query }) => {
  const fullUrl = createMovieDbUrl('/search/movie', {
    page,
    query,
  });
  return fetch(fullUrl);
};

export const getMovieDetails = async ({ movieId }) => {
  const fullUrl = createMovieDbUrl(`/movie/${movieId}`);
  return fetch(fullUrl);
};
