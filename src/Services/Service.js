import axios from 'axios';

// Backup API Code if request has reached its limit
// ed1e5bba34ee4c6799328cb1ffc33d57 - API 1
// 9f74dc23cae547bc9ca6dc6d8946c42c - API 2
// 9195cb6adde24a579f9db8ba642f21dd - API 3

const apiKey = 'ed1e5bba34ee4c6799328cb1ffc33d57';
const url = 'https://newsapi.org/v2';

export const fetchNews = async request => {
  try {
    return axios
      .get(url + '/everything', {
        params: {
          q: request.q,
          pageSize: request.pageSize,
          page: request.page,
          apiKey: apiKey,
        },
      })
      .then(res => {
        return res.data.articles;
      });
  } catch (error) {
    console.error('Error Getting News: ', error);
  }
};
