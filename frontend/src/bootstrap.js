// Axios
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.axios.interceptors.request.use(
  (config) => {
    let accessToken = localStorage.getItem('token');
    if (accessToken) {
      config.headers = Object.assign(
        {
          Authorization: accessToken,
        },
        config.headers
      );
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
