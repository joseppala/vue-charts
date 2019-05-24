<template>
<div>
  <example-line-chart></example-line-chart>
  <example-bar-chart></example-bar-chart>
  <radial-progress-bar
    :progress="0.8"
    :stroke-width="3"
    :animation-duration="0.8"
    fillColor="#00aaff"
    backgroundColor="#eeeeee"
    width="200px"
    height="200px">
  </radial-progress-bar>
</div>
</template>

<script>
import ExampleLineChart from './ExampleLineChart.vue';
import ExampleBarChart from './ExampleBarChart.vue';
import RadialProgressBar from './RadialProgressBar.vue';

export default {
  components: {
    ExampleLineChart,
    ExampleBarChart,
    RadialProgressBar
  }
}
</script>

<style>
  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
  }
  html {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  body {
    margin: 0;
  }
</style>