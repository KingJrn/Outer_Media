<template>
  <Navigation>
    <div id="content">
           <form action="">
               <div class="headings">
                <a href="javascript:void(0)" class="active-tab" @click="changeTab(1)">Login Settings</a>
                <a href="javascript:void(0)"  @click="changeTab(2)">Player Settings</a>
                <a href="javascript:void(0)"  @click="changeTab(3)">Font Settings</a>
               </div>
                
                <div class="login-details" v-if="tab==1">
                    <div class="row">
                        <div class="col-6">
                            <label for="">Super Admin Name</label>
                            <input type="text" class="form-control" placeholder="Enter Organization name">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="">Super Admin Password</label>
                            <input type="password" class="form-control" placeholder="Enter Organization name">
                        </div>
                        <div class="col">
                            <label for="">Confirm Super Admin Password</label>
                            <input type="password" class="form-control" placeholder="Enter Organization name">
                        </div>
                    </div>
                </div>


                <div class="login-details" v-if="tab==2">
                    <div class="row">
                        <div class="col">
                            <label for="">Refresh after this many loops</label>
                            <input type="text" class="form-control" placeholder="Enter Organization name">
                            <small>After a playing Package has looped this many times, it will automatically refresh, 
                                to help avoid possible memory build-ups over time. The refresh will happen at the end of a loop.
                            </small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="">Refresh after this many Seconds</label>
                            <input type="text" class="form-control" placeholder="Enter Organization name">
                            <small>After this many seconds, a playing Package will automatically refresh, to help avoid the 
                                layerslider freezing from playing too long. This refresh will NOT happen at the end of a loop.
                            </small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="">Site Default Package</label>
                            <input type="text" class="form-control" placeholder="Enter Organization name">
                            <small>The Package set as the site's default will play in the event no other Package can be found to play on a given Display.
                            </small>
                        </div>
                    </div>
                </div>
                <div class="login-details" v-if="tab==3">
                    <div class="row">
                        <div class="col">
                            <label for="">Refresh after this many loops</label>
                            <textarea name="" class="form-control"></textarea>
                            <small>After a playing Package has looped this many times, it will automatically refresh, 
                                to help avoid possible memory build-ups over time. The refresh will happen at the end of a loop.
                            </small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="">Refresh after this many Seconds</label>
                             <textarea name="" class="form-control"></textarea>
                            <small>After this many seconds, a playing Package will automatically refresh, to help avoid the 
                                layerslider freezing from playing too long. This refresh will NOT happen at the end of a loop.
                            </small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="">Site Default Package</label>
                            <textarea name="" class="form-control"></textarea>
                            <small>The Package set as the site's default will play in the event no other Package can be found to play on a given Display.
                            </small>
                        </div>
                    </div>
                </div>
                
                

                <div class="btn-area">
                    <button>Save</button>
                </div>

                
            </form>
        
    </div>
  </Navigation>
</template>

<script>
import Navigation from '@/layouts/Navigation.vue';
export default {
  name: 'SiteSettings',
  components: {
    Navigation,
  },
  data(){
        return{
            tab:1,
            active:true,
        }
    },
    methods:{
        changeTab(tab){
            this.tab=tab;
        },
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

            .active-tab{
                border-bottom: 2px solid #1B1137;
            }

            .headings{
                display: flex;
                gap: 30px;
                justify-content: center;
                margin-bottom: 100px;

                a{
                    text-decoration: none;
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 22px;
                    color: #1B1137;

                }
            }
            label{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 22px;
                color: #282828;
            }

            textarea{
                height: 100px;
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
            small{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 18px;
                color: rgba(0, 0, 0, 0.46);
            }

            .row{
                margin-bottom: 20px;
                margin-top: 70px;

                input{
                    height: 50px;
                    background: #FFFFFF;
                    border: 1px solid #E8E9EA;
                    border-radius: 6px;

                }
                select{
                    height: 50px;
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
 
</style>
