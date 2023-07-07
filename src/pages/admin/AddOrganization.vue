<template>
  <Navigation>
    <div id="content">
           <form action="">
                <h2 class="text-center">Add New Organization</h2>
                <p class="text-center">Please enter company details below to create account</p>
                <div class="row">
                    <div class="col">
                        <label for="">Organization Name</label>
                        <input type="text" class="form-control" v-model="orgName" placeholder="Enter Organization name">
                    </div>
                    <div class="col">
                        <label for="">Username</label>
                        <input type="text" class="form-control" v-model="OrgUsername" placeholder="Enter Organization username">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="">Password</label>
                    <input type="password" v-model="password" class="form-control" placeholder="Enter password">
                    </div>
                    <div class="col">
                        <label for="">Confirm Password</label>
                    <input type="password" v-model="confirmPassword" class="form-control" placeholder="Confirm Password">
                    </div>
                </div>

                

          <div class="required">
            
            
            <div class="each-required">
              <img
                v-if="mustMatch"
                src="@/assets/images/vectors/tick-right.svg"
                alt=""
              />
              <img
                v-if="!mustMatch"
                src="@/assets/images/vectors/tick-wrong.svg"
                alt=""
              />
              <p :class="mustMatch ? 'match-text' : 'no-match'">Passwords do not match</p>
            </div>
          </div>

                <div class="btn-area">
                    <button type="button" @click="checkPass()">Create Account</button>
                </div>
            </form>
        
    </div>
  </Navigation>
</template>

<script>
import apiServices from "@/services/apiServices.js";
import Navigation from '@/layouts/Navigation.vue';
export default {
  name: 'AddOrganization',
  components: {
    Navigation
  },
  data() {
    return {
      password: "",
      confirmPassword: "",
      passwordFieldType: {
        password: "password",
        confirmPassword: "password",
      },
    };
  },
  computed: {
    mustMatch() {
      return this.password == this.confirmPassword && this.password;
    },
  },
  methods:{
    checkPass(){
        if(this.mustMatch){
            alert('worked')
        }else{
            alert('still worked')
        }
    }
  }
}
</script>

<style lang="scss" scoped>
  #content{
    height: 100%;
    width: 100%;
    padding: 65px;
    display: flex;
    justify-content: center;
    align-items: center;

        form{
            width: 65%;
            background: #FFFFFF;
            border: 2px solid rgba(0, 0, 0, 0.07);
            box-shadow: 2px 4px 24px 1px rgba(0, 0, 0, 0.1);
            border-radius: 11px;
            padding: 60px 120px;

            h2{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                line-height: 36px;
                color: #282828;
            }

            p{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                color: #949CA9;
                margin-bottom: 60px;
            }
            
            .text-center{
                text-align: center;
            }

            .row{
                margin-bottom: 20px;

                input{
                    height: 52px;
                    background: #FFFFFF;
                    border: 1px solid #E8E9EA;
                    border-radius: 6px;

                }
            }
            .btn-area{
                width: 100%;
                display: flex;
                justify-content: center;
                margin-top: 60px;

                button{
                    width: 65%;
                    background: #1A1038;
                    border-radius: 6px;
                    height: 50px;
                    color: white;
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                }
            }
        }       
    }
    .match-text{
        display: none;
    }
    .no-match{
        display: block;
    }
</style>
