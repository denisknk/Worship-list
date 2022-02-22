import Axios from 'axios';

// Axios.defaults.baseURL = 'http://localhost:5003/worship-list-back/us-central1';
Axios.defaults.baseURL = 'https://us-central1-worship-list-back.cloudfunctions.net';
// Axios.defaults.headers = { 'content-type': 'application/x-www-form-urlencoded' };
// Axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
export default Axios;
