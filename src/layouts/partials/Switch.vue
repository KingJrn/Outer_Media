<template>
  <label class="switch">
    <input type="checkbox" v-model="isChecked" @click="sendData">
    <span class="slider"></span>
  </label>
</template>

<script>
export default {
  data() {
    return {
      isChecked: true,
    }
  },
  emits: ['checkboxEvent'],
  methods:{
    sendData(){
      this.$emit('checkboxEvent', this.isChecked);
    }
  }
}
</script>

<style>
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 100px;
  vertical-align: middle;
}

.slider:before {
  position: absolute;
  content: "";
  width: 16px;
  height: 16px;
  left: 4px;
  bottom: 4px;
  background: #fff;
  transition: .4s;
  border-radius: 50%;
}

input:checked+.slider {
  background: #4C34C2;
}

input:checked+.slider:before {
  transform: translateX(16px);
}
</style>
