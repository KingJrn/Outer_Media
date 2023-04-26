<template>
    <div id="navigation">
        <TopNavigation></TopNavigation>
        <div class="main-wrapper">
            <SideBar></SideBar>
            <div class="slot">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import TopNavigation from './shared/TopNavigation.vue';
import SideBar from './shared/SideBar.vue';

export default {
    name: 'Navigation',
    components: {
        TopNavigation,
        SideBar
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

#navigation,
.main-wrapper {
    width: 100%;
    height: 100vh;
}

.slot {
    transform: translateY($nav-height);
    width: calc(100% - $nav-width);
    margin-left: $nav-width;
}</style>
