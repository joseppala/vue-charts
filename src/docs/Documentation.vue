<template>
<div>
  <header class="header">
    <div>
      <div class="logo"></div>
      <h1 class="title">Vue Charts</h1>
      <h3 class="subtitle">Collection of Vue components for creating simple data visualizations</h3>
    </div>
    <nav class="nav">
      <a href="#lineChart">Line Chart</a> |
      <a href="#barChart">Bar Chart</a> |
      <a href="#radialProgressBar">Radial Progress Bar</a>
    </nav>
  </header>
  <div id="lineChart" class="example">
    <div class="centering">
      <h3 class="example-title">Line Chart
        <span class="link-container">
          <a href="https://github.com/joseppala/vue-charts/blob/master/src/docs/ExampleLineChart.vue">view code</a>
        </span>
      </h3>
    </div>
    <example-line-chart></example-line-chart>
  </div>
  <div id="barChart"  class="example">
    <div class="centering">
      <h3 class="example-title">Bar Chart
        <span class="link-container">
          <a href="https://github.com/joseppala/vue-charts/blob/master/src/docs/ExampleBarChart.vue">view code</a>
        </span>
      </h3>
    </div>
    <example-bar-chart></example-bar-chart>
  </div>
  <div id="radialProgressBar" class="example">
    <div class="centering">
      <h3 class="example-title">Radial Progress Bar
        <span class="link-container">
          <a href="https://github.com/joseppala/vue-charts/blob/master/src/docs/ExampleRadialProgressBar.vue">view code</a>
        </span>
      </h3>
    </div>
    <example-radial-progress-bar></example-radial-progress-bar>
  </div>
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
    color: #444444;
  }
  a:link, a:visited {
    color: #0084ff;
    text-decoration: none;
  }
  a:hover {
    color: #005aad;
  }
  a:active {
    color: #0084ff;
  }
  .nav {
    color: #eeeeee;
  }
  .nav a {
    margin: 0 10px;
  }
  .header {
    text-align: center;
    display: grid;
    height: 100vh;
    margin: 0;
    align-items: center;
    justify-content: center;
  }
  .logo {
    width: 140px;
    height: 140px;
    display: inline-block;
    background-color: #000000;
  }
  .example {
    min-height: 70vh;
  }
  .centering {
    text-align: center;
  }
  .example-title {
    position: relative;
    display: inline-block;
    font-weight: normal;
    text-align: center;
    margin-bottom: 0;
  }
  .example-title a {
    margin: 0 16px;
    font-size: 0.6em;
  }
  .example-title .link-container {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0;
    white-space: nowrap;
  }
  .title {
    font-weight: 300;
    font-size: 2em;
    margin: 10px 0 30px 0;
    color: #000000;
  }
  .subtitle {
    font-weight: 300;
  }
</style>