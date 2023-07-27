<template>
    <mainView>
        <div class="conatiner">
            <div class="header-sect">
                <h2>Add New User</h2>
                <p>Please enter User details below to create account</p>
            </div>
            <div class="form-data">
                <form action="" @submit.prevent="">
                    <div class="d-flex edit-group w-100">
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Users Real Name</label>
                            <input type="text" v-model="user.name" class="form-control"  aria-describedby="emailHelp" required placeholder="Placeholder">
                        </div>
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">UserName</label>
                            <input type="text" class="form-control" v-model="user.username"  aria-describedby="emailHelp" required placeholder="Placeholder">
                        </div>

                    </div>
                    <div class="d-flex edit-group w-100">
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Password</label>
                            <input type="password" class="form-control" v-model="user.password"  aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" v-model="user.password_confirmation"  aria-describedby="emailHelp">
            
                        </div>

                    </div>
                    
                    <button class="add" @click="addUser($store.state.authData.user_id)" type="button">Create Account</button>
                </form>
            </div>
        </div>
    </mainView>
</template>

<script>
import mainView from '@/layouts/partials/mainView.vue';
import apiServices from "@/services/apiServices.js";

export default {
    name: 'AddNewUser',
    components: {
        mainView
    },
    data() {
    return {
      user:{
        name:"",
        username:"",
        password:"",
        password_confirmation:"",
      },        
    };
  },
  methods:{
        addUser(user_id){
            apiServices.addUser(user_id,
                {
                name: this.user.name,
                username:this.user.username,
                password: this.user.password,
                password_confirmation:this.user.password_confirmation,
                },
                (response) => {
                if (response && response.error == false) {
                    console.log('added succesfully')
                } else if (response && response.error) {
                    console.log('failed')
                }
                }
            );
        }
        }

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/shared/form.scss';
</style>
