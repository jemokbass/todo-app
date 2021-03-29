import axios from 'axios';

const instance = axios.create({
  baseURL: `https://todo-app-9d8dc-default-rtdb.firebaseio.com/`,
});

export default instance;
