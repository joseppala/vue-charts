<template>
<div>
  <example-line-chart></example-line-chart>
  <example-bar-chart></example-bar-chart>
</div>
</template>

<script>
import ExampleLineChart from './ExampleLineChart.vue';
import ExampleBarChart from './ExampleBarChart.vue';


export default {
  components: {
    ExampleLineChart,
    ExampleBarChart
  },
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