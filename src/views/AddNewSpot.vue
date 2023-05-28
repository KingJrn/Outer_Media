<template>
    <mainView>
        <div class="main-container">
            <div class="header-tab">
                <div class="general-prop" @click="changeTab('general')">
                    <div>General Properties</div>
                    <hr />
                </div>
                <div class="background-opt" @click="changeTab('background')">
                    <div>Background Options</div>
                    <hr />
                </div>
            </div>
            <div class="main-content">
                <!-- main conrent here -->
                <general-props v-if="tab == 'general'"></general-props>
                <background-props v-if="tab == 'background'"></background-props>
            </div>
        </div>
        <!-- tabs content here -->
    </mainView>
</template>

<script>
import GeneralProps from "@/components/GeneralProps.vue";
import mainView from "@/layouts/partials/mainView.vue";
import BackgroundProps from '@/components/BackgroundProps.vue';
export default {
    name: "AddNewSpots",
    components: {
        mainView,
        GeneralProps,
        BackgroundProps
    },
    data() {
        return {
            tab: 'background'
        };
    },
    methods: {
        changeTab(selected){
            this.tab = selected;
        }
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.main-content{
    margin-top: 36px;
}
.header-tab {
    margin-top: 48px;
    @include flexed-Container;
    gap: 24px;
    height: 74px;

    >div {
        min-width: calculate-value(133px);
        @include textStyles("Poppins", 500, 14px, 22px);
        height: 22px;
        display: flex;
        flex-direction: column;
        justify-content: baseline;
        cursor: pointer;
    }
}

hr {
    border-top: 3px solid $nav-text-primary-bold;
    background: $nav-text-primary-bold;
    opacity: 0;
    /* Set initial opacity to 0 */
    margin-top: 8px;
    display: block;
    /* Ensure the <hr> is always displayed */
    transition: opacity 0.5s ease-in-out;
    /* Add transition for opacity */
}

.general-prop {
    color: #1b1137;
}

.general-prop:hover hr {
    opacity: 1;
    /* Change opacity on hover */
}

.background-opt {
    color: #949ca9;
}

.background-opt:hover hr {
    opacity: 1;
    /* Change opacity on hover */
}</style>
