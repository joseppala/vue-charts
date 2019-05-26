<template>
  <div>
    <div
      v-for="(bar, i) in bars" :key="i">
      <radial-progress-bar
        :progress="bar.progress"
        :fillColor="bar.fillColor"
        :stroke-width="strokeWidth"
        :margin="i * (strokeWidth + margin)"
        :animation-duration="animationDuration"
        :initial-animation="initialAnimation"
        :stroke-linecap="strokeLinecap"
        :backgroundColor="backgroundColor"
        :width="width"
        :height="height"
        :start-position="startPosition">
      </radial-progress-bar>
    </div>
  </div>
</template>

<script>
import RadialProgressBar from '../lib/RadialProgressBar.vue';

export default {
  components: {
    RadialProgressBar
  },
  props: {
    bars: Array,
    backgroundColor: String,
    strokeWidth: Number,
    strokeLinecap: String,
    margin: Number,
    width: String,
    height: String,
    animationDuration: Number,
    initialAnimation: Boolean,
    startPosition: String
  }
}
</script>

<style scoped>
</style>