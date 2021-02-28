import axios from 'axios';

const apiKey = 'ed1e5bba34ee4c6799328cb1ffc33d57';
const url = 'https://newsapi.org/v2';

export const fetchNews = async request => {
  return axios
    .get(url + '/everything', {
      params: {
        q: request.query,
        pageSize: request.results,
        apiKey: apiKey,
      },
    })
    .then(res => {
      return res.data.articles;
    })
    .catch(error => {
      console.log(error);
    });
};

export const fetchSources = async () => {
  const requestSource = `sources?apiKey=`;
  try {
    const {
      data: { sources },
    } = await axios.get(`${url}/${requestSource}${apiKey}`);

    return sources.map(source => source);
  } catch (error) {
    return error;
  }
};
