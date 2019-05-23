<template>
<div>
  <div class="graph">
    <chart
      :margin="{
        top: '40px',
        right: '30px',
        bottom: '80px',
        left: '80px'
      }"
      :xAxis="chart1.xAxis"
      :yAxis="chart1.yAxis"
      v-slot:default="chart"
      >
      <y-axis-ticks
        :mapY="chart.mapYCss"
        textColor="#888888"
        textPosition="left"
        lineColor="#eeeeee"
        lineLeft="-10px"
        lineRight="-10px"
        :lineWidth="1"
        :ticks="chart1.yTicks">
      </y-axis-ticks>
      <y-axis-title
        text="Temperature [C]"
        :offset="60"
        position="left"
        textColor="#888888">
      </y-axis-title>
      <x-axis-ticks
        :mapX="chart.mapXCss"
        :ticks="chart.xTicks"
        textColor="#888888"
        textPosition="bottom"
        lineColor="#eeeeee"
        lineTop="100%"
        lineBottom="-10px"
        :lineWidth="1">
      </x-axis-ticks>
      <x-axis-title
        text="Time [s]"
        :offset="60"
        position="bottom"
        textColor="#888888">
      </x-axis-title>
      <line-plot
        :mapX="chart.mapX"
        :mapY="chart.mapY"
        :viewBox="chart.viewBox"
        :points="chart1.points"
        :smoothing="0.2"
        :line-width="3"
        line-color="#00aaff">
      </line-plot>
      <scatter-plot
        :mapX="chart.mapXCss"
        :mapY="chart.mapYCss"
        :points="chart1.points"
        :point-radius="5"
        point-color="#00aaff"
        line-color="#00aaff">
      </scatter-plot>
    </chart>
  </div>


  <div class="graph">
    <chart
      :margin="{
        top: '40px',
        right: '30px',
        bottom: '80px',
        left: '80px'
      }"
      :xAxis="chart2.xAxis"
      :yAxis="chart2.yAxis"
      v-slot:default="chart"
      >
      <y-axis-ticks
        :mapY="chart.mapYCss"
        :ticks="chart2.yTicks"
        textColor="#888888"
        textPosition="left"
        lineColor="#eeeeee"
        lineLeft="-10px"
        lineRight="-10px"
        :lineWidth="1">
      </y-axis-ticks>
      <x-axis-ticks
        :mapX="chart.mapXCss"
        :ticks="chart2.xTicks"
        textColor="#888888"
        textPosition="bottom"
        lineColor="#eeeeee"
        lineTop="100%"
        lineBottom="-10px"
        :lineWidth="1">
      </x-axis-ticks>
      <bar-plot
        :mapX="chart.mapXCss"
        :mapY="chart.mapYCss"
        :points="chart2.points"
        bar-width="50%"
        bar-color="#ffaa00">
      </bar-plot>
    </chart>
  </div>
  -->
</div>
</template>

<script>
import throttle from 'lodash/throttle';

import Chart from './Chart.vue';
import LinePlot from './LinePlot.vue';
import ScatterPlot from './ScatterPlot.vue';
import YAxisTicks from './YAxisTicks.vue';
import XAxisTicks from './XAxisTicks.vue';
import YAxisTitle from './YAxisTitle.vue';
import XAxisTitle from './XAxisTitle.vue';
import BarPlot from './BarPlot.vue';


export default {
  components: {
    Chart,
    LinePlot,
    ScatterPlot,
    YAxisTicks,
    XAxisTicks,
    YAxisTitle,
    XAxisTitle,
    BarPlot
  },
  data() {
    return {
      chart1: {
        points: [
          [0, 10],
          [1, 50],
          [2, 40],
          [3, 45],
          [4, 20],
          [5, 60],
        ],
        xAxis: {
          min: 0,
          max: 5
        },
        yAxis: {
          min: 0,
          max: 70
        },
        yTicks: [
          {value: 0, text: '0'},
          {value: 10, text: '10'},
          {value: 20, text: '20'},
          {value: 30, text: '30'},
          {value: 40, text: '40'},
          {value: 50, text: '50'},
          {value: 60, text: '60'},
        ],
        xTicks: [
          {value: 0, text: '0'},
          {value: 1, text: '1'},
          {value: 2, text: '2'},
          {value: 3, text: '3'},
          {value: 4, text: '4'},
          {value: 5, text: '5'},
        ]
      },
      chart2: {
        points: [
          [0, 10],
          [1, 50],
          [2, 40],
          [3, 45],
          [4, 20],
          [5, 60],
        ],
        xAxis: {
          min: -0.3,
          max: 5.3
        },
        yAxis: {
          min: 0,
          max: 70
        },
        yTicks: [
          {value: 0, text: '0'},
          {value: 10, text: '10'},
          {value: 20, text: '20'},
          {value: 30, text: '30'},
          {value: 40, text: '40'},
          {value: 50, text: '50'},
          {value: 60, text: '60'},
        ],
        xTicks: [
          {value: 0, text: '0'},
          {value: 1, text: '1'},
          {value: 2, text: '2'},
          {value: 3, text: '3'},
          {value: 4, text: '4'},
          {value: 5, text: '5'},
        ]
      }
    }
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
  .graph {
    position: relative;
    width: 90%;
    max-width: 600px;
    height: 400px;
    margin: 100px auto;
  }
  .y-axis-title, .x-axis-title {
    letter-spacing: 0.08em;
  }
</style>