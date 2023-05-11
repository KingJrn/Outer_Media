<template>
    <Navigation>
        <main>
            <div class="content-wrapper">
                <slot></slot>
            </div>
        </main>
    </Navigation>
</template>

<script>
import Navigation from '../Navigation.vue'
export default {
    name: 'MainView',
    components: {
        Navigation
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

main {
    padding-inline: calculate-value(36px) calculate-value(37px);
    padding-block: calculate-value(35px) calculate-value(67px);
    background: $color-brand-primary;
}

.content-wrapper {
    width: 95.2%;
    padding-bottom: $default-spacing * 18;
    box-shadow: 2px 4px 24px 1px $body-box-shadow;
    border: $default-border-2 $body-border-color;
    border-radius: ($default-border-radius * 3) - 1;
    padding-inline: calculate-value(62px);
}
</style>
