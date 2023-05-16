<template>
  <Navigation>
    <div id="content">
        <div class="main-container">
            <h3>You are logged in as a <span>Super Admin</span></h3>
            <div class="top-items">
                <div class="left-side">
                    <select name="" id="">
                        <option value="8">Library Folder : All</option>
                    </select>
                    <input type="text" placeholder="search">
                    <select name="" id="">
                        <option value="8">display : 8</option>
                    </select>
                </div>
                <div class="right-side">
                    <a href="/addorganization">Add New Image</a>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Parent Organization</th>
                    <th scope="col">Parent Library</th>
                    <th scope="col">Images</th>
                    <th scope="col">Library Folder</th>
                    <th scope="col">File Name</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Budda Live</td>
                        <td>Library 1</td>
                        <td>
                            <img class="real-img" src="@/assets/images/pics/outerfix.png" alt="">
                        </td>
                        <td>Images</td>
                        <td>New Outerfix Logo for TV.png</td>
                        <td class="action">
                            <a href="">Edit</a>
                            <a href=""><img src="@/assets/images/vectors/delete.svg" alt=""></a>
                        </td>
                    </tr>
                     <tr>
                        <th scope="row">1</th>
                        <td>Budda Live</td>
                        <td>Library 1</td>
                        <td>
                            <img class="real-img" src="@/assets/images/pics/outerfix.png" alt="">
                        </td>
                        <td>Images</td>
                        <td>New Outerfix Logo for TV.png</td>
                        <td class="action">
                            <a href="">Edit</a>
                            <a href=""><img src="@/assets/images/vectors/delete.svg" alt=""></a>
                        </td>
                    </tr>
                     <tr>
                        <th scope="row">1</th>
                        <td>Budda Live</td>
                        <td>Library 1</td>
                        <td>
                            <img class="real-img" src="@/assets/images/pics/outerfix.png" alt="">
                        </td>
                        <td>Images</td>
                        <td>New Outerfix Logo for TV.png</td>
                        <td class="action">
                            <a href="">Edit</a>
                            <a href=""><img src="@/assets/images/vectors/delete.svg" alt=""></a>
                        </td>
                    </tr>
                     <tr>
                        <th scope="row">1</th>
                        <td>Budda Live</td>
                        <td>Library 1</td>
                        <td>
                            <img class="real-img" src="@/assets/images/pics/outerfix.png" alt="">
                        </td>
                        <td>Images</td>
                        <td>New Outerfix Logo for TV.png</td>
                        <td class="action">
                            <a href="">Edit</a>
                            <a href=""><img src="@/assets/images/vectors/delete.svg" alt=""></a>
                        </td>
                    </tr>
                     <tr>
                        <th scope="row">1</th>
                        <td>Budda Live</td>
                        <td>Library 1</td>
                        <td>
                            <img class="real-img" src="@/assets/images/pics/outerfix.png" alt="">
                        </td>
                        <td>Images</td>
                        <td>New Outerfix Logo for TV.png</td>
                        <td class="action">
                            <a href="">Edit</a>
                            <a href=""><img src="@/assets/images/vectors/delete.svg" alt=""></a>
                        </td>
                    </tr>
                     <tr>
                        <th scope="row">1</th>
                        <td>Budda Live</td>
                        <td>Library 1</td>
                        <td>
                            <img class="real-img" src="@/assets/images/pics/outerfix.png" alt="">
                        </td>
                        <td>Images</td>
                        <td>New Outerfix Logo for TV.png</td>
                        <td class="action">
                            <a href="">Edit</a>
                            <a href=""><img src="@/assets/images/vectors/delete.svg" alt=""></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </Navigation>
</template>

<script>
import Navigation from '@/layouts/Navigation.vue';
export default {
  name: 'ImagesView',
  components: {
    Navigation
  }
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

            a{
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
                    padding: 0px 20px       ;
                }
            }
            
        }

        table{
            margin-top: 45px;
            width: 100%;

            td{
                padding:10px;

                .real-img{
                    width: 150px;
                }
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
                gap: 20px;
                justify-content: space-between;
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
