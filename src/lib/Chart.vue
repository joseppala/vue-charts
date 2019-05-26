<template>
<div>
  <div
    class="plot-box"
    ref="container"
    :style="style">
    <div v-if="width">
      <slot
        :mapX="mapX"
        :mapY="mapY"
        :mapXCss="mapXCss"
        :mapYCss="mapYCss"
        :viewBox="viewBox">
      </slot>
    </div>
  </div>
</div>
</template>

<script>
import throttle from 'lodash/throttle';

export default {
  props: {
    xAxis: Object,
    yAxis: Object,
    margin: Object
  },
  data() {
    return {
      width: undefined,
      height: undefined
    }
  },
  computed: {
    style() {
      return `
        top: ${this.margin.top};
        right: ${this.margin.right};
        bottom: ${this.margin.bottom};
        left: ${this.margin.left};
      `;
    },
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

<style scoped>
  .plot-box {
    position: absolute;
  }
</style>