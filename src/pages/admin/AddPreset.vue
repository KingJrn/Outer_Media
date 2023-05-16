<template>
  <Navigation>
    <div id="content">
           <form action="">
                <h2 class="underline-text">Preset Details</h2>
                <div class="lil-line"></div>
                <div class="row">
                    <div class="col">
                        <label for="">Preset Name</label>
                        <input type="text" class="form-control" placeholder="Enter Organization name">
                    </div>
                    <div class="col">
                        <label for="">Position Top</label>
                        <input type="text" class="form-control" placeholder="Placeholder">
                    </div>
                    <div class="col">
                        <label for="">Position Left</label>
                        <input type="text" class="form-control" placeholder="Placeholder">
                    </div>
                </div>
                <h2 class="underline-text">Object Timing</h2>
                <div class="lil-line"></div>
                <div class="row">
                    <div class="col">
                        <label for="">Side In</label>
                        <select id="inputState" class="form-control">
                            <option>Option one</option>
                            <option>Option two</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="">Side Out</label>
                        <select id="inputState" class="form-control">
                            <option>Option one</option>
                            <option>Option two</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="">Scale X In</label>
                        <select class="form-control">
                            <option>Option one</option>
                            <option>Option two</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="">Scale X Out</label>
                        <select id="inputState" class="form-control">
                            <option>Option one</option>
                            <option>Option two</option>
                        </select>
                    </div>
                </div>

                <h2 class="underline-text">Object Rotation</h2>
                <div class="lil-line"></div>
                <div class="row">
                    <div class="col">
                        <label for="">Side In</label>
                        <select id="inputState" class="form-control">
                            <option>Option one</option>
                            <option>Option two</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="">Side Out</label>
                        <input type="text" class="form-control" placeholder="Placeholder">
                    </div>
                    <div class="col">
                        <label for="">Side Out</label>
                        <input type="text" class="form-control" placeholder="Placeholder">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="">Scale X In</label>
                        <select class="form-control">
                            <option>Option one</option>
                            <option>Option two</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="">Scale X Out</label>
                        <select id="inputState" class="form-control">
                            <option>Option one</option>
                            <option>Option two</option>
                        </select>
                    </div>
                </div>
                 <div class="row">
                    <div class="col">
                        <label for="">Scale X In</label>
                        <select class="form-control">
                            <option>Option one</option>
                            <option>Option two</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="">Scale X Out</label>
                        <select id="inputState" class="form-control">
                            <option>Option one</option>
                            <option>Option two</option>
                        </select>
                    </div>
                </div>
                
                <div class="switch-area">
                    <p>Publish</p>
                    <Switch />
                </div>

                <div class="btn-area">
                    <button>Add</button>
                </div>

                
            </form>
        
    </div>
  </Navigation>
</template>

<script>
import Switch from '@/layouts/partials/Switch.vue'
import Navigation from '@/layouts/Navigation.vue';
export default {
  name: 'AddOrganization',
  components: {
    Navigation,
    Switch,
  }
}
</script>

<style lang="scss" scoped>
  #content{
    height: 100%;
    width: 100%;
    padding: 65px 30px;
    display: flex;
    justify-content: center;
    align-items: center;

        form{
            width: 90%;
            background: #FFFFFF;
            border: 2px solid rgba(0, 0, 0, 0.07);
            box-shadow: 2px 4px 24px 1px rgba(0, 0, 0, 0.1);
            border-radius: 11px;
            padding: 60px 120px;

            .underline-text{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                line-height: 36px;
                color: #282828;
                margin-top: 40px;
                
            }
            .lil-line{
                border-bottom: 2px solid rgba(0, 0, 0, 0.18);
                width: 180px;
                margin-bottom: 25px;
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
            .switch-area{
                width: 175px;
                height: 65px;
                background: rgba(95, 65, 162, 0.13);
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0px 15px;

                p{
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 22px;
                    color: #282828;
                    margin: 0px;
                }
            }
        }       
    }
 
</style>
