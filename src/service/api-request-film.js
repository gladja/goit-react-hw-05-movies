import axios from 'axios';

const API_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjcyNWU5Mzg0MmIyYjgw' +
  'ZmI4YmFlNzg3MTI3MWNkOSIsInN1YiI6IjY1MTVkNGQ5OTNiZDY5MDExYjhjOTkzYSIsInNjb3B' +
  'lcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l9PLQpGjOsM35R7JZs_yeDOrJgi1WcOWKxzZsr35qDY';
// const API_KEY = '7f725e93842b2b80fb8bae7871271cd9'
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { language: 'en-US' };
axios.defaults.headers = {
  accept: 'application/json',
  Authorization: API_TOKEN,
};

const getDayFilms = async () => {
  const { data } = await axios('/trending/movie/day');
  console.log(data.results);
  return data;
};

export default getDayFilms;
