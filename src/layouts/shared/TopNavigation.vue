<template>
    <nav>
        <div class="page-title">Dashboard</div>
        <div class="live-section">
            <!-- live section -->
            <div class="user">
                <div class="user-name">Budda Live</div>
                <div class="user-category">Admin</div>
            </div>
            <!-- logout -->
            <div class="logout-container">
                <div class="logout">Logout</div>
                <div class="logout-icon">
                    <img src="@/assets/images/vectors/logout.svg" alt="logout-image" />
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'TopNavigation'
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

nav {
    background: $color-brand-primary;
    box-shadow: 0px 4px 15px $nav-box-shadow-color;
    border: $default-border-1 $nav-border-color;
    border-radius: $default-border-radius;
    @include flexed-Container(row, space-between);
    height: $nav-height;
    padding-inline: $standard * 44px;
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100% - $nav-width);
    z-index: 10000;
}

.page-title {
    @include textStyles('Poppins', 600, 20px, 30px);
    color: $nav-text-primary-bold;
    letter-spacing: $default-letter-sapcing;

}

.live-section {
    display: flex;
    @include flexed-Container;
    gap: $default-gap * 18px;

}

.user {
    .user-name {
        @include textStyles('Poppins', 500, 14px, 21px);
        letter-spacing: $default-letter-sapcing;
        color: $nav-text-primary-dark;
    }

    .user-category {
        @include textStyles('Poppins', 400, 11px, 16px);
        color: $nav-text-primary-success;
    }
}

.logout-container {
    background-color: $color-brand-sceondary-danger;
    @include flexed-Container;
    width: 71px;
    height: 30px;
    padding: $default-spacing (
        $default-spacing * 2
    );
border-radius: $default-border-radius + 3px;
gap: $default-gap * 3px;


.logout {
    @include textStyles('Poppins', 600, 10px, 20px);
    color: $color-brand-primary;
}
}
</style>
