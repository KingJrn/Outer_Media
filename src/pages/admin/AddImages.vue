<template>
  <Navigation>
    <div id="content">
           <form action="">
                <h2 class="text-center">Add New Image</h2>
                <p class="text-center">Upload to Organization or Parent Library</p>
                <div class="row">
                    <div class="col">
                        <label for="">Parent Organization</label>
                        <div class="each-option">
                            <input type="radio" name="parent" value="">
                            <select id="inputState" class="form-control">
                                <option>Option one</option>
                                <option>Option two</option>
                            </select>
                        </div>
                        
                    </div>
                    <div class="col">
                        <label for="">Parent Image Library</label>
                        <div class="each-option">
                            <input type="radio" name="parent" value="">
                            <select id="inputState" class="form-control">
                                <option>Option one</option>
                                <option>Option two</option>
                            </select>
                        </div>
                    </div>
                </div>
                <hr>
                <p class="text-center">Upload To Existing Library Folder Or Create a New Library</p>
                <div class="row">
                    <div class="col">
                        <label for="">Upload To Existing Library Folder</label>
                        <div class="each-option">
                            <input type="radio" name="upload" value="">
                            <select id="inputState" class="form-control">
                                <option>Option one</option>
                                <option>Option two</option>
                            </select>
                        </div>
                        
                    </div>
                    <div class="col">
                        <label for="">Upload To New Library Folder</label>
                        <div class="each-option">
                            <input type="radio" name="upload" value="">
                            <select id="inputState" class="form-control">
                                <option>Option one</option>
                                <option>Option two</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div class="btn-area">
                    <button>Add Image</button>
                </div>
            </form>
        
    </div>
  </Navigation>
</template>

<script>
import Navigation from '@/layouts/Navigation.vue';
export default {
  name: 'AddImage',
  components: {
    Navigation
  },

  methods:{
    
  },
  mounted(){
    
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
            label{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
                line-height: 22px;
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
            hr{
                margin-top: 50px;
                margin-bottom: 50px;
            }
            
            .text-center{
                text-align: center;
            }
            label{
                margin-left: 30px;
            }
            .each-option{
                display: flex;
                gap: 20px;
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
   
</style>
