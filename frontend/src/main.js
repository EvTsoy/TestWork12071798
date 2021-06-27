require('./bootstrap.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BaseSpinner from './components/ui/BaseSpinner.vue';

// Scss
import './assets/styles/index.scss';

const app = createApp(App);

app.use(router);
app.use(store);
app.component('base-spinner', BaseSpinner);

app.mount('#app');
