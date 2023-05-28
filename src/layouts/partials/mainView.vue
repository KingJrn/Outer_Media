<template>
    <Navigation>
        <main>
            <div :class="[shouldRenderElement ? 'form-edit' : 'content_wrapper']">
                <slot></slot>
            </div>
        </main>
    </Navigation>
</template>

<script>
import Navigation from '../Navigation.vue';

export default {
    name: 'MainView',
    components: {
        Navigation
    },
    data() {
        return {
            routes: [
                { path: '/adduser', name: 'AddNewUser' },
                { path: '/edituser', name: 'Edituser' },
                { path: '/addnewdisplay', name: 'AddNewDisplay' },
                { path: '/addassignedspot', name: 'AddAssignedSpot' },
                // Add more routes as needed
            ]
        };
    },
    computed: {
        shouldRenderElement() {
            const currentRoute = this.$route.path;
            return this.routes.some(route => route.path === currentRoute);
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

main {
    padding-inline: calculate-value(36px) calculate-value(37px);
    padding-block: calculate-value(35px) calculate-value(67px);
    background: $color-brand-primary;
}

.main-wrapper {
    border-radius: ($default-border-radius * 3) - 1;
    border: $default-border-2 $body-border-color;
    box-shadow: 2px 4px 24px 1px $body-box-shadow;
    padding-bottom: $default-spacing * 18;
}

.content_wrapper {
    @extend .main-wrapper;
    width: 95.2%;
    padding-inline: calculate-value(62px);
}

.form-edit {
    @extend .main-wrapper;
    width: 63.54%;
    height: calculate-value(549px);
    margin-top: calculate-value(40px);
    margin-left: calculate-value(116px);
}
</style>