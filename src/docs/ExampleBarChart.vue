<template>
<div>
  <div class="example-bar-chart">
    <chart
      :margin="{
        top: '0',
        right: '30px',
        bottom: '80px',
        left: '80px'
      }"
      :xAxis="xAxis"
      :yAxis="yAxis"
      v-slot:default="chart"
      >
      <y-axis-ticks
        :mapY="chart.mapYCss"
        :ticks="yTicks"
        textColor="#888888"
        textPosition="left"
        lineColor="#eeeeee"
        lineLeft="-10px"
        lineRight="-10px"
        :lineWidth="1">
      </y-axis-ticks>
      <x-axis-ticks
        :mapX="chart.mapXCss"
        :ticks="xTicks"
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
        :points="points"
        bar-width="50%"
        bar-color="#ffaa00">
      </bar-plot>
    </chart>
  </div>
</div>
</template>

<script>
import Chart from '../lib/Chart.vue';
import YAxisTicks from '../lib/YAxisTicks.vue';
import XAxisTicks from '../lib/XAxisTicks.vue';
import YAxisTitle from '../lib/YAxisTitle.vue';
import XAxisTitle from '../lib/XAxisTitle.vue';
import BarPlot from '../lib/BarPlot.vue';


export default {
  components: {
    Chart,
    YAxisTicks,
    XAxisTicks,
    YAxisTitle,
    XAxisTitle,
    BarPlot
  },
  data() {
    return {
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
</script>

<style>
  .example-bar-chart {
    position: relative;
    width: 90%;
    max-width: 600px;
    height: 400px;
    margin: 0 auto;
  }
  .example-bar-chart .y-axis-title, .x-axis-title {
    letter-spacing: 0.08em;
  }
</style>