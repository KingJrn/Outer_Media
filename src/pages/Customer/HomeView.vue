<template>
  <TopNavigation>

  </TopNavigation>
  <SideBar></SideBar>
</template>

<script>
import TopNavigation from '@/layouts/shared/TopNavigation.vue';
import SideBar from '@/layouts/shared/SideBar.vue';

export default {
  name: 'Home',
  components: {
    TopNavigation,
    SideBar
  }
}
</script>
