import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'c93df07230d9d2aaed10b113e03c4665';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get('/trending/movie/day', params);
  return data.results;
}

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`, params);
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`, params);
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`, params);
  return data.results;
};

export const getSearchMovie = async query => {
  const { data } = await axios.get(`/search/movie?query=${query}`, params);
  return data.results;
};