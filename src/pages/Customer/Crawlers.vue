<template>
    <mainView>
        <div class="main-container">
            <div class="help">
                <span>Help</span>
                <img class="table-icon" src="@/assets/images/vectors/questionMark.svg" alt="trash" />

            </div>
            <div class="image-header top">
                <!-- select user components  -->
                <selectUsers />
                <div class="add-user">Add New Crawler</div>
            </div>


            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Last Modified</th>
                        <th scope="col" class="action-header">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">16</td>
                        <td>Sanple Crawler</td>
                        <td>Dec 22, 2021 04:12 pm EST</td>
                        <td colspan="2" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                            <span class="edit">Edit</span>
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">16</td>
                        <td>Sanple Crawler</td>
                        <td>Dec 22, 2021 04:12 pm EST</td>
                        <td colspan="2" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                            <span class="edit">Edit</span>
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">16</td>
                        <td>Sanple Crawler</td>
                        <td>Dec 22, 2021 04:12 pm EST</td>
                        <td colspan="2" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                            <span class="edit">Edit</span>
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">16</td>
                        <td>Sanple Crawler</td>
                        <td>Dec 22, 2021 04:12 pm EST</td>
                        <td colspan="2" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                            <span class="edit">Edit</span>
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">16</td>
                        <td>Sanple Crawler</td>
                        <td>Dec 22, 2021 04:12 pm EST</td>
                        <td colspan="2" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                            <span class="edit">Edit</span>
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">16</td>
                        <td>Sanple Crawler</td>
                        <td>Dec 22, 2021 04:12 pm EST</td>
                        <td colspan="2" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                            <span class="edit">Edit</span>
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">16</td>
                        <td>Sanple Crawler</td>
                        <td>Dec 22, 2021 04:12 pm EST</td>
                        <td colspan="2" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                            <span class="edit">Edit</span>
                        </td>
                    </tr>


                </tbody>
            </table>
            <!-- pagination -->
            <pagination />
        </div>
    </mainView>
</template>

<script>
import mainView from '@/layouts/partials/mainView.vue'
import selectUsers from '@/layouts/partials/selectUsers.vue'
import pagination from '@/layouts/partials/pagination.vue'
export default {
    name: 'Crawlers',
    components: {
        mainView,
        selectUsers,
        pagination
    },
    data() {
        return {}
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/shared/table.scss';

.help {
    @include flexed-Container(row, flex-start);
    gap: calculate-value(11px);
    transform: translateY(27px);

    span {
        color: $nav-text-primary-bold;
        @include textStyles('Poppins', 700, 16px, 24px);
        letter-spacing: $default-letter-sapcing;
    }
}
.image-header {
    @include flexed-Container(row, space-between);
}
</style>
