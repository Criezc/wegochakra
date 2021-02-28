import axios from 'axios';

const apiKey = '9195cb6adde24a579f9db8ba642f21dd';
const url = 'https://newsapi.org/v2';

export const fetchNews = async request => {
  return axios
    .get(url + '/everything', {
      params: {
        q: request.query,
        pageSize: request.results,
        page: request.page,
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

export const fetchSource = async request => {
  const requestSource = `sources?apiKey=`;
  const res = await axios.get(`${url}/${requestSource}${apiKey}`);
  return res.data.sources;
};
