<template>
    <mainView>
        <div class="main-container">
            <div class="image-header top">
                <!-- select user components  -->
                <selectUsers />
                <div class="add-user">Add New Display</div>
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

                            <span class="edit">Edit</span>
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

                            <span class="edit">Edit</span>
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

                            <span class="edit">Edit</span>
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

                            <span class="edit">Edit</span>
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

                            <span class="edit">Edit</span>
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

                            <span class="edit">Edit</span>
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

                            <span class="edit">Edit</span>
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
