import axios from 'axios';

const instance = axios.create ({
  baseURL: 'https://teste-aa610.firebaseio.com/'
});

export default instance;
