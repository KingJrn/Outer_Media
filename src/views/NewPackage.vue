<template>
    <mainView>
        <div class="container">
            <div class="general-properties">
                <h1>General Properties</h1>
                <hr>
            </div>
        </div>
    </mainView>
</template>

<script>
import mainView from '@/layouts/partials/mainView.vue'

export default {
    name: 'NewPackage',
    components: {
        mainView
    },


}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/shared/form.scss';

.general-properties {
    h1 {
        @include textStyles('Poppins', 600, 18px, 27px);
        letter-spacing: -0.01em;
        color: rgba(0, 0, 0, 0.71);

    }
}
</style>
