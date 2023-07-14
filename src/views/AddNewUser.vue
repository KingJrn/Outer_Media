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
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                placeholder="Placeholder"
                v-bind="name"
              />
            </div>
            <div class="mb-3 col">
              <label for="exampleInputEmail1" class="form-label">UserName</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                placeholder="Placeholder"
                v-bind="username"
              />
            </div>
          </div>
          <div class="d-flex edit-group w-100">
            <div class="mb-3 col">
              <label for="exampleInputEmail1" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-bind="password"
              />
            </div>
            <div class="mb-3 col">
              <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-bind="confirm_password"
              />
            </div>
          </div>

          <button class="add" type="button" @click="createAccount()">Create Account</button>
        </form>
      </div>
    </div>
  </mainView>
</template>

<script>
import mainView from '@/layouts/partials/mainView.vue'
import apiServices from '@/services/apiServices.js'
export default {
  name: 'AddNewUser',
  components: {
    mainView
  },
  data() {
    return {
      requestData: {
        name: '',
        username: '',
        password: '',
        confirm_password: ''
      }
    }
  },
  mounted() {
    console.log(this.userData)
  },
  methods: {
    createAccount() {
      apiServices.addNewUser(this.requestData, (response) => {
        console.log(response.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/shared/form.scss';
</style>
