import axios from 'axios';

const env = process.env.NODE_ENV;

// move config constants to config/
const baseUrl = env === 'production' || env === 'staging' ? 'http://pc-builds-container:3011' : 'http://localhost:3011';
const apiUrl = `${baseUrl}`;

const pcBuildsApi = {
  getMultiple: buildIds => (
    axios({
      method: 'get',
      url: `${apiUrl}/`,
      // headers: CORS/bearer tokens, etc...
    })
  ),
  get: buildId => (
    axios({
      method: 'get',
      url: `${apiUrl}/${buildId}`,
      // headers: CORS/bearer tokens, etc...
    })
  ),
};

export default pcBuildsApi;
