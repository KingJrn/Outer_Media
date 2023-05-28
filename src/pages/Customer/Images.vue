<template>
    <mainView>
        <div class="main-container">
            <div class="image-header top">
                <div class="sort-container">
                    <form action="select-form">
                        <select class="form-select" aria-label="Default select example">
                            <option selected><span>Library Folder : ALL</span></option>
                            <option value="1">Library Folder : 0</option>

                        </select>
                    </form>
                    <!-- select user components  -->

                    <selectUsers />
                </div>
                <RouterLink to="/newimages" class="add-user">Add New Image</RouterLink>
            </div>

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Images</th>
                        <th scope="col">Library Folder</th>
                        <th scope="col">File Name</th>
                        <th scope="col" class="action-header">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">16</td>
                        <td>
                            <img class="table-icon" src="@/assets/images/vectors/outertix.svg" alt="Images" />

                        </td>
                        <td>Images</td>
                        <td>New Outertix Logo for TV.png</td>
                        <td colspan="2" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                            <span class="edit">Edit</span>
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">16</td>
                        <td>
                            <img class="table-icon" src="@/assets/images/vectors/outertix.svg" alt="Images" />

                        </td>
                        <td>Images</td>
                        <td>New Outertix Logo for TV.png</td>
                        <td colspan="2" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                            <span class="edit">Edit</span>
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">16</td>
                        <td>
                            <img class="table-icon" src="@/assets/images/vectors/outertix.svg" alt="Images" />

                        </td>
                        <td>Images</td>
                        <td>New Outertix Logo for TV.png</td>
                        <td colspan="2" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                            <span class="edit">Edit</span>
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">16</td>
                        <td>
                            <img class="table-icon" src="@/assets/images/vectors/outertix.svg" alt="Images" />

                        </td>
                        <td>Images</td>
                        <td>New Outertix Logo for TV.png</td>
                        <td colspan="2" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                            <span class="edit">Edit</span>
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">16</td>
                        <td>
                            <img class="table-icon" src="@/assets/images/vectors/outertix.svg" alt="Images" />

                        </td>
                        <td>Images</td>
                        <td>New Outertix Logo for TV.png</td>
                        <td colspan="2" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                            <span class="edit">Edit</span>
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">16</td>
                        <td>
                            <img class="table-icon" src="@/assets/images/vectors/outertix.svg" alt="Images" />

                        </td>
                        <td>Images</td>
                        <td>New Outertix Logo for TV.png</td>
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
    name: 'Images',
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
.sort-container {
    @extend .image-header;
    gap: calculate-value(18px);

}


select {

    width: calculate-value(171.5px);
    padding-left: calculate-value(17.5px);
    background: $body-input;
    @include textStyles('Poppins', 400, 12px, 18px);
    letter-spacing: $default-letter-sapcing;
    color: $body-small-text;
    border-radius: $default-spacing * 2;
}

</style>
