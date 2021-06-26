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

// Import User Class
import User from './Helpers/User';
window.User = User;

// start - SweetAlert2
import Swal from 'sweetalert2';
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

window.Toast = Toast;
//   end - SweetAlert2
