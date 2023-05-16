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
                            <label for="exampleInputEmail1" class="form-label">Display name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Placeholder">
                        </div>
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Default Package</label>
                            <select type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Placeholder">
                                <option value="1">One</option>
                            </select>
                        </div>

                    </div>
                    <button class="add" type="button">Add Display</button>
                </form>
            </div>
        </div>
    </mainView>
</template>

<script>
import mainView from '@/layouts/partials/mainView.vue'

export default {
    name: 'AddNewDisplay',
    components: {
        mainView
    },


}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/shared/form.scss';
</style>
