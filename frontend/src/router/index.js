import { createRouter, createWebHistory } from 'vue-router';

import UserAuth from '../pages/auth/UserAuth.vue';
import ProjectsLayout from '../pages/Layout/ProjectsLayout.vue';
import WelcomePage from '../pages/Welcome.vue';
import Projects from '../pages/Projects.vue';
import ProjectDetails from '../pages/ProjectDetails.vue';
import ProjectCreate from '../pages/ProjectCreate.vue';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomePage,
  },
  {
    path: '/login',
    name: 'Login',
    component: UserAuth,
  },
  {
    path: '/projects',
    component: ProjectsLayout,
    children: [
      {
        path: '',
        name: 'Projects',
        component: Projects,
      },
      {
        path: '/projects/:id',
        name: 'ProjectDetails',
        props: true,
        component: ProjectDetails,
      },
      {
        path: '/projects/create',
        name: 'ProjectCreate',
        component: ProjectCreate,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
