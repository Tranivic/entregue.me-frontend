import { createRouter, createWebHistory } from 'vue-router';
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
      component: () => import('../views/HomeView/HomeView.vue'),
    },
    {
      path: '/categoria/:id',
      name: 'categoria',
      component: () => import('../views/HomeView/HomeView.vue'),
      props: true,
    },
  ],
});

export default router;
