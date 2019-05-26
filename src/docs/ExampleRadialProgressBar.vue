<template>
<div class="flex-container">
  <div class="flex-item">
    <radial-progress-bar
      :progress="0.7"
      :stroke-width="3"
      :animation-duration="1"
      :initial-animation="true"
      fillColor="#00aaff"
      backgroundColor="#eeeeee"
      width="200px"
      height="200px"
      start-position="top">
    </radial-progress-bar>
  </div>
  <div class="flex-item">
    <radial-progress-bar
      :progress="0.7"
      :stroke-width="3"
      :animation-duration="1"
      :initial-animation="true"
      fillColor="#35d843"
      backgroundColor="#eeeeee"
      width="200px"
      height="200px"
      start-position="bottom">
    </radial-progress-bar>
  </div>
</div>
</template>

<script>
import RadialProgressBar from '../lib/RadialProgressBar.vue';

export default {
  components: {
    RadialProgressBar
  }
}
</script>

<style scoped>
.flex-container {
  display: flex;
  width: 600px;
  margin: 40px auto;
}
.flex-item {
  flex-grow: 1;
  text-align: center;
}
</style>