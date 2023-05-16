import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Customer/Dashboard.vue'

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
      path: '/user',
      name: 'User',
      component: () => import('../pages/Customer/User.vue')
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
    {
      path: '/schedule',
      name: 'Schedule',
      component: () => import('../pages/Customer/Schedule.vue')
    },
    {
      path: '/tempschedule',
      name: 'TemporarySchedule',
      component: () => import('../pages/Customer/TemporarySchedule.vue')
    },

    {
      path: '/tempschedule',
      name: 'TemporarySchedule',
      component: () => import('../pages/Customer/TemporarySchedule.vue')
    },

    /* ---------------------------------- Views --------------------------------- */

    {
      path: '/adduser',
      name: 'AddNewUser',
      component: () => import('../views/AddNewUser.vue')
    },
    {
      path: '/edituser',
      name: 'Edituser',
      component: () => import('../views/EditUser.vue')
    },
    {
      path: '/addnewdisplay',
      name: 'AddNewDisplay',
      component: () => import('../views/AddNewDisplay.vue')
    },
    {
      path: '/editdisplay',
      name: 'EditNewDisplay',
      component: () => import('../views/EditNewDisplay.vue')
    },
    {
      path: '/newpackage',
      name: 'NewPackage',
      component: () => import('../views/NewPackage.vue')
    },
  ]
})

export default router
