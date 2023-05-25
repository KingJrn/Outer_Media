<template>
    <mainView>
        <div class="conatiner">
            <div class="header-sect">
                <h2>Add New Display</h2>
                <p>Please enter details of display you want to add</p>
            </div>
            <div class="form-data">
                <form action="" @submit.prevent="">
                    <div class="d-flex edit-group w-100">
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Add Spot</label>
                            <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
                                placeholder="Placeholder">
                        </div>
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Select Package</label>
                            <select class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
                                placeholder="Placeholder">
                                <option value="1">One</option>
                            </select>
                        </div>

                    </div>
                    <div class="switches-container">
                        <div class="switch-info">Publish</div>
                        <div class="switch ">
                            <v-switch v-model="ex11" color="indigo-darken-3" value="indigo-darken-3" hide-details
                                inset></v-switch>
                        </div>
                    </div>
                    <button class="add" type="button">Add</button>
                </form>
            </div>
        </div>
    </mainView>
</template>

<script>
import mainView from '@/layouts/partials/mainView.vue'

export default {
    name: 'AddAssignedSpot',
    components: {
        mainView
    },
    data() {
        return {
            ex11: ['indigo-darken-3'],
        }
    }

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/shared/form.scss';

.switches-container {
    width: calculate-value(202px);
    height: 64px;
    padding: 18px 13px;
    display: flex;
    background: rgba(95, 65, 162, 0.13);
    border-radius: 15px;
    justify-content: space-around;
    align-items: center;
    align-self: flex-start;
    margin-top: 43px;
}


.switch {
    height: auto;
}
</style>
