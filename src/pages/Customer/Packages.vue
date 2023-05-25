<template>
    <mainView>
        <div class="main-container">
            <div class="image-header top">
                <!-- select user components  -->
                <selectUsers />
                <RouterLink to="/newpackage" class="add-user">Add New Packages</RouterLink>
            </div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Last Modified</th>
                        <th scope="col">Parent Display</th>
                        <th scope="col">Published</th>
                        <th scope="col" class="action-header">Action </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">233</td>
                        <td>upcoming Acts</td>
                        <td>Dec 22, 2021 04:12 pm EST</td>
                        <td>Game Room</td>
                        <td colspan="2">
                            <span class="no decision" v-if="eventData">NO</span>
                            <span class="yes decision" v-else>Yes</span>
                            <Switch @checkboxEvent="updateData" />
                        </td>
                        <td colspan="6" class="actions">
                            <span class="vertical-line"></span>
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

                            <span class="edit">Edit</span>
                            <span class="packages">Menu</span>
                            <RouterLink to="/assigned" class="packages">Spot</RouterLink>
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
                        <td scope="row">233</td>
                        <td>upcoming Acts</td>
                        <td>Dec 22, 2021 04:12 pm EST</td>
                        <td>Game Room</td>
                        <td colspan="2">
                            <span class="no decision" v-if="eventData">NO</span>
                            <span class="yes decision" v-else>Yes</span>
                            <Switch @checkboxEvent="updateData" />
                        </td>
                        <td colspan="6" class="actions">
                            <span class="vertical-line"></span>
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

                            <span class="edit">Edit</span>
                            <span class="packages">Menu</span>
                            <RouterLink to="/assigned" class="packages">Spot</RouterLink>
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
                        <td scope="row">233</td>
                        <td>upcoming Acts</td>
                        <td>Dec 22, 2021 04:12 pm EST</td>
                        <td>Game Room</td>
                        <td colspan="2">
                            <span class="no decision" v-if="eventData">NO</span>
                            <span class="yes decision" v-else>Yes</span>
                            <Switch @checkboxEvent="updateData" />
                        </td>
                        <td colspan="6" class="actions">
                            <span class="vertical-line"></span>
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

                            <span class="edit">Edit</span>
                            <span class="packages">Menu</span>
                            <RouterLink to="/assigned" class="packages">Spot</RouterLink>
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
                        <td scope="row">233</td>
                        <td>upcoming Acts</td>
                        <td>Dec 22, 2021 04:12 pm EST</td>
                        <td>Game Room</td>
                        <td colspan="2">
                            <span class="no decision" v-if="eventData">NO</span>
                            <span class="yes decision" v-else>Yes</span>
                            <Switch @checkboxEvent="updateData" />
                        </td>
                        <td colspan="6" class="actions">
                            <span class="vertical-line"></span>
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

                            <span class="edit">Edit</span>
                            <span class="packages">Menu</span>
                            <RouterLink to="/assigned" class="packages">Spot</RouterLink>
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
                        <td scope="row">233</td>
                        <td>upcoming Acts</td>
                        <td>Dec 22, 2021 04:12 pm EST</td>
                        <td>Game Room</td>
                        <td colspan="2">
                            <span class="no decision" v-if="eventData">NO</span>
                            <span class="yes decision" v-else>Yes</span>
                            <Switch @checkboxEvent="updateData" />
                        </td>
                        <td colspan="6" class="actions">
                            <span class="vertical-line"></span>
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

                            <span class="edit">Edit</span>
                            <span class="packages">Menu</span>
                            <RouterLink to="/assigned" class="packages">Spot</RouterLink>
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
                        <td scope="row">233</td>
                        <td>upcoming Acts</td>
                        <td>Dec 22, 2021 04:12 pm EST</td>
                        <td>Game Room</td>
                        <td colspan="2">
                            <span class="no decision" v-if="eventData">NO</span>
                            <span class="yes decision" v-else>Yes</span>
                            <Switch @checkboxEvent="updateData" />
                        </td>
                        <td colspan="6" class="actions">
                            <span class="vertical-line"></span>
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

                            <span class="edit">Edit</span>
                            <span class="packages">Menu</span>
                            <RouterLink to="/assigned" class="packages">Spot</RouterLink>
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
                        <td scope="row">233</td>
                        <td>upcoming Acts</td>
                        <td>Dec 22, 2021 04:12 pm EST</td>
                        <td>Game Room</td>
                        <td colspan="2">
                            <span class="no decision" v-if="eventData">NO</span>
                            <span class="yes decision" v-else>Yes</span>
                            <Switch @checkboxEvent="updateData" />
                        </td>
                        <td colspan="6" class="actions">
                            <span class="vertical-line"></span>
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />

                            <span class="edit">Edit</span>
                            <span class="packages">Menu</span>
                            <RouterLink to="/assigned" class="packages">Spot</RouterLink>
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
import Switch from '@/layouts/partials/Switch.vue'
import pagination from '@/layouts/partials/pagination.vue'
export default {
    name: 'Packages',
    components: {
        mainView,
        selectUsers,
        pagination,
        Switch
    },
    data() {
        return {
            eventData: ''
        }
    },
    methods: {
        updateData(data) {
            this.eventData = data
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/shared/table.scss';

.decision {
    margin-right: calculate-value(12px);
}
.vertical-line {

    width: 28px;
    height: 0px;
    border: $default-border-2 $table-border-color;
    transform: rotate(90deg);
}

.action-header {
    position: relative;
    left: 6.5rem;
}
</style>
