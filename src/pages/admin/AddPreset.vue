<template>
  <Navigation>
    <div id="content">
           <form action="">
                <h2 class="underline-text">Preset Details</h2>
                <div class="lil-line"></div>
                <div class="row">
                    <div class="col">
                        <label for="">Preset Name</label>
                        <input type="text" class="form-control" v-model="preset.name" placeholder="Enter Organization name">
                    </div>
                    <div class="col">
                        <label for="">Position Top</label>
                        <input type="text" v-model="preset.top" class="form-control" placeholder="Placeholder">
                    </div>
                    <div class="col">
                        <label for="">Position Left</label>
                        <input type="text" v-model="preset.left" class="form-control" placeholder="Placeholder">
                    </div>
                </div>
                <h2 class="underline-text">Object Timing</h2>
                <div class="lil-line"></div>
                <div class="row">
                    <div class="col">
                        <label for="">Slide In</label>
                        <input type="text" v-model="preset.slideIn" class="form-control" placeholder="Placeholder">
                    </div>
                    <div class="col">
                        <label for="">Slide Out</label>
                        <input type="text" v-model="preset.slideOut" class="form-control" placeholder="Placeholder">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="">Scale X In</label>
                        <input type="text" v-model="preset.scaleIn" class="form-control" placeholder="Placeholder">
                    </div>
                    <div class="col">
                        <label for="">Scale X Out</label>
                        <input type="text" v-model="preset.scaleOut" class="form-control" placeholder="Placeholder">
                    </div>
                </div>

                <h2 class="underline-text">Object Rotation</h2>
                <div class="lil-line"></div>
                <div class="row">
                    <div class="col">
                        <label for="">Rotate In/Out style</label>
                        <input type="text" v-model="preset.rotateStyle" class="form-control" placeholder="Placeholder">
                    </div>
                    <div class="col">
                        <label for="">Transform Origin In</label>
                        <input type="text" v-model="preset.transformIn" class="form-control" placeholder="Placeholder">
                    </div>
                    <div class="col">
                        <label for="">Transform Origin Out</label>
                        <input type="text" v-model="preset.transformOut" class="form-control" placeholder="Placeholder">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="">Easing In</label>
                        <input type="text" v-model="preset.easingIn" class="form-control" placeholder="Placeholder">
                    </div>
                    <div class="col">
                        <label for="">Easing Out</label>
                        <input type="text" v-model="preset.easingOut" class="form-control" placeholder="Placeholder">
                    </div>
                </div>
                 <div class="row">
                    <div class="col">
                        <label for="">Fading In</label>
                        <input type="text" v-model="preset.fadingIn" class="form-control" placeholder="Placeholder">
                    </div>
                    <div class="col">
                        <label for="">Fading Out</label>
                        <input type="text" v-model="preset.fadingOut" class="form-control" placeholder="Placeholder">
                    </div>
                </div>
                
                <div class="switch-area">
                    <p>Publish</p>
                    <Switch />
                </div>

                <div class="btn-area">
                    <button type="button" @click="addPreset()">Add</button>
                </div>

                
            </form>
        
    </div>
  </Navigation>
</template>

<script>
import Switch from '@/layouts/partials/Switch.vue';
import apiServices from "@/services/apiServices.js";
import Navigation from '@/layouts/Navigation.vue';
export default {
  name: 'AddOrganization',
  components: {
    Navigation,
    Switch,
  },
  data() {
    return {
      preset:{
        name:"",
        top:"",
        left: "",
        slideIn: "",
        slideOut:"",
        scaleIn:"",
        scaleOut:"",
        rotateStyle:"",
        transformIn:"",
        transformOut:"",
        easingIn:"",
        easingOut:"",
        fadingIn:"",
        fadingOut:"",
        published:"yes",
      }
      
    };
  },
  methods:{
    addPreset(){
      apiServices.addPreset(
        {
          name: this.preset.name,
          pos_top: this.preset.top,
          pos_left: this.preset.left,
          slide_in:this.preset.slideIn,
          slide_out:this.preset.slideOut,
          scale_x_in:this.preset.scaleIn,
          scale_x_out:this.preset.scaleOut,
          rot_in_out_style:this.preset.rotateStyle,
          transform_origin_In:this.preset.transformIn,
          transform_origin_Out:this.preset.transformOut,
          fading_in:this.preset.fadingIn,
          fading_out:this.preset.fadingOut,
          published:this.published,
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
