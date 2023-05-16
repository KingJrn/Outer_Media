<template>
    <div class="big-container">
        <div class="left-side"></div>
        <div class="right-side">
            <form action="">
                <h1 class="text-center">Sign In</h1>
                <p class="text-center">Please enter your details to sign in</p>
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter your Username">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your Password">
                </div>
                
                <div class="button-area"><button type="submit" class="btn btn-primary">Sign up</button></div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'AdminLogin',
}

</script>

<style lang="scss" scoped>
    .big-container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
    
        .text-center{
            text-align: center;
        }

        .left-side{
            width: 65%;
            height: 1000px;
            background:url('@/assets/images/backgrounds/purple-back.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        .right-side{
            width: 35%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: black;
            position: relative;

            form{
                width: 100%;
                height: auto;
                padding: 40px 40px 60px 40px;
                background: #FFFFFF;
                box-shadow: 2px 4px 24px 1px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                position: absolute;
                left: -20%;

                h1{
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 36px;
                    color: #282828;
                }

                p{
                    margin-bottom: 35px;
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 22px;
                    color: #949CA9;
                }
                .form-group{
                    margin-bottom: 30px;
                }
                .button-area{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    
                    button{
                        width: 60%;
                        height: 48px;
                        background: #1A1038;
                        border-radius: 6px;

                    }
                }
            }
        }
    }
</style>