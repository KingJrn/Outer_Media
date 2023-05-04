<template>
    <nav aria-label="Page navigation example" class="paginated">
        <ul class="pagination">
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&lt;</span>
                </a>
            </li>
            <li class="page-item"><a class="page-link active" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&gt;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>
<script>

export default {
    name: 'Users',
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.paginated {
    float: right;
    margin-top:($standard * 34px);

    ul {
        column-gap: ($standard * 21px);
    }

    a {
        background: $color-brand-secondary-lighter;
        border: $default-border-1 $body-border-color-5;
        border-radius: $default-border-radius;
        padding: ($standard * 6px) ($standard * 9px);
        gap: $default-spacing * 2;
        width: ($standard * 26px);
        height: ($standard * 24px);
        @include textStyles('Poppins', 500, 12px, 12px);
        letter-spacing: $default-letter-sapcing;
        color: $body-color-primary-light-2;
    }

    a.active {
        background: $body-background-darker;
        border-radius: $default-border-radius;
        color: $color-brand-primary;
    }
}
</style>