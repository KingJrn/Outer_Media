<template>
    <mainView>
        <div class="conatiner">
            <div class="header-sect">
                <h2>Add New Image</h2>
                <p>You Can Upload To An Existing Library Folder Or Create a New Library</p>
            </div>
            <div class="form-data">
                <form action="" @submit.prevent="">
                    <!-- form fields -->
                    <div class="d-flex edit-group w-100">
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Upload to New Library Folder</label>
                            <select type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                required placeholder="Placeholder">
                                <option value="1">One</option>
                            </select>
                        </div>
                        <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Upload To Existing Library Folder</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                required placeholder="Placeholder">
                        </div>
                    </div>
                    <!-- hr -->
                    <hr class="w-100">
                    <!-- image  -->
                    <div class="upload_image_container">
                        <label for="assetsFileHandle">Upload Image</label>
                        <div class="flex items-center justify-center text-center" id="app">
                            <div class="p-12 bg-gray-100 border border-gray-300 sub_container" @dragover="dragover"
                                @dragleave="dragleave" @drop="drop">
                                <input type="file" multiple name="fields[assetsFieldHandle][]" id="assetsFieldHandle"
                                    class="w-px h-px opacity-0 overflow-hidden absolute" @change="onChange" ref="file"
                                    accept=".pdf,.jpg,.jpeg,.png" />

                                <label for="assetsFieldHandle" class="block cursor-pointer upload_instruction">
                                    <div class="upload_instruction_wrapper">
                                        <div class="file_image_container">
                                            <img src="@/assets/images/vectors/shape.svg" alt="">
                                        </div>
                                        <div>
                                            Drop your image here, or
                                            <span class="underline">browse</span>
                                        </div>
                                        <div>
                                            JPG,PNG and GIF files are allowed
                                        </div>
                                    </div>
                                </label>

                                <ul class="mt-4" v-if="filelist.length" v-cloak>
                                    <li class="text-sm p-1" v-for="(file, index) in filelist" :key="index">
                                        <div>
                                            <img :src="getFilePreviewURL(file)"
                                                class="w-16 h-16 object-cover inline-block mr-2" v-if="isImageFile(file)" />
                                            <span class="d-block">{{ file.name }}</span>
                                        </div>
                                        <button class="ml-2" type="button" @click="remove(index)"
                                            title="Remove file">remove</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="btn-container d-flex justify-center w-100"> <button class="add w-50" type="button">Add
                            Image</button>
                    </div>
                </form>
            </div>
        </div>
    </mainView>
</template>

<script>
import mainView from '@/layouts/partials/mainView.vue'

export default {
    name: 'AddNewImages',
    components: {
        mainView
    },
    data() {
        return {
            filelist: [] // Store our uploaded files
        };
    },
    methods: {
        onChange() {
            this.filelist = [...this.$refs.file.files];
        },
        remove(index) {
            this.filelist.splice(index, 1);
        },
        dragover(event) {
            event.preventDefault();
            // Add some visual fluff to show the user can drop files
            event.currentTarget.classList.add('bg-green-300');
        },
        dragleave(event) {
            // Clean up
            event.currentTarget.classList.remove('bg-green-300');
        },
        drop(event) {
            event.preventDefault();
            this.$refs.file.files = event.dataTransfer.files;
            this.onChange(); // Trigger the onChange event manually
            // Clean up
            event.currentTarget.classList.remove('bg-green-300');
        },
        isImageFile(file) {
            return file.type.includes('image');
        },
        getFilePreviewURL(file) {
            return URL.createObjectURL(file);
        }
    },
    mounted() { }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
@import '@/assets/scss/shared/form.scss';

hr {
    border-color: #E8E9EA;
    border-width: 3px;
    margin-block: 45px;
    opacity: 1;
}
.upload_image_container{
    margin-bottom: 30px;
}

.sub_container {
    padding: 26px 148px !important;
    background: #FFFFFF  !important;
    border: 2px dashed #E8E9EA  !important;
    border-radius: 10px  !important;
}

[v-cloak] {
    display: none;
}

label[for="assetsFileHandle"] {
    @include textStyles('Poppins', 500, 14px, 12px);
    color: #282828;
}

.upload_instruction_wrapper {
    .file_image_container {
        margin-bottom: 15px;
    }

    div {
        &:nth-of-type(2) {
            @include textStyles('Poppins', 500, 14px, 24px);
            margin-bottom: 5px;

            .underline {
                color: #009EF7;
            }
        }

        &:nth-of-type(3) {
            @include textStyles('Poppins', 400, 13px, 24px);
            color: #949CA9;


        }
    }
}</style>