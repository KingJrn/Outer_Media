<template>
  <div>
    <button @click="toggleDiv">Toggle Div</button>
    <div class="divv">This is the div to toggle</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDiv: false
    }
  },
  methods: {
    toggleDiv() {
      $(document).ready(function() {
        $('.divv').css('color', 'red');
});

    }
  }
}
</script>
