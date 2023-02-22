import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      alias: '/page/1',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/categoria/:id',
      name: 'categoria',
      component: HomeView,
      props: true,
    },
  ],
});

export default router;
