<template>
<div class="container">
  <div class="bar-container">
    <radial-progress-bar
      :progress="0.75"
      :stroke-width="8"
      :animation-duration="1"
      :initial-animation="true"
      fillColor="#00aaff"
      backgroundColor="#eeeeee"
      width="180px"
      height="180px"
      start-position="top">
    </radial-progress-bar>
  </div>
  <div class="bar-container">
    <radial-progress-bar
      :progress="0.6"
      :stroke-width="8"
      :animation-duration="1"
      :initial-animation="true"
      fillColor="#00ef14"
      backgroundColor="#eeeeee"
      width="180px"
      height="180px"
      start-position="bottom">
    </radial-progress-bar>
  </div>

  <div class="bar-container">
    <radial-progress-bars
      :bars="[
        {progress: 0.75, fillColor: '#fb34b5'},
        {progress: 0.6, fillColor: '#00ef14'},
        {progress: 0.2, fillColor: '#00aaff'},
      ]"
      :stroke-width="8"
      :animation-duration="1"
      :initial-animation="true"
      :margin="1"
      stroke-linecap="round"
      backgroundColor="#eeeeee"
      width="180px"
      height="180px"
      start-position="top">
    </radial-progress-bars>
  </div>
</div>
</template>

<script>
import RadialProgressBar from '../lib/RadialProgressBar.vue';
import RadialProgressBars from '../lib/RadialProgressBars.vue';

export default {
  components: {
    RadialProgressBar,
    RadialProgressBars
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  margin: 40px 0;
  text-align: center;
}
.bar-container {
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 20px;
  display: inline-block;
}
</style>