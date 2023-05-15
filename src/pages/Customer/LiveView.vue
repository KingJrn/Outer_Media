<template>
    <mainView>
        <div class="main-container">
            <h5 class="active-display">My Active Displays</h5>
            <div class="card-container">
                <div class="active-card hover" style="width: 24.25rem;">
                    <img src="@/assets/images/backgrounds/card.png" class="img-fluid" alt="card-image">
                    <div class="card-body">
                        <div class=" text-top">Budda Main</div>
                        <div class=" text-bottom mb-2">Upcoming Acts</div>
                    </div>
                </div>

                <div class="active-card hover" style="width: 24.25rem;">
                    <img src="@/assets/images/backgrounds/card.png" class="img-fluid" alt="card-image">
                    <div class="card-body">
                        <div class=" text-top">Budda Main</div>
                        <div class=" text-bottom mb-2">Upcoming Acts</div>
                    </div>
                </div>

                <div class="active-card hover" style="width: 24.25rem;">
                    <img src="@/assets/images/backgrounds/card.png" class="img-fluid" alt="card-image">
                    <div class="card-body">
                        <div class=" text-top">Budda Main</div>
                        <div class=" text-bottom mb-2">Upcoming Acts</div>
                    </div>
                </div>

                <div class="active-card hover" style="width: 24.25rem;">
                    <img src="@/assets/images/backgrounds/card.png" class="img-fluid" alt="card-image">
                    <div class="card-body">
                        <div class=" text-top">Budda Main</div>
                        <div class=" text-bottom mb-2">Upcoming Acts</div>
                    </div>
                </div>

                <div class="active-card hover" style="width: 24.25rem;">
                    <img src="@/assets/images/backgrounds/card.png" class="img-fluid" alt="card-image">
                    <div class="card-body">
                        <div class=" text-top">Budda Main</div>
                        <div class=" text-bottom mb-2">Upcoming Acts</div>
                    </div>
                </div>

                <div class="active-card hover" style="width: 24.25rem;">
                    <img src="@/assets/images/backgrounds/card.png" class="img-fluid" alt="card-image">
                    <div class="card-body">
                        <div class=" text-top">Budda Main</div>
                        <div class=" text-bottom mb-2">Upcoming Acts</div>
                    </div>
                </div>

                <div class="active-card hover" style="width: 24.25rem;">
                    <img src="@/assets/images/backgrounds/card.png" class="img-fluid" alt="card-image">
                    <div class="card-body">
                        <div class=" text-top">Budda Main</div>
                        <div class=" text-bottom mb-2">Upcoming Acts</div>
                    </div>
                </div>

                <div class="active-card hover" style="width: 24.25rem;">
                    <img src="@/assets/images/backgrounds/card.png" class="img-fluid" alt="card-image">
                    <div class="card-body">
                        <div class=" text-top">Budda Main</div>
                        <div class=" text-bottom mb-2">Upcoming Acts</div>
                    </div>
                </div>

                <div class="active-card hover" style="width: 24.25rem;">
                    <img src="@/assets/images/backgrounds/card.png" class="img-fluid" alt="card-image">
                    <div class="card-body">
                        <div class=" text-top">Budda Main</div>
                        <div class=" text-bottom mb-2">Upcoming Acts</div>
                    </div>
                </div>
            </div>
        </div>
    </mainView>
</template>

<script>
import mainView from '@/layouts/partials/mainView.vue'
export default {
    name: 'LiveView',
    components: {
        mainView
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.active-display {
    margin-block: calculate-value(50px)  calculate-value(15px);
    @include textStyles('Poppins', 600, 20px, 36px);
    color: $body-color-primary-light;
}

.card-container {
    @include flexed-Container(row, flex-start, flex-start);
    flex-wrap: wrap;
    gap: calculate-value(60px);
}

.active-card {
    background: #FFFFFF;
    border: $default-border-2 $table-border-color;

    /* greyy */
    box-shadow: 2px 4px 24px 1px $body-box-shadow;
    border-radius: calculate-value(16px);

    img {
        border-radius: calculate-value(16px) calculate-value(16px) 0px 0px;
    }

    .text-top {
        color: $body-color-seconday-dim;
        @include textStyles('Poppins', 600, 14px, 36px);
    }

    .text-bottom {
        @include textStyles('Poppins', 500, 14px, 36px);
        color: $body-color-primary-light-1;
    }

    .card-body {
        margin-left: calculate-value(21px);
    }
}
</style>
