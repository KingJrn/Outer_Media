<template>
    <mainView>
        <div class="main-container">
            <div class="image-header top">
                <!-- select user components  -->
                <selectUsers />
                <RouterLink to="/addnewdisplay" class="add-user">Add New Display</RouterLink>
            </div>

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Last Activity</th>
                        <th scope="col">Package Played</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">7</td>
                        <td>Game Room</td>
                        <td>47 seconds ago</td>
                        <td>Upcoming Actss</td>
                        <td colspan="4" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                            <RouterLink to="/editdisplay" class="edited edit">Edit</RouterLink>

                            <span class="packages">Packages</span>
                            <span class="play-view">
                                <span class="view">View</span>
                                <span>
                                    <img class="table-icon play img-fluid " src="@/assets/images/vectors/play.svg"
                                        alt="play-button" />
                                </span>
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">7</td>
                        <td>Game Room</td>
                        <td>47 seconds ago</td>
                        <td>Upcoming Actss</td>
                        <td colspan="4" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

                            <RouterLink to="/editdisplay" class="edited edit">Edit</RouterLink>
                            <span class="packages">Packages</span>
                            <span class="play-view">
                                <span class="view">View</span>
                                <span>
                                    <img class="table-icon play img-fluid " src="@/assets/images/vectors/play.svg"
                                        alt="play-button" />
                                </span>
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">7</td>
                        <td>Game Room</td>
                        <td>47 seconds ago</td>
                        <td>Upcoming Actss</td>
                        <td colspan="4" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

                            <RouterLink to="/editdisplay" class="edited edit">Edit</RouterLink>
                            <span class="packages">Packages</span>
                            <span class="play-view">
                                <span class="view">View</span>
                                <span>
                                    <img class="table-icon play img-fluid " src="@/assets/images/vectors/play.svg"
                                        alt="play-button" />
                                </span>
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">7</td>
                        <td>Game Room</td>
                        <td>47 seconds ago</td>
                        <td>Upcoming Actss</td>
                        <td colspan="4" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

                            <RouterLink to="/editdisplay" class="edited edit">Edit</RouterLink>
                            <span class="packages">Packages</span>
                            <span class="play-view">
                                <span class="view">View</span>
                                <span>
                                    <img class="table-icon play img-fluid " src="@/assets/images/vectors/play.svg"
                                        alt="play-button" />
                                </span>
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">7</td>
                        <td>Game Room</td>
                        <td>47 seconds ago</td>
                        <td>Upcoming Actss</td>
                        <td colspan="4" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

                            <RouterLink to="/editdisplay" class="edited edit">Edit</RouterLink>
                            <span class="packages">Packages</span>
                            <span class="play-view">
                                <span class="view">View</span>
                                <span>
                                    <img class="table-icon play img-fluid " src="@/assets/images/vectors/play.svg"
                                        alt="play-button" />
                                </span>
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">7</td>
                        <td>Game Room</td>
                        <td>47 seconds ago</td>
                        <td>Upcoming Actss</td>
                        <td colspan="4" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

                            <RouterLink to="/editdisplay" class="edited edit">Edit</RouterLink>
                            <span class="packages">Packages</span>
                            <span class="play-view">
                                <span class="view">View</span>
                                <span>
                                    <img class="table-icon play img-fluid " src="@/assets/images/vectors/play.svg"
                                        alt="play-button" />
                                </span>
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td scope="row">7</td>
                        <td>Game Room</td>
                        <td>47 seconds ago</td>
                        <td>Upcoming Actss</td>
                        <td colspan="4" class="actions">
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

                            <RouterLink to="/editdisplay" class="edited edit">Edit</RouterLink>
                            <span class="packages">Packages</span>
                            <span class="play-view">
                                <span class="view">View</span>
                                <span>
                                    <img class="table-icon play img-fluid " src="@/assets/images/vectors/play.svg"
                                        alt="play-button" />
                                </span>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- pagination -->
            <pagination />

            <!-- routerview -->
            <RouterView />

        </div>
    </mainView>
</template>

<script>
import mainView from '@/layouts/partials/mainView.vue'
import selectUsers from '@/layouts/partials/selectUsers.vue'
import pagination from '@/layouts/partials/pagination.vue'
import { RouterLink } from 'vue-router';

export default {
    name: 'Users',
    components: {
        mainView,
        selectUsers,
        pagination,
        RouterLink

    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/shared/table.scss';
</style>
