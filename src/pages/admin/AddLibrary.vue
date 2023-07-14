<template>
  <Navigation>
    <div id="content">
           <form action="">
                <h2 class="text-center">Add Library</h2>
                <p class="text-center">Please enter Library details below to create new library</p>
                <div class="row">
                    <div class="col">
                        <label for="">Library Name</label>
                        <input type="text" v-model="library.libraryName" class="form-control" placeholder="Enter Organization name">
                    </div>
                    <div class="col">
                        <label for="">Library Type</label>
                        <select id="inputState" v-model="library.libraryType" class="form-control">
                            <option value="First Library">Option one</option>
                            <option value="Second Library">Option two</option>
                        </select>
                    </div>
                </div>
                <div class="row"> 
                    <label for="">Library Description</label>
                    <textarea name="" v-model="library.libraryDescription" placeholder="Enter description here" class="form-control" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="switch-area">
                    <p>Publish</p>
                    <Switch />
                </div>

                <div class="btn-area">
                    <button type="button" @click="addLibrary()">Add Library</button>
                </div>

                
            </form>
        
    </div>
  </Navigation>
</template>

<script>
import apiServices from "@/services/apiServices.js";
import Switch from '@/layouts/partials/Switch.vue'
import Navigation from '@/layouts/Navigation.vue';
export default {
  name: 'AddOrganization',
  components: {
    Navigation,
    Switch,
  },
  data() {
    return {
      library:{
        libraryName:"",
        libraryType:"",
        libraryDescription: "",
      }
      
    };
  },
  methods:{
    addLibrary(){
      apiServices.addLibrary(
        {
          name: this.library.libraryName,
          type: this.library.libraryType,
          description: this.library.libraryDescription,
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
