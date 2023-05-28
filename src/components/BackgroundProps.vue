<template>
  <div>
    <!-- color picker -->
    <div class="package-name mt-16">
      <!-- color -->
      <div class="color-picker">
        <div class="radiobtn-container">
          <div class="color-picker-title">Background Colour</div>
          <div class="custom-radio">
            <input type="radio" id="radio1" name="custom-radio">
            <label for="radio1">Option 1</label>
          </div>
        </div>
        <div class="color-space">
          <v-color-picker v-model="picker" elevation="0"></v-color-picker>
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
    }
  },
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
</style>
