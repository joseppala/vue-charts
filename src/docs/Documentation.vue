<template>
<div>
  <example-line-chart></example-line-chart>
  <example-bar-chart></example-bar-chart>
  <example-radial-progress-bar></example-radial-progress-bar>
</div>
</template>

<script>
import ExampleLineChart from './ExampleLineChart.vue';
import ExampleBarChart from './ExampleBarChart.vue';
import ExampleRadialProgressBar from './ExampleRadialProgressBar.vue';

export default {
  components: {
    ExampleLineChart,
    ExampleBarChart,
    ExampleRadialProgressBar
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