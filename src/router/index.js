import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/Customer/HomeView.vue';
import AdminLogin from '../pages/admin/AdminLogin.vue';
import Organizations from '../pages/admin/Organizations.vue';
import AddOrganization from '../pages/admin/AddOrganization.vue';
import Images from '../pages/admin/Images.vue';
import AddImage from '../pages/admin/AddImages.vue';
import Libraries from '../pages/admin/Libraries.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/organizations',
      name: 'Organizations',
      component: Organizations
    },
    {
      path: '/addorganization',
      name: 'AddOrganization',
      component: AddOrganization
    },
    {
      path: '/images',
      name: 'Images',
      component: Images
    },
    {
      path: '/addimage',
      name: 'AddImage',
      component: AddImage
    },
    {
      path: '/libraries',
      name: 'Libraries',
      component: Libraries
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../pages/AboutView.vue')
    // }
  ]
})

export default router
