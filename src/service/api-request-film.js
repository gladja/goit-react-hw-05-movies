import axios from 'axios';
import { toast } from 'react-toastify';

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjcyNWU5Mzg0MmIyYjgw' +
  'ZmI4YmFlNzg3MTI3MWNkOSIsInN1YiI6IjY1MTVkNGQ5OTNiZDY5MDExYjhjOTkzYSIsInNjb3B' +
  'lcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l9PLQpGjOsM35R7JZs_yeDOrJgi1WcOWKxzZsr35qDY';
const API_KEY = '7f725e93842b2b80fb8bae7871271cd9';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = { language: 'en-US' };
axios.defaults.headers = {
  accept: 'application/json',
  Authorization: `Bearer ${API_TOKEN}`,
};

// const getFilms = async (url) => {
//   const { data } = await axios({ url });
//   // console.log(data.results);
//   return data;
// };


const getFilms = async (url) => {
  try {
    const { data } = await axios({ url });
    return data;
  } catch (error) {
    // console.log(error.message);
    toast.error('Sorry ERROR. Please try again.');
  } finally {
    // setLoading(false);
  }
};


export default getFilms;
