<template>
<div class="graph example-line-chart">
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
      textColor="#888888"
      textPosition="left"
      lineColor="#eeeeee"
      lineLeft="-10px"
      lineRight="-10px"
      :lineWidth="1"
      :ticks="yTicks">
    </y-axis-ticks>
    <y-axis-title
      text="Temperature [C]"
      :offset="60"
      position="left"
      textColor="#888888">
    </y-axis-title>
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
      :points="points"
      :smoothing="0.2"
      :line-width="3"
      line-color="#000000">
    </line-plot>
    <scatter-plot
      :mapX="chart.mapXCss"
      :mapY="chart.mapYCss"
      :points="points"
      :point-size="10"
      point-fill-color="#777777"
      point-border-color="#000000"
      :point-border-width="2">
    </scatter-plot>
  </chart>
</div>
</template>

<script>
import Chart from '../lib/Chart.vue';
import LinePlot from '../lib/LinePlot.vue';
import ScatterPlot from '../lib/ScatterPlot.vue';
import YAxisTicks from '../lib/YAxisTicks.vue';
import XAxisTicks from '../lib/XAxisTicks.vue';
import YAxisTitle from '../lib/YAxisTitle.vue';
import XAxisTitle from '../lib/XAxisTitle.vue';


export default {
  components: {
    Chart,
    LinePlot,
    ScatterPlot,
    YAxisTicks,
    XAxisTicks,
    YAxisTitle,
    XAxisTitle
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
    }
  }
}
</script>

<style>
  .example-line-chart {
    position: relative;
    width: 90%;
    max-width: 600px;
    height: 400px;
    margin: 0 auto;
  }
  .example-line-chart .y-axis-title,
  .example-line-chart .x-axis-title {
    letter-spacing: 0.08em;
  }
</style>