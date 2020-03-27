import axios from 'axios';

// const env = process.env.NODE_ENV;

const baseUrl = 'http://pc-builds:5011';
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
