<template>
    <div class="big-container">
        <div class="left-side"></div>
        <div class="right-side">
            <form action="">
                <h1 class="text-center">Sign In</h1>
                <p class="text-center">Please enter your details to sign in</p>
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" class="form-control" v-model="username" placeholder="Enter your Username" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" v-model="password" placeholder="Enter your Password" />
                </div>

                <div class="button-area">
                    <button @click="login()" type="submit" class="btn btn-primary">Signin</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import apiServices from '@/services/apiServices.js'
import { useCounterStore } from '@/stores/counter'
export default {
    name: 'AdminLogin',
    data() {
        return {
            email: '',
            password: '',
            store: useCounterStore()
        }
    },
    methods: {
        methods: {
            async login() {
                try {
                    const csrfToken = await apiServices.obtainCsrfToken()
                    const credentials = {
                        username: 'superadmin',
                        password: 'password'
                    }
                    const bearerToken = await apiServices.login(csrfToken, credentials)
                    // Store the bearer token or use it for subsequent requests

                    // Add your code here to handle successful login or redirect to a new page
                } catch (error) {
                    // Handle any errors that occur during login
                    console.error(error.message)
                    if (error.response) {
                        if (error.response.status === 401) {
                            // Unauthorized error (bearer token missing, malformed, or invalid)
                            console.error('Authentication failed:', error.response.data)
                        } else if (error.response.status === 403) {
                            // Forbidden error (insufficient privileges)
                            console.error('Insufficient privileges:', error.response.data)
                        } else if (error.response.status === 404) {
                            // Resource not found error
                            console.error('Resource not found:', error.response.data)
                        } else if (error.response.status === 422) {
                            // Invalid request error (e.g., missing or invalid form data)
                            console.error('Invalid request:', error.response.data)
                        } else {
                            // Other errors
                            console.error('API request failed:', error.response.data)
                        }
                    } else {
                        // Request failed without receiving a response
                        console.error('API request failed:', error)
                    }
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.big-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    .text-center {
        text-align: center;
    }

    .left-side {
        width: 65%;
        height: 1000px;
        background: url('@/assets/images/backgrounds/purple-back.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .right-side {
        width: 35%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: black;
        position: relative;

        form {
            width: 100%;
            height: auto;
            padding: 40px 40px 60px 40px;
            background: #ffffff;
            box-shadow: 2px 4px 24px 1px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            position: absolute;
            left: -20%;

            h1 {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                line-height: 36px;
                color: #282828;
            }

            p {
                margin-bottom: 35px;
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                color: #949ca9;
            }

            .form-group {
                margin-bottom: 30px;
            }

            .button-area {
                width: 100%;
                display: flex;
                justify-content: center;

                button {
                    width: 60%;
                    height: 48px;
                    background: #1a1038;
                    border-radius: 6px;
                    color: white;
                }
            }
        }
    }
}
</style>
