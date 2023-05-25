<template>
    <mainView>
        <div class="main-container">
            <div class="info-container">
                <p class="upcoming-acts">
                    "Upcoming Acts" Assigned Spots
                </p>
                <div class="help" @click="dialog = true">
                    <span>Help</span>
                    <img class="table-icon" src="@/assets/images/vectors/questionMark.svg" alt="question mark" />

                </div>
            </div>

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Last Modified</th>
                        <th scope="col">Parent Display</th>
                        <th scope="col">Published</th>
                        <th scope="col">Published</th>
                        <th scope="col">Position</th>
                        <th scope="col" class="action-header">Action </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">233</td>
                        <td>upcoming Acts</td>
                        <td>Dec 22, 2021 04:12 pm EST</td>
                        <td>upcoming Acts</td>
                        <td>Flip Coin</td>
                        <td colspan="2">
                            <span class="no decision" v-if="eventData">NO</span>
                            <span class="yes decision" v-else>Yes</span>
                            <Switch @checkboxEvent="updateData" />
                        </td>
                        <td colspan="2">
                            <span class="first-value decision">1</span>
                            <img class="table-icon" src="@/assets/images/vectors/down.svg" alt="trash" />
                        </td>
                        <td colspan="3" class="actions">
                            <span class="vertical-line"></span>
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                            <span class="edit">Edit</span>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">233</td>
                        <td>upcoming Acts</td>
                        <td>Dec 22, 2021 04:12 pm EST</td>
                        <td>upcoming Acts</td>
                        <td>Flip Coin</td>
                        <td colspan="2">
                            <span class="no decision" v-if="eventData">NO</span>
                            <span class="yes decision" v-else>Yes</span>
                            <Switch @checkboxEvent="updateData" />
                        </td>
                        <td colspan="3">
                            <span class="first-value decision">1</span>
                            <img class="table-icon me-3" src="@/assets/images/vectors/down.svg" alt="trash" />
                            <img class="table-icon" src="@/assets/images/vectors/up.svg" alt="trash" />
                        </td>
                        <td colspan="3" class="actions">
                            <span class="vertical-line"></span>
                            <img class="table-icon" src="@/assets/images/vectors/trash.svg" alt="trash" />
                            <span class="edit">Edit</span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- dialog box -->
            <v-dialog v-model="dialog" width="auto">
                <v-card class="w-50 align-self-center">
                    <v-card-text class="w-100">
                        <h4>About Packages</h4>
                        All Spots assigned to this Package are shown here.

                        You may remove them from the Package or unpublish them to prevent them from appearing in the Package

                        As well as reorder them in the Package.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </mainView>
</template>

<script>
import mainView from '@/layouts/partials/mainView.vue'
import selectUsers from '@/layouts/partials/selectUsers.vue'
import Switch from '@/layouts/partials/Switch.vue'
export default {
    name: 'AssignedSpot',
    components: {
        mainView,
        selectUsers,
        Switch
    },
    data() {
        return {
            eventData: '',
            dialog: false,
        }
    },
    methods: {
        updateData(data) {
            this.eventData = data
        }
    }
}
</script>

<style lang="scss" >
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

.first-value {
    width: calculate-value(23px);
    height: 27px;
    padding: 3px 9px;
    background: rgba(35, 40, 156, 0.09);
    border-radius: 6px;

}

.info-container {
    display: flex;
    margin-top: 29px;
    justify-content: space-between;
    cursor: pointer;

    p.upcoming-acts {
        @include textStyles('Poppins', 600, 20px, 30px);
        color: #1B1137;


    }
}

.help {
    @include flexed-Container(row, flex-start);
    gap: calculate-value(11px);
    cursor: pointer;

    span {
        color: $nav-text-primary-bold;
        @include textStyles('Poppins', 700, 16px, 24px);
        letter-spacing: $default-letter-sapcing;
    }
}
</style>
