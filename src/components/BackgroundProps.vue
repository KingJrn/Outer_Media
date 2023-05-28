<template>
  <div>
    <!-- color picker -->
    <div class="package-name mt-16">
      <!-- color -->
      <div class="color-picker">
        <div class="radiobtn-container">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label color-picker-title" for="flexRadioDefault1">
              Background Colour
            </label>
          </div>
        </div>
        <div class="color-space">
          <v-color-picker v-model="picker" elevation="0"></v-color-picker>
        </div>
      </div>
      <div class="color-picker">
        <div class="radiobtn-container">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label color-picker-title" for="flexRadioDefault1">
              Upload Background Image </label>
          </div>
        </div>
        <div class="upload_image_container">
          <div class="flex items-center justify-center text-center" id="app">
            <div class="p-12 bg-gray-100 border border-gray-300 sub_container" @dragover="dragover" @dragleave="dragleave"
              @drop="drop">
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
                    <img :src="getFilePreviewURL(file)" class="w-16 h-16 object-cover inline-block mr-2"
                      v-if="isImageFile(file)" />
                    <span class="d-block">{{ file.name }}</span>
                  </div>
                  <button class="ml-2" type="button" @click="remove(index)" title="Remove file">remove</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- existing image -->
      <div class="color-picker flex-column">
        <div class="radiobtn-container">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label color-picker-title" for="flexRadioDefault1">
              Use Existing Image
            </label>
          </div>
        </div>
        <div class="mb-3 col w-50">
          <label for="exampleInputEmail1" class="form-label selec-lib">Select Image Library</label>
          <select type="text" class="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" required
            placeholder="Placeholder">
            <option value=""></option>
          </select>
        </div>

        <div class="existing_image">
          <div class="main-container">
            <div class="img_cont">
              <img src="@/assets/images/pics/exist.png" alt="" >
              <div class="default-image">Deafult Image </div>
            </div>
            <div class="img_cont">
              <img src="@/assets/images/pics/exist.png" alt="" >
              <div class="default-image">Deafult Image </div>

            </div>
            <div class="img_cont">
              <img src="@/assets/images/pics/exist.png" alt="" >
              <div class="default-image">Deafult Image </div>

            </div>
            <div class="img_cont">
              <img src="@/assets/images/pics/exist.png" alt="" >
              <div class="default-image">Deafult Image </div>

            </div>
            <div class="img_cont">
              <img src="@/assets/images/pics/exist.png" alt="" >
              <div class="default-image">Deafult Image </div>

            </div>
            <div class="img_cont">
              <img src="@/assets/images/pics/exist.png" alt="" >
              <div class="default-image">Deafult Image </div>

            </div>
            <div class="img_cont">
              <img src="@/assets/images/pics/exist.png" alt="" >
              <div class="default-image">Deafult Image </div>

            </div>
            <div class="img_cont">
              <img src="@/assets/images/pics/exist.png" alt="" >
              <div class="default-image">Deafult Image </div>

            </div>
            <div class="img_cont">
              <img src="@/assets/images/pics/exist.png" alt="" >
              <div class="default-image">Deafult Image </div>
            </div>
            <div class="img_cont">
              <img src="@/assets/images/pics/exist.png" alt="" >
              <div class="default-image">Deafult Image </div>

            </div>
            <div class="img_cont">
              <img src="@/assets/images/pics/exist.png" alt="" >
              <div class="default-image">Deafult Image </div>

            </div>
            <div class="img_cont">
              <img src="@/assets/images/pics/exist.png" alt="" >
              <div class="default-image">Deafult Image </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GeneralProps',
  data() {
    return {
      picker: null,
      filelist: [] // Store our uploaded files
    }
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
@import "@/assets/scss/main.scss";

.color-picker {
  display: flex;
  gap: 16px;
}

.color-picker-title {
  @include textStyles('Poppins', 500, 14px, 24px);
  color: #282828;
  text-transform: capitalize;


}

.upload_image_container {
  margin-bottom: 30px;
}

.sub_container {
  padding: 26px 148px !important;
  background: #FFFFFF !important;
  border: 2px dashed #E8E9EA !important;
  border-radius: 10px !important;
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
}

.existing_image {
  background: #F4F4F4;
  box-shadow: inset 3px 4px 10px 9px rgba(0, 0, 0, 0.07);
  border-radius: 11px;
  padding: 41px 35px;
  overflow-y: scroll;
height: 526px;
}
.main-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
}
.default-image{
  @include textStyles('Poppins', 500, 14px, 24px);
  margin-top: 7px;

}
.selec-lib{
  @include textStyles('Poppins', 300, 14px, 24px);
  color: #282828;

}
select{
  padding: 15px 20px;
}
</style>