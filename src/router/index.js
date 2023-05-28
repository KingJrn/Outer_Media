import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Customer/Dashboard.vue'
import AdminLogin from '../pages/admin/AdminLogin.vue';
import Organizations from '../pages/admin/Organizations.vue';
import AddOrganization from '../pages/admin/AddOrganization.vue';
import Images from '../pages/admin/Images.vue';
import AddImage from '../pages/admin/AddImages.vue';
import Libraries from '../pages/admin/Libraries.vue';
import AddLibrary from '../pages/admin/AddLibrary.vue';
import Preset from '../pages/admin/Preset.vue';
import AddPreset from '../pages/admin/AddPreset.vue';
import SiteSettings from '../pages/admin/SiteSettings.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
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
    {
      path: '/addlibrary',
      name: 'AddLibrary',
      component: AddLibrary
    },
    {
      path: '/preset',
      name: 'Preset',
      component: Preset
    },
    {
      path: '/addpreset',
      name: 'AddPreset',
      component: AddPreset
    },
    {
      path: '/site-settings',
      name: 'SiteSettings',
      component: SiteSettings
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
    {
      path: '/assigned',
      name: 'AssignedSpot',
      component: () => import('../views/AssignedSpot.vue')
    },
    {
      path: '/addassignedspot',
      name: 'AddAssignedSpot',
      component: () => import('../views/AddAssignedSpot.vue')
    },
    {
      path: '/assignedspot',
      name: 'AddNewSpots',
      component: () => import('../views/AddNewSpot.vue')
    },
    {
      path: '/newimages',
      name: 'AddNewImages',
      component: () => import('../views/AddNewImags.vue')
    },
    {
      path: '/newcrawler',
      name: 'NewCrawler',
      component: () => import('../views/NewCrawler.vue')
    },
  ]
})

export default router
