import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../pages/Customer/Dashboard.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/liveview',
      name: 'live-view',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/Customer/LiveView.vue')
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('../pages/Customer/Users.vue')
    },
    {
      path: '/mydisplays',
      name: 'MyDisplays',
      component: () => import('../pages/Customer/MyDisplays.vue')
    },
    {
      path: '/packages',
      name: 'Packages',
      component: () => import('../pages/Customer/Packages.vue')
    },
    {
      path: '/spots',
      name: 'Spots',
      component: () => import('../pages/Customer/Spots.vue')
    },
    {
      path: '/crawlers',
      name: 'Crawlers',
      component: () => import('../pages/Customer/Crawlers.vue')
    },
    {
      path: '/images',
      name: 'Images',
      component: () => import('../pages/Customer/Images.vue')
    },
  ]
})

export default router
