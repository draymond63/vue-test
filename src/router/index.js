import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
// import Blog from '../views/Blog.vue';
// import About from '@/src/pages/About.vue';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About Us',
  //   component: About,
  // },
  // {
  //   path: '/blog/:post',
  //   name: 'Blog',
  //   component: Blog,
  // }
];

const router = createRouter({
  history: createWebHistory('/vue-test/'),
  routes,
});

export default router;