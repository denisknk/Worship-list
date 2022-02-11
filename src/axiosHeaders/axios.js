import Axios from 'axios';

// Axios.defaults.baseURL = 'http://localhost:3001/';
Axios.defaults.baseURL = 'https://us-central1-worship-list-16270.cloudfunctions.net';
// Axios.defaults.headers = { 'content-type': 'application/x-www-form-urlencoded' };
// Axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
export default Axios;
