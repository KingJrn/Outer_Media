<template>
    <mainView>
        <div class="main-container">
            <div class="image-header top">
                <!-- select user components  -->
                <selectUsers />
                <div class="add-user">Add New User</div>
            </div>


            <!-- table -->
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Added</th>
                        <th scope="col">Last Login</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">16</td>
                        <td>Matt Ross</td>
                        <td>Buddahlive</td>
                        <td>Jul, 31, 2023</td>
                        <td>Never</td>
                        <td colspan="2" class="actions">
                            <span class="edit">Edit</span>
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">16</td>
                        <td>Matt Ross</td>
                        <td>Buddahlive</td>
                        <td>Jul, 31, 2023</td>
                        <td>Never</td>
                        <td colspan="2" class="actions">
                            <span class="edit">Edit</span>
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">16</td>
                        <td>Matt Ross</td>
                        <td>Buddahlive</td>
                        <td>Jul, 31, 2023</td>
                        <td>Never</td>
                        <td colspan="2" class="actions">
                            <span class="edit">Edit</span>
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">16</td>
                        <td>Matt Ross</td>
                        <td>Buddahlive</td>
                        <td>Jul, 31, 2023</td>
                        <td>Never</td>
                        <td colspan="2" class="actions">
                            <span class="edit">Edit</span>
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">16</td>
                        <td>Matt Ross</td>
                        <td>Buddahlive</td>
                        <td>Jul, 31, 2023</td>
                        <td>Never</td>
                        <td colspan="2" class="actions">
                            <span class="edit">Edit</span>
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">16</td>
                        <td>Matt Ross</td>
                        <td>Buddahlive</td>
                        <td>Jul, 31, 2023</td>
                        <td>Never</td>
                        <td colspan="2" class="actions">
                            <span class="edit">Edit</span>
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">16</td>
                        <td>Matt Ross</td>
                        <td>Buddahlive</td>
                        <td>Jul, 31, 2023</td>
                        <td>Never</td>
                        <td colspan="2" class="actions">
                            <span class="edit">Edit</span>
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">16</td>
                        <td>Matt Ross</td>
                        <td>Buddahlive</td>
                        <td>Jul, 31, 2023</td>
                        <td>Never</td>
                        <td colspan="2" class="actions">
                            <span class="edit">Edit</span>
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
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
    name: 'Users',
    components: {
        mainView,
        selectUsers,
        pagination
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/shared/table.scss';
</style>
