<template>
    <mainView>
        <div class="conatiner">
            <div class="header-sect">
                <h2>Edit User</h2>
                <p>Please edit details you with to change below</p>
            </div>
            <div class="form-data">
                <form action="" @submit.prevent="">
                    <div class="d-flex edit-group w-100">
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Users Real Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Placeholder">
                        </div>
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">UserName</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Placeholder">
                        </div>

                    </div>
                    <div class="d-flex edit-group w-100">
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>

                    </div>
                    <button class="add" type="button">Save Edit</button>
                </form>
            </div>
        </div>
    </mainView>
</template>

<script>
import mainView from '@/layouts/partials/mainView.vue'

export default {
    name: 'EditUser',
    components: {
        mainView
    },


}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/shared/form.scss';
</style>
