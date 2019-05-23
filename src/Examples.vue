<template>
<div>
  <div class="graph">
    <div class="plot-box" ref="container">
      <div v-if="width">
      <y-axis-ticks
        :mapY="mapYCss"
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
        :mapX="mapXCss"
        textColor="#888888"
        textPosition="bottom"
        lineColor="#eeeeee"
        lineTop="100%"
        lineBottom="-10px"
        :lineWidth="1"
        :ticks="xTicks">
      </x-axis-ticks>
      <x-axis-title
        text="Time [s]"
        :offset="60"
        position="bottom"
        textColor="#888888">
      </x-axis-title>
      <line-plot
        :mapX="mapX"
        :mapY="mapY"
        :points="points"
        :viewBox="viewBox"
        :smoothing="0.2"
        :line-width="3"
        line-color="#00aaff">
      </line-plot>
      <scatter-plot
        :points="points"
        :mapX="mapXCss"
        :mapY="mapYCss"
        :point-radius="5"
        point-color="#00aaff"
        line-color="#00aaff">
      </scatter-plot>
      </div>
    </div>
  </div>
  <div class="graph">
    <div class="plot-box" ref="container">
      <div v-if="width">
      <y-axis-ticks
        :mapY="mapYCss"
        textColor="#888888"
        textPosition="left"
        lineColor="#eeeeee"
        lineLeft="-10px"
        lineRight="-10px"
        :lineWidth="1"
        :ticks="yTicks">
      </y-axis-ticks>
      <x-axis-ticks
        :mapX="mapXCss"
        textColor="#888888"
        textPosition="bottom"
        lineColor="#eeeeee"
        lineTop="100%"
        lineBottom="-10px"
        :lineWidth="1"
        :ticks="xTicks">
      </x-axis-ticks>
      <bar-plot
        :points="points"
        :mapX="mapXCss"
        :mapY="mapYCss"
        bar-width="50%"
        bar-color="#ffaa00">
      </bar-plot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import throttle from 'lodash/throttle';

import LinePlot from './LinePlot.vue';
import ScatterPlot from './ScatterPlot.vue';
import YAxisTicks from './YAxisTicks.vue';
import XAxisTicks from './XAxisTicks.vue';
import YAxisTitle from './YAxisTitle.vue';
import XAxisTitle from './XAxisTitle.vue';
import BarPlot from './BarPlot.vue';


export default {
  components: {
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
      ],
      width: undefined,
      height: undefined
    }
  },
  computed: {
    viewBoxWidth() {
      return this.xAxis.max - this.xAxis.min;
    },
    viewBoxHeight() {
      return this.yAxis.max - this.yAxis.min;
    },
    viewBox() {
      return `${this.xAxis.min} ${this.yAxis.min} ${this.viewBoxWidth} ${this.viewBoxHeight}`;
    },
  },
  methods: {
    mapX(val) {
      return val;
    },
    mapY(val) {
      return this.yAxis.max + this.yAxis.min - val;
    },
    mapXCss(val) {
      return (val - this.xAxis.min) * this.width / this.viewBoxWidth;
    },
    mapYCss(val) {
      return (this.yAxis.max - val) * this.height / this.viewBoxHeight;
    },
    setPlotBoxSize: throttle((self) => {
      self.width = self.$refs.container.clientWidth;
      self.height = self.$refs.container.clientHeight;
    }, 50)
  },
  mounted() {
    this.setPlotBoxSize(this);
    window.addEventListener('resize', () => this.setPlotBoxSize(this));
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
  .graph {
    position: relative;
    width: 90%;
    max-width: 600px;
    height: 400px;
    margin: 100px auto;
  }
  .plot-box {
    position: absolute;
    top: 40px;
    right: 30px;
    bottom: 80px;
    left: 80px;
  }
  .y-axis-title, .x-axis-title {
    letter-spacing: 0.08em;
  }
</style>