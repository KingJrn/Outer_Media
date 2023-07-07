<template>
  <Navigation>
    <div id="content">
        <div class="main-container">
            <h3>You are logged in as a <span>Super Admin</span></h3>
            <div class="top-items">
                <div class="left-side">
                    <input type="text" placeholder="search">
                    <select name="" id="">
                        <option value="8">display : 8</option>
                    </select>
                    <a @click="dialog = true" href="javascript:void(0)" class="help">
                        <p>Help</p>
                        <img src="@/assets/images/vectors/question.svg" alt="">
                    </a>
                </div>
                <div class="right-side">
                    <a class="organize-btn" href="/addorganization">Add New Organization</a>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Added</th>
                    <th scope="col">Last Login</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Budda Live</td>
                        <td>Buddahlive</td>
                        <td>July, 31, 2023</td>
                        <td>Never</td>
                        <td class="action">
                            <a href="">Edit</a>
                            <a href=""><img src="@/assets/images/vectors/delete.svg" alt=""></a>
                            <button>Login</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Budda Live</td>
                        <td>Buddahlive</td>
                        <td>July, 31, 2023</td>
                        <td>Never</td>
                        <td class="action">
                            <a href="">Edit</a>
                            <a href=""><img src="@/assets/images/vectors/delete.svg" alt=""></a>
                            <button>Login</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Budda Live</td>
                        <td>Buddahlive</td>
                        <td>July, 31, 2023</td>
                        <td>Never</td>
                        <td class="action">
                            <a href="">Edit</a>
                            <a href=""><img src="@/assets/images/vectors/delete.svg" alt=""></a>
                            <button>Login</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Budda Live</td>
                        <td>Buddahlive</td>
                        <td>July, 31, 2023</td>
                        <td>Never</td>
                        <td class="action">
                            <a href="">Edit</a>
                            <a href=""><img src="@/assets/images/vectors/delete.svg" alt=""></a>
                            <button>Login</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Budda Live</td>
                        <td>Buddahlive</td>
                        <td>July, 31, 2023</td>
                        <td>Never</td>
                        <td class="action">
                            <a href="">Edit</a>
                            <a href=""><img src="@/assets/images/vectors/delete.svg" alt=""></a>
                            <button>Login</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Budda Live</td>
                        <td>Buddahlive</td>
                        <td>July, 31, 2023</td>
                        <td>Never</td>
                        <td class="action">
                            <a href="">Edit</a>
                            <a href=""><img src="@/assets/images/vectors/delete.svg" alt=""></a>
                            <button>Login</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <v-dialog v-model="dialog" width="auto">
        <v-card class="w-50 align-self-center">
            <v-card-text class="w-100">
                <h4>Organizations</h4>
                <p>This Page Contains a List of Organizations on the platform, </p>

                <p> Click on the “Login” button on any organization to Login as that organization and manage the account. </p>
            </v-card-text>
            <!-- <v-card-actions>
                <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
            </v-card-actions> -->
        </v-card>
    </v-dialog>

  </Navigation>
</template>

<script>

import Navigation from '@/layouts/Navigation.vue';
export default {
  name: 'OrganizationsView',
  components: {
    Navigation,
  },
   data() {
        return {
            dialog: false
        }
    },
}
</script>

<style lang="scss" scoped>
  #content{
    height: 100%;
    width: 100%;
    padding: 40px;

    .main-container{
        width: 100%;
        height: 100%;
        background: #FFFFFF;
        border: 2px solid rgba(0, 0, 0, 0.07);
        box-shadow: 2px 4px 24px 1px rgba(0, 0, 0, 0.1);
        border-radius: 11px;
        padding: 20px 60px 20px 60px;


        .top-items{
            display: flex;
            justify-content: space-between;

            .organize-btn{
                background: #111C39;
                border: 3px solid rgba(27, 17, 55, 0.22);
                border-radius: 6px;
                height: 50px;
                color: white;
                padding: 10px;
                text-decoration: none;
            }

            .left-side{
                display: flex;
                gap: 20px;

                input{
                background: #F9FBFF;
                border: 1px solid rgba(0, 0, 0, 0.12);
                border-radius: 10px;
                height: 40px;
                }
                select{
                    background: #F9FBFF;
                    border: 1px solid rgba(0, 0, 0, 0.12);
                    border-radius: 10px;
                }
                .help{
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    color: white;

                    p{
                        margin: 0px;
                        font-family: 'Poppins';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 24px;
                         color: rgba(0, 0, 0, 0.71);
                    }
                }
            }
            
        }

        table{
            margin-top: 45px;
            width: 100%;

            td{
                padding: 15px;
            }
            th{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 21px;
                letter-spacing: -0.01em;
                color: #B5B7C0;
            }

            .action{
                display: flex;
                gap: 50px;
                align-items: center;

                a{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 20px;
                    color: #191E9E;
                    text-decoration: none;
                }

                button{
                    width: 100px;
                    height: 40px;
                    background: #1B1137;
                    border: 3px solid rgba(27, 17, 55, 0.16);
                    border-radius: 4px;
                    color: white;
                }


            }
        }
    }
  }
</style>
