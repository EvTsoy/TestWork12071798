import { createStore } from 'vuex';

import projectsModule from './modules/Projects';

const store = createStore({
  modules: {
    projects: projectsModule,
  },
});

export default store;
